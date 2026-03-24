import assert from "node:assert/strict";
import test from "node:test";

import { runAudit } from "@/src/audit-engine";
import { generateMetaTags } from "@/src/generators/meta-tag/generator";

test("runAudit flags missing title and description", () => {
  const result = runAudit({
    html: "<html lang='ar'><body><h1>منتج</h1></body></html>",
    locale: "ar",
    url: "https://example.com/ar/product",
  });

  assert.equal(result.issues.some((issue) => issue.id === "title-missing"), true);
  assert.equal(result.issues.some((issue) => issue.id === "meta-description-missing"), true);
  assert.ok(result.score < 100);
});

test("generateMetaTags outputs canonical and og tags", () => {
  const markup = generateMetaTags({
    titleAr: "أداة سيو عربية",
    descriptionAr: "افحص متجرك وحسن العناوين والوصف",
    canonicalUrl: "https://grovlix.com/ar/tool",
    locale: "ar",
  });

  assert.match(markup, /<link rel="canonical"/);
  assert.match(markup, /og:title/);
});
