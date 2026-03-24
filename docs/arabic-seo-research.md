# Arabic SEO Research for `grovlix/arabic-seo-toolkit`

Date checked: March 24, 2026

## Scope

This report focuses on Arabic SEO for e-commerce, especially Saudi/GCC merchants using Salla/Zid-like storefronts.

## Confirmed Facts vs Inference

### Confirmed

- Google uses page content, `<title>`, headings, `og:title`, anchor text, and `WebSite` structured data as possible title-link inputs, and may rewrite titles when it sees issues.
- Google may use `<meta name="description">`, but snippets can also come from visible page content.
- Google does not use `hreflang` or `lang` to detect page language, but `hreflang` still maps localized variants.
- FAQ rich results are effectively limited to authoritative government and health sites; HowTo rich results are deprecated.
- Product structured data still matters for Product snippets and Merchant listings.
- W3C guidance for Arabic and RTL pages requires markup-based direction, language tags, and safe handling for mixed-direction strings with `dir="auto"` or `bdi`.
- Modern HTML authoring should use UTF-8 consistently.

### Inference

- Arabic e-commerce SEO failures usually combine generic SEO mistakes with Arabic-specific implementation gaps such as broken bidirectional rendering, weak localized copy, untranslated templates, and poor intent mapping.
- For Salla and Zid merchants, the most valuable initial checks are title and meta quality, Arabic copy coverage, image alt coverage, Product schema presence, internal linking, Core Web Vitals, and RTL rendering defects.

## Top 20 Arabic SEO Mistakes

1. Weak or duplicated `<title>` tags that trigger Google rewrites.
2. Template-wide generic meta descriptions instead of page-specific summaries.
3. Assuming the provided meta description will always be shown in search.
4. Missing `lang="ar"` and `dir="rtl"` on Arabic pages.
5. Using CSS-only RTL tricks instead of structural direction.
6. Breaking mixed Arabic and English strings, numbers, or prices because `bdi` or `dir="auto"` is missing.
7. Translating English keywords literally instead of matching real Arabic search behavior.
8. Ignoring bilingual intent where Arabic and English terms mix naturally.
9. Reusing manufacturer copy and publishing thin Arabic product pages.
10. Leaving category pages with little or no supporting Arabic copy.
11. Using inconsistent Arabic spellings across title, headings, URLs, and body content.
12. Overstuffing exact-match keywords and producing robotic Arabic text.
13. Missing or low-quality image `alt` text.
14. Weak internal linking between categories, products, brands, and content.
15. Missing, duplicated, or poorly structured H1 and H2 usage.
16. Expecting FAQ schema to still produce rich results for commercial sites.
17. Missing Product schema or incomplete offer and review fields.
18. Poor mobile performance on media-heavy storefronts.
19. Broken localization setup between Arabic and English variants.
20. Encoding and normalization issues such as mojibake, inconsistent alef and ya variants, and punctuation mismatches.

## Keyword Opportunities

Public search-volume data is limited for niche Arabic SEO-tool queries, so the table below mixes public estimates and strong demand signals from search behavior, educational content, and merchant documentation.

| Opportunity | Arabic keyword/theme | Signal type | Demand signal | Why it matters |
| --- | --- | --- | --- | --- |
| Platform SEO head term | `سلة` | Public volume | Ahrefs shows roughly 125K monthly searches in Saudi Arabia for `salla.sa` | Indicates very large Salla-adjacent demand |
| Platform intent | `متجر سلة` | Public volume | Ahrefs shows roughly 11K monthly Saudi searches | Strong store-owner intent |
| Platform support intent | `سلة تسجيل دخول` | Public volume | Ahrefs shows roughly 14K monthly Saudi searches | Merchant operator demand |
| Store SEO | `سيو المتاجر` / `سيو المتاجر الإلكترونية` | Demand signal | Common theme in Arabic educational and platform content | Good educational landing page target |
| Audit intent | `فحص السيو` / `تحليل سيو الموقع` | Demand signal | Common phrasing in Arabic tool pages and service content | Strong fit for audit flow |
| Meta intent | `وصف ميتا` / `كتابة meta description` | Demand signal | Dedicated Arabic guides and tools exist | High-fit generator term |
| Schema intent | `schema markup` + Arabic | Demand signal | Niche but recurring in Arabic SEO content | Good low-competition feature page |
| Technical SEO | `سرعة الموقع` / `Page Speed` | Demand signal | Repeated in merchant education content | Strong pain-point cluster |
| Image accessibility | `النص البديل للصور` | Demand signal | Long-tail but highly relevant | Strong feature-support keyword |
| Platform-adjacent SEO | `SEO سلة` / `SEO زد` | Demand signal | Appears in consultant and course pages | Commercial intent |
| SERP preview | `معاينة نتائج البحث` / `SERP preview` | Demand signal | Smaller niche with clear feature mapping | Useful supporting page |
| RTL fixes | `مشاكل RTL` / `تصحيح اتجاه الموقع` | Demand signal | Underserved Arabic technical topic | Strong differentiator |

### Recommended target clusters

- `فحص السيو العربي`
- `سيو المتاجر الإلكترونية`
- `SEO سلة`
- `SEO زد`
- `مولد meta tags بالعربي`
- `مولد schema للمتاجر`
- `فحص النص البديل للصور`
- `فحص RTL للمواقع`

