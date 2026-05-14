/* eslint-disable @typescript-eslint/no-explicit-any */
import * as React from "react";

import type { PublicSectionModel } from "@/ds/platform/publicSitePreset";
import type { SectionVariantMeta } from "@/ds/composition/sections/_schema";

type Model = Extract<PublicSectionModel, { kind: "faq" }>;

export const FAQ_AI_PRODUCT_1_META: SectionVariantMeta = {
  id: "faq-ai-product-1",
  kind: "faq",
  archetype: "ai-product",
  label: "FAQ â€” AI Accordion",
  description: "Single-column accordion using native details/summary; fade-in per row; caret rotates on open via CSS.",
  supportsThemes: ["dark", "light"],
  motionPresets: ["fade-in"],
  effects: {},
  density: "comfortable",
  complexity: "standard",
};

export function FaqAiProduct1(props: Model) {
  const { header, items } = props as any;
  return (
    <section className="sv-section-root sv-faq-ai-product-1" data-variant="faq-ai-product-1">
      <div className="sv-faq-ai-product-1__inner">
        {header ? (
          <div className="sv-faq-ai-product-1__header">
            {header.kicker ? <div className="sv-faq-ai-product-1__kicker">{header.kicker}</div> : null}
            {header.title ? <h2 className="sv-faq-ai-product-1__title">{header.title}</h2> : null}
            {header.lede ? <p className="sv-faq-ai-product-1__lede">{header.lede}</p> : null}
          </div>
        ) : null}
        <ul className="sv-faq-ai-product-1__list">
          {items.map((it: any) => (
            <li key={it.id} className="sv-faq-ai-product-1__item">
              <details>
                <summary className="sv-faq-ai-product-1__q">{it.q}</summary>
                <p className="sv-faq-ai-product-1__a">{it.a}</p>
              </details>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
