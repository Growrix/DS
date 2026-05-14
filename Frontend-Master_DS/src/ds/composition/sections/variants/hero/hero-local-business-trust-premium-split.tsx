import * as React from "react";

import { Card } from "@/ds/components/Card";
import { Section } from "@/ds/components/Section";
import type { SectionVariantMeta } from "@/ds/composition/sections/_schema";
import type { PublicSectionModel } from "@/ds/platform/publicSitePreset";
import { Button } from "@/ds/primitives/Button";
import { Grid } from "@/ds/primitives/Grid";
import { Stack } from "@/ds/primitives/Stack";
import { Text } from "@/ds/primitives/Text";

type HeroModel = Extract<PublicSectionModel, { kind: "hero" }>;

export const HERO_LOCAL_BUSINESS_TRUST_PREMIUM_SPLIT_META: SectionVariantMeta = {
  id: "hero-local-business-trust-premium-split",
  kind: "hero",
  archetype: "local-business-trust",
  label: "Hero - Local Business Trust Premium Split",
  description:
    "Trust-first split hero with photographic service media, dual CTAs, and a chip-based credibility grid.",
  supportsThemes: ["dark", "light"],
  motionPresets: ["rise-soft", "fade-in"],
  effects: {
    fullBleedPhotograph: true,
    scrollDrivenScale: true,
  },
  density: "comfortable",
  complexity: "rich",
};

export function HeroLocalBusinessTrustPremiumSplit({
  kicker,
  title,
  lede,
  primaryAction,
  secondaryAction,
  media,
  trustChips,
}: HeroModel) {
  const visibleChips = trustChips?.slice(0, 3) ?? [];
  const chipColumns: 1 | 2 | 3 =
    visibleChips.length >= 3 ? 3 : visibleChips.length === 2 ? 2 : 1;

  return (
    <div
      className="sv-section-root sv-hero-local-business-trust-premium-split"
      data-variant={HERO_LOCAL_BUSINESS_TRUST_PREMIUM_SPLIT_META.id}
      data-archetype={HERO_LOCAL_BUSINESS_TRUST_PREMIUM_SPLIT_META.archetype}
    >
      <Section size="lg" container="wide" className="motion-fade-in">
        <Grid columns={2} gap="loose">
          <Stack gap="loose">
            <Stack gap="compact" className="motion-rise-soft">
              {kicker ? (
                <span className="text-overline ui-text-accent">
                  {kicker}
                </span>
              ) : null}
              <h1 className="text-display-2">{title}</h1>
              {lede ? (
                <p className="text-body-large ui-text-muted">
                  {lede}
                </p>
              ) : null}
            </Stack>

            {primaryAction || secondaryAction ? (
              <div className="ui-row">
                {primaryAction ? (
                  <Button as="a" href={primaryAction.href} size="lg" className="motion-magnetic-hover">
                    {primaryAction.label}
                  </Button>
                ) : null}
                {secondaryAction ? (
                  <Button as="a" href={secondaryAction.href} size="lg" variant="secondary">
                    {secondaryAction.label}
                  </Button>
                ) : null}
              </div>
            ) : null}

            {visibleChips.length ? (
              <Grid columns={chipColumns} gap="compact">
                {visibleChips.map((chip) => (
                  <Card key={chip.id} className="motion-rise-soft">
                    <Stack gap="tight">
                      <span className="text-label ui-text-accent">
                        Trust signal
                      </span>
                      <Text as="p" variant="body-small">
                        {chip.label}
                      </Text>
                    </Stack>
                  </Card>
                ))}
              </Grid>
            ) : null}
          </Stack>

          <Card className="ui-image-card motion-rise-soft">
            {media?.src ? (
              <div className="ui-img ui-img--video ui-image-card__media">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img className="ui-img__el" src={media.src} alt={media.alt ?? title} />
              </div>
            ) : (
              <div className="ui-img ui-img--video ui-image-card__media ds-skeleton" aria-hidden="true" />
            )}
          </Card>
        </Grid>
      </Section>
    </div>
  );
}