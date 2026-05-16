import { NextResponse } from "next/server";

import { getFoundationCollection } from "@/lib/foundation-runtime";
import { success } from "@/lib/template-envelope";

export async function GET(
  _request: Request,
  context: { params: Promise<{ collection: string }> },
) {
  const { collection } = await context.params;

  return NextResponse.json(success(await getFoundationCollection(collection)));
}