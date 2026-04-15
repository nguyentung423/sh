import type { MetadataRoute } from "next";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: "*",
      allow: "/",
    },
    sitemap: "https://premiumshop.tech/sitemap.xml",
    host: "https://premiumshop.tech",
  };
}
