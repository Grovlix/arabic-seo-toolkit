import { NextResponse } from "next/server";

import {
  generateFAQSchema,
  generateOrganizationSchema,
  generateProductSchema
} from "@/src/generators";

export async function POST(request: Request) {
  const body = (await request.json()) as { type: string; input: Record<string, unknown> };

  const result =
    body.type === "organization"
      ? generateOrganizationSchema(body.input as never)
      : body.type === "faq"
        ? generateFAQSchema(body.input as never)
        : generateProductSchema(body.input as never);

  return NextResponse.json({ result });
}

