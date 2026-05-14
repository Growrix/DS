import * as React from "react";

import { Card } from "@/ds/components/Card";
import { SectionPattern } from "@/ds/composition/patterns/SectionPattern";
import type { SectionVariantMeta } from "@/ds/composition/sections/_schema";
import type { PublicSectionModel } from "@/ds/platform/publicSitePreset";
import { Grid } from "@/ds/primitives/Grid";
import { Stack } from "@/ds/primitives/Stack";
import { Text } from "@/ds/primitives/Text";

type FeaturesModel = Extract<PublicSectionModel, { kind: "features" }>;

export const FEATURES_LOCAL_BUSINESS_TRUST_MEDIA_CARDS_META: SectionVariantMeta = {
  id: "features-local-business-trust-media-cards",
  kind: "features",
  archetype: "local-business-trust",
  label: "Features - Local Business Trust Media Cards",
  description:
    "Image-backed service cards for premium local-business landing pages with commercial, trust-oriented copy.",
  supportsThemes: ["dark", "light"],
  motionPresets: ["rise-soft", "fade-in"],
  effects: {},
  density: "comfortable",
  complexity: "rich",
};

export function FeaturesLocalBusinessTrustMediaCards({ header, features }: FeaturesModel) {
  const sectionHeader = header
    ? {
        kicker: header.kicker,
        title: header.title,
        lede: header.lede,
      }
    : undefined;

  return (
    <div
      className="sv-section-root sv-features-local-business-trust-media-cards"
      data-variant={FEATURES_LOCAL_BUSINESS_TRUST_MEDIA_CARDS_META.id}
      data-archetype={FEATURES_LOCAL_BUSINESS_TRUST_MEDIA_CARDS_META.archetype}
    >
      <SectionPattern container="wide" header={sectionHeader}>
        <Grid columns={4} gap="loose" className="motion-rise-soft">
          {features.map((feature) => (
            <Card key={feature.id} variant="interactive" className="ui-image-card">
              <Stack gap="compact" className="ui-image-card__body">
                {feature.media?.src ? (
                  <div className="ui-img ui-img--video ui-image-card__media">
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img className="ui-img__el" src={feature.media.src} alt={feature.media.alt ?? feature.title} />
                  </div>
                ) : (
                  <div className="ui-img ui-img--video ui-image-card__media ds-skeleton" aria-hidden="true" />
                )}

                <Stack gap="tight">
                  {feature.icon ? (
                    <span className="text-label ui-text-accent">
                      {feature.icon}
                    </span>
                  ) : null}
                  <h3 className="text-heading-5">{feature.title}</h3>
                  {feature.description ? (
                    <Text variant="body-small" tone="muted">
                      {feature.description}
                    </Text>
                  ) : null}
                </Stack>
              </Stack>
            </Card>
          ))}
        </Grid>
      </SectionPattern>
    </div>
  );
}