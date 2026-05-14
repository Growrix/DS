import * as React from "react";

import { Avatar } from "@/ds/primitives/Avatar";
import { Badge } from "@/ds/components/Badge";
import { Card } from "@/ds/components/Card";
import { SectionPattern } from "@/ds/composition/patterns/SectionPattern";
import type { SectionVariantMeta } from "@/ds/composition/sections/_schema";
import type { PublicSectionModel } from "@/ds/platform/publicSitePreset";
import { Grid } from "@/ds/primitives/Grid";
import { Stack } from "@/ds/primitives/Stack";
import { Text } from "@/ds/primitives/Text";

type TestimonialsModel = Extract<PublicSectionModel, { kind: "testimonials" }>;

export const TESTIMONIALS_LOCAL_BUSINESS_TRUST_EDITORIAL_STACK_META: SectionVariantMeta = {
  id: "testimonials-local-business-trust-editorial-stack",
  kind: "testimonials",
  archetype: "local-business-trust",
  label: "Testimonials - Local Business Trust Editorial Stack",
  description:
    "Featured trust quote paired with a stacked review column for a more premium service-business proof section.",
  supportsThemes: ["dark", "light"],
  motionPresets: ["rise-soft", "fade-in"],
  effects: {},
  density: "comfortable",
  complexity: "rich",
};

function ReviewAttribution({
  name,
  meta,
  avatar,
}: TestimonialsModel["items"][number]) {
  return (
    <div className="ui-row">
      <Avatar src={avatar?.src} alt={avatar?.alt} name={name} size="lg" />
      <Stack gap="tight">
        <span className="text-label">{name}</span>
        {meta ? (
          <Text variant="body-small" tone="muted">
            {meta}
          </Text>
        ) : null}
      </Stack>
    </div>
  );
}

export function TestimonialsLocalBusinessTrustEditorialStack({
  header,
  items,
}: TestimonialsModel) {
  const sectionHeader = header
    ? {
        kicker: header.kicker,
        title: header.title,
        lede: header.lede,
      }
    : undefined;

  const [featuredReview, ...supportingReviews] = items;

  if (!featuredReview) {
    return null;
  }

  return (
    <div
      className="sv-section-root"
      data-variant={TESTIMONIALS_LOCAL_BUSINESS_TRUST_EDITORIAL_STACK_META.id}
      data-archetype={TESTIMONIALS_LOCAL_BUSINESS_TRUST_EDITORIAL_STACK_META.archetype}
    >
      <SectionPattern container="wide" tone="surface" header={sectionHeader}>
        <Grid columns={2} gap="loose" className="motion-fade-in">
          <Card className="ui-stack ui-stack--loose ui-theme-scope shadow-lg" data-theme="dark" data-visual="sleek">
            <Badge tone="warning" variant="tag" size="sm">
              Featured review
            </Badge>
            <p className="text-quote text-pretty">&ldquo;{featuredReview.quote}&rdquo;</p>
            <div className="ui-stack ui-stack--tight">
              <Text variant="body-small">★★★★★</Text>
              <ReviewAttribution {...featuredReview} />
            </div>
          </Card>

          <Stack gap="compact">
            {supportingReviews.map((review) => (
              <Card key={review.id} variant="interactive" className="ui-stack ui-stack--compact shadow-sm">
                <Badge tone="accent" variant="dot" size="sm">
                  Verified client
                </Badge>
                <Text className="text-pretty">&ldquo;{review.quote}&rdquo;</Text>
                <ReviewAttribution {...review} />
              </Card>
            ))}
          </Stack>
        </Grid>
      </SectionPattern>
    </div>
  );
}