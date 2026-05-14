import * as React from "react";

import { Button } from "@/ds/primitives/Button";
import type { PublicSectionModel } from "@/ds/platform/publicSitePreset";
import type { SectionVariantMeta } from "@/ds/composition/sections/_schema";

type HeroModel = Extract<PublicSectionModel, { kind: "hero" }>;

export const HERO_MODERN_SAAS_SCREENSHOT_BELOW_META: SectionVariantMeta = {
  id: "hero-modern-saas-screenshot-below",
  kind: "hero",
  archetype: "modern-saas",
  label: "Hero — Modern SaaS Screenshot Below",
  description:
    "Centered headline + lede + paired CTAs above a wide product screenshot frame. Subtle glassmorphism on the frame edge. Stagger reveal on copy, rise-soft on screenshot.",
  supportsThemes: ["dark", "light"],
  motionPresets: ["stagger-text-60", "rise-soft", "magnetic-hover"],
  effects: {
    glassmorphism: true,
    scrollDrivenScale: true,
  },
  density: "extended",
  complexity: "standard",
};

export function HeroModernSaasScreenshotBelow(props: HeroModel) {
  const { kicker, title, lede, primaryAction, secondaryAction, media, trustChips } = props;

  return (
    <section
      className="sv-section-root sv-hero-modern-saas-screenshot-below"
      data-variant={HERO_MODERN_SAAS_SCREENSHOT_BELOW_META.id}
      data-archetype={HERO_MODERN_SAAS_SCREENSHOT_BELOW_META.archetype}
    >
      <div className="sv-overlay sv-hero-modern-saas-screenshot-below__mesh" aria-hidden="true" />

      <div className="sv-content-layer sv-hero-modern-saas-screenshot-below__copy motion-stagger-text-60">
        {kicker ? <div className="sv-hero-modern-saas-screenshot-below__kicker">{kicker}</div> : null}
        <h1 className="sv-hero-modern-saas-screenshot-below__title">{title}</h1>
        {lede ? <p className="sv-hero-modern-saas-screenshot-below__lede">{lede}</p> : null}
        {primaryAction || secondaryAction ? (
          <div className="sv-hero-modern-saas-screenshot-below__actions">
            {primaryAction ? (
              <Button as="a" href={primaryAction.href} size="lg" className="motion-magnetic-hover">
                {primaryAction.label}
              </Button>
            ) : null}
            {secondaryAction ? (
              <Button as="a" href={secondaryAction.href} variant="secondary" size="lg">
                {secondaryAction.label}
              </Button>
            ) : null}
          </div>
        ) : null}

        {trustChips && trustChips.length > 0 ? (
          <div className="sv-hero-modern-saas-screenshot-below__trust">
            {trustChips.map((chip) => (
              <span key={chip.id} className="sv-hero-modern-saas-screenshot-below__chip">
                {chip.label}
              </span>
            ))}
          </div>
        ) : null}
      </div>

      <div
        className="sv-content-layer sv-hero-modern-saas-screenshot-below__frame motion-rise-soft motion-scroll-scale-1-04"
        aria-hidden={media?.alt ? undefined : true}
      >
        {media?.src ? (
          // eslint-disable-next-line @next/next/no-img-element
          <img
            className="sv-hero-modern-saas-screenshot-below__shot"
            src={media.src}
            alt={media.alt ?? ""}
          />
        ) : (
          <div className="sv-hero-modern-saas-screenshot-below__shot-placeholder" />
        )}
      </div>
    </section>
  );
}
