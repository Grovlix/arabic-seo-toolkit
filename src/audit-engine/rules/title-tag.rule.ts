import * as cheerio from "cheerio";

import type { AuditIssue, AuditRule } from "../../types/audit.types";

const arabicPattern = /[\u0600-\u06FF]/;

export const titleTagRule: AuditRule = {
  id: "title-tag",
  name: "Title Tag",
  run(context) {
    const $ = cheerio.load(context.html);
    const title = $("title").first().text().trim();
    const issues: AuditIssue[] = [];

    if (!title) {
      issues.push({
        id: "title-missing",
        title: "Missing title tag",
        description: "The page has no <title>, which weakens rankings and snippet quality.",
        severity: "error",
        scoreImpact: 18,
        recommendation: "Add a unique Arabic-first title that matches the page intent."
      });
      return issues;
    }

    if (title.length < 25 || title.length > 65) {
      issues.push({
        id: "title-length",
        title: "Title length is outside the ideal range",
        description: `Current title length is ${title.length} characters.`,
        severity: "warning",
        scoreImpact: 8,
        recommendation: "Keep titles concise, usually between 25 and 65 characters."
      });
    }

    if (!arabicPattern.test(title)) {
      issues.push({
        id: "title-language",
        title: "Title is not Arabic-optimized",
        description: "The title does not contain Arabic text.",
        severity: "warning",
        scoreImpact: 10,
        recommendation: "Use natural Arabic phrasing for Arabic storefront pages."
      });
    }

    return issues;
  }
};
