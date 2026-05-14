/* eslint-disable @typescript-eslint/no-explicit-any */
import * as React from "react";

import type { PublicSectionModel } from "@/ds/platform/publicSitePreset";
import type { SectionVariantMeta } from "@/ds/composition/sections/_schema";

type Model = Extract<PublicSectionModel, { kind: "hero" }>;

export const HERO_LOCAL_BUSINESS_TRUST_1_META: SectionVariantMeta = {
  id: "hero-local-business-trust-1",
  kind: "hero",
  archetype: "local-business-trust",
  label: "Hero — Local Centred Trust",
  description: "Centred trust hero with bold name, service line, and primary CTA + phone CTA; rise-soft entry.",
  supportsThemes: ["dark", "light"],
  motionPresets: ["rise-soft","fade-in"],
  effects: {},
  density: "comfortable",
  complexity: "minimal",
};

export function HeroLocalBusinessTrust1(props: Model) {
  const { kicker, title, lede, primaryAction, secondaryAction, trustChips } = props as any;
  return (
    <section className="sv-section-root sv-hero-local-business-trust-1" data-variant="hero-local-business-trust-1">
      <div className="sv-hero-local-business-trust-1__panel">
        {kicker ? <div className="sv-hero-local-business-trust-1__kicker">{kicker}</div> : null}
        <h1 className="sv-hero-local-business-trust-1__title">{title}</h1>
        {lede ? <p className="sv-hero-local-business-trust-1__lede">{lede}</p> : null}
        {(primaryAction || secondaryAction) ? (
          <div className="sv-hero-local-business-trust-1__actions">
            {primaryAction ? <a className="sv-hero-local-business-trust-1__cta sv-hero-local-business-trust-1__cta--primary" href={primaryAction.href}>{primaryAction.label}</a> : null}
            {secondaryAction ? <a className="sv-hero-local-business-trust-1__cta sv-hero-local-business-trust-1__cta--secondary" href={secondaryAction.href}>{secondaryAction.label}</a> : null}
          </div>
        ) : null}
        {trustChips && trustChips.length > 0 ? (
          <ul className="sv-hero-local-business-trust-1__chips">
            {trustChips.map((c: any) => <li key={c.id} className="sv-hero-local-business-trust-1__chip">{c.label}</li>)}
          </ul>
        ) : null}
      </div>
    </section>
  );
}
