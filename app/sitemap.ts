import type { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  const base = "https://arabic-seo-toolkit.grovlix.com";
  const pages = [
    "/ar",
    "/en",
    "/ar/audit",
    "/en/audit",
    "/ar/generators/meta-tags",
    "/en/generators/meta-tags",
    "/ar/generators/schema-markup",
    "/en/generators/schema-markup",
    "/ar/generators/serp-preview",
    "/en/generators/serp-preview"
  ];

  return pages.map((page) => ({
    url: `${base}${page}`,
    changeFrequency: "weekly",
    priority: page.endsWith("/ar") || page.endsWith("/en") ? 1 : 0.8
  }));
}
