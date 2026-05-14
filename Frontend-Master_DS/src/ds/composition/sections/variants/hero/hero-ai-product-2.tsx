/* eslint-disable @typescript-eslint/no-explicit-any */
import * as React from "react";

import type { PublicSectionModel } from "@/ds/platform/publicSitePreset";
import type { SectionVariantMeta } from "@/ds/composition/sections/_schema";

type Model = Extract<PublicSectionModel, { kind: "hero" }>;

export const HERO_AI_PRODUCT_2_META: SectionVariantMeta = {
  id: "hero-ai-product-2",
  kind: "hero",
  archetype: "ai-product",
  label: "Hero â€” AI Centred Reveal",
  description: "Centred hero with reveal-glass intro on headline + lede; primary CTA pair beneath; max 60ch lede width.",
  supportsThemes: ["dark", "light"],
  motionPresets: ["reveal-glass","fade-in"],
  effects: {},
  density: "comfortable",
  complexity: "minimal",
};

export function HeroAiProduct2(props: Model) {
  const { kicker, title, lede, primaryAction, secondaryAction, trustChips } = props as any;
  return (
    <section className="sv-section-root sv-hero-ai-product-2" data-variant="hero-ai-product-2">
      <div className="sv-hero-ai-product-2__panel">
        {kicker ? <div className="sv-hero-ai-product-2__kicker">{kicker}</div> : null}
        <h1 className="sv-hero-ai-product-2__title">{title}</h1>
        {lede ? <p className="sv-hero-ai-product-2__lede">{lede}</p> : null}
        {(primaryAction || secondaryAction) ? (
          <div className="sv-hero-ai-product-2__actions">
            {primaryAction ? <a className="sv-hero-ai-product-2__cta sv-hero-ai-product-2__cta--primary" href={primaryAction.href}>{primaryAction.label}</a> : null}
            {secondaryAction ? <a className="sv-hero-ai-product-2__cta sv-hero-ai-product-2__cta--secondary" href={secondaryAction.href}>{secondaryAction.label}</a> : null}
          </div>
        ) : null}
        {trustChips && trustChips.length > 0 ? (
          <ul className="sv-hero-ai-product-2__chips">
            {trustChips.map((c: any) => <li key={c.id} className="sv-hero-ai-product-2__chip">{c.label}</li>)}
          </ul>
        ) : null}
      </div>
    </section>
  );
}
