import { NextResponse } from "next/server";

import { success } from "@/server/http/envelope";
import { createRequestId } from "@/server/http/request-id";
import { getSiteConfig } from "@/server/modules/content/content.service";

export async function GET() {
  const requestId = createRequestId();
  return NextResponse.json(success(requestId, getSiteConfig()));
}