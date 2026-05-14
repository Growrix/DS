/**
 * `DsErrorState` — primitive surface for error displays.
 *
 * Phase 12E — used by Next.js error boundaries (`app/error.tsx`) and
 * by variants that surface recoverable failures. Includes optional
 * retry action and developer-facing message that is shown only in
 * non-production environments.
 */

"use client";

import * as React from "react";

import { Card } from "../components/Card";
import { Stack } from "./Stack";
import { Text } from "./Text";
import { Button } from "./Button";

export type DsErrorStateProps = {
  title?: string;
  description?: string;
  /** Developer-facing error message — shown only in development. */
  errorMessage?: string;
  /** Retry handler. When supplied, a retry button is rendered. */
  onRetry?: () => void;
  retryLabel?: string;
};

export function DsErrorState({
  title,
  description,
  errorMessage,
  onRetry,
  retryLabel,
}: DsErrorStateProps) {
  const isDev = process.env.NODE_ENV !== "production";
  return (
    <Card>
      <Stack gap="compact">
        <Text variant="heading-3">{title ?? "Something went wrong"}</Text>
        <Text tone="muted">
          {description ?? "An unexpected error occurred. You can retry or return home."}
        </Text>
        {isDev && errorMessage ? (
          <Text tone="muted" variant="body-small">
            <code>{errorMessage}</code>
          </Text>
        ) : null}
        {onRetry ? (
          <div className="ui-row">
            <Button type="button" onClick={onRetry}>
              {retryLabel ?? "Try again"}
            </Button>
          </div>
        ) : null}
      </Stack>
    </Card>
  );
}
