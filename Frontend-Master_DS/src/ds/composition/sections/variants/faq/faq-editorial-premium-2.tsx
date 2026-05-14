/* eslint-disable @typescript-eslint/no-explicit-any */
import * as React from "react";

import type { PublicSectionModel } from "@/ds/platform/publicSitePreset";
import type { SectionVariantMeta } from "@/ds/composition/sections/_schema";

type Model = Extract<PublicSectionModel, { kind: "faq" }>;

export const FAQ_EDITORIAL_PREMIUM_2_META: SectionVariantMeta = {
  id: "faq-editorial-premium-2",
  kind: "faq",
  archetype: "editorial-premium",
  label: "FAQ — Editorial Two-Column List",
  description: "Two-column inline FAQ list (all answers visible); generous gap-10; max 80rem container.",
  supportsThemes: ["dark", "light"],
  motionPresets: ["fade-in","stagger-text-60"],
  effects: {},
  density: "extended",
  complexity: "standard",
};

export function FaqEditorialPremium2(props: Model) {
  const { header, items } = props as any;
  const mid = Math.ceil(items.length / 2);
  const left = items.slice(0, mid);
  const right = items.slice(mid);
  return (
    <section className="sv-section-root sv-faq-editorial-premium-2" data-variant="faq-editorial-premium-2">
      <div className="sv-faq-editorial-premium-2__inner">
        {header ? (
          <div className="sv-faq-editorial-premium-2__header">
            {header.kicker ? <div className="sv-faq-editorial-premium-2__kicker">{header.kicker}</div> : null}
            {header.title ? <h2 className="sv-faq-editorial-premium-2__title">{header.title}</h2> : null}
          </div>
        ) : null}
        <div className="sv-faq-editorial-premium-2__cols">
          {[left, right].map((col, idx) => (
            <ul key={idx} className="sv-faq-editorial-premium-2__col">
              {col.map((it: any) => (
                <li key={it.id} className="sv-faq-editorial-premium-2__entry">
                  <h3 className="sv-faq-editorial-premium-2__q">{it.q}</h3>
                  <p className="sv-faq-editorial-premium-2__a">{it.a}</p>
                </li>
              ))}
            </ul>
          ))}
        </div>
      </div>
    </section>
  );
}
