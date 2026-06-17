/** @type {import("next-sitemap").IConfig} */
module.exports = {
  siteUrl: (
    process.env.NEXT_PUBLIC_SITE_URL || "https://www.openmarket.co.in"
  ).replace(/\/+$/, ""),

  generateRobotsTxt: true,
  generateIndexSitemap: false,
  sitemapSize: 5000,

  changefreq: "weekly",
  priority: 0.7,

  exclude: ["/api/*"],

  robotsTxtOptions: {
    policies: [
      {
        userAgent: "*",
        allow: "/",
        disallow: ["/api/"],
      },
    ],
  },

  transform: async (config, path) => {
    let changefreq = config.changefreq;
    let priority = config.priority;

    if (path === "/") {
      changefreq = "weekly";
      priority = 1;
    } else if (
      path === "/terms-and-conditions" ||
      path === "/privacy-policy"
    ) {
      changefreq = "yearly";
      priority = 0.3;
    } else {
      changefreq = "weekly";
      priority = 0.8;
    }

    return {
      loc: path,
      changefreq,
      priority,
      lastmod: new Date().toISOString(),
      alternateRefs: config.alternateRefs ?? [],
    };
  },
};
