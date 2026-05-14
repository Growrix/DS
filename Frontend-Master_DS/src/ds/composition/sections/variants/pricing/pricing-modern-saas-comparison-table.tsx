"use client";

import * as React from "react";

import { Button } from "@/ds/primitives/Button";
import type { PublicSectionModel } from "@/ds/platform/publicSitePreset";
import type { SectionVariantMeta } from "@/ds/composition/sections/_schema";

type PricingModel = Extract<PublicSectionModel, { kind: "pricing" }>;

export const PRICING_MODERN_SAAS_COMPARISON_TABLE_META: SectionVariantMeta = {
  id: "pricing-modern-saas-comparison-table",
  kind: "pricing",
  archetype: "modern-saas",
  label: "Pricing — Modern SaaS Comparison Table",
  description:
    "Side-by-side feature comparison table. Tier names + prices in sticky header row, feature rows below show check/dash per tier. Highlighted column for emphasised tier. CTAs in footer row.",
  supportsThemes: ["dark", "light"],
  motionPresets: ["rise-soft"],
  effects: {
    gradientMesh: false,
    glassmorphism: false,
  },
  density: "extended",
  complexity: "rich",
};

export function PricingModernSaasComparisonTable(props: PricingModel) {
  const { header, tiers, footnote } = props;

  // Union of feature labels across all tiers, preserving first-occurrence order.
  const featureRows = React.useMemo(() => {
    const seen = new Set<string>();
    const ordered: string[] = [];
    for (const t of tiers) {
      for (const f of t.features) {
        if (!seen.has(f)) {
          seen.add(f);
          ordered.push(f);
        }
      }
    }
    return ordered;
  }, [tiers]);

  function tierHas(tierId: string, feature: string): boolean {
    const t = tiers.find((x) => x.id === tierId);
    if (!t) return false;
    return t.features.includes(feature);
  }

  return (
    <section
      className="sv-section-root sv-pricing-modern-saas-comparison-table"
      data-variant={PRICING_MODERN_SAAS_COMPARISON_TABLE_META.id}
      data-archetype={PRICING_MODERN_SAAS_COMPARISON_TABLE_META.archetype}
    >
      <div className="sv-content-layer sv-pricing-modern-saas-comparison-table__inner">
        {header ? (
          <header className="sv-pricing-modern-saas-comparison-table__header motion-stagger-text-60">
            {header.kicker ? (
              <div className="sv-pricing-modern-saas-comparison-table__kicker">
                {header.kicker}
              </div>
            ) : null}
            {header.title ? (
              <h2 className="sv-pricing-modern-saas-comparison-table__title">{header.title}</h2>
            ) : null}
            {header.lede ? (
              <p className="sv-pricing-modern-saas-comparison-table__lede">{header.lede}</p>
            ) : null}
          </header>
        ) : null}

        <div className="sv-pricing-modern-saas-comparison-table__wrap motion-rise-soft">
          <table className="sv-pricing-modern-saas-comparison-table__table">
            <thead>
              <tr>
                <th
                  scope="col"
                  className="sv-pricing-modern-saas-comparison-table__corner"
                  aria-hidden="true"
                />
                {tiers.map((tier) => (
                  <th
                    key={tier.id}
                    scope="col"
                    className={`sv-pricing-modern-saas-comparison-table__tier${
                      tier.highlight ? " is-highlight" : ""
                    }`}
                  >
                    <div className="sv-pricing-modern-saas-comparison-table__tier-name">
                      {tier.name}
                    </div>
                    <div className="sv-pricing-modern-saas-comparison-table__tier-price">
                      <span>{tier.price.monthly}</span>
                      {tier.price.suffix ? (
                        <span className="sv-pricing-modern-saas-comparison-table__tier-suffix">
                          {tier.price.suffix}
                        </span>
                      ) : null}
                    </div>
                    {tier.description ? (
                      <div className="sv-pricing-modern-saas-comparison-table__tier-desc">
                        {tier.description}
                      </div>
                    ) : null}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              {featureRows.map((feature, i) => (
                <tr key={i}>
                  <th
                    scope="row"
                    className="sv-pricing-modern-saas-comparison-table__feature-label"
                  >
                    {feature}
                  </th>
                  {tiers.map((tier) => (
                    <td
                      key={tier.id}
                      className={`sv-pricing-modern-saas-comparison-table__cell${
                        tier.highlight ? " is-highlight" : ""
                      }`}
                    >
                      <span aria-hidden="true">{tierHas(tier.id, feature) ? "✓" : "–"}</span>
                      <span className="sr-only">
                        {tierHas(tier.id, feature) ? "Included" : "Not included"}
                      </span>
                    </td>
                  ))}
                </tr>
              ))}
            </tbody>
            <tfoot>
              <tr>
                <td className="sv-pricing-modern-saas-comparison-table__cta-spacer" />
                {tiers.map((tier) => (
                  <td
                    key={tier.id}
                    className={`sv-pricing-modern-saas-comparison-table__cta-cell${
                      tier.highlight ? " is-highlight" : ""
                    }`}
                  >
                    <Button
                      as="a"
                      href={tier.cta.href}
                      variant={tier.highlight ? "primary" : "secondary"}
                    >
                      {tier.cta.label}
                    </Button>
                  </td>
                ))}
              </tr>
            </tfoot>
          </table>
        </div>

        {footnote ? (
          <p className="sv-pricing-modern-saas-comparison-table__footnote">{footnote}</p>
        ) : null}
      </div>
    </section>
  );
}
