/**
 * Form adapter contract.
 *
 * Form variants (newsletter signup, contact form, etc.) historically
 * mocked submissions inline. Phase 12C introduces an injected
 * `FormAdapter` so projects can wire submissions to a backend, mailto:
 * handler, or third-party endpoint without changing variant components.
 *
 * Variants opt in by reading the adapter via the `useFormAdapter` hook
 * (client side) and calling `submit(formId, payload)` from their submit
 * handler. The default adapter is `createInMemoryLogAdapter`, which
 * logs payloads to the console and resolves successfully — preserving
 * today's mock UX.
 */

"use client";

import * as React from "react";

export type FormSubmitResult =
  | { status: "success"; message?: string }
  | { status: "error"; message: string };

export type FormSubmitInput = {
  /** Stable identifier for the form variant (e.g., "newsletter", "contact"). */
  formId: string;
  /** Payload — adapter-shaped key/value map. Adapters MAY validate. */
  values: Record<string, string>;
};

export interface FormAdapter {
  readonly id: string;
  submit(input: FormSubmitInput): Promise<FormSubmitResult>;
}

const FormAdapterContext = React.createContext<FormAdapter | null>(null);

export type FormAdapterProviderProps = {
  adapter: FormAdapter;
  children: React.ReactNode;
};

export function FormAdapterProvider({ adapter, children }: FormAdapterProviderProps) {
  return <FormAdapterContext.Provider value={adapter}>{children}</FormAdapterContext.Provider>;
}

/**
 * Hook for form variants. Returns the active adapter, or the default
 * in-memory log adapter when no provider is mounted (preserves today's
 * mock behaviour).
 */
export function useFormAdapter(): FormAdapter {
  const ctx = React.useContext(FormAdapterContext);
  return ctx ?? DEFAULT_FORM_ADAPTER;
}

const DEFAULT_FORM_ADAPTER: FormAdapter = {
  id: "in-memory-log-default",
  async submit({ formId, values }) {
    if (typeof window !== "undefined") {
      console.info("[ds.form.in-memory-log]", formId, values);
    }
    return { status: "success", message: "Thanks — we'll be in touch." };
  },
};
