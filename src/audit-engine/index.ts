import { scoreIssues } from "./scorer";
import { exportAuditJson, exportAuditPdf } from "./reporter";
import { h1StructureRule } from "./rules/h1-structure.rule";
import { imageAltRule } from "./rules/image-alt.rule";
import { internalLinksRule } from "./rules/internal-links.rule";
import { metaDescriptionRule } from "./rules/meta-description.rule";
import { pageSpeedRule } from "./rules/page-speed.rule";
import { rtlCheckerRule } from "./rules/rtl-checker.rule";
import { schemaMarkupRule } from "./rules/schema-markup.rule";
import { titleTagRule } from "./rules/title-tag.rule";
import type { AuditIssue, AuditResult, AuditRuleContext, PageSpeedSummary } from "../types/audit.types";

const defaultRules = [
  titleTagRule,
  metaDescriptionRule,
  h1StructureRule,
  imageAltRule,
  schemaMarkupRule,
  rtlCheckerRule,
  internalLinksRule,
  pageSpeedRule
];

export async function fetchPageSpeedSummary(url: string): Promise<PageSpeedSummary | null> {
  try {
    const apiUrl = `https://www.googleapis.com/pagespeedonline/v5/runPagespeed?category=PERFORMANCE&strategy=MOBILE&url=${encodeURIComponent(url)}`;
    const response = await fetch(apiUrl);
    if (!response.ok) {
      return null;
    }

    const json = await response.json();
    const lighthouse = json.lighthouseResult;
    const metrics = lighthouse?.audits ?? {};

    return {
      performanceScore:
        typeof lighthouse?.categories?.performance?.score === "number"
          ? Math.round(lighthouse.categories.performance.score * 100)
          : null,
      coreWebVitals: {
        lcp: metrics["largest-contentful-paint"]?.displayValue,
        cls: metrics["cumulative-layout-shift"]?.displayValue,
        inp: metrics["interaction-to-next-paint"]?.displayValue,
        fcp: metrics["first-contentful-paint"]?.displayValue,
        ttfb: metrics["server-response-time"]?.displayValue
      },
      source: "google-pagespeed"
    };
  } catch {
    return null;
  }
}

export function runAudit(context: AuditRuleContext): AuditResult {
  const issues = defaultRules.flatMap((rule) => rule.run(context)) as AuditIssue[];

  issues.sort((a, b) => b.scoreImpact - a.scoreImpact);

  const scored = scoreIssues(issues);

  return {
    url: context.url,
    score: scored.total,
    summary: {
      score: scored.total,
      passedChecks:
        defaultRules.length -
        new Set(issues.filter((issue) => issue.severity !== "info").map((issue) => issue.id)).size,
      issuesCount: issues.length,
      topPriority: issues.slice(0, 3).map((issue) => issue.title)
    },
    categories: scored.categories,
    issues,
    results: issues,
    pageSpeed: context.pageSpeed,
    generatedAt: new Date().toISOString()
  };
}

export const auditHtml = runAudit;

export async function auditUrl(url: string) {
  const response = await fetch(url, {
    headers: {
      "user-agent": "Grovlix Arabic SEO Toolkit/0.1"
    }
  });
  const html = await response.text();
  const pageSpeed = await fetchPageSpeedSummary(url);
  return runAudit({ url, html, pageSpeed });
}

export { exportAuditJson, exportAuditPdf };
