import { NextResponse } from "next/server";

import { success } from "@/server/http/envelope";
import { createRequestId } from "@/server/http/request-id";
import { getSessionSnapshot } from "@/server/modules/auth/session.service";

export async function GET() {
  const requestId = createRequestId();
  return NextResponse.json(success(requestId, getSessionSnapshot()));
}