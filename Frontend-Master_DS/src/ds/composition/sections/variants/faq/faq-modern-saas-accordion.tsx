"use client";

import * as React from "react";

import type { PublicSectionModel } from "@/ds/platform/publicSitePreset";
import type { SectionVariantMeta } from "@/ds/composition/sections/_schema";

type FaqModel = Extract<PublicSectionModel, { kind: "faq" }>;

export const FAQ_MODERN_SAAS_ACCORDION_META: SectionVariantMeta = {
  id: "faq-modern-saas-accordion",
  kind: "faq",
  archetype: "modern-saas",
  label: "FAQ — Modern SaaS Accordion",
  description:
    "Centered narrow column. Each Q renders as an accordion trigger (button with disclosure indicator). ArrowDown/ArrowUp/Home/End keyboard nav. Single-open behaviour. Reveal-glass on expand.",
  supportsThemes: ["dark", "light"],
  motionPresets: ["rise-soft", "reveal-glass"],
  effects: {
    glassmorphism: false,
  },
  density: "comfortable",
  complexity: "standard",
};

export function FaqModernSaasAccordion(props: FaqModel) {
  const { header, items } = props;
  const [openId, setOpenId] = React.useState<string | null>(null);
  const triggerRefs = React.useRef<Map<string, HTMLButtonElement>>(new Map());

  function focusByIndex(i: number) {
    if (items.length === 0) return;
    const idx = ((i % items.length) + items.length) % items.length;
    const target = items[idx];
    if (!target) return;
    const el = triggerRefs.current.get(target.id);
    el?.focus();
  }

  function handleKey(e: React.KeyboardEvent<HTMLButtonElement>, currentIndex: number) {
    if (e.key === "ArrowDown") {
      e.preventDefault();
      focusByIndex(currentIndex + 1);
    } else if (e.key === "ArrowUp") {
      e.preventDefault();
      focusByIndex(currentIndex - 1);
    } else if (e.key === "Home") {
      e.preventDefault();
      focusByIndex(0);
    } else if (e.key === "End") {
      e.preventDefault();
      focusByIndex(items.length - 1);
    }
  }

  return (
    <section
      className="sv-section-root sv-faq-modern-saas-accordion"
      data-variant={FAQ_MODERN_SAAS_ACCORDION_META.id}
      data-archetype={FAQ_MODERN_SAAS_ACCORDION_META.archetype}
    >
      <div className="sv-content-layer sv-faq-modern-saas-accordion__inner">
        {header ? (
          <header className="sv-faq-modern-saas-accordion__header motion-stagger-text-60">
            {header.kicker ? (
              <div className="sv-faq-modern-saas-accordion__kicker">{header.kicker}</div>
            ) : null}
            {header.title ? (
              <h2 className="sv-faq-modern-saas-accordion__title">{header.title}</h2>
            ) : null}
            {header.lede ? (
              <p className="sv-faq-modern-saas-accordion__lede">{header.lede}</p>
            ) : null}
          </header>
        ) : null}

        <ul className="sv-faq-modern-saas-accordion__list motion-rise-soft">
          {items.map((item, i) => {
            const open = openId === item.id;
            const panelId = `faq-modern-saas-${item.id}-panel`;
            const triggerId = `faq-modern-saas-${item.id}-trigger`;
            return (
              <li key={item.id} className="sv-faq-modern-saas-accordion__item">
                <button
                  ref={(el) => {
                    if (el) triggerRefs.current.set(item.id, el);
                    else triggerRefs.current.delete(item.id);
                  }}
                  type="button"
                  id={triggerId}
                  className="sv-faq-modern-saas-accordion__trigger"
                  aria-expanded={open}
                  aria-controls={panelId}
                  onClick={() => setOpenId(open ? null : item.id)}
                  onKeyDown={(e) => handleKey(e, i)}
                >
                  <span className="sv-faq-modern-saas-accordion__q">{item.q}</span>
                  <span
                    aria-hidden="true"
                    className={`sv-faq-modern-saas-accordion__caret${open ? " is-open" : ""}`}
                  >
                    +
                  </span>
                </button>
                <div
                  id={panelId}
                  role="region"
                  aria-labelledby={triggerId}
                  hidden={!open}
                  className="sv-faq-modern-saas-accordion__panel motion-reveal-glass"
                >
                  <p className="sv-faq-modern-saas-accordion__a">{item.a}</p>
                </div>
              </li>
            );
          })}
        </ul>
      </div>
    </section>
  );
}
