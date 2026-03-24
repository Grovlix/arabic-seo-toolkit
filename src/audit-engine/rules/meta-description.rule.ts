import * as cheerio from "cheerio";

import type { AuditIssue, AuditRule } from "../../types/audit.types";

const arabicPattern = /[\u0600-\u06FF]/;

export const metaDescriptionRule: AuditRule = {
  id: "meta-description",
  name: "Meta Description",
  run(context) {
    const $ = cheerio.load(context.html);
    const description = $('meta[name="description"]').attr("content")?.trim() ?? "";

    if (!description) {
      return [
        {
          id: "meta-description-missing",
          title: "Missing meta description",
          description: "No meta description was found for the page.",
          severity: "error",
          scoreImpact: 12,
          recommendation:
            "Add a unique Arabic summary that clearly describes the page and invites clicks."
        }
      ];
    }

    const issues: AuditIssue[] = [];
    if (description.length < 70 || description.length > 160) {
      issues.push({
        id: "meta-description-length",
        title: "Meta description length needs work",
        description: `Current description length is ${description.length} characters.`,
        severity: "warning",
        scoreImpact: 6,
        recommendation: "Aim for a concise summary, usually around 70 to 160 characters."
      });
    }

    if (!arabicPattern.test(description)) {
      issues.push({
        id: "meta-description-language",
        title: "Meta description is not Arabic-first",
        description: "The description does not appear to include Arabic text.",
        severity: "warning",
        scoreImpact: 8,
        recommendation: "Use natural Arabic copy for Arabic storefront pages."
      });
    }

    return issues;
  }
};
