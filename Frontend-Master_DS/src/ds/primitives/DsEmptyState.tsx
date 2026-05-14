/**
 * `DsEmptyState` — primitive surface for "no content yet" scenarios.
 *
 * Phase 12E — a tokenized, accessible placeholder card with optional
 * action. Variants and pages render this when a collection is empty
 * (no posts, no orders, no team members yet, etc.).
 */

import * as React from "react";

import { Card } from "../components/Card";
import { Stack } from "./Stack";
import { Text } from "./Text";
import { Button } from "./Button";

export type DsEmptyStateProps = {
  title: string;
  description?: string;
  action?: { label: string; href: string };
  /** Optional icon node rendered above the title. */
  icon?: React.ReactNode;
};

export function DsEmptyState({ title, description, action, icon }: DsEmptyStateProps) {
  return (
    <Card>
      <Stack gap="compact">
        {icon ? <div className="ds-empty-state-icon" aria-hidden="true">{icon}</div> : null}
        <Text variant="heading-3">{title}</Text>
        {description ? <Text tone="muted">{description}</Text> : null}
        {action ? (
          <div className="ui-row">
            <Button as="a" href={action.href}>
              {action.label}
            </Button>
          </div>
        ) : null}
      </Stack>
    </Card>
  );
}
