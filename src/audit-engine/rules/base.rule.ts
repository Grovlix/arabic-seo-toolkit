import type {
  AuditCategory,
  AuditFinding,
  AuditIssue,
  AuditRecommendation,
  AuditRule,
  AuditRuleContext,
  AuditSeverity,
} from "../../types/audit.types";

export abstract class BaseAuditRule implements AuditRule {
  abstract id: string;
  abstract name: string;
  abstract category: AuditCategory;
  abstract weight: number;
  abstract run(context: AuditRuleContext): AuditIssue[];

  protected clampScore(score: number, maxScore = 100) {
    return Math.max(0, Math.min(score, maxScore));
  }

  protected severityFromScore(score: number): AuditSeverity {
    if (score >= 90) return "info";
    if (score >= 75) return "low";
    if (score >= 55) return "medium";
    if (score >= 35) return "high";
    return "critical";
  }

  protected buildFinding(input: {
    score: number;
    summary: string;
    details: string[];
    recommendation?: AuditRecommendation;
    meta?: Record<string, unknown>;
  }): AuditFinding {
    const score = this.clampScore(input.score);

    return {
      ruleId: this.id,
      ruleName: this.name,
      category: this.category,
      severity: this.severityFromScore(score),
      score,
      maxScore: 100,
      passed: score >= 75,
      summary: input.summary,
      details: input.details,
      recommendation: input.recommendation,
      meta: input.meta,
    };
  }
}
