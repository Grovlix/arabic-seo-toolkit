import { Command } from "commander";

import { generateMetaTags } from "../../src/generators/index.js";
import { printOutput } from "../utils/output-formatter";

export function registerMetaCommand(program: Command) {
  program
    .command("meta")
    .requiredOption("--title <title>", "Arabic title")
    .requiredOption("--desc <description>", "Arabic description")
    .option("--url <url>", "Canonical URL", "https://example.com/ar/page")
    .action((options: { title: string; desc: string; url: string }) => {
      const result = generateMetaTags({
        titleAr: options.title,
        descriptionAr: options.desc,
        canonicalUrl: options.url
      });
      printOutput(result);
    });
}
