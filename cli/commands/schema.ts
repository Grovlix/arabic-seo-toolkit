import fs from "node:fs/promises";

import { Command } from "commander";

import {
  generateFAQSchema,
  generateOrganizationSchema,
  generateProductSchema
} from "../../src/generators/index.js";

export function registerSchemaCommand(program: Command) {
  program
    .command("schema")
    .requiredOption("--type <type>", "product | organization | faq")
    .requiredOption("--input <path>", "Path to JSON payload")
    .action(async (options: { type: string; input: string }) => {
      const payload = JSON.parse(await fs.readFile(options.input, "utf8"));
      const result =
        options.type === "organization"
          ? generateOrganizationSchema(payload)
          : options.type === "faq"
            ? generateFAQSchema(payload)
            : generateProductSchema(payload);

      console.log(result);
    });
}
