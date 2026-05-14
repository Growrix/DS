import * as React from "react";

import { Card } from "@/ds/components/Card";
import { SectionPattern } from "@/ds/composition/patterns/SectionPattern";
import type { SectionVariantMeta } from "@/ds/composition/sections/_schema";
import type { PublicSectionModel } from "@/ds/platform/publicSitePreset";
import { Grid } from "@/ds/primitives/Grid";
import { Stack } from "@/ds/primitives/Stack";
import { Text } from "@/ds/primitives/Text";

type CaseStudiesModel = Extract<PublicSectionModel, { kind: "case-studies" }>;

export const CASE_STUDIES_LOCAL_BUSINESS_TRUST_GALLERY_META: SectionVariantMeta = {
  id: "case-studies-local-business-trust-gallery",
  kind: "case-studies",
  archetype: "local-business-trust",
  label: "Case Studies - Local Business Trust Gallery",
  description:
    "Photo-forward project gallery with outcome tags and trust-oriented summaries for local-business proof sections.",
  supportsThemes: ["dark", "light"],
  motionPresets: ["rise-soft", "fade-in"],
  effects: {},
  density: "comfortable",
  complexity: "rich",
};

export function CaseStudiesLocalBusinessTrustGallery({
  header,
  items,
}: CaseStudiesModel) {
  const sectionHeader = header
    ? {
        kicker: header.kicker,
        title: header.title,
        lede: header.lede,
      }
    : undefined;

  return (
    <div
      className="sv-section-root sv-case-studies-local-business-trust-gallery"
      data-variant={CASE_STUDIES_LOCAL_BUSINESS_TRUST_GALLERY_META.id}
      data-archetype={CASE_STUDIES_LOCAL_BUSINESS_TRUST_GALLERY_META.archetype}
    >
      <SectionPattern container="wide" header={sectionHeader}>
        <Grid columns={3} gap="loose" className="motion-rise-soft">
          {items.map((item) => (
            <Card key={item.id} variant="interactive" className="ui-image-card">
              <Stack gap="compact" className="ui-image-card__body">
                {item.media?.src ? (
                  <div className="ui-img ui-img--video ui-image-card__media">
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img className="ui-img__el" src={item.media.src} alt={item.media.alt ?? item.title} />
                  </div>
                ) : (
                  <div className="ui-img ui-img--video ui-image-card__media ds-skeleton" aria-hidden="true" />
                )}

                {item.tags?.length ? (
                  <div className="ui-row">
                    {item.tags.map((tag) => (
                      <span key={tag} className="text-micro ui-text-accent">
                        {tag}
                      </span>
                    ))}
                  </div>
                ) : null}

                <h3 className="text-heading-5">{item.title}</h3>
                {item.excerpt ? (
                  <Text variant="body-small" tone="muted">
                    {item.excerpt}
                  </Text>
                ) : null}
                <a className="ui-navlink ui-focus-ring" href={item.href}>
                  View project
                </a>
              </Stack>
            </Card>
          ))}
        </Grid>
      </SectionPattern>
    </div>
  );
}