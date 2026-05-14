/* eslint-disable @typescript-eslint/no-explicit-any */
import * as React from "react";

import type { PublicSectionModel } from "@/ds/platform/publicSitePreset";
import type { SectionVariantMeta } from "@/ds/composition/sections/_schema";

type Model = Extract<PublicSectionModel, { kind: "hero" }>;

export const HERO_PORTFOLIO_CRAFT_1_META: SectionVariantMeta = {
  id: "hero-portfolio-craft-1",
  kind: "hero",
  archetype: "portfolio-craft",
  label: "Hero — Portfolio Centred Identity",
  description: "Centred hero with name, discipline line and primary CTA pair; rise-soft entry; max 60ch lede.",
  supportsThemes: ["dark", "light"],
  motionPresets: ["rise-soft","fade-in"],
  effects: {},
  density: "comfortable",
  complexity: "minimal",
};

export function HeroPortfolioCraft1(props: Model) {
  const { kicker, title, lede, primaryAction, secondaryAction, trustChips } = props as any;
  return (
    <section className="sv-section-root sv-hero-portfolio-craft-1" data-variant="hero-portfolio-craft-1">
      <div className="sv-hero-portfolio-craft-1__panel">
        {kicker ? <div className="sv-hero-portfolio-craft-1__kicker">{kicker}</div> : null}
        <h1 className="sv-hero-portfolio-craft-1__title">{title}</h1>
        {lede ? <p className="sv-hero-portfolio-craft-1__lede">{lede}</p> : null}
        {(primaryAction || secondaryAction) ? (
          <div className="sv-hero-portfolio-craft-1__actions">
            {primaryAction ? <a className="sv-hero-portfolio-craft-1__cta sv-hero-portfolio-craft-1__cta--primary" href={primaryAction.href}>{primaryAction.label}</a> : null}
            {secondaryAction ? <a className="sv-hero-portfolio-craft-1__cta sv-hero-portfolio-craft-1__cta--secondary" href={secondaryAction.href}>{secondaryAction.label}</a> : null}
          </div>
        ) : null}
        {trustChips && trustChips.length > 0 ? (
          <ul className="sv-hero-portfolio-craft-1__chips">
            {trustChips.map((c: any) => <li key={c.id} className="sv-hero-portfolio-craft-1__chip">{c.label}</li>)}
          </ul>
        ) : null}
      </div>
    </section>
  );
}
