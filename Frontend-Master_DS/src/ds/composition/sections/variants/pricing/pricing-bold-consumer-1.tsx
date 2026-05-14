/* eslint-disable @typescript-eslint/no-explicit-any */
import * as React from "react";

import type { PublicSectionModel } from "@/ds/platform/publicSitePreset";
import type { SectionVariantMeta } from "@/ds/composition/sections/_schema";

type Model = Extract<PublicSectionModel, { kind: "pricing" }>;

export const PRICING_BOLD_CONSUMER_1_META: SectionVariantMeta = {
  id: "pricing-bold-consumer-1",
  kind: "pricing",
  archetype: "bold-consumer",
  label: "Pricing — Bold Single Tier",
  description: "Single pricing tier card with bold accent price, feature list and primary CTA; centered on raised surface.",
  supportsThemes: ["dark", "light"],
  motionPresets: ["rise-soft"],
  effects: {},
  density: "comfortable",
  complexity: "minimal",
};

export function PricingBoldConsumer1(props: Model) {
  const { header, tiers, footnote } = props as any;
  const tier = tiers.find((t: any) => t.highlight) ?? tiers[0];
  if (!tier) return null;
  return (
    <section className="sv-section-root sv-pricing-bold-consumer-1" data-variant="pricing-bold-consumer-1">
      <div className="sv-pricing-bold-consumer-1__inner">
        {header ? (
          <div className="sv-pricing-bold-consumer-1__header">
            {header.kicker ? <div className="sv-pricing-bold-consumer-1__kicker">{header.kicker}</div> : null}
            {header.title ? <h2 className="sv-pricing-bold-consumer-1__title">{header.title}</h2> : null}
          </div>
        ) : null}
        <article className="sv-pricing-bold-consumer-1__card">
          {tier.badge ? <div className="sv-pricing-bold-consumer-1__badge">{tier.badge}</div> : null}
          <h3 className="sv-pricing-bold-consumer-1__name">{tier.name}</h3>
          <div className="sv-pricing-bold-consumer-1__price"><span className="sv-pricing-bold-consumer-1__amount">{tier.price.monthly}</span>{tier.price.suffix ? <span className="sv-pricing-bold-consumer-1__suffix">{tier.price.suffix}</span> : null}</div>
          {tier.description ? <p className="sv-pricing-bold-consumer-1__desc">{tier.description}</p> : null}
          <ul className="sv-pricing-bold-consumer-1__features">{tier.features.map((f: string, i: number) => <li key={i} className="sv-pricing-bold-consumer-1__feature">{f}</li>)}</ul>
          <a className="sv-pricing-bold-consumer-1__cta" href={tier.cta.href}>{tier.cta.label}</a>
          {footnote ? <p className="sv-pricing-bold-consumer-1__footnote">{footnote}</p> : null}
        </article>
      </div>
    </section>
  );
}
