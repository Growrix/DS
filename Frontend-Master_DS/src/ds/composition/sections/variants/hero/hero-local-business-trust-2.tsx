/* eslint-disable @typescript-eslint/no-explicit-any */
import * as React from "react";

import type { PublicSectionModel } from "@/ds/platform/publicSitePreset";
import type { SectionVariantMeta } from "@/ds/composition/sections/_schema";

type Model = Extract<PublicSectionModel, { kind: "hero" }>;

export const HERO_LOCAL_BUSINESS_TRUST_2_META: SectionVariantMeta = {
  id: "hero-local-business-trust-2",
  kind: "hero",
  archetype: "local-business-trust",
  label: "Hero — Local Full-Bleed Storefront",
  description: "Full-bleed storefront photograph with scrim and overlay headline; primary CTA in accent; scroll-scale 1.04 on media.",
  supportsThemes: ["dark", "light"],
  motionPresets: ["rise-soft","fade-in"],
  effects: {"fullBleedPhotograph":true,"scrollDrivenScale":true},
  density: "comfortable",
  complexity: "standard",
};

export function HeroLocalBusinessTrust2(props: Model) {
  const { kicker, title, lede, primaryAction, media } = props as any;
  return (
    <section className="sv-section-root sv-hero-local-business-trust-2" data-variant="hero-local-business-trust-2">
      {media?.src ? (
        // eslint-disable-next-line @next/next/no-img-element
        <img className="sv-hero-local-business-trust-2__bg" src={media.src} alt={media.alt ?? ""} aria-hidden={media.alt ? undefined : true} />
      ) : <div className="sv-hero-local-business-trust-2__bg sv-hero-local-business-trust-2__bg--placeholder" aria-hidden="true" />}
      <div className="sv-hero-local-business-trust-2__scrim" aria-hidden="true" />
      <div className="sv-hero-local-business-trust-2__panel">
        {kicker ? <div className="sv-hero-local-business-trust-2__kicker">{kicker}</div> : null}
        <h1 className="sv-hero-local-business-trust-2__title">{title}</h1>
        {lede ? <p className="sv-hero-local-business-trust-2__lede">{lede}</p> : null}
        {primaryAction ? <a className="sv-hero-local-business-trust-2__cta" href={primaryAction.href}>{primaryAction.label}</a> : null}
      </div>
    </section>
  );
}
