import { NextResponse } from "next/server";

import { getFoundationSession } from "@/lib/foundation-runtime";
import { success } from "@/lib/template-envelope";

export async function GET() {
  return NextResponse.json(success(await getFoundationSession()));
}