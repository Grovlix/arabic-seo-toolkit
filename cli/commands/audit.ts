import { Command } from "commander";

import { auditUrl } from "../../src/audit-engine/index.js";
import { printOutput } from "../utils/output-formatter";

export function registerAuditCommand(program: Command) {
  program
    .command("audit")
    .argument("<url>", "Page URL")
    .option("--output <format>", "pretty or json", "pretty")
    .action(async (url: string, options: { output: "pretty" | "json" }) => {
      const result = await auditUrl(url);
      printOutput(result, options.output);
    });
}
