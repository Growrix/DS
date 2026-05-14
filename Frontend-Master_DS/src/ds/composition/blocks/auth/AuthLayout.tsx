/**
 * `AuthLayout` — composition shell for auth screens.
 *
 * Phase 12F surface contract: a centered, narrow card layout shared
 * across SignIn / SignUp / MagicLink / TwoFactor / PasswordReset
 * blocks. Project-agnostic. Does NOT integrate with any auth
 * provider — projects supply submit handlers via the form adapter
 * contract (`useFormAdapter`).
 */

import * as React from "react";

import { Container } from "../../../primitives/Container";
import { Stack } from "../../../primitives/Stack";
import { Text } from "../../../primitives/Text";
import { Card } from "../../../components/Card";

export type AuthLayoutProps = {
  title: string;
  description?: string;
  footer?: React.ReactNode;
  children: React.ReactNode;
};

export function AuthLayout({ title, description, footer, children }: AuthLayoutProps) {
  return (
    <Container size="narrow">
      <Stack gap="loose">
        <Stack gap="compact">
          <Text variant="heading-2">{title}</Text>
          {description ? <Text tone="muted">{description}</Text> : null}
        </Stack>
        <Card>{children}</Card>
        {footer ? <div>{footer}</div> : null}
      </Stack>
    </Container>
  );
}
