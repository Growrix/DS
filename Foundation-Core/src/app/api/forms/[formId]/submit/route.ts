import { NextResponse } from "next/server";
import { ZodError } from "zod";

import { failure, success } from "@/server/http/envelope";
import { createRequestId } from "@/server/http/request-id";
import { parseSubmissionPayload, submitForm } from "@/server/modules/forms/form.service";

export async function POST(
  request: Request,
  context: { params: Promise<{ formId: string }> },
) {
  const requestId = createRequestId();
  const { formId } = await context.params;

  try {
    const payload = parseSubmissionPayload(await request.json());
    const result = submitForm(formId, payload);

    if (!result.accepted) {
      return NextResponse.json(
        failure(requestId, result.code, result.message),
        { status: result.code === "FORM_NOT_FOUND" ? 404 : 422 },
      );
    }

    return NextResponse.json(success(requestId, result), { status: 202 });
  } catch (error) {
    if (error instanceof ZodError) {
      return NextResponse.json(
        failure(requestId, "VALIDATION_ERROR", "Form payload is invalid.", {
          issues: error.issues,
        }),
        { status: 400 },
      );
    }

    return NextResponse.json(
      failure(requestId, "UNEXPECTED_ERROR", "An unexpected error occurred."),
      { status: 500 },
    );
  }
}