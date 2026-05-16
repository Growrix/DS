import type { ApiError, ApiSuccess } from "@/lib/foundation-contract";

const defaultRequestId = "template-runtime";

export function success<T>(data: T, requestId = defaultRequestId): ApiSuccess<T> {
  return {
    ok: true,
    requestId,
    data,
  };
}

export function failure(
  code: string,
  message: string,
  details?: Record<string, unknown>,
  requestId = defaultRequestId,
): ApiError {
  return {
    ok: false,
    requestId,
    error: {
      code,
      message,
      details,
    },
  };
}