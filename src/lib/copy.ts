export type Locale = "ar" | "en";

export const copy = {
  ar: {
    name: "Grovlix Arabic SEO Toolkit",
    heroEyebrow: "أداة سيو مجانية لمتاجر سلة وزد",
    heroTitle: "افحص سيو متجرك العربي خلال دقائق",
    heroDescription:
      "تدقيق عربي أولاً لمتاجر سلة وزد مع فحص العناوين والوصف والهيكلة وبيانات Schema وتجربة RTL.",
    heroInputLabel: "رابط المتجر أو الصفحة",
    heroInputPlaceholder: "https://example.com",
    heroButton: "ابدأ الفحص",
    featuresTitle: "الأدوات الأساسية",
    generatorsTitle: "مولدات جاهزة للنسخ",
    auditPageTitle: "نتيجة التدقيق",
    ctaTitle: "ارفع الزيارات ثم حسّن التحويل",
    ctaText: "بعد إصلاح السيو، استخدم Popupsnap لرفع التحويلات داخل متجرك.",
    footer: "مبني بواسطة Grovlix لتجار سلة وزد"
  },
  en: {
    name: "Grovlix Arabic SEO Toolkit",
    heroEyebrow: "Free SEO toolkit for Salla and Zid merchants",
    heroTitle: "Audit Arabic e-commerce SEO in minutes",
    heroDescription:
      "Arabic-first SEO checks for Salla and Zid stores covering titles, meta descriptions, headings, schema, and RTL UX.",
    heroInputLabel: "Store or page URL",
    heroInputPlaceholder: "https://example.com",
    heroButton: "Run audit",
    featuresTitle: "Core tools",
    generatorsTitle: "Copy-paste generators",
    auditPageTitle: "Audit result",
    ctaTitle: "Grow traffic, then improve conversion",
    ctaText: "After fixing SEO, use Popupsnap to drive more conversions inside your store.",
    footer: "Built by Grovlix for Salla and Zid merchants"
  }
} as const;

export function isLocale(value: string): value is Locale {
  return value === "ar" || value === "en";
}
