/* eslint-disable @typescript-eslint/no-explicit-any */
import * as React from "react";

import type { PublicSectionModel } from "@/ds/platform/publicSitePreset";
import type { SectionVariantMeta } from "@/ds/composition/sections/_schema";

type Model = Extract<PublicSectionModel, { kind: "faq" }>;

export const FAQ_LOCAL_BUSINESS_TRUST_1_META: SectionVariantMeta = {
  id: "faq-local-business-trust-1",
  kind: "faq",
  archetype: "local-business-trust",
  label: "FAQ — Local Accordion",
  description: "Native details/summary accordion with accent caret; fade-in per row; foreground-secondary answers.",
  supportsThemes: ["dark", "light"],
  motionPresets: ["rise-soft","fade-in"],
  effects: {},
  density: "comfortable",
  complexity: "standard",
};

export function FaqLocalBusinessTrust1(props: Model) {
  const { header, items } = props as any;
  return (
    <section className="sv-section-root sv-faq-local-business-trust-1" data-variant="faq-local-business-trust-1">
      <div className="sv-faq-local-business-trust-1__inner">
        {header ? (
          <div className="sv-faq-local-business-trust-1__header">
            {header.kicker ? <div className="sv-faq-local-business-trust-1__kicker">{header.kicker}</div> : null}
            {header.title ? <h2 className="sv-faq-local-business-trust-1__title">{header.title}</h2> : null}
            {header.lede ? <p className="sv-faq-local-business-trust-1__lede">{header.lede}</p> : null}
          </div>
        ) : null}
        <ul className="sv-faq-local-business-trust-1__list">
          {items.map((it: any) => (
            <li key={it.id} className="sv-faq-local-business-trust-1__item">
              <details>
                <summary className="sv-faq-local-business-trust-1__q">{it.q}</summary>
                <p className="sv-faq-local-business-trust-1__a">{it.a}</p>
              </details>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
