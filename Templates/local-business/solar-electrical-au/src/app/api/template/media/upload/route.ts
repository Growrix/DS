import { NextResponse } from "next/server";

import type { UploadIntent } from "@/lib/foundation-contract";
import {
  fetchFoundationEnvelope,
  getFallbackUploadIntent,
  getFoundationBaseUrl,
} from "@/lib/foundation-runtime";
import { failure, success } from "@/lib/template-envelope";

type UploadRequest = {
  filename?: string;
  contentType?: string;
};

export async function POST(request: Request) {
  const payload = (await request.json()) as UploadRequest;

  if (!payload.filename || !payload.contentType) {
    return NextResponse.json(
      failure("VALIDATION_ERROR", "Upload request is invalid."),
      { status: 400 },
    );
  }

  if (getFoundationBaseUrl()) {
    const response = await fetchFoundationEnvelope<UploadIntent>("/api/media/upload", {
      method: "POST",
      body: JSON.stringify(payload),
    });

    if (response) {
      return NextResponse.json(response, {
        status: response.ok && response.data.enabled ? 200 : 503,
      });
    }
  }

  return NextResponse.json(
    success(getFallbackUploadIntent(payload.filename, payload.contentType)),
    { status: 503 },
  );
}