import * as React from "react";

import { Badge } from "@/ds/components/Badge";
import { Card } from "@/ds/components/Card";
import { SectionPattern } from "@/ds/composition/patterns/SectionPattern";
import type { SectionVariantMeta } from "@/ds/composition/sections/_schema";
import type { PublicSectionModel } from "@/ds/platform/publicSitePreset";
import { Button } from "@/ds/primitives/Button";
import { Grid } from "@/ds/primitives/Grid";
import { Stack } from "@/ds/primitives/Stack";
import { Text } from "@/ds/primitives/Text";

type PricingModel = Extract<PublicSectionModel, { kind: "pricing" }>;
type PricingTier = PricingModel["tiers"][number];

export const PRICING_LOCAL_BUSINESS_TRUST_CONVERSION_GRID_META: SectionVariantMeta = {
  id: "pricing-local-business-trust-conversion-grid",
  kind: "pricing",
  archetype: "local-business-trust",
  label: "Pricing - Local Business Trust Conversion Grid",
  description:
    "Trust-led service-plan layout with an assurance panel, one featured tier, and transparent monthly-plus-annual pricing.",
  supportsThemes: ["dark", "light"],
  motionPresets: ["rise-soft", "fade-in"],
  effects: {},
  density: "comfortable",
  complexity: "rich",
};

function renderTier(tier: PricingTier) {
  const cardClassName = tier.highlight
    ? "ui-stack ui-stack--loose ui-theme-scope shadow-lg"
    : "ui-stack ui-stack--loose shadow-sm";

  return (
    <Card
      key={tier.id}
      variant={tier.highlight ? "selectable" : "interactive"}
      className={cardClassName}
      data-theme={tier.highlight ? "dark" : undefined}
      data-visual={tier.highlight ? "sleek" : undefined}
    >
      <Stack gap="compact">
        {tier.badge ? (
          <Badge tone={tier.highlight ? "warning" : "accent"} variant="tag" size="sm">
            {tier.badge}
          </Badge>
        ) : null}
        <div className="ui-stack ui-stack--tight">
          <h3 className="text-heading-3">{tier.name}</h3>
          {tier.description ? <Text tone="muted">{tier.description}</Text> : null}
        </div>

        <div className="ui-stack ui-stack--tight">
          <p className="text-display-3 text-balance">{tier.price.monthly}</p>
          {tier.price.yearly ? (
            <Text variant="body-small" tone="muted">
              or {tier.price.yearly} billed annually
            </Text>
          ) : null}
          {tier.price.suffix ? (
            <Text variant="body-small" tone="muted">
              {tier.price.suffix}
            </Text>
          ) : null}
        </div>

        <ul className="ui-stack ui-stack--tight">
          {tier.features.map((feature) => (
            <li key={feature} className="text-body-small">
              {feature}
            </li>
          ))}
        </ul>

        <Button as="a" href={tier.cta.href} size="lg" variant={tier.highlight ? "primary" : "secondary"}>
          {tier.cta.label}
        </Button>
      </Stack>
    </Card>
  );
}

export function PricingLocalBusinessTrustConversionGrid({
  header,
  tiers,
  footnote,
}: PricingModel) {
  const sectionHeader = header
    ? {
        kicker: header.kicker,
        title: header.title,
        lede: header.lede,
      }
    : undefined;

  const highlightedTier = tiers.find((tier) => tier.highlight) ?? tiers[0];
  const assuranceFeatures = highlightedTier?.features.slice(0, 3) ?? [];

  return (
    <div
      className="sv-section-root"
      data-variant={PRICING_LOCAL_BUSINESS_TRUST_CONVERSION_GRID_META.id}
      data-archetype={PRICING_LOCAL_BUSINESS_TRUST_CONVERSION_GRID_META.archetype}
    >
      <SectionPattern container="wide" tone="surface" header={sectionHeader}>
        <Grid columns={4} gap="loose" className="motion-fade-in">
          <Card className="ui-stack ui-stack--loose shadow-sm bg-surface-elevated">
            <Badge tone="warning" variant="tag" size="sm">
              What every plan includes
            </Badge>
            <h3 className="text-heading-3 text-balance">
              Documented scopes, photo closeout notes, and a direct line back to dispatch.
            </h3>
            <Text tone="muted">
              The pack is built for service businesses that need trust early: real arrival windows,
              transparent approvals, and a cleaner follow-up path once work is complete.
            </Text>
            <ul className="ui-stack ui-stack--tight">
              {assuranceFeatures.map((feature) => (
                <li key={feature} className="text-body-small">
                  {feature}
                </li>
              ))}
            </ul>
          </Card>

          {tiers.map(renderTier)}
        </Grid>

        {footnote ? (
          <Text variant="body-small" tone="muted">
            {footnote}
          </Text>
        ) : null}
      </SectionPattern>
    </div>
  );
}