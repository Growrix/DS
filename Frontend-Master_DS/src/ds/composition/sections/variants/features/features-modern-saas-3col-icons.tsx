import * as React from "react";

import type { PublicSectionModel } from "@/ds/platform/publicSitePreset";
import type { SectionVariantMeta } from "@/ds/composition/sections/_schema";

type FeaturesModel = Extract<PublicSectionModel, { kind: "features" }>;

export const FEATURES_MODERN_SAAS_3COL_ICONS_META: SectionVariantMeta = {
  id: "features-modern-saas-3col-icons",
  kind: "features",
  archetype: "modern-saas",
  label: "Features — Modern SaaS 3-Column Icon Grid",
  description:
    "Three-column icon-led feature grid. Each card has a circular accent icon plate, a title, a 60ch description, and an optional link slot. Stagger reveal on enter.",
  supportsThemes: ["dark", "light"],
  motionPresets: ["stagger-text-60", "rise-soft"],
  effects: {
    gradientMesh: false,
    glassmorphism: false,
  },
  density: "comfortable",
  complexity: "standard",
};

export function FeaturesModernSaas3ColIcons(props: FeaturesModel) {
  const { header, features } = props;

  return (
    <section
      className="sv-section-root sv-features-modern-saas-3col-icons"
      data-variant={FEATURES_MODERN_SAAS_3COL_ICONS_META.id}
      data-archetype={FEATURES_MODERN_SAAS_3COL_ICONS_META.archetype}
    >
      <div className="sv-content-layer sv-features-modern-saas-3col-icons__inner">
        {header ? (
          <header className="sv-features-modern-saas-3col-icons__header motion-stagger-text-60">
            {header.kicker ? (
              <div className="sv-features-modern-saas-3col-icons__kicker">{header.kicker}</div>
            ) : null}
            {header.title ? (
              <h2 className="sv-features-modern-saas-3col-icons__title">{header.title}</h2>
            ) : null}
            {header.lede ? (
              <p className="sv-features-modern-saas-3col-icons__lede">{header.lede}</p>
            ) : null}
          </header>
        ) : null}

        <ul className="sv-features-modern-saas-3col-icons__grid motion-rise-soft">
          {features.map((f) => (
            <li key={f.id} className="sv-features-modern-saas-3col-icons__item">
              <div className="sv-features-modern-saas-3col-icons__icon" aria-hidden="true">
                {f.icon ? <span>{f.icon.charAt(0).toUpperCase()}</span> : null}
              </div>
              <h3 className="sv-features-modern-saas-3col-icons__item-title">{f.title}</h3>
              {f.description ? (
                <p className="sv-features-modern-saas-3col-icons__item-body">{f.description}</p>
              ) : null}
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
