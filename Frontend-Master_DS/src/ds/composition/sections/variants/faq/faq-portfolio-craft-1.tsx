/* eslint-disable @typescript-eslint/no-explicit-any */
import * as React from "react";

import type { PublicSectionModel } from "@/ds/platform/publicSitePreset";
import type { SectionVariantMeta } from "@/ds/composition/sections/_schema";

type Model = Extract<PublicSectionModel, { kind: "faq" }>;

export const FAQ_PORTFOLIO_CRAFT_1_META: SectionVariantMeta = {
  id: "faq-portfolio-craft-1",
  kind: "faq",
  archetype: "portfolio-craft",
  label: "FAQ — Portfolio Accordion",
  description: "Native details/summary accordion with accent caret; fade-in per row; foreground-secondary answers.",
  supportsThemes: ["dark", "light"],
  motionPresets: ["rise-soft","fade-in"],
  effects: {},
  density: "comfortable",
  complexity: "standard",
};

export function FaqPortfolioCraft1(props: Model) {
  const { header, items } = props as any;
  return (
    <section className="sv-section-root sv-faq-portfolio-craft-1" data-variant="faq-portfolio-craft-1">
      <div className="sv-faq-portfolio-craft-1__inner">
        {header ? (
          <div className="sv-faq-portfolio-craft-1__header">
            {header.kicker ? <div className="sv-faq-portfolio-craft-1__kicker">{header.kicker}</div> : null}
            {header.title ? <h2 className="sv-faq-portfolio-craft-1__title">{header.title}</h2> : null}
            {header.lede ? <p className="sv-faq-portfolio-craft-1__lede">{header.lede}</p> : null}
          </div>
        ) : null}
        <ul className="sv-faq-portfolio-craft-1__list">
          {items.map((it: any) => (
            <li key={it.id} className="sv-faq-portfolio-craft-1__item">
              <details>
                <summary className="sv-faq-portfolio-craft-1__q">{it.q}</summary>
                <p className="sv-faq-portfolio-craft-1__a">{it.a}</p>
              </details>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
