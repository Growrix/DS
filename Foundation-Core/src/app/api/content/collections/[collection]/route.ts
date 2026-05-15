import { NextResponse } from "next/server";

import { success } from "@/server/http/envelope";
import { createRequestId } from "@/server/http/request-id";
import { getCollection } from "@/server/modules/content/content.service";

export async function GET(
  _request: Request,
  context: { params: Promise<{ collection: string }> },
) {
  const requestId = createRequestId();
  const { collection } = await context.params;
  return NextResponse.json(success(requestId, getCollection(collection)));
}