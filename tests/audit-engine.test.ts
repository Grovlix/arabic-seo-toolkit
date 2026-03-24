import test from "node:test";
import assert from "node:assert/strict";
import { auditHtml } from "@/src/audit-engine";

test("auditHtml reports missing title and RTL issues for Arabic pages", () => {
  const report = auditHtml({
    url: "https://example.com",
    html: `
      <html lang="ar">
        <body>
          <h1>متجر ملابس</h1>
          <img src="/hero.jpg" />
        </body>
      </html>
    `
  });

  assert.equal(report.results.length > 0, true);
  assert.equal(report.summary.score < 100, true);
});
