import * as cheerio from "cheerio";

import type { AuditIssue, AuditRule } from "../../types/audit.types";

export const h1StructureRule: AuditRule = {
  id: "h1-structure",
  name: "Heading Structure",
  run(context) {
    const $ = cheerio.load(context.html);
    const h1Count = $("h1").length;
    const h2Count = $("h2").length;

    if (h1Count !== 1) {
      return [
        {
          id: "h1-structure",
          title: "Heading hierarchy is weak",
          description: `Expected exactly one H1, found ${h1Count}.`,
          severity: "error",
          scoreImpact: 12,
          recommendation: "Use exactly one H1 and support it with meaningful H2 sections."
        }
      ];
    }

    if (h2Count === 0) {
      return [
        {
          id: "h1-structure",
          title: "No supporting H2 headings detected",
          description: "The page has an H1 but no H2 structure.",
          severity: "warning",
          scoreImpact: 5,
          recommendation: "Add H2 sections to improve clarity, scanability, and topical structure."
        }
      ];
    }

    return [];
  }
};
