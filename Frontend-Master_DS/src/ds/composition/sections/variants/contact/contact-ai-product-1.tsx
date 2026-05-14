/* eslint-disable @typescript-eslint/no-explicit-any */
import * as React from "react";

import type { PublicSectionModel } from "@/ds/platform/publicSitePreset";
import type { SectionVariantMeta } from "@/ds/composition/sections/_schema";

type Model = Extract<PublicSectionModel, { kind: "contact" }>;

export const CONTACT_AI_PRODUCT_1_META: SectionVariantMeta = {
  id: "contact-ai-product-1",
  kind: "contact",
  archetype: "ai-product",
  label: "Contact â€” AI Channel Cards",
  description: "Three-column channel cards (email, phone, address) with accent icons and labels; no form; fade-in entry.",
  supportsThemes: ["dark", "light"],
  motionPresets: ["fade-in"],
  effects: {},
  density: "comfortable",
  complexity: "minimal",
};

export function ContactAiProduct1(props: Model) {
  const { header, channels } = props as any;
  return (
    <section className="sv-section-root sv-contact-ai-product-1" data-variant="contact-ai-product-1">
      <div className="sv-contact-ai-product-1__inner">
        {header ? (
          <div className="sv-contact-ai-product-1__header">
            {header.kicker ? <div className="sv-contact-ai-product-1__kicker">{header.kicker}</div> : null}
            {header.title ? <h2 className="sv-contact-ai-product-1__title">{header.title}</h2> : null}
            {header.lede ? <p className="sv-contact-ai-product-1__lede">{header.lede}</p> : null}
          </div>
        ) : null}
        {channels && channels.length > 0 ? (
          <ul className="sv-contact-ai-product-1__channels">
            {channels.map((c: any) => (
              <li key={c.id} className="sv-contact-ai-product-1__channel">
                <span className="sv-contact-ai-product-1__label">{c.label}</span>
                {c.href ? <a className="sv-contact-ai-product-1__value" href={c.href}>{c.value}</a> : <span className="sv-contact-ai-product-1__value">{c.value}</span>}
              </li>
            ))}
          </ul>
        ) : null}
      </div>
    </section>
  );
}
