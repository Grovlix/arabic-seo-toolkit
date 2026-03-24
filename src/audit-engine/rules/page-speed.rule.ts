import type { AuditIssue, AuditRule } from "../../types/audit.types";

export const pageSpeedRule: AuditRule = {
  id: "page-speed",
  name: "Page Speed",
  run(context) {
    const score = context.pageSpeed?.performanceScore;
    if (score === null || score === undefined) {
      return [
        {
          id: "page-speed",
          title: "Page speed data is unavailable",
          description: "No Core Web Vitals summary was available for this URL.",
          severity: "info",
          scoreImpact: 0,
          recommendation: "Run the audit again with PageSpeed access or provide manual metrics."
        }
      ];
    }

    if (score >= 75) {
      return [];
    }

    return [
      {
        id: "page-speed",
        title: "Performance score needs improvement",
        description: `The performance score is ${score}/100.`,
        severity: score < 50 ? "error" : "warning",
        scoreImpact: score < 50 ? 15 : 8,
        recommendation: "Compress images, reduce blocking scripts, and optimize mobile rendering."
      }
    ];
  }
};
