import * as cheerio from "cheerio";

import type { AuditIssue, AuditRule } from "../../types/audit.types";

export const schemaMarkupRule: AuditRule = {
  id: "schema-markup",
  name: "Schema Markup",
  run(context) {
    const $ = cheerio.load(context.html);
    const scripts = $('script[type="application/ld+json"]').toArray();
    const hasProductLike = scripts.some((script) => {
      const content = $(script).html() ?? "";
      return /"@type"\s*:\s*"(Product|Organization|FAQPage|BreadcrumbList)"/.test(content);
    });

    if (hasProductLike) {
      return [];
    }

    return [
      {
        id: "schema-markup",
        title: "No useful structured data detected",
        description:
          "The page does not appear to expose Product, Organization, FAQPage, or BreadcrumbList JSON-LD.",
        severity: "warning",
        scoreImpact: 10,
        recommendation: "Add JSON-LD markup for the page type, especially Product and Organization schema."
      }
    ];
  }
};
