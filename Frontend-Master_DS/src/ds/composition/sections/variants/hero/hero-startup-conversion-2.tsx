/* eslint-disable @typescript-eslint/no-explicit-any */
import * as React from "react";

import type { PublicSectionModel } from "@/ds/platform/publicSitePreset";
import type { SectionVariantMeta } from "@/ds/composition/sections/_schema";

type Model = Extract<PublicSectionModel, { kind: "hero" }>;

export const HERO_STARTUP_CONVERSION_2_META: SectionVariantMeta = {
  id: "hero-startup-conversion-2",
  kind: "hero",
  archetype: "startup-conversion",
  label: "Hero — Startup Split With Media",
  description: "Split conversion hero with headline left and product media right; rise-soft entry; primary CTA in accent.",
  supportsThemes: ["dark", "light"],
  motionPresets: ["rise-soft","magnetic-hover"],
  effects: {},
  density: "comfortable",
  complexity: "standard",
};

export function HeroStartupConversion2(props: Model) {
  const { kicker, title, lede, primaryAction, secondaryAction } = props as any;
  return (
    <section className="sv-section-root sv-hero-startup-conversion-2" data-variant="hero-startup-conversion-2">
      <div className="sv-hero-startup-conversion-2__grid">
        <div className="sv-hero-startup-conversion-2__copy">
          {kicker ? <div className="sv-hero-startup-conversion-2__kicker">{kicker}</div> : null}
          <h1 className="sv-hero-startup-conversion-2__title">{title}</h1>
          {lede ? <p className="sv-hero-startup-conversion-2__lede">{lede}</p> : null}
          {(primaryAction || secondaryAction) ? (
            <div className="sv-hero-startup-conversion-2__actions">
              {primaryAction ? <a className="sv-hero-startup-conversion-2__cta sv-hero-startup-conversion-2__cta--primary" href={primaryAction.href}>{primaryAction.label}</a> : null}
              {secondaryAction ? <a className="sv-hero-startup-conversion-2__cta sv-hero-startup-conversion-2__cta--secondary" href={secondaryAction.href}>{secondaryAction.label}</a> : null}
            </div>
          ) : null}
        </div>
        <div className="sv-hero-startup-conversion-2__visual" aria-hidden="true" />
      </div>
    </section>
  );
}
