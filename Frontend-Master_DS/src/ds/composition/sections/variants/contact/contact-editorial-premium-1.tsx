/* eslint-disable @typescript-eslint/no-explicit-any */
import * as React from "react";

import type { PublicSectionModel } from "@/ds/platform/publicSitePreset";
import type { SectionVariantMeta } from "@/ds/composition/sections/_schema";

type Model = Extract<PublicSectionModel, { kind: "contact" }>;

export const CONTACT_EDITORIAL_PREMIUM_1_META: SectionVariantMeta = {
  id: "contact-editorial-premium-1",
  kind: "contact",
  archetype: "editorial-premium",
  label: "Contact — Editorial Channel Cards",
  description: "Auto-fit channel cards (email/phone/address) on surface-raised; no inline form; max 64rem.",
  supportsThemes: ["dark", "light"],
  motionPresets: ["rise-soft","fade-in"],
  effects: {},
  density: "extended",
  complexity: "standard",
};

export function ContactEditorialPremium1(props: Model) {
  const { header, channels } = props as any;
  return (
    <section className="sv-section-root sv-contact-editorial-premium-1" data-variant="contact-editorial-premium-1">
      <div className="sv-contact-editorial-premium-1__inner">
        {header ? (
          <div className="sv-contact-editorial-premium-1__header">
            {header.kicker ? <div className="sv-contact-editorial-premium-1__kicker">{header.kicker}</div> : null}
            {header.title ? <h2 className="sv-contact-editorial-premium-1__title">{header.title}</h2> : null}
            {header.lede ? <p className="sv-contact-editorial-premium-1__lede">{header.lede}</p> : null}
          </div>
        ) : null}
        {channels && channels.length > 0 ? (
          <ul className="sv-contact-editorial-premium-1__channels">
            {channels.map((c: any) => (
              <li key={c.id} className="sv-contact-editorial-premium-1__channel">
                <span className="sv-contact-editorial-premium-1__label">{c.label}</span>
                {c.href ? <a className="sv-contact-editorial-premium-1__value" href={c.href}>{c.value}</a> : <span className="sv-contact-editorial-premium-1__value">{c.value}</span>}
              </li>
            ))}
          </ul>
        ) : null}
      </div>
    </section>
  );
}
