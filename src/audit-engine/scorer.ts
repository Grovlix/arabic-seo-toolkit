import type { AuditIssue } from "../types/audit.types";

export function scoreIssues(issues: AuditIssue[]) {
  const score = Math.max(
    0,
    Math.min(
      100,
      100 -
        issues.reduce((sum, issue) => {
          return sum + issue.scoreImpact;
        }, 0)
    )
  );

  return {
    total: score,
    categories: [
      {
        label: "Content",
        score: Math.max(
          0,
          100 -
            issues
              .filter((issue) =>
                ["title-tag", "meta-description", "h1-structure"].includes(issue.id)
              )
              .reduce((sum, issue) => sum + issue.scoreImpact, 0)
        )
      },
      {
        label: "Accessibility",
        score: Math.max(
          0,
          100 -
            issues
              .filter((issue) => ["image-alt", "rtl-checker"].includes(issue.id))
              .reduce((sum, issue) => sum + issue.scoreImpact, 0)
        )
      },
      {
        label: "Technical",
        score: Math.max(
          0,
          100 -
            issues
              .filter((issue) =>
                ["schema-markup", "internal-links", "page-speed"].includes(issue.id)
              )
              .reduce((sum, issue) => sum + issue.scoreImpact, 0)
        )
      }
    ]
  };
}

