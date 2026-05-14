import * as React from "react";

import { Button } from "@/ds/primitives/Button";
import type { PublicSectionModel } from "@/ds/platform/publicSitePreset";
import type { SectionVariantMeta } from "@/ds/composition/sections/_schema";

type PricingModel = Extract<PublicSectionModel, { kind: "pricing" }>;

export const PRICING_MODERN_SAAS_3_TIER_CARDS_META: SectionVariantMeta = {
  id: "pricing-modern-saas-3-tier-cards",
  kind: "pricing",
  archetype: "modern-saas",
  label: "Pricing — Modern SaaS 3-Tier Cards",
  description:
    "Three side-by-side pricing cards. Middle tier highlighted with accent border and badge. Each card lists name, price, features (checkmark bullets), and CTA. Rise-soft on enter.",
  supportsThemes: ["dark", "light"],
  motionPresets: ["rise-soft", "magnetic-hover"],
  effects: {
    gradientMesh: true,
    animatedBorder: true,
  },
  density: "comfortable",
  complexity: "standard",
};

export function PricingModernSaas3TierCards(props: PricingModel) {
  const { header, tiers, footnote } = props;

  return (
    <section
      className="sv-section-root sv-pricing-modern-saas-3-tier-cards"
      data-variant={PRICING_MODERN_SAAS_3_TIER_CARDS_META.id}
      data-archetype={PRICING_MODERN_SAAS_3_TIER_CARDS_META.archetype}
    >
      <div className="sv-content-layer sv-pricing-modern-saas-3-tier-cards__inner">
        {header ? (
          <header className="sv-pricing-modern-saas-3-tier-cards__header motion-stagger-text-60">
            {header.kicker ? (
              <div className="sv-pricing-modern-saas-3-tier-cards__kicker">{header.kicker}</div>
            ) : null}
            {header.title ? (
              <h2 className="sv-pricing-modern-saas-3-tier-cards__title">{header.title}</h2>
            ) : null}
            {header.lede ? (
              <p className="sv-pricing-modern-saas-3-tier-cards__lede">{header.lede}</p>
            ) : null}
          </header>
        ) : null}

        <ul className="sv-pricing-modern-saas-3-tier-cards__grid motion-rise-soft">
          {tiers.map((tier) => (
            <li
              key={tier.id}
              className={`sv-pricing-modern-saas-3-tier-cards__tier${
                tier.highlight ? " is-highlight" : ""
              }`}
            >
              {tier.badge ? (
                <div className="sv-pricing-modern-saas-3-tier-cards__badge">{tier.badge}</div>
              ) : null}
              <div className="sv-pricing-modern-saas-3-tier-cards__name">{tier.name}</div>
              <div className="sv-pricing-modern-saas-3-tier-cards__price">
                <span className="sv-pricing-modern-saas-3-tier-cards__price-amount">
                  {tier.price.monthly}
                </span>
                {tier.price.suffix ? (
                  <span className="sv-pricing-modern-saas-3-tier-cards__price-suffix">
                    {tier.price.suffix}
                  </span>
                ) : null}
              </div>
              {tier.description ? (
                <p className="sv-pricing-modern-saas-3-tier-cards__desc">{tier.description}</p>
              ) : null}
              <ul className="sv-pricing-modern-saas-3-tier-cards__features">
                {tier.features.map((f, i) => (
                  <li key={i} className="sv-pricing-modern-saas-3-tier-cards__feature">
                    <span aria-hidden="true" className="sv-pricing-modern-saas-3-tier-cards__check">
                      ✓
                    </span>
                    <span>{f}</span>
                  </li>
                ))}
              </ul>
              <Button
                as="a"
                href={tier.cta.href}
                variant={tier.highlight ? "primary" : "secondary"}
                size="lg"
                className={tier.highlight ? "motion-magnetic-hover" : undefined}
              >
                {tier.cta.label}
              </Button>
            </li>
          ))}
        </ul>

        {footnote ? (
          <p className="sv-pricing-modern-saas-3-tier-cards__footnote">{footnote}</p>
        ) : null}
      </div>
    </section>
  );
}
