/* eslint-disable @typescript-eslint/no-explicit-any */
import * as React from "react";

import type { PublicSectionModel } from "@/ds/platform/publicSitePreset";
import type { SectionVariantMeta } from "@/ds/composition/sections/_schema";

type Model = Extract<PublicSectionModel, { kind: "hero" }>;

export const HERO_STARTUP_CONVERSION_1_META: SectionVariantMeta = {
  id: "hero-startup-conversion-1",
  kind: "hero",
  archetype: "startup-conversion",
  label: "Hero — Startup Centred Conversion",
  description: "Centred conversion hero with bold headline, sub-line and dual CTA; rise-soft entry; max 60ch lede.",
  supportsThemes: ["dark", "light"],
  motionPresets: ["rise-soft"],
  effects: {},
  density: "comfortable",
  complexity: "minimal",
};

export function HeroStartupConversion1(props: Model) {
  const { kicker, title, lede, primaryAction, secondaryAction, trustChips } = props as any;
  return (
    <section className="sv-section-root sv-hero-startup-conversion-1" data-variant="hero-startup-conversion-1">
      <div className="sv-hero-startup-conversion-1__panel">
        {kicker ? <div className="sv-hero-startup-conversion-1__kicker">{kicker}</div> : null}
        <h1 className="sv-hero-startup-conversion-1__title">{title}</h1>
        {lede ? <p className="sv-hero-startup-conversion-1__lede">{lede}</p> : null}
        {(primaryAction || secondaryAction) ? (
          <div className="sv-hero-startup-conversion-1__actions">
            {primaryAction ? <a className="sv-hero-startup-conversion-1__cta sv-hero-startup-conversion-1__cta--primary" href={primaryAction.href}>{primaryAction.label}</a> : null}
            {secondaryAction ? <a className="sv-hero-startup-conversion-1__cta sv-hero-startup-conversion-1__cta--secondary" href={secondaryAction.href}>{secondaryAction.label}</a> : null}
          </div>
        ) : null}
        {trustChips && trustChips.length > 0 ? (
          <ul className="sv-hero-startup-conversion-1__chips">
            {trustChips.map((c: any) => <li key={c.id} className="sv-hero-startup-conversion-1__chip">{c.label}</li>)}
          </ul>
        ) : null}
      </div>
    </section>
  );
}
