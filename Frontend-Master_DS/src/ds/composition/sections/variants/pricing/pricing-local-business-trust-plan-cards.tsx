"use client";

import * as React from "react";

import { Card } from "@/ds/components/Card";
import { SectionPattern } from "@/ds/composition/patterns/SectionPattern";
import type { SectionVariantMeta } from "@/ds/composition/sections/_schema";
import type { PublicSectionModel } from "@/ds/platform/publicSitePreset";
import { Button } from "@/ds/primitives/Button";
import { Grid } from "@/ds/primitives/Grid";
import { Stack } from "@/ds/primitives/Stack";
import { Text } from "@/ds/primitives/Text";

type PricingModel = Extract<PublicSectionModel, { kind: "pricing" }>;
type BillingCadence = "monthly" | "yearly";

export const PRICING_LOCAL_BUSINESS_TRUST_PLAN_CARDS_META: SectionVariantMeta = {
  id: "pricing-local-business-trust-plan-cards",
  kind: "pricing",
  archetype: "local-business-trust",
  label: "Pricing - Local Business Trust Plan Cards",
  description:
    "Three-plan pricing block for service businesses with a billing cadence toggle, highlight tier, and trust-led inclusions.",
  supportsThemes: ["dark", "light"],
  motionPresets: ["rise-soft", "fade-in"],
  effects: {},
  density: "comfortable",
  complexity: "rich",
};

function resolvePrice(
  tier: PricingModel["tiers"][number],
  cadence: BillingCadence,
) {
  if (cadence === "yearly" && tier.price.yearly) {
    return tier.price.yearly;
  }

  return tier.price.monthly;
}

export function PricingLocalBusinessTrustPlanCards({
  header,
  tiers,
  billingToggle,
  footnote,
}: PricingModel) {
  const defaultCadence = billingToggle?.defaultCadence ?? "monthly";
  const [cadence, setCadence] = React.useState<BillingCadence>(defaultCadence);
  const sectionHeader = header
    ? {
        kicker: header.kicker,
        title: header.title,
        lede: header.lede,
      }
    : undefined;

  const cadenceToggle = billingToggle ? (
    <div className="ui-row">
      <Button
        type="button"
        size="sm"
        variant={cadence === "monthly" ? "primary" : "secondary"}
        aria-pressed={cadence === "monthly"}
        onClick={() => setCadence("monthly")}
      >
        {billingToggle.monthlyLabel}
      </Button>
      <Button
        type="button"
        size="sm"
        variant={cadence === "yearly" ? "primary" : "secondary"}
        aria-pressed={cadence === "yearly"}
        onClick={() => setCadence("yearly")}
      >
        {billingToggle.yearlyLabel}
      </Button>
    </div>
  ) : undefined;

  return (
    <div
      className="sv-section-root sv-pricing-local-business-trust-plan-cards"
      data-variant={PRICING_LOCAL_BUSINESS_TRUST_PLAN_CARDS_META.id}
      data-archetype={PRICING_LOCAL_BUSINESS_TRUST_PLAN_CARDS_META.archetype}
    >
      <SectionPattern container="wide" header={sectionHeader} actions={cadenceToggle}>
        <Grid columns={3} gap="loose" className="motion-rise-soft">
          {tiers.map((tier) => (
            <Card key={tier.id} variant={tier.highlight ? "selectable" : "interactive"}>
              <Stack gap="compact">
                {tier.badge ? (
                  <span className="text-label ui-text-accent">
                    {tier.badge}
                  </span>
                ) : null}
                <h3 className="text-heading-4">{tier.name}</h3>
                <p className={tier.highlight ? "text-display-3 ui-text-accent" : "text-display-3"}>
                  {resolvePrice(tier, cadence)}
                </p>
                {tier.price.suffix ? (
                  <Text variant="body-small" tone="muted">
                    {tier.price.suffix}
                  </Text>
                ) : null}
                {tier.description ? (
                  <Text variant="body-small" tone="muted">
                    {tier.description}
                  </Text>
                ) : null}
                <ul className="ui-stack ui-stack--tight">
                  {tier.features.map((feature) => (
                    <li key={feature}>
                      <span className="text-body-small">{feature}</span>
                    </li>
                  ))}
                </ul>
                <Button as="a" href={tier.cta.href} variant={tier.highlight ? "primary" : "secondary"}>
                  {tier.cta.label}
                </Button>
              </Stack>
            </Card>
          ))}
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