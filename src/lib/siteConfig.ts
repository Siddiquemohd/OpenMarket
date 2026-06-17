const configuredSiteUrl = process.env.NEXT_PUBLIC_SITE_URL?.trim();

export const siteConfig = {
  name: "OpenMarket",
  url: (configuredSiteUrl || "https://www.openmarket.co.in").replace(
    /\/+$/,
    ""
  ),
};
