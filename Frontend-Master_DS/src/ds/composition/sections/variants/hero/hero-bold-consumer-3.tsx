/* eslint-disable @typescript-eslint/no-explicit-any */
import * as React from "react";

import type { PublicSectionModel } from "@/ds/platform/publicSitePreset";
import type { SectionVariantMeta } from "@/ds/composition/sections/_schema";

type Model = Extract<PublicSectionModel, { kind: "hero" }>;

export const HERO_BOLD_CONSUMER_3_META: SectionVariantMeta = {
  id: "hero-bold-consumer-3",
  kind: "hero",
  archetype: "bold-consumer",
  label: "Hero — Bold Full-Bleed Photograph",
  description: "Full-bleed photograph with scrim overlay and overlay headline; primary CTA in accent; scroll-scale 1.04 on media.",
  supportsThemes: ["dark", "light"],
  motionPresets: ["rise-soft","scroll-scale-1.04"],
  effects: {"fullBleedPhotograph":true,"scrollDrivenScale":true},
  density: "comfortable",
  complexity: "standard",
};

export function HeroBoldConsumer3(props: Model) {
  const { kicker, title, lede, primaryAction, media } = props as any;
  return (
    <section className="sv-section-root sv-hero-bold-consumer-3" data-variant="hero-bold-consumer-3">
      {media?.src ? (
        // eslint-disable-next-line @next/next/no-img-element
        <img className="sv-hero-bold-consumer-3__bg" src={media.src} alt={media.alt ?? ""} aria-hidden={media.alt ? undefined : true} />
      ) : <div className="sv-hero-bold-consumer-3__bg sv-hero-bold-consumer-3__bg--placeholder" aria-hidden="true" />}
      <div className="sv-hero-bold-consumer-3__scrim" aria-hidden="true" />
      <div className="sv-hero-bold-consumer-3__panel">
        {kicker ? <div className="sv-hero-bold-consumer-3__kicker">{kicker}</div> : null}
        <h1 className="sv-hero-bold-consumer-3__title">{title}</h1>
        {lede ? <p className="sv-hero-bold-consumer-3__lede">{lede}</p> : null}
        {primaryAction ? <a className="sv-hero-bold-consumer-3__cta" href={primaryAction.href}>{primaryAction.label}</a> : null}
      </div>
    </section>
  );
}
