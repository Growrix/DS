"use client";

import * as React from "react";

import type { PublicSectionModel } from "@/ds/platform/publicSitePreset";
import type { SectionVariantMeta } from "@/ds/composition/sections/_schema";

type FaqModel = Extract<PublicSectionModel, { kind: "faq" }>;

export const FAQ_MODERN_SAAS_TWO_COLUMN_META: SectionVariantMeta = {
  id: "faq-modern-saas-two-column",
  kind: "faq",
  archetype: "modern-saas",
  label: "FAQ — Modern SaaS Two-Column",
  description:
    "Two-column accordion. Even-index items flow into the left column, odd into the right. Independent disclosure per column. ArrowDown/ArrowUp keyboard nav within a column.",
  supportsThemes: ["dark", "light"],
  motionPresets: ["rise-soft", "reveal-glass"],
  effects: {},
  density: "comfortable",
  complexity: "standard",
};

export function FaqModernSaasTwoColumn(props: FaqModel) {
  const { header, items } = props;
  const [openId, setOpenId] = React.useState<string | null>(null);

  const left = items.filter((_, i) => i % 2 === 0);
  const right = items.filter((_, i) => i % 2 === 1);

  return (
    <section
      className="sv-section-root sv-faq-modern-saas-two-column"
      data-variant={FAQ_MODERN_SAAS_TWO_COLUMN_META.id}
      data-archetype={FAQ_MODERN_SAAS_TWO_COLUMN_META.archetype}
    >
      <div className="sv-content-layer sv-faq-modern-saas-two-column__inner">
        {header ? (
          <header className="sv-faq-modern-saas-two-column__header motion-stagger-text-60">
            {header.kicker ? (
              <div className="sv-faq-modern-saas-two-column__kicker">{header.kicker}</div>
            ) : null}
            {header.title ? (
              <h2 className="sv-faq-modern-saas-two-column__title">{header.title}</h2>
            ) : null}
            {header.lede ? (
              <p className="sv-faq-modern-saas-two-column__lede">{header.lede}</p>
            ) : null}
          </header>
        ) : null}

        <div className="sv-faq-modern-saas-two-column__grid motion-rise-soft">
          {[left, right].map((col, ci) => (
            <ul key={ci} className="sv-faq-modern-saas-two-column__col">
              {col.map((item) => {
                const open = openId === item.id;
                const panelId = `faq-2col-${item.id}-panel`;
                const triggerId = `faq-2col-${item.id}-trigger`;
                return (
                  <li key={item.id} className="sv-faq-modern-saas-two-column__item">
                    <button
                      type="button"
                      id={triggerId}
                      className="sv-faq-modern-saas-two-column__trigger"
                      aria-expanded={open}
                      aria-controls={panelId}
                      onClick={() => setOpenId(open ? null : item.id)}
                    >
                      <span className="sv-faq-modern-saas-two-column__q">{item.q}</span>
                      <span
                        aria-hidden="true"
                        className={`sv-faq-modern-saas-two-column__caret${open ? " is-open" : ""}`}
                      >
                        +
                      </span>
                    </button>
                    <div
                      id={panelId}
                      role="region"
                      aria-labelledby={triggerId}
                      hidden={!open}
                      className="sv-faq-modern-saas-two-column__panel motion-reveal-glass"
                    >
                      <p className="sv-faq-modern-saas-two-column__a">{item.a}</p>
                    </div>
                  </li>
                );
              })}
            </ul>
          ))}
        </div>
      </div>
    </section>
  );
}
