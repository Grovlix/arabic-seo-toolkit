import * as cheerio from "cheerio";

import type { AuditIssue, AuditRule } from "../../types/audit.types";

export const internalLinksRule: AuditRule = {
  id: "internal-links",
  name: "Internal Links",
  run(context) {
    const $ = cheerio.load(context.html);
    const links = $("a[href]").toArray();
    const internal = links.filter((link) => {
      const href = $(link).attr("href") ?? "";
      return href.startsWith("/") || (context.url ? href.includes(new URL(context.url).host) : false);
    });

    if (internal.length >= 5) {
      return [];
    }

    return [
      {
        id: "internal-links",
        title: "Internal linking is thin",
        description: `Only ${internal.length} internal links were detected.`,
        severity: "warning",
        scoreImpact: 6,
        recommendation: "Add crawlable links between categories, products, brands, and support content."
      }
    ];
  }
};
