/* eslint-disable @typescript-eslint/no-explicit-any */
import * as React from "react";

import type { PublicSectionModel } from "@/ds/platform/publicSitePreset";
import type { SectionVariantMeta } from "@/ds/composition/sections/_schema";

type Model = Extract<PublicSectionModel, { kind: "contact" }>;

export const CONTACT_STARTUP_CONVERSION_1_META: SectionVariantMeta = {
  id: "contact-startup-conversion-1",
  kind: "contact",
  archetype: "startup-conversion",
  label: "Contact — Startup Channel Cards",
  description: "Three-column channel cards (email, phone, address) with accent icons and labels; no form; rise-soft entry.",
  supportsThemes: ["dark", "light"],
  motionPresets: ["rise-soft"],
  effects: {},
  density: "comfortable",
  complexity: "minimal",
};

export function ContactStartupConversion1(props: Model) {
  const { header, channels } = props as any;
  return (
    <section className="sv-section-root sv-contact-startup-conversion-1" data-variant="contact-startup-conversion-1">
      <div className="sv-contact-startup-conversion-1__inner">
        {header ? (
          <div className="sv-contact-startup-conversion-1__header">
            {header.kicker ? <div className="sv-contact-startup-conversion-1__kicker">{header.kicker}</div> : null}
            {header.title ? <h2 className="sv-contact-startup-conversion-1__title">{header.title}</h2> : null}
            {header.lede ? <p className="sv-contact-startup-conversion-1__lede">{header.lede}</p> : null}
          </div>
        ) : null}
        {channels && channels.length > 0 ? (
          <ul className="sv-contact-startup-conversion-1__channels">
            {channels.map((c: any) => (
              <li key={c.id} className="sv-contact-startup-conversion-1__channel">
                <span className="sv-contact-startup-conversion-1__label">{c.label}</span>
                {c.href ? <a className="sv-contact-startup-conversion-1__value" href={c.href}>{c.value}</a> : <span className="sv-contact-startup-conversion-1__value">{c.value}</span>}
              </li>
            ))}
          </ul>
        ) : null}
      </div>
    </section>
  );
}
