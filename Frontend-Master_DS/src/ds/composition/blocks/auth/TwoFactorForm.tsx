/**
 * `TwoFactorForm` — six-digit OTP entry surface.
 *
 * Phase 12F: posts `{ code }` to the form adapter under
 * `formId: "auth.two-factor"`. UI only — no verification.
 */

"use client";

import * as React from "react";

import { Button } from "../../../primitives/Button";
import { Input } from "../../../primitives/Input";
import { Stack } from "../../../primitives/Stack";
import { Text } from "../../../primitives/Text";
import { useFormAdapter } from "../../../platform/formAdapter";

export type TwoFactorFormProps = {
  codeLabel?: string;
  submitLabel?: string;
  formId?: string;
  length?: number;
};

export function TwoFactorForm({
  codeLabel = "Verification code",
  submitLabel = "Verify",
  formId = "auth.two-factor",
  length = 6,
}: TwoFactorFormProps) {
  const adapter = useFormAdapter();
  const [code, setCode] = React.useState("");
  const [pending, setPending] = React.useState(false);
  const [error, setError] = React.useState<string | null>(null);

  async function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setPending(true);
    setError(null);
    const result = await adapter.submit({ formId, values: { code } });
    setPending(false);
    if (result.status === "error") setError(result.message);
  }

  return (
    <form onSubmit={onSubmit}>
      <Stack gap="compact">
        <label>
          <Text variant="caption">{codeLabel}</Text>
          <Input
            type="text"
            inputMode="numeric"
            pattern={`[0-9]{${length}}`}
            maxLength={length}
            value={code}
            required
            onChange={(e) => setCode(e.target.value.replace(/\D/g, ""))}
            disabled={pending}
            autoComplete="one-time-code"
          />
        </label>
        <Button type="submit" disabled={pending || code.length !== length}>
          {pending ? "Verifying…" : submitLabel}
        </Button>
        {error ? <Text tone="muted">{error}</Text> : null}
      </Stack>
    </form>
  );
}
