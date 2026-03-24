export type Locale = "ar" | "en";

export const copy = {
  ar: {
    direction: "rtl",
    homeTitle: "أداة سيو مجانية للتجارة الإلكترونية العربية",
    homeSubtitle:
      "افحص صفحات متجرك، حسّن الميتا، وابنِ schema markup جاهز لمحركات البحث في دقائق.",
    auditPlaceholder: "https://your-store.com/product-page",
    auditButton: "ابدأ الفحص",
    navAudit: "نتيجة الفحص",
    navMeta: "مولد Meta Tags",
    navSchema: "مولد Schema",
    navSerp: "معاينة SERP",
    trust: "مصممة خصيصاً لتجّار سلة وزد",
    cta: "ارفع التحويلات مع Popupsnap بعد تحسين السيو",
    issues: "الأولويات",
    recommendations: "التوصيات",
    generatedCode: "الكود الناتج"
  },
  en: {
    direction: "ltr",
    homeTitle: "Free SEO toolkit for Arabic e-commerce",
    homeSubtitle:
      "Audit storefront pages, generate meta tags, and build search-ready schema in minutes.",
    auditPlaceholder: "https://your-store.com/product-page",
    auditButton: "Run audit",
    navAudit: "Audit",
    navMeta: "Meta Tags",
    navSchema: "Schema",
    navSerp: "SERP Preview",
    trust: "Built for Salla and Zid merchants",
    cta: "Improve conversion with Popupsnap after fixing SEO",
    issues: "Issues",
    recommendations: "Recommendations",
    generatedCode: "Generated code"
  }
} as const;

export function isLocale(value: string): value is Locale {
  return value === "ar" || value === "en";
}

