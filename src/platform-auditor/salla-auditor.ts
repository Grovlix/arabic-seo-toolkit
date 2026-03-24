import { auditHtml } from "../audit-engine";
import type { PlatformAuditResult } from "../types/audit.types";

export async function auditSallaStore(url: string, html: string): Promise<PlatformAuditResult> {
  const [robots, sitemap, audit] = await Promise.all([
    fetch(new URL("/robots.txt", url)).then((res) => res.ok).catch(() => false),
    fetch(new URL("/sitemap.xml", url)).then((res) => res.ok).catch(() => false),
    auditHtml({ url, html, pageSpeed: null })
  ]);

  return {
    platform: "salla",
    confidence: 0.9,
    findings: [
      "Detected a Salla storefront footprint.",
      `SEO audit score: ${audit.score}/100`,
      robots ? "robots.txt is available." : "robots.txt is missing or inaccessible.",
      sitemap ? "sitemap.xml is available." : "sitemap.xml is missing or inaccessible."
    ],
    recommendations: [
      "Check category and product templates for Arabic-first titles and descriptions.",
      "Validate Product JSON-LD on product pages.",
      "Strengthen internal links from collections and blog content into products."
    ],
    technical: {
      hasRobotsTxt: robots,
      hasSitemapXml: sitemap,
      productSchemaDetected: audit.issues.every((issue) => issue.id !== "schema-markup")
    }
  };
}

