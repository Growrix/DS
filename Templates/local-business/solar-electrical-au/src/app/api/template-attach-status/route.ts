import { NextResponse } from "next/server";

import { getTemplateAttachStatus } from "@/lib/foundation-attach";

export async function GET() {
  const status = await getTemplateAttachStatus();

  return NextResponse.json(status);
}
