/**
 * In-memory form adapter — logs submissions to the browser console and
 * resolves successfully. Useful for previews, screenshots, and demos.
 *
 * Phase 12C — preserves today's mock behaviour when no project-specific
 * adapter is supplied.
 */

import type { FormAdapter } from "../../formAdapter";

export function createInMemoryLogAdapter(): FormAdapter {
  return {
    id: "in-memory-log",
    async submit({ formId, values }) {
      if (typeof window !== "undefined") {
        console.info("[ds.form.in-memory-log]", formId, values);
      }
      return { status: "success", message: "Thanks — we'll be in touch." };
    },
  };
}
