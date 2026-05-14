/**
 * Generic-POST form adapter — submits form values as JSON to a
 * configurable endpoint. Suitable for projects that wire forms to
 * a serverless function or third-party form-handling service.
 */

import type { FormAdapter, FormSubmitResult } from "../../formAdapter";

export type GenericPostAdapterOptions = {
  /** Submission endpoint (absolute or same-origin). */
  endpoint: string;
  /** Optional extra headers (auth tokens, etc.). */
  headers?: Record<string, string>;
  /** Optional success message override. */
  successMessage?: string;
};

export function createGenericPostAdapter(options: GenericPostAdapterOptions): FormAdapter {
  return {
    id: "generic-post",
    async submit({ formId, values }): Promise<FormSubmitResult> {
      try {
        const res = await fetch(options.endpoint, {
          method: "POST",
          headers: {
            "content-type": "application/json",
            ...(options.headers ?? {}),
          },
          body: JSON.stringify({ formId, values }),
        });
        if (!res.ok) {
          return { status: "error", message: `Submission failed (${res.status})` };
        }
        return {
          status: "success",
          message: options.successMessage ?? "Thanks — we received your submission.",
        };
      } catch (err) {
        const msg = err instanceof Error ? err.message : "Network error";
        return { status: "error", message: msg };
      }
    },
  };
}
