/* eslint-disable @typescript-eslint/no-explicit-any */
import * as React from "react";

import type { PublicSectionModel } from "@/ds/platform/publicSitePreset";
import type { SectionVariantMeta } from "@/ds/composition/sections/_schema";

type Model = Extract<PublicSectionModel, { kind: "newsletter" }>;

export const NEWSLETTER_EDITORIAL_PREMIUM_2_META: SectionVariantMeta = {
  id: "newsletter-editorial-premium-2",
  kind: "newsletter",
  archetype: "editorial-premium",
  label: "Newsletter — Editorial Quiet Subscribe",
  description: "Quiet subscribe block, single line CTA, large headline, narrow inline form; emphasis on copy not chrome.",
  supportsThemes: ["dark", "light"],
  motionPresets: ["fade-in"],
  effects: {},
  density: "comfortable",
  complexity: "minimal",
};

export function NewsletterEditorialPremium2(props: Model) {
  const { header, title } = props as any;
  return (
    <section className="sv-section-root sv-newsletter-editorial-premium-2" data-variant="newsletter-editorial-premium-2">
      <div className="sv-newsletter-editorial-premium-2__inner">
        <div className="sv-newsletter-editorial-premium-2__copy">
          {header?.kicker ? <div className="sv-newsletter-editorial-premium-2__kicker">{header.kicker}</div> : null}
          <h2 className="sv-newsletter-editorial-premium-2__title">{header?.title ?? title ?? "Subscribe"}</h2>
          {header?.lede ? <p className="sv-newsletter-editorial-premium-2__lede">{header.lede}</p> : null}
        </div>
        <form className="sv-newsletter-editorial-premium-2__form" action="/subscribe" method="post">
          <label className="sv-newsletter-editorial-premium-2__field">
            <span className="sv-newsletter-editorial-premium-2__label">Email</span>
            <input className="sv-newsletter-editorial-premium-2__input" type="email" name="email" required placeholder="you@example.com" />
          </label>
          <button className="sv-newsletter-editorial-premium-2__submit" type="submit">Subscribe</button>
        </form>
      </div>
    </section>
  );
}
