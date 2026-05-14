/**
 * `PasswordResetForm` — request-a-reset-link surface.
 *
 * Phase 12F: posts `{ email }` to the form adapter under
 * `formId: "auth.password-reset"`. UI only.
 */

"use client";

import * as React from "react";

import { Button } from "../../../primitives/Button";
import { Input } from "../../../primitives/Input";
import { Stack } from "../../../primitives/Stack";
import { Text } from "../../../primitives/Text";
import { useFormAdapter } from "../../../platform/formAdapter";

export type PasswordResetFormProps = {
  emailLabel?: string;
  submitLabel?: string;
  formId?: string;
};

export function PasswordResetForm({
  emailLabel = "Email",
  submitLabel = "Send reset link",
  formId = "auth.password-reset",
}: PasswordResetFormProps) {
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
      setMessage(result.message ?? "If an account exists, a reset link is on its way.");
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
            autoComplete="email"
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
