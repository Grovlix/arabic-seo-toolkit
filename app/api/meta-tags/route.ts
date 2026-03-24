import { NextResponse } from "next/server";

import { buildMetaTagResult } from "@/src/generators";

export async function POST(request: Request) {
  const body = await request.json();
  return NextResponse.json(buildMetaTagResult(body));
}
