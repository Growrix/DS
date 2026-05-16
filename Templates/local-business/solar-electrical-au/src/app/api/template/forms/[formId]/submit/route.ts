import { NextResponse } from "next/server";

import type { ProcessSubmissionResult } from "@/lib/foundation-contract";
import {
  fetchFoundationEnvelope,
  getFallbackSubmissionResult,
  getFoundationBaseUrl,
} from "@/lib/foundation-runtime";
import { failure, success } from "@/lib/template-envelope";

type TemplateFormPayload = {
  name?: string;
  email?: string;
  phone?: string;
  message?: string;
  website?: string;
};

export async function POST(
  request: Request,
  context: { params: Promise<{ formId: string }> },
) {
  const { formId } = await context.params;
  const payload = (await request.json()) as TemplateFormPayload;

  if (!payload.name || !payload.email || !payload.message) {
    return NextResponse.json(
      failure("VALIDATION_ERROR", "Form payload is invalid."),
      { status: 400 },
    );
  }

  if (getFoundationBaseUrl()) {
    const response = await fetchFoundationEnvelope<ProcessSubmissionResult>(
      `/api/forms/${formId}/submit`,
      {
        method: "POST",
        body: JSON.stringify(payload),
      },
    );

    if (response?.ok) {
      return NextResponse.json(response, { status: 202 });
    }

    if (response && !response.ok) {
      const status = response.error.code === "RATE_LIMITED" ? 429 : 400;
      return NextResponse.json(response, { status });
    }
  }

  return NextResponse.json(
    success(
      getFallbackSubmissionResult(formId, {
        name: payload.name,
        email: payload.email,
        message: payload.message,
        phone: payload.phone,
      }),
    ),
    { status: 202 },
  );
}