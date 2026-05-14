"use client";

import * as React from "react";

import { Button } from "@/ds/primitives/Button";
import type { PublicSectionModel } from "@/ds/platform/publicSitePreset";
import type { SectionVariantMeta } from "@/ds/composition/sections/_schema";

type PricingModel = Extract<PublicSectionModel, { kind: "pricing" }>;

export const PRICING_MODERN_SAAS_TOGGLE_BILLING_META: SectionVariantMeta = {
  id: "pricing-modern-saas-toggle-billing",
  kind: "pricing",
  archetype: "modern-saas",
  label: "Pricing — Modern SaaS Toggle Billing",
  description:
    "Three-tier pricing cards with monthly/yearly billing toggle above. Toggle swaps price text in place. Yearly cadence renders savings hint. Magnetic-hover on highlighted tier CTA.",
  supportsThemes: ["dark", "light"],
  motionPresets: ["rise-soft", "magnetic-hover"],
  effects: {
    gradientMesh: true,
  },
  density: "comfortable",
  complexity: "standard",
};

export function PricingModernSaasToggleBilling(props: PricingModel) {
  const { header, tiers, billingToggle, footnote } = props;
  const labels = billingToggle ?? {
    monthlyLabel: "Monthly",
    yearlyLabel: "Yearly",
    defaultCadence: "monthly" as const,
  };
  const [cadence, setCadence] = React.useState<"monthly" | "yearly">(
    labels.defaultCadence ?? "monthly",
  );

  return (
    <section
      className="sv-section-root sv-pricing-modern-saas-toggle-billing"
      data-variant={PRICING_MODERN_SAAS_TOGGLE_BILLING_META.id}
      data-archetype={PRICING_MODERN_SAAS_TOGGLE_BILLING_META.archetype}
    >
      <div className="sv-content-layer sv-pricing-modern-saas-toggle-billing__inner">
        {header ? (
          <header className="sv-pricing-modern-saas-toggle-billing__header motion-stagger-text-60">
            {header.kicker ? (
              <div className="sv-pricing-modern-saas-toggle-billing__kicker">{header.kicker}</div>
            ) : null}
            {header.title ? (
              <h2 className="sv-pricing-modern-saas-toggle-billing__title">{header.title}</h2>
            ) : null}
            {header.lede ? (
              <p className="sv-pricing-modern-saas-toggle-billing__lede">{header.lede}</p>
            ) : null}
          </header>
        ) : null}

        <div
          className="sv-pricing-modern-saas-toggle-billing__toggle"
          role="radiogroup"
          aria-label="Billing cadence"
        >
          <button
            type="button"
            role="radio"
            aria-checked={cadence === "monthly"}
            className={`sv-pricing-modern-saas-toggle-billing__toggle-option${
              cadence === "monthly" ? " is-active" : ""
            }`}
            onClick={() => setCadence("monthly")}
          >
            {labels.monthlyLabel}
          </button>
          <button
            type="button"
            role="radio"
            aria-checked={cadence === "yearly"}
            className={`sv-pricing-modern-saas-toggle-billing__toggle-option${
              cadence === "yearly" ? " is-active" : ""
            }`}
            onClick={() => setCadence("yearly")}
          >
            {labels.yearlyLabel}
            <span className="sv-pricing-modern-saas-toggle-billing__toggle-savings">Save 20%</span>
          </button>
        </div>

        <ul className="sv-pricing-modern-saas-toggle-billing__grid motion-rise-soft">
          {tiers.map((tier) => {
            const price =
              cadence === "yearly" && tier.price.yearly ? tier.price.yearly : tier.price.monthly;
            return (
              <li
                key={tier.id}
                className={`sv-pricing-modern-saas-toggle-billing__tier${
                  tier.highlight ? " is-highlight" : ""
                }`}
              >
                {tier.badge ? (
                  <div className="sv-pricing-modern-saas-toggle-billing__badge">{tier.badge}</div>
                ) : null}
                <div className="sv-pricing-modern-saas-toggle-billing__name">{tier.name}</div>
                <div className="sv-pricing-modern-saas-toggle-billing__price">
                  <span className="sv-pricing-modern-saas-toggle-billing__price-amount">
                    {price}
                  </span>
                  {tier.price.suffix ? (
                    <span className="sv-pricing-modern-saas-toggle-billing__price-suffix">
                      {tier.price.suffix}
                    </span>
                  ) : null}
                </div>
                {tier.description ? (
                  <p className="sv-pricing-modern-saas-toggle-billing__desc">{tier.description}</p>
                ) : null}
                <ul className="sv-pricing-modern-saas-toggle-billing__features">
                  {tier.features.map((f, i) => (
                    <li key={i} className="sv-pricing-modern-saas-toggle-billing__feature">
                      <span
                        aria-hidden="true"
                        className="sv-pricing-modern-saas-toggle-billing__check"
                      >
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
            );
          })}
        </ul>

        {footnote ? (
          <p className="sv-pricing-modern-saas-toggle-billing__footnote">{footnote}</p>
        ) : null}
      </div>
    </section>
  );
}
