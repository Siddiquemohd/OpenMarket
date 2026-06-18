import { spawn } from "node:child_process";

const host = "127.0.0.1";
const port = Number(process.env.LINK_TEST_PORT || 3101);
const origin = `http://${host}:${port}`;
const productionOrigin = "https://www.openmarket.co.in";
const ignoredProtocols = new Set(["mailto:", "tel:", "javascript:"]);
const crawlQueue = ["/"];
const crawled = new Set();
const discoveredRoutes = new Map([["/", new Set(["entrypoint"])]]);
const checkedLinks = [];
const failures = [];

function wait(ms) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

function normalizePath(pathname) {
  if (!pathname || pathname === "/") {
    return "/";
  }

  return pathname.replace(/\/+$/, "");
}

function routeFromUrl(url) {
  return normalizePath(url.pathname);
}

function htmlDecode(value) {
  return value
    .replace(/&amp;/g, "&")
    .replace(/&quot;/g, "\"")
    .replace(/&#39;/g, "'")
    .replace(/&lt;/g, "<")
    .replace(/&gt;/g, ">");
}

function extractLinks(html) {
  return [...html.matchAll(/<a\b[^>]*\bhref=(["'])(.*?)\1/gi)].map(([, , href]) =>
    htmlDecode(href.trim())
  );
}

function hasAnchor(html, hash) {
  if (!hash) {
    return true;
  }

  const id = decodeURIComponent(hash.slice(1));
  if (!id) {
    return false;
  }

  const escaped = id.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
  return new RegExp(`\\b(?:id|name)=(["'])${escaped}\\1`, "i").test(html);
}

function addDiscovered(route, source) {
  if (!discoveredRoutes.has(route)) {
    discoveredRoutes.set(route, new Set());
  }

  discoveredRoutes.get(route).add(source);
}

function parseInternalHref(href, sourceRoute) {
  if (!href) {
    return { invalid: "empty href" };
  }

  if (href.startsWith("#")) {
    return new URL(`${origin}${sourceRoute}${href}`);
  }

  let url;
  try {
    url = new URL(href, `${origin}${sourceRoute}`);
  } catch {
    return { invalid: "malformed URL" };
  }

  if (ignoredProtocols.has(url.protocol)) {
    return null;
  }

  if (url.origin === origin || url.origin === productionOrigin) {
    return new URL(`${origin}${url.pathname}${url.search}${url.hash}`);
  }

  if (url.hostname.includes("openmarket.co.in")) {
    return { invalid: `non-canonical internal domain ${url.origin}` };
  }

  return null;
}

async function waitForServer(server) {
  const deadline = Date.now() + 45_000;

  while (Date.now() < deadline) {
    if (server.exitCode !== null) {
      throw new Error(`next start exited early with code ${server.exitCode}`);
    }

    try {
      const response = await fetch(`${origin}/`);
      if (response.ok) {
        return;
      }
    } catch {}

    await wait(500);
  }

  throw new Error(`Timed out waiting for ${origin}`);
}

async function fetchRoute(route) {
  const response = await fetch(`${origin}${route}`);
  const html = await response.text();
  return { response, html };
}

async function crawlRoute(route) {
  const { response, html } = await fetchRoute(route);

  checkedLinks.push({
    source: route,
    destination: route,
    status: response.status,
  });

  if (response.status >= 400) {
    failures.push(`${route} returned HTTP ${response.status}`);
    return;
  }

  for (const href of extractLinks(html)) {
    const parsed = parseInternalHref(href, route);

    if (parsed === null) {
      continue;
    }

    if (parsed.invalid) {
      failures.push(`${route} contains invalid internal href "${href}": ${parsed.invalid}`);
      continue;
    }

    if (parsed.pathname.startsWith("/api/")) {
      continue;
    }

    const destinationRoute = routeFromUrl(parsed);
    const destinationForFetch = `${destinationRoute}${parsed.search}`;
    addDiscovered(destinationRoute, route);

    let destinationResponse;
    let destinationHtml;
    try {
      const result = await fetchRoute(destinationForFetch);
      destinationResponse = result.response;
      destinationHtml = result.html;
    } catch (error) {
      failures.push(`${route} -> ${parsed.pathname} failed to fetch: ${error.message}`);
      continue;
    }

    checkedLinks.push({
      source: route,
      destination: `${parsed.pathname}${parsed.search}${parsed.hash}`,
      status: destinationResponse.status,
    });

    if (destinationResponse.status >= 400) {
      failures.push(`${route} -> ${parsed.pathname} returned HTTP ${destinationResponse.status}`);
      continue;
    }

    if (parsed.hash && !hasAnchor(destinationHtml, parsed.hash)) {
      failures.push(`${route} -> ${parsed.pathname}${parsed.hash} references a missing page anchor`);
    }

    if (!crawled.has(destinationRoute) && !crawlQueue.includes(destinationRoute)) {
      crawlQueue.push(destinationRoute);
    }
  }
}

async function sitemapRoutes() {
  const response = await fetch(`${origin}/sitemap.xml`);
  const xml = await response.text();

  if (response.status !== 200) {
    failures.push(`/sitemap.xml returned HTTP ${response.status}`);
    return [];
  }

  const routes = [];
  for (const [, loc] of xml.matchAll(/<loc>([^<]+)<\/loc>/g)) {
    let url;
    try {
      url = new URL(loc);
    } catch {
      failures.push(`/sitemap.xml contains invalid URL ${loc}`);
      continue;
    }

    if (url.origin !== productionOrigin) {
      failures.push(`/sitemap.xml contains non-production URL ${loc}`);
      continue;
    }

    if (url.pathname.startsWith("/api/")) {
      failures.push(`/sitemap.xml contains API route ${loc}`);
      continue;
    }

    routes.push(routeFromUrl(url));
  }

  return routes;
}

const server = spawn(
  "npm",
  ["run", "start", "--", "--hostname", host, "--port", String(port)],
  {
    stdio: ["ignore", "pipe", "pipe"],
    env: {
      ...process.env,
      NEXT_PUBLIC_SITE_URL: productionOrigin,
    },
  }
);

server.stdout.on("data", (chunk) => process.stdout.write(chunk));
server.stderr.on("data", (chunk) => process.stderr.write(chunk));

try {
  await waitForServer(server);

  while (crawlQueue.length > 0) {
    const route = crawlQueue.shift();
    if (!route || crawled.has(route)) {
      continue;
    }

    crawled.add(route);
    await crawlRoute(route);
  }

  const listedRoutes = await sitemapRoutes();
  for (const route of listedRoutes) {
    if (!discoveredRoutes.has(route)) {
      failures.push(`${route} is listed in /sitemap.xml but was not discovered through internal links`);
    }
  }

  for (const route of discoveredRoutes.keys()) {
    if (!listedRoutes.includes(route)) {
      failures.push(`${route} was discovered through internal links but is missing from /sitemap.xml`);
    }
  }

  for (const link of checkedLinks) {
    console.log(`${link.source} -> ${link.destination} [${link.status}]`);
  }

  if (failures.length > 0) {
    console.error("\nInternal link check failed:");
    for (const failure of failures) {
      console.error(`- ${failure}`);
    }
    process.exitCode = 1;
  } else {
    console.log("\nInternal link check passed.");
  }
} finally {
  server.kill("SIGTERM");
}
