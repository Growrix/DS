import * as React from "react";

import { Button } from "@/ds/primitives/Button";
import type { PublicSectionModel } from "@/ds/platform/publicSitePreset";
import type { SectionVariantMeta } from "@/ds/composition/sections/_schema";

type CtaModel = Extract<PublicSectionModel, { kind: "cta" }>;

export const CTA_MODERN_SAAS_BANNER_STRIP_META: SectionVariantMeta = {
  id: "cta-modern-saas-banner-strip",
  kind: "cta",
  archetype: "modern-saas",
  label: "CTA — Modern SaaS Banner Strip",
  description:
    "Full-width inline banner with title left, paired actions right. Subtle gradient mesh background; rise-soft on enter.",
  supportsThemes: ["dark", "light"],
  motionPresets: ["rise-soft", "magnetic-hover"],
  effects: {
    gradientMesh: true,
  },
  density: "compact",
  complexity: "minimal",
};

export function CtaModernSaasBannerStrip(props: CtaModel) {
  const { header, body, primaryAction, secondaryAction } = props;

  return (
    <section
      className="sv-section-root sv-cta-modern-saas-banner-strip motion-rise-soft"
      data-variant={CTA_MODERN_SAAS_BANNER_STRIP_META.id}
      data-archetype={CTA_MODERN_SAAS_BANNER_STRIP_META.archetype}
    >
      <div className="sv-overlay sv-cta-modern-saas-banner-strip__mesh" aria-hidden="true" />
      <div className="sv-content-layer sv-cta-modern-saas-banner-strip__inner">
        <div className="sv-cta-modern-saas-banner-strip__copy">
          {header?.kicker ? (
            <div className="sv-cta-modern-saas-banner-strip__kicker">{header.kicker}</div>
          ) : null}
          {header?.title ? (
            <h2 className="sv-cta-modern-saas-banner-strip__title">{header.title}</h2>
          ) : null}
          {header?.lede || body ? (
            <p className="sv-cta-modern-saas-banner-strip__lede">{header?.lede ?? body}</p>
          ) : null}
        </div>
        {primaryAction || secondaryAction ? (
          <div className="sv-cta-modern-saas-banner-strip__actions">
            {primaryAction ? (
              <Button as="a" href={primaryAction.href} size="lg" className="motion-magnetic-hover">
                {primaryAction.label}
              </Button>
            ) : null}
            {secondaryAction ? (
              <Button as="a" href={secondaryAction.href} variant="secondary" size="lg">
                {secondaryAction.label}
              </Button>
            ) : null}
          </div>
        ) : null}
      </div>
    </section>
  );
}
