import * as cheerio from "cheerio";

import type { AuditIssue, AuditRule } from "../../types/audit.types";

export const rtlCheckerRule: AuditRule = {
  id: "rtl-checker",
  name: "RTL Checker",
  run(context) {
    const $ = cheerio.load(context.html);
    const html = $("html");
    const dir = html.attr("dir");
    const lang = html.attr("lang");
    const issues = [];

    if (dir !== "rtl") {
      issues.push({
        id: "rtl-checker",
        title: "Document direction is not set to RTL",
        description: `Expected <html dir="rtl"> but found "${dir ?? "missing"}".`,
        severity: "error" as const,
        scoreImpact: 12,
        recommendation: 'Set `dir="rtl"` on the root HTML element for Arabic-first pages.'
      });
    }

    if (!lang?.startsWith("ar")) {
      issues.push({
        id: "rtl-checker",
        title: "Document language is not tagged as Arabic",
        description: `Expected <html lang="ar"> or a regional Arabic tag but found "${lang ?? "missing"}".`,
        severity: "warning" as const,
        scoreImpact: 7,
        recommendation: 'Set `lang="ar"` or a regional Arabic variant such as `ar-SA`.'
      });
    }

    return issues;
  }
};
