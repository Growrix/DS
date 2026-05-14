import * as React from "react";

import { Button } from "@/ds/primitives/Button";
import type { PublicSectionModel } from "@/ds/platform/publicSitePreset";
import type { SectionVariantMeta } from "@/ds/composition/sections/_schema";

type PricingModel = Extract<PublicSectionModel, { kind: "pricing" }>;

export const PRICING_MODERN_SAAS_SINGLE_TIER_CTA_META: SectionVariantMeta = {
  id: "pricing-modern-saas-single-tier-cta",
  kind: "pricing",
  archetype: "modern-saas",
  label: "Pricing — Modern SaaS Single Tier CTA",
  description:
    "Single emphasised pricing tier, max-width 56ch centred card. Renders tier name, price block, feature list, and CTA. Suitable for freemium-emphasised or contact-sales offerings.",
  supportsThemes: ["dark", "light"],
  motionPresets: ["rise-soft", "reveal-glass"],
  effects: { glassmorphism: true },
  density: "comfortable",
  complexity: "standard",
};

export function PricingModernSaasSingleTierCta(props: PricingModel) {
  const { header, tiers, footnote } = props;
  const tier = tiers.find((t) => t.highlight) ?? tiers[0];
  if (!tier) return null;

  return (
    <section
      className="sv-section-root sv-pricing-modern-saas-single-tier-cta"
      data-variant={PRICING_MODERN_SAAS_SINGLE_TIER_CTA_META.id}
      data-archetype={PRICING_MODERN_SAAS_SINGLE_TIER_CTA_META.archetype}
    >
      <div className="sv-content-layer sv-pricing-modern-saas-single-tier-cta__inner">
        {header ? (
          <header className="sv-pricing-modern-saas-single-tier-cta__header motion-stagger-text-60">
            {header.kicker ? (
              <div className="sv-pricing-modern-saas-single-tier-cta__kicker">{header.kicker}</div>
            ) : null}
            {header.title ? (
              <h2 className="sv-pricing-modern-saas-single-tier-cta__title">{header.title}</h2>
            ) : null}
            {header.lede ? (
              <p className="sv-pricing-modern-saas-single-tier-cta__lede">{header.lede}</p>
            ) : null}
          </header>
        ) : null}

        <div className="sv-pricing-modern-saas-single-tier-cta__card motion-reveal-glass motion-rise-soft">
          {tier.badge ? (
            <div className="sv-pricing-modern-saas-single-tier-cta__badge">{tier.badge}</div>
          ) : null}
          <h3 className="sv-pricing-modern-saas-single-tier-cta__name">{tier.name}</h3>
          <div className="sv-pricing-modern-saas-single-tier-cta__price">
            <span className="sv-pricing-modern-saas-single-tier-cta__amount">
              {tier.price.monthly}
            </span>
            {tier.price.suffix ? (
              <span className="sv-pricing-modern-saas-single-tier-cta__suffix">
                {tier.price.suffix}
              </span>
            ) : null}
          </div>
          {tier.description ? (
            <p className="sv-pricing-modern-saas-single-tier-cta__copy">{tier.description}</p>
          ) : null}
          <ul className="sv-pricing-modern-saas-single-tier-cta__features">
            {tier.features.map((f, i) => (
              <li key={i} className="sv-pricing-modern-saas-single-tier-cta__feature">
                <span
                  className="sv-pricing-modern-saas-single-tier-cta__check"
                  aria-hidden="true"
                >
                  &#10003;
                </span>
                <span>{f}</span>
              </li>
            ))}
          </ul>
          <Button variant="primary" size="lg">
            {tier.cta.label}
          </Button>
        </div>

        {footnote ? (
          <p className="sv-pricing-modern-saas-single-tier-cta__footnote">{footnote}</p>
        ) : null}
      </div>
    </section>
  );
}
