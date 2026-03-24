import { detectPlatform } from "./platform-detector";
import { auditSallaStore } from "./salla-auditor";
import { auditZidStore } from "./zid-auditor";
import type { PlatformAuditResult } from "../types/audit.types";

export async function auditPlatformStore(url: string): Promise<PlatformAuditResult> {
  const detected = await detectPlatform(url);

  if (detected.platform === "salla") {
    return auditSallaStore(url, detected.html);
  }

  if (detected.platform === "zid") {
    return auditZidStore(url, detected.html);
  }

  return {
    platform: "generic",
    confidence: detected.confidence,
    findings: ["No strong Salla or Zid platform markers were detected."],
    recommendations: [
      "Run the general HTML audit and verify schema, titles, meta descriptions, and RTL structure."
    ],
    technical: {
      hasRobotsTxt: await fetch(new URL("/robots.txt", url)).then((res) => res.ok).catch(() => false),
      hasSitemapXml: await fetch(new URL("/sitemap.xml", url)).then((res) => res.ok).catch(() => false),
      productSchemaDetected: /"@type"\s*:\s*"Product"/.test(detected.html)
    }
  };
}
