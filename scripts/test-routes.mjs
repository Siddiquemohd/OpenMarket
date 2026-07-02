import { spawn } from "node:child_process";

const host = "127.0.0.1";
const port = Number(process.env.ROUTE_TEST_PORT || 3100);
const origin = `http://${host}:${port}`;
const productionOrigin = "https://www.openmarket.co.in";

const routes = [
  "/terms-and-conditions",
  "/privacy-policy",
  "/sitemap.xml",
  "/robots.txt",
];

const sitemapRequiredUrls = [
  `${productionOrigin}/`,
  `${productionOrigin}/terms-and-conditions`,
  `${productionOrigin}/privacy-policy`,
];

const sitemapForbiddenPatterns = [
  `${productionOrigin}/api/`,
  `${productionOrigin}/admin/`,
  `${productionOrigin}/dashboard`,
  `${productionOrigin}/preview`,
  `${productionOrigin}/test`,
  `${productionOrigin}/auth/callback`,
];

function wait(ms) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

async function waitForServer(server) {
  const deadline = Date.now() + 30_000;

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

function assertIncludes(body, value, label) {
  if (!body.includes(value)) {
    throw new Error(`${label} did not contain ${value}`);
  }
}

function assertExcludes(body, value, label) {
  if (body.includes(value)) {
    throw new Error(`${label} unexpectedly contained ${value}`);
  }
}

async function expectOk(path) {
  const response = await fetch(`${origin}${path}`);
  const body = await response.text();

  if (response.status !== 200) {
    throw new Error(`${path} returned HTTP ${response.status}`);
  }

  return body;
}

const server = spawn(
  "npm",
  ["run", "start", "--", "--hostname", host, "--port", String(port)],
  {
    shell: true,
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

  const bodies = new Map();
  for (const route of routes) {
    bodies.set(route, await expectOk(route));
  }

  const sitemap = bodies.get("/sitemap.xml");
  const sitemapUrls = [...sitemap.matchAll(/<loc>([^<]+)<\/loc>/g)].map(
    ([, url]) => url
  );

  if (sitemapUrls.length === 0) {
    throw new Error("/sitemap.xml did not contain any <loc> entries");
  }

  for (const url of sitemapUrls) {
    if (!url.startsWith(`${productionOrigin}/`) && url !== productionOrigin) {
      throw new Error(`/sitemap.xml contained non-production URL ${url}`);
    }

    if (url.startsWith("http://") || url.includes("localhost")) {
      throw new Error(`/sitemap.xml contained invalid URL ${url}`);
    }
  }

  for (const url of sitemapRequiredUrls) {
    assertIncludes(sitemap, url, "/sitemap.xml");
  }

  for (const pattern of sitemapForbiddenPatterns) {
    assertExcludes(sitemap, pattern, "/sitemap.xml");
  }

  const robots = bodies.get("/robots.txt");
  assertIncludes(
    robots,
    `${productionOrigin}/sitemap.xml`,
    "/robots.txt"
  );

  const terms = bodies.get("/terms-and-conditions");
  assertIncludes(
    terms,
    `<link rel="canonical" href="${productionOrigin}/terms-and-conditions"`,
    "/terms-and-conditions"
  );

  const privacy = bodies.get("/privacy-policy");
  assertIncludes(
    privacy,
    `<link rel="canonical" href="${productionOrigin}/privacy-policy"`,
    "/privacy-policy"
  );

  console.log("Route smoke tests passed.");
} finally {
  server.kill("SIGTERM");
}
