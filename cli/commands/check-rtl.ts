import { Command } from "commander";

import { auditUrl } from "../../src/audit-engine/index.js";
import { printOutput } from "../utils/output-formatter";


export function registerRtlCommand(program: Command) {
  program
    .command("check-rtl")
    .argument("<url>", "Page URL")
    .action(async (url: string) => {
      const result = await auditUrl(url);
      printOutput(result.issues.filter((issue) => issue.id === "rtl-checker"));
    });
}
