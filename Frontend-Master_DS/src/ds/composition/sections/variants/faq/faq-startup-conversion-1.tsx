/* eslint-disable @typescript-eslint/no-explicit-any */
import * as React from "react";

import type { PublicSectionModel } from "@/ds/platform/publicSitePreset";
import type { SectionVariantMeta } from "@/ds/composition/sections/_schema";

type Model = Extract<PublicSectionModel, { kind: "faq" }>;

export const FAQ_STARTUP_CONVERSION_1_META: SectionVariantMeta = {
  id: "faq-startup-conversion-1",
  kind: "faq",
  archetype: "startup-conversion",
  label: "FAQ — Startup Accordion",
  description: "Native details/summary accordion with accent caret; rise-soft per row; foreground-secondary answers.",
  supportsThemes: ["dark", "light"],
  motionPresets: ["rise-soft"],
  effects: {},
  density: "comfortable",
  complexity: "standard",
};

export function FaqStartupConversion1(props: Model) {
  const { header, items } = props as any;
  return (
    <section className="sv-section-root sv-faq-startup-conversion-1" data-variant="faq-startup-conversion-1">
      <div className="sv-faq-startup-conversion-1__inner">
        {header ? (
          <div className="sv-faq-startup-conversion-1__header">
            {header.kicker ? <div className="sv-faq-startup-conversion-1__kicker">{header.kicker}</div> : null}
            {header.title ? <h2 className="sv-faq-startup-conversion-1__title">{header.title}</h2> : null}
            {header.lede ? <p className="sv-faq-startup-conversion-1__lede">{header.lede}</p> : null}
          </div>
        ) : null}
        <ul className="sv-faq-startup-conversion-1__list">
          {items.map((it: any) => (
            <li key={it.id} className="sv-faq-startup-conversion-1__item">
              <details>
                <summary className="sv-faq-startup-conversion-1__q">{it.q}</summary>
                <p className="sv-faq-startup-conversion-1__a">{it.a}</p>
              </details>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
