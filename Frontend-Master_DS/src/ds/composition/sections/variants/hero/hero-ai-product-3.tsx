/* eslint-disable @typescript-eslint/no-explicit-any */
import * as React from "react";

import type { PublicSectionModel } from "@/ds/platform/publicSitePreset";
import type { SectionVariantMeta } from "@/ds/composition/sections/_schema";

type Model = Extract<PublicSectionModel, { kind: "hero" }>;

export const HERO_AI_PRODUCT_3_META: SectionVariantMeta = {
  id: "hero-ai-product-3",
  kind: "hero",
  archetype: "ai-product",
  label: "Hero â€” AI Split with Media",
  description: "Split hero with stagger-text-60 reveal across headline lines and media tile right; primary CTA in accent.",
  supportsThemes: ["dark", "light"],
  motionPresets: ["reveal-glass","stagger-text-60"],
  effects: {},
  density: "comfortable",
  complexity: "standard",
};

export function HeroAiProduct3(props: Model) {
  const { kicker, title, lede, primaryAction, secondaryAction } = props as any;
  return (
    <section className="sv-section-root sv-hero-ai-product-3" data-variant="hero-ai-product-3">
      <div className="sv-hero-ai-product-3__grid">
        <div className="sv-hero-ai-product-3__copy">
          {kicker ? <div className="sv-hero-ai-product-3__kicker">{kicker}</div> : null}
          <h1 className="sv-hero-ai-product-3__title">{title}</h1>
          {lede ? <p className="sv-hero-ai-product-3__lede">{lede}</p> : null}
          {(primaryAction || secondaryAction) ? (
            <div className="sv-hero-ai-product-3__actions">
              {primaryAction ? <a className="sv-hero-ai-product-3__cta sv-hero-ai-product-3__cta--primary" href={primaryAction.href}>{primaryAction.label}</a> : null}
              {secondaryAction ? <a className="sv-hero-ai-product-3__cta sv-hero-ai-product-3__cta--secondary" href={secondaryAction.href}>{secondaryAction.label}</a> : null}
            </div>
          ) : null}
        </div>
        <div className="sv-hero-ai-product-3__visual" aria-hidden="true" />
      </div>
    </section>
  );
}
