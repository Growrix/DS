/* eslint-disable @typescript-eslint/no-explicit-any */
import * as React from "react";

import type { PublicSectionModel } from "@/ds/platform/publicSitePreset";
import type { SectionVariantMeta } from "@/ds/composition/sections/_schema";

type Model = Extract<PublicSectionModel, { kind: "hero" }>;

export const HERO_BOLD_CONSUMER_2_META: SectionVariantMeta = {
  id: "hero-bold-consumer-2",
  kind: "hero",
  archetype: "bold-consumer",
  label: "Hero — Bold Split Spotlight",
  description: "Split hero with oversized headline left and saturated media tile right; CTA pair uses accent emphasis; motion rise-soft 320ms.",
  supportsThemes: ["dark", "light"],
  motionPresets: ["rise-soft","magnetic-hover"],
  effects: {},
  density: "comfortable",
  complexity: "standard",
};

export function HeroBoldConsumer2(props: Model) {
  const { kicker, title, lede, primaryAction, secondaryAction } = props as any;
  return (
    <section className="sv-section-root sv-hero-bold-consumer-2" data-variant="hero-bold-consumer-2">
      <div className="sv-hero-bold-consumer-2__grid">
        <div className="sv-hero-bold-consumer-2__copy">
          {kicker ? <div className="sv-hero-bold-consumer-2__kicker">{kicker}</div> : null}
          <h1 className="sv-hero-bold-consumer-2__title">{title}</h1>
          {lede ? <p className="sv-hero-bold-consumer-2__lede">{lede}</p> : null}
          {(primaryAction || secondaryAction) ? (
            <div className="sv-hero-bold-consumer-2__actions">
              {primaryAction ? <a className="sv-hero-bold-consumer-2__cta sv-hero-bold-consumer-2__cta--primary" href={primaryAction.href}>{primaryAction.label}</a> : null}
              {secondaryAction ? <a className="sv-hero-bold-consumer-2__cta sv-hero-bold-consumer-2__cta--secondary" href={secondaryAction.href}>{secondaryAction.label}</a> : null}
            </div>
          ) : null}
        </div>
        <div className="sv-hero-bold-consumer-2__visual" aria-hidden="true" />
      </div>
    </section>
  );
}
