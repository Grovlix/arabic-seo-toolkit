import { auditHtml } from "../audit-engine";
import type { PlatformAuditResult } from "../types/audit.types";

export async function auditZidStore(url: string, html: string): Promise<PlatformAuditResult> {
  const [robots, sitemap, audit] = await Promise.all([
    fetch(new URL("/robots.txt", url)).then((res) => res.ok).catch(() => false),
    fetch(new URL("/sitemap.xml", url)).then((res) => res.ok).catch(() => false),
    auditHtml({ url, html, pageSpeed: null })
  ]);

  return {
    platform: "zid",
    confidence: 0.85,
    findings: [
      "Detected a Zid storefront footprint.",
      `SEO audit score: ${audit.score}/100`,
      robots ? "robots.txt is available." : "robots.txt is missing or inaccessible.",
      sitemap ? "sitemap.xml is available." : "sitemap.xml is missing or inaccessible."
    ],
    recommendations: [
      "Review collection pages for unique Arabic meta copy.",
      "Validate theme output for Product schema and breadcrumb markup.",
      "Audit theme layout for RTL correctness across filters and cards."
    ],
    technical: {
      hasRobotsTxt: robots,
      hasSitemapXml: sitemap,
      productSchemaDetected: audit.issues.every((issue) => issue.id !== "schema-markup")
    }
  };
}

