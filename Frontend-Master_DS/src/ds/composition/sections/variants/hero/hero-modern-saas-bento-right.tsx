import * as React from "react";

import { Button } from "@/ds/primitives/Button";
import type { PublicSectionModel } from "@/ds/platform/publicSitePreset";
import type { SectionVariantMeta } from "@/ds/composition/sections/_schema";

type HeroModel = Extract<PublicSectionModel, { kind: "hero" }>;

export const HERO_MODERN_SAAS_BENTO_RIGHT_META: SectionVariantMeta = {
  id: "hero-modern-saas-bento-right",
  kind: "hero",
  archetype: "modern-saas",
  label: "Hero — Modern SaaS Bento Right",
  description:
    "Left copy column + right 2x2 bento grid of feature tiles. Glassmorphic tiles over gradient mesh. Stagger text + animated border on tiles.",
  supportsThemes: ["dark", "light"],
  motionPresets: ["stagger-text-60", "rise-soft", "magnetic-hover"],
  effects: {
    gradientMesh: true,
    glassmorphism: true,
    animatedBorder: true,
  },
  density: "extended",
  complexity: "rich",
};

const DEFAULT_TILES = [
  { id: "t1", title: "Realtime sync", body: "Sub-second propagation across regions." },
  { id: "t2", title: "Audit log", body: "Every change, signed and replayable." },
  { id: "t3", title: "SSO + SCIM", body: "Provision teams without manual rules." },
  { id: "t4", title: "99.99% SLA", body: "Multi-region failover, owned by us." },
];

export function HeroModernSaasBentoRight(props: HeroModel) {
  const { kicker, title, lede, primaryAction, secondaryAction } = props;

  return (
    <section
      className="sv-section-root sv-hero-modern-saas-bento-right"
      data-variant={HERO_MODERN_SAAS_BENTO_RIGHT_META.id}
      data-archetype={HERO_MODERN_SAAS_BENTO_RIGHT_META.archetype}
    >
      <div className="sv-overlay sv-hero-modern-saas-bento-right__mesh" aria-hidden="true" />

      <div className="sv-content-layer sv-hero-modern-saas-bento-right__copy motion-stagger-text-60">
        {kicker ? <div className="sv-hero-modern-saas-bento-right__kicker">{kicker}</div> : null}
        <h1 className="sv-hero-modern-saas-bento-right__title">{title}</h1>
        {lede ? <p className="sv-hero-modern-saas-bento-right__lede">{lede}</p> : null}
        {primaryAction || secondaryAction ? (
          <div className="sv-hero-modern-saas-bento-right__actions">
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
      </div>

      <div className="sv-content-layer sv-hero-modern-saas-bento-right__grid motion-rise-soft" aria-hidden="true">
        {DEFAULT_TILES.map((tile, i) => (
          <div
            key={tile.id}
            className={`sv-hero-modern-saas-bento-right__tile sv-hero-modern-saas-bento-right__tile--${i + 1}`}
          >
            <div className="sv-hero-modern-saas-bento-right__tile-title">{tile.title}</div>
            <div className="sv-hero-modern-saas-bento-right__tile-body">{tile.body}</div>
          </div>
        ))}
      </div>
    </section>
  );
}
