/* eslint-disable @typescript-eslint/no-explicit-any */
import * as React from "react";

import type { PublicSectionModel } from "@/ds/platform/publicSitePreset";
import type { SectionVariantMeta } from "@/ds/composition/sections/_schema";

type Model = Extract<PublicSectionModel, { kind: "hero" }>;

export const HERO_PORTFOLIO_CRAFT_2_META: SectionVariantMeta = {
  id: "hero-portfolio-craft-2",
  kind: "hero",
  archetype: "portfolio-craft",
  label: "Hero — Portfolio Full-Bleed Showcase",
  description: "Full-bleed showcase photograph with scrim and overlay headline; scroll-scale 1.04 on media; primary CTA in accent.",
  supportsThemes: ["dark", "light"],
  motionPresets: ["rise-soft","scroll-scale-1.04"],
  effects: {"fullBleedPhotograph":true,"scrollDrivenScale":true},
  density: "comfortable",
  complexity: "standard",
};

export function HeroPortfolioCraft2(props: Model) {
  const { kicker, title, lede, primaryAction, media } = props as any;
  return (
    <section className="sv-section-root sv-hero-portfolio-craft-2" data-variant="hero-portfolio-craft-2">
      {media?.src ? (
        // eslint-disable-next-line @next/next/no-img-element
        <img className="sv-hero-portfolio-craft-2__bg" src={media.src} alt={media.alt ?? ""} aria-hidden={media.alt ? undefined : true} />
      ) : <div className="sv-hero-portfolio-craft-2__bg sv-hero-portfolio-craft-2__bg--placeholder" aria-hidden="true" />}
      <div className="sv-hero-portfolio-craft-2__scrim" aria-hidden="true" />
      <div className="sv-hero-portfolio-craft-2__panel">
        {kicker ? <div className="sv-hero-portfolio-craft-2__kicker">{kicker}</div> : null}
        <h1 className="sv-hero-portfolio-craft-2__title">{title}</h1>
        {lede ? <p className="sv-hero-portfolio-craft-2__lede">{lede}</p> : null}
        {primaryAction ? <a className="sv-hero-portfolio-craft-2__cta" href={primaryAction.href}>{primaryAction.label}</a> : null}
      </div>
    </section>
  );
}
