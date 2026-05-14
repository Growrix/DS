import * as React from "react";

import { Button } from "@/ds/primitives/Button";
import type { PublicSectionModel } from "@/ds/platform/publicSitePreset";
import type { SectionVariantMeta } from "@/ds/composition/sections/_schema";

type CtaModel = Extract<PublicSectionModel, { kind: "cta" }>;

export const CTA_MODERN_SAAS_CARD_META: SectionVariantMeta = {
  id: "cta-modern-saas-card",
  kind: "cta",
  archetype: "modern-saas",
  label: "CTA — Modern SaaS Card",
  description:
    "Centered bordered card with gradient mesh backdrop, title + lede + paired CTAs. Glassmorphic edges, magnetic-hover on primary action.",
  supportsThemes: ["dark", "light"],
  motionPresets: ["rise-soft", "magnetic-hover"],
  effects: {
    gradientMesh: true,
    glassmorphism: true,
  },
  density: "comfortable",
  complexity: "standard",
};

export function CtaModernSaasCard(props: CtaModel) {
  const { header, body, primaryAction, secondaryAction } = props;

  return (
    <section
      className="sv-section-root sv-cta-modern-saas-card"
      data-variant={CTA_MODERN_SAAS_CARD_META.id}
      data-archetype={CTA_MODERN_SAAS_CARD_META.archetype}
    >
      <div className="sv-content-layer sv-cta-modern-saas-card__card motion-rise-soft">
        <div className="sv-overlay sv-cta-modern-saas-card__mesh" aria-hidden="true" />
        <div className="sv-cta-modern-saas-card__inner">
          {header?.kicker ? (
            <div className="sv-cta-modern-saas-card__kicker">{header.kicker}</div>
          ) : null}
          {header?.title ? (
            <h2 className="sv-cta-modern-saas-card__title">{header.title}</h2>
          ) : null}
          {header?.lede || body ? (
            <p className="sv-cta-modern-saas-card__lede">{header?.lede ?? body}</p>
          ) : null}
          {primaryAction || secondaryAction ? (
            <div className="sv-cta-modern-saas-card__actions">
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
      </div>
    </section>
  );
}
