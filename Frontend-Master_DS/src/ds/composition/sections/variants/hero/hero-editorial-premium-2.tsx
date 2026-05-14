/* eslint-disable @typescript-eslint/no-explicit-any */
import * as React from "react";

import type { PublicSectionModel } from "@/ds/platform/publicSitePreset";
import type { SectionVariantMeta } from "@/ds/composition/sections/_schema";

type Model = Extract<PublicSectionModel, { kind: "hero" }>;

export const HERO_EDITORIAL_PREMIUM_2_META: SectionVariantMeta = {
  id: "hero-editorial-premium-2",
  kind: "hero",
  archetype: "editorial-premium",
  label: "Hero — Editorial Centred Display",
  description: "Centred display headline with narrow lede column and single primary CTA; max 60ch line length; restrained motion via rise-soft.",
  supportsThemes: ["dark", "light"],
  motionPresets: ["rise-soft","fade-in"],
  effects: {},
  density: "extended",
  complexity: "minimal",
};

export function HeroEditorialPremium2(props: Model) {
  const { kicker, title, lede, primaryAction, secondaryAction, trustChips } = props as any;
  return (
    <section className="sv-section-root sv-hero-editorial-premium-2" data-variant="hero-editorial-premium-2">
      <div className="sv-hero-editorial-premium-2__panel">
        {kicker ? <div className="sv-hero-editorial-premium-2__kicker">{kicker}</div> : null}
        <h1 className="sv-hero-editorial-premium-2__title">{title}</h1>
        {lede ? <p className="sv-hero-editorial-premium-2__lede">{lede}</p> : null}
        {(primaryAction || secondaryAction) ? (
          <div className="sv-hero-editorial-premium-2__actions">
            {primaryAction ? <a className="sv-hero-editorial-premium-2__cta sv-hero-editorial-premium-2__cta--primary" href={primaryAction.href}>{primaryAction.label}</a> : null}
            {secondaryAction ? <a className="sv-hero-editorial-premium-2__cta sv-hero-editorial-premium-2__cta--secondary" href={secondaryAction.href}>{secondaryAction.label}</a> : null}
          </div>
        ) : null}
        {trustChips && trustChips.length > 0 ? (
          <ul className="sv-hero-editorial-premium-2__chips">
            {trustChips.map((c: any) => <li key={c.id} className="sv-hero-editorial-premium-2__chip">{c.label}</li>)}
          </ul>
        ) : null}
      </div>
    </section>
  );
}
