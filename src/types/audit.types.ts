export type AuditSeverity =
  | "info"
  | "low"
  | "medium"
  | "high"
  | "critical"
  | "warning"
  | "error";

export type AuditCategory = "content" | "technical" | "accessibility" | "performance";

export interface AuditRecommendation {
  title?: string;
  action: string;
}

export interface AuditFinding {
  ruleId: string;
  ruleName: string;
  category: AuditCategory;
  severity: AuditSeverity;
  score: number;
  maxScore: number;
  passed: boolean;
  summary: string;
  details: string[];
  recommendation?: AuditRecommendation;
  meta?: Record<string, unknown>;
}

export interface AuditIssue {
  id: string;
  title: string;
  description: string;
  severity: AuditSeverity;
  scoreImpact: number;
  recommendation: string;
  metadata?: Record<string, unknown>;
}

export interface AuditRuleContext {
  url?: string;
  html: string;
  locale?: "ar" | "en";
  pageSpeed?: PageSpeedSummary | null;
}

export interface AuditRule {
  id: string;
  name: string;
  run(context: AuditRuleContext): AuditIssue[];
}

export interface AuditCategoryScore {
  label: string;
  score: number;
}

export interface AuditResult {
  url?: string;
  score: number;
  summary: {
    score: number;
    passedChecks: number;
    issuesCount: number;
    topPriority: string[];
  };
  categories: AuditCategoryScore[];
  issues: AuditIssue[];
  results: AuditIssue[];
  pageSpeed?: PageSpeedSummary | null;
  generatedAt: string;
}

export interface PageSpeedSummary {
  performanceScore: number | null;
  coreWebVitals: {
    lcp?: string;
    cls?: string;
    inp?: string;
    fcp?: string;
    ttfb?: string;
  };
  source: "google-pagespeed" | "manual" | "unavailable";
}

export interface MetaTagInput {
  titleAr: string;
  titleEn?: string;
  descriptionAr: string;
  descriptionEn?: string;
  locale?: "ar" | "en";
  keywords?: string[];
  canonicalUrl?: string;
  ogImage?: string;
  twitterCard?: "summary" | "summary_large_image";
  siteName?: string;
}

export interface GeneratedMetaTagResult {
  html: string;
  serpPreview: {
    title: string;
    description: string;
    url: string;
  };
}

export interface ProductSchemaInput {
  name: string;
  description: string;
  image: string[];
  sku?: string;
  brand?: string;
  currency?: string;
  price?: string;
  availability?: string;
  url?: string;
}

export interface OrganizationSchemaInput {
  name: string;
  url: string;
  logo?: string;
  sameAs?: string[];
  contactEmail?: string;
}

export interface FAQSchemaInput {
  questions: Array<{
    question: string;
    answer: string;
  }>;
}

export interface PlatformAuditResult {
  platform: "salla" | "zid" | "generic";
  confidence: number;
  findings: string[];
  recommendations: string[];
  technical: {
    hasRobotsTxt: boolean;
    hasSitemapXml: boolean;
    productSchemaDetected: boolean;
  };
}
