"use client";

import * as React from "react";

import type { PublicSectionModel } from "@/ds/platform/publicSitePreset";
import type { SectionVariantMeta } from "@/ds/composition/sections/_schema";

type FeaturesModel = Extract<PublicSectionModel, { kind: "features" }>;

export const FEATURES_MODERN_SAAS_TABS_META: SectionVariantMeta = {
  id: "features-modern-saas-tabs",
  kind: "features",
  archetype: "modern-saas",
  label: "Features — Modern SaaS Tabs",
  description:
    "Vertical tab navigation on left; selected feature panel renders on right with title, description, and media slot. Arrow Up/Down keyboard nav. Reveal-glass on panel switch.",
  supportsThemes: ["dark", "light"],
  motionPresets: ["reveal-glass", "rise-soft", "magnetic-hover"],
  effects: {
    glassmorphism: true,
    animatedBorder: true,
  },
  density: "extended",
  complexity: "rich",
};

export function FeaturesModernSaasTabs(props: FeaturesModel) {
  const { header, features } = props;
  const [activeId, setActiveId] = React.useState(features[0]?.id);
  const activeIndex = features.findIndex((f) => f.id === activeId);
  const active = activeIndex >= 0 ? features[activeIndex] : features[0];

  function handleKey(e: React.KeyboardEvent<HTMLButtonElement>) {
    if (e.key !== "ArrowDown" && e.key !== "ArrowUp" && e.key !== "Home" && e.key !== "End") return;
    e.preventDefault();
    if (features.length === 0) return;
    let next = activeIndex;
    if (e.key === "ArrowDown") next = (activeIndex + 1) % features.length;
    if (e.key === "ArrowUp") next = (activeIndex - 1 + features.length) % features.length;
    if (e.key === "Home") next = 0;
    if (e.key === "End") next = features.length - 1;
    const f = features[next];
    if (f) setActiveId(f.id);
  }

  return (
    <section
      className="sv-section-root sv-features-modern-saas-tabs"
      data-variant={FEATURES_MODERN_SAAS_TABS_META.id}
      data-archetype={FEATURES_MODERN_SAAS_TABS_META.archetype}
    >
      <div className="sv-content-layer sv-features-modern-saas-tabs__inner">
        {header ? (
          <header className="sv-features-modern-saas-tabs__header motion-stagger-text-60">
            {header.kicker ? (
              <div className="sv-features-modern-saas-tabs__kicker">{header.kicker}</div>
            ) : null}
            {header.title ? (
              <h2 className="sv-features-modern-saas-tabs__title">{header.title}</h2>
            ) : null}
            {header.lede ? (
              <p className="sv-features-modern-saas-tabs__lede">{header.lede}</p>
            ) : null}
          </header>
        ) : null}

        <div className="sv-features-modern-saas-tabs__layout">
          <div
            className="sv-features-modern-saas-tabs__list"
            role="tablist"
            aria-orientation="vertical"
          >
            {features.map((f) => {
              const selected = f.id === active?.id;
              return (
                <button
                  key={f.id}
                  role="tab"
                  type="button"
                  aria-selected={selected}
                  tabIndex={selected ? 0 : -1}
                  className={`sv-features-modern-saas-tabs__tab${selected ? " is-active" : ""}`}
                  onClick={() => setActiveId(f.id)}
                  onKeyDown={handleKey}
                >
                  <span className="sv-features-modern-saas-tabs__tab-title">{f.title}</span>
                  {f.description ? (
                    <span className="sv-features-modern-saas-tabs__tab-body">{f.description}</span>
                  ) : null}
                </button>
              );
            })}
          </div>

          <div
            className="sv-features-modern-saas-tabs__panel motion-reveal-glass"
            role="tabpanel"
            key={active?.id}
          >
            {active?.media?.src ? (
              // eslint-disable-next-line @next/next/no-img-element
              <img
                className="sv-features-modern-saas-tabs__panel-media"
                src={active.media.src}
                alt={active.media.alt ?? ""}
              />
            ) : (
              <div className="sv-features-modern-saas-tabs__panel-placeholder" aria-hidden="true">
                <div className="sv-features-modern-saas-tabs__panel-placeholder-title">
                  {active?.title}
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
