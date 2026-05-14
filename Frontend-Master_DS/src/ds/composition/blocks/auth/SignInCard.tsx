/**
 * `SignInCard` — email + password sign-in surface.
 *
 * Phase 12F: posts `{ email, password }` to the form adapter under
 * `formId: "auth.sign-in"`. UI only — no credential validation.
 */

"use client";

import * as React from "react";

import { Button } from "../../../primitives/Button";
import { Input } from "../../../primitives/Input";
import { Stack } from "../../../primitives/Stack";
import { Text } from "../../../primitives/Text";
import { useFormAdapter } from "../../../platform/formAdapter";

export type SignInCardProps = {
  emailLabel?: string;
  passwordLabel?: string;
  submitLabel?: string;
  formId?: string;
  forgotHref?: string;
  forgotLabel?: string;
};

export function SignInCard({
  emailLabel = "Email",
  passwordLabel = "Password",
  submitLabel = "Sign in",
  formId = "auth.sign-in",
  forgotHref,
  forgotLabel = "Forgot password?",
}: SignInCardProps) {
  const adapter = useFormAdapter();
  const [email, setEmail] = React.useState("");
  const [password, setPassword] = React.useState("");
  const [pending, setPending] = React.useState(false);
  const [error, setError] = React.useState<string | null>(null);

  async function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setPending(true);
    setError(null);
    const result = await adapter.submit({ formId, values: { email, password } });
    setPending(false);
    if (result.status === "error") setError(result.message);
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
        <label>
          <Text variant="caption">{passwordLabel}</Text>
          <Input
            type="password"
            value={password}
            required
            onChange={(e) => setPassword(e.target.value)}
            disabled={pending}
            autoComplete="current-password"
          />
        </label>
        <Button type="submit" disabled={pending}>
          {pending ? "Signing in…" : submitLabel}
        </Button>
        {forgotHref ? (
          <Text tone="muted">
            <a href={forgotHref}>{forgotLabel}</a>
          </Text>
        ) : null}
        {error ? <Text tone="muted">{error}</Text> : null}
      </Stack>
    </form>
  );
}
