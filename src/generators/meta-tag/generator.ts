import type { GeneratedMetaTagResult, MetaTagInput } from "../../types/audit.types";

export function buildMetaTagResult(input: MetaTagInput): GeneratedMetaTagResult {
  const title = input.titleAr || input.titleEn || "";
  const description = input.descriptionAr || input.descriptionEn || "";
  const canonicalUrl = input.canonicalUrl ?? "https://example.com/ar/page";
  const keywords = input.keywords?.join(", ");
  const twitterCard = input.twitterCard ?? "summary_large_image";

  const lines = [
    `<title>${title}</title>`,
    `<meta name="description" content="${description}" />`,
    input.titleEn ? `<meta name="title:en" content="${input.titleEn}" />` : "",
    input.descriptionEn
      ? `<meta name="description:en" content="${input.descriptionEn}" />`
      : "",
    keywords ? `<meta name="keywords" content="${keywords}" />` : "",
    `<link rel="canonical" href="${canonicalUrl}" />`,
    `<meta property="og:title" content="${title}" />`,
    `<meta property="og:description" content="${description}" />`,
    `<meta property="og:url" content="${canonicalUrl}" />`,
    input.ogImage ? `<meta property="og:image" content="${input.ogImage}" />` : "",
    input.siteName ? `<meta property="og:site_name" content="${input.siteName}" />` : "",
    `<meta name="twitter:card" content="${twitterCard}" />`,
    `<meta name="twitter:title" content="${title}" />`,
    `<meta name="twitter:description" content="${description}" />`
  ].filter(Boolean);

  return {
    html: lines.join("\n"),
    serpPreview: {
      title,
      description,
      url: canonicalUrl
    }
  };
}

export function generateMetaTags(input: MetaTagInput): string {
  return buildMetaTagResult(input).html;
}