## Google Arabic SERP Features

### Confirmed or strongly supported

- Standard blue-link results with rewritten titles and snippets when Google sees a better match.
- Product snippets and Merchant listings for eligible product pages.
- Review-related product enhancements where markup and eligibility conditions are met.
- Image, video, and local results when query intent supports them.
- Algorithmic sitelinks still exist, but the sitelinks search box feature has been retired.
- FAQ rich results should not be treated as a dependable e-commerce feature.

### Product implication

The toolkit should optimize for title and snippet quality, product-rich eligibility, image visibility, local relevance, and mobile readability in Arabic. It should not promise FAQ rich results for merchants.

## RTL SEO Guidelines

1. Set `<html lang="ar" dir="rtl">` on Arabic-first pages.
2. Use structural `dir` attributes instead of CSS-only direction overrides.
3. Tag inline language changes where practical.
4. Use `bdi` or `dir="auto"` for user-generated names, SKUs, prices, and mixed-language strings.
5. Test punctuation, parentheses, and number ordering in mixed-direction content.
6. Ensure forms and search fields handle Arabic safely, especially for mixed input.
7. Validate breadcrumbs, filters, tables, and badges in RTL layouts.
8. Preserve semantic heading hierarchy in Arabic layouts.
9. Ensure mirrored UI does not harm navigation clarity or crawlable internal links.
10. Cross-reference Arabic and English alternates correctly with `hreflang`.

## Arabic Meta Tag Best Practices

### Title tags

- Make each title unique and page-specific.
- Keep the main topic clear in natural Arabic.
- Align `<title>`, visible H1, and on-page content to reduce rewrite risk.
- Avoid repetitive brand or attribute stuffing.
- Use separate Arabic and English titles for alternate localized pages.

### Meta descriptions

- Treat the meta description as snippet guidance, not a guaranteed output.
- Write for click-through rate, not ranking manipulation.
- Match visible content closely so Google is more likely to reuse the summary.
- Generate large-scale descriptions programmatically only when they remain page-specific.
- Prioritize Arabic readability on mobile.

### Composition guidance

- Lead with the product or category intent before branding.
- Use natural Modern Standard Arabic first, then mix in English brand or model terms only where search behavior supports it.
- Keep numerals, sizes, and offers readable inside RTL context.
- Avoid decorative tatweel, emoji, and punctuation clutter in SEO fields.
- Normalize common spelling variants internally without ignoring user-intent variants in targeting.

## Arabic Character Encoding and Text Risks

### Confirmed

- UTF-8 should be used consistently.
- Encoding declarations still matter.
- Arabic pages are especially vulnerable when encoding and bidirectional handling are inconsistent.

### Practical risks

1. Mojibake from bad source or database encoding.
2. Mixed Unicode forms for alef, hamza, ya, or ta marbuta causing text inconsistency.
3. Arabic comma and English comma inconsistencies in metadata.
4. Invisible bidi marks creating broken snippet or UI ordering.
5. Hidden formatting characters introduced by copy-paste from external systems.
6. Slug generation that strips Arabic poorly or creates unstable URLs.
7. Large mismatch between normalized internal text and rendered copy.

### Toolkit implication

The audit engine should include checks for:

- UTF-8 declaration
- malformed or replacement-character detection
- mixed-direction text warnings
- suspicious hidden Unicode control characters
- optional normalization warnings for common Arabic character variants

## MVP Implications

The highest-value Phase 1 checks are:

1. Arabic title quality and rewrite risk
2. Arabic meta description quality
3. `lang`, `dir`, and structural RTL correctness
4. mixed-direction text safety
5. Product schema presence
6. image `alt` coverage
7. H1 and H2 structure
8. internal linking
9. page speed summary
10. thin or duplicate Arabic copy signals

## Sources

- Google Search Central, Title links: https://developers.google.com/search/docs/appearance/title-link
- Google Search Central, Snippets: https://developers.google.com/search/docs/appearance/snippet
- Google Search Central, Localized versions: https://developers.google.com/search/docs/specialty/international/localized-versions
- Google Search Central blog, FAQ and HowTo changes: https://developers.google.com/search/blog/2023/08/howto-faq-changes
- Google Search Central blog, Merchant listings: https://developers.google.com/search/blog/2022/09/merchant-listings
- Google Search Central blog, Sitelinks search box retired: https://developers.google.com/search/blog/2024/10/sitelinks-search-box
- W3C bidi authoring techniques: https://www.w3.org/International/techniques/authoring-html.en.html?collapse
- W3C RTL HTML note: https://www.w3.org/TR/i18n-html-tech-bidi/
- W3C strings and bidi: https://w3c.github.io/i18n-drafts/articles/strings-and-bidi/index.en
- Ahrefs public page for `salla.sa`: https://ahrefs.com/websites/salla.sa
- Regional e-commerce SEO analysis used as secondary evidence: https://www.linkedin.com/pulse/why-most-saudi-e-commerce-stores-fail-rank-seo-actually-baig--wngwf

## Gaps

There is strong primary guidance for titles, snippets, hreflang, product data, FAQ limitations, bidirectional markup, and encoding. There is no equivalent primary-source Google document specific to Arabic SEO mistakes, and public search-volume data for Arabic SEO-tool queries remains limited, so those sections include informed inference based on standards, regional market evidence, and search-demand signals.
