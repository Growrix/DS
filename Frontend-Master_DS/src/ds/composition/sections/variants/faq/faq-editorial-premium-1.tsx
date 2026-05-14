/* eslint-disable @typescript-eslint/no-explicit-any */
import * as React from "react";

import type { PublicSectionModel } from "@/ds/platform/publicSitePreset";
import type { SectionVariantMeta } from "@/ds/composition/sections/_schema";

type Model = Extract<PublicSectionModel, { kind: "faq" }>;

export const FAQ_EDITORIAL_PREMIUM_1_META: SectionVariantMeta = {
  id: "faq-editorial-premium-1",
  kind: "faq",
  archetype: "editorial-premium",
  label: "FAQ — Editorial Accordion",
  description: "Native details/summary accordion with hairline dividers and oversized question type; max 64rem container.",
  supportsThemes: ["dark", "light"],
  motionPresets: ["fade-in"],
  effects: {},
  density: "extended",
  complexity: "standard",
};

export function FaqEditorialPremium1(props: Model) {
  const { header, items } = props as any;
  return (
    <section className="sv-section-root sv-faq-editorial-premium-1" data-variant="faq-editorial-premium-1">
      <div className="sv-faq-editorial-premium-1__inner">
        {header ? (
          <div className="sv-faq-editorial-premium-1__header">
            {header.kicker ? <div className="sv-faq-editorial-premium-1__kicker">{header.kicker}</div> : null}
            {header.title ? <h2 className="sv-faq-editorial-premium-1__title">{header.title}</h2> : null}
            {header.lede ? <p className="sv-faq-editorial-premium-1__lede">{header.lede}</p> : null}
          </div>
        ) : null}
        <ul className="sv-faq-editorial-premium-1__list">
          {items.map((it: any) => (
            <li key={it.id} className="sv-faq-editorial-premium-1__item">
              <details>
                <summary className="sv-faq-editorial-premium-1__q">{it.q}</summary>
                <p className="sv-faq-editorial-premium-1__a">{it.a}</p>
              </details>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
