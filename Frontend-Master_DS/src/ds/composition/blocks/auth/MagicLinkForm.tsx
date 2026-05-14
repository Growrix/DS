/**
 * `MagicLinkForm` — passwordless email-link sign-in surface.
 *
 * Phase 12F: posts `{ email }` to the active `FormAdapter` under
 * `formId: "auth.magic-link"`. The DS does NOT send email. Projects
 * wire a real adapter that triggers their auth backend.
 */

"use client";

import * as React from "react";

import { Button } from "../../../primitives/Button";
import { Input } from "../../../primitives/Input";
import { Stack } from "../../../primitives/Stack";
import { Text } from "../../../primitives/Text";
import { useFormAdapter } from "../../../platform/formAdapter";

export type MagicLinkFormProps = {
  emailLabel?: string;
  submitLabel?: string;
  formId?: string;
};

export function MagicLinkForm({
  emailLabel = "Email",
  submitLabel = "Send magic link",
  formId = "auth.magic-link",
}: MagicLinkFormProps) {
  const adapter = useFormAdapter();
  const [email, setEmail] = React.useState("");
  const [pending, setPending] = React.useState(false);
  const [message, setMessage] = React.useState<string | null>(null);
  const [error, setError] = React.useState<string | null>(null);

  async function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setPending(true);
    setError(null);
    setMessage(null);
    const result = await adapter.submit({ formId, values: { email } });
    setPending(false);
    if (result.status === "success") {
      setMessage(result.message ?? "Check your inbox for the sign-in link.");
    } else {
      setError(result.message);
    }
  }

  return (
    <form onSubmit={onSubmit}>
      <Stack gap="compact">
        <label>
          <Text variant="caption">{emailLabel}</Text>
          <Input
            type="email"
            value={email}
            required
            onChange={(e) => setEmail(e.target.value)}
            disabled={pending}
          />
        </label>
        <Button type="submit" disabled={pending}>
          {pending ? "Sending…" : submitLabel}
        </Button>
        {message ? <Text tone="muted">{message}</Text> : null}
        {error ? <Text tone="muted">{error}</Text> : null}
      </Stack>
    </form>
  );
}
