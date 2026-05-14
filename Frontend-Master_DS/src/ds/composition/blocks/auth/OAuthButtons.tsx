/**
 * `OAuthButtons` — composition block for third-party sign-in.
 *
 * Phase 12F surface contract. Renders a vertical stack of provider
 * buttons. Each button invokes the supplied `onSelect(providerId)`
 * callback; the DS itself never talks to an OAuth provider.
 */

"use client";

import * as React from "react";

import { Button } from "../../../primitives/Button";
import { Stack } from "../../../primitives/Stack";

export type OAuthProvider = {
  id: string;
  label: string;
  icon?: React.ReactNode;
};

export type OAuthButtonsProps = {
  providers: OAuthProvider[];
  onSelect: (providerId: string) => void;
  disabled?: boolean;
};

export function OAuthButtons({ providers, onSelect, disabled }: OAuthButtonsProps) {
  return (
    <Stack gap="compact">
      {providers.map((p) => (
        <Button
          key={p.id}
          variant="secondary"
          disabled={disabled}
          onClick={() => onSelect(p.id)}
        >
          {p.icon ? <span aria-hidden="true">{p.icon}</span> : null}
          {p.label}
        </Button>
      ))}
    </Stack>
  );
}
