/* eslint-disable @typescript-eslint/no-explicit-any */
import * as React from "react";

import type { PublicSectionModel } from "@/ds/platform/publicSitePreset";
import type { SectionVariantMeta } from "@/ds/composition/sections/_schema";

type Model = Extract<PublicSectionModel, { kind: "newsletter" }>;

export const NEWSLETTER_EDITORIAL_PREMIUM_1_META: SectionVariantMeta = {
  id: "newsletter-editorial-premium-1",
  kind: "newsletter",
  archetype: "editorial-premium",
  label: "Newsletter — Editorial Centred Subscribe",
  description: "Centred subscribe form posting to /subscribe; native form (server-renderable); max 64rem; consent-friendly layout.",
  supportsThemes: ["dark", "light"],
  motionPresets: ["rise-soft","fade-in"],
  effects: {},
  density: "extended",
  complexity: "standard",
};

export function NewsletterEditorialPremium1(props: Model) {
  const { header, title } = props as any;
  return (
    <section className="sv-section-root sv-newsletter-editorial-premium-1" data-variant="newsletter-editorial-premium-1">
      <div className="sv-newsletter-editorial-premium-1__inner">
        <div className="sv-newsletter-editorial-premium-1__copy">
          {header?.kicker ? <div className="sv-newsletter-editorial-premium-1__kicker">{header.kicker}</div> : null}
          <h2 className="sv-newsletter-editorial-premium-1__title">{header?.title ?? title ?? "Subscribe"}</h2>
          {header?.lede ? <p className="sv-newsletter-editorial-premium-1__lede">{header.lede}</p> : null}
        </div>
        <form className="sv-newsletter-editorial-premium-1__form" action="/subscribe" method="post">
          <label className="sv-newsletter-editorial-premium-1__field">
            <span className="sv-newsletter-editorial-premium-1__label">Email</span>
            <input className="sv-newsletter-editorial-premium-1__input" type="email" name="email" required placeholder="you@example.com" />
          </label>
          <button className="sv-newsletter-editorial-premium-1__submit" type="submit">Subscribe</button>
        </form>
      </div>
    </section>
  );
}
