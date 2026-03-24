import fs from "node:fs/promises";
import { createWriteStream } from "node:fs";
import path from "node:path";
import PDFDocument from "pdfkit";

import type { AuditResult } from "../types/audit.types";

export async function exportAuditJson(result: AuditResult, outputPath: string) {
  await fs.mkdir(path.dirname(outputPath), { recursive: true });
  await fs.writeFile(outputPath, JSON.stringify(result, null, 2), "utf8");
}

export async function exportAuditPdf(result: AuditResult, outputPath: string) {
  await fs.mkdir(path.dirname(outputPath), { recursive: true });

  await new Promise<void>((resolve, reject) => {
    const doc = new PDFDocument({ margin: 42 });
    const stream = doc.pipe(createWriteStream(outputPath));

    stream.on("finish", () => resolve());
    stream.on("error", reject);

    doc.fontSize(18).text("Arabic SEO Toolkit Audit Report");
    doc.moveDown(0.5);
    doc.fontSize(11).text(`Score: ${result.score}/100`);
    doc.text(`Generated: ${result.generatedAt}`);
    if (result.url) {
      doc.text(`URL: ${result.url}`);
    }

    doc.moveDown();
    result.issues.forEach((issue, index) => {
      doc
        .fontSize(13)
        .text(`${index + 1}. ${issue.title} [${issue.severity.toUpperCase()}]`);
      doc.fontSize(10).text(issue.description);
      doc.text(`Fix: ${issue.recommendation}`);
      doc.moveDown(0.5);
    });

    doc.end();
  });
}
