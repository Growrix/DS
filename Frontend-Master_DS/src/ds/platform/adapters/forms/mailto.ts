/**
 * Mailto form adapter — opens the user's mail client with the form
 * values prefilled as the body. No backend required. Suitable for
 * trade / local-business sites that route inquiries to a shared inbox.
 */

import type { FormAdapter } from "../../formAdapter";

export type MailtoAdapterOptions = {
  /** Destination email address (e.g., "hello@example.com"). */
  to: string;
  /** Optional subject template. `{{formId}}` is replaced with the form id. */
  subjectTemplate?: string;
};

export function createMailtoAdapter(options: MailtoAdapterOptions): FormAdapter {
  return {
    id: "mailto",
    async submit({ formId, values }) {
      if (typeof window === "undefined") {
        return { status: "error", message: "mailto adapter requires a browser context" };
      }
      const subject = (options.subjectTemplate ?? "Inquiry from {{formId}}").replace("{{formId}}", formId);
      const body = Object.entries(values)
        .map(([k, v]) => `${k}: ${v}`)
        .join("\n");
      const href = `mailto:${encodeURIComponent(options.to)}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
      window.location.href = href;
      return { status: "success", message: "Opening your email client…" };
    },
  };
}
