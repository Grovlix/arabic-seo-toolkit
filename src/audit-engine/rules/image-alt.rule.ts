import * as cheerio from "cheerio";

import type { AuditIssue, AuditRule } from "../../types/audit.types";

export const imageAltRule: AuditRule = {
  id: "image-alt",
  name: "Image Alt",
  run(context) {
    const $ = cheerio.load(context.html);
    const images = $("img").toArray();
    if (images.length === 0) {
      return [];
    }

    const missingAlt = images.filter((image) => {
      const alt = $(image).attr("alt");
      return !alt || !alt.trim();
    }).length;

    if (missingAlt === 0) {
      return [];
    }

    return [
      {
        id: "image-alt",
        title: "Some images are missing alt text",
        description: `${missingAlt} of ${images.length} images are missing meaningful alt attributes.`,
        severity: "warning",
        scoreImpact: Math.min(12, missingAlt * 2),
        recommendation: "Add descriptive Arabic alt text to product and content imagery."
      }
    ];
  }
};
