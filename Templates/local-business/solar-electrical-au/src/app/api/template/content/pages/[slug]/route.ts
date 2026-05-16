import { NextResponse } from "next/server";

import { getFoundationPage } from "@/lib/foundation-runtime";
import { success } from "@/lib/template-envelope";

export async function GET(
  _request: Request,
  context: { params: Promise<{ slug: string }> },
) {
  const { slug } = await context.params;

  return NextResponse.json(success(await getFoundationPage(slug)));
}