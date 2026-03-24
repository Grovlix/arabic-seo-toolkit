import { NextResponse } from "next/server";
import { z } from "zod";

import { auditUrl } from "@/src/audit-engine";

const schema = z.object({
  url: z.string().url()
});

export async function POST(request: Request) {
  const body = schema.parse(await request.json());
  const result = await auditUrl(body.url);
  return NextResponse.json({
    url: result.url,
    score: result.score,
    rtlIssues: result.issues.filter((issue) => issue.id === "rtl-checker")
  });
}

