#!/usr/bin/env node
import { Command } from "commander";

import { registerAuditCommand } from "../commands/audit";
import { registerMetaCommand } from "../commands/meta";
import { registerRtlCommand } from "../commands/check-rtl";
import { registerSchemaCommand } from "../commands/schema";

const program = new Command();

program
  .name("arabic-seo")
  .description("Arabic SEO Toolkit CLI powered by Grovlix")
  .version("0.1.0");

registerAuditCommand(program);
registerMetaCommand(program);
registerSchemaCommand(program);
registerRtlCommand(program);

void program.parseAsync(process.argv);

