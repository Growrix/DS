/* eslint-disable @typescript-eslint/no-explicit-any */
import * as React from "react";

import type { PublicSectionModel } from "@/ds/platform/publicSitePreset";
import type { SectionVariantMeta } from "@/ds/composition/sections/_schema";

type Model = Extract<PublicSectionModel, { kind: "newsletter" }>;

export const NEWSLETTER_LOCAL_BUSINESS_TRUST_1_META: SectionVariantMeta = {
  id: "newsletter-local-business-trust-1",
  kind: "newsletter",
  archetype: "local-business-trust",
  label: "Newsletter — Local Inline Form",
  description: "Inline newsletter form (email + submit) with headline above; posts to /subscribe; fade-in entry.",
  supportsThemes: ["dark", "light"],
  motionPresets: ["rise-soft","fade-in"],
  effects: {},
  density: "comfortable",
  complexity: "minimal",
};

export function NewsletterLocalBusinessTrust1(props: Model) {
  const { header, title } = props as any;
  return (
    <section className="sv-section-root sv-newsletter-local-business-trust-1" data-variant="newsletter-local-business-trust-1">
      <div className="sv-newsletter-local-business-trust-1__inner">
        <div className="sv-newsletter-local-business-trust-1__copy">
          {header?.kicker ? <div className="sv-newsletter-local-business-trust-1__kicker">{header.kicker}</div> : null}
          <h2 className="sv-newsletter-local-business-trust-1__title">{header?.title ?? title ?? "Subscribe"}</h2>
          {header?.lede ? <p className="sv-newsletter-local-business-trust-1__lede">{header.lede}</p> : null}
        </div>
        <form className="sv-newsletter-local-business-trust-1__form" action="/subscribe" method="post">
          <label className="sv-newsletter-local-business-trust-1__field">
            <span className="sv-newsletter-local-business-trust-1__label">Email</span>
            <input className="sv-newsletter-local-business-trust-1__input" type="email" name="email" required placeholder="you@example.com" />
          </label>
          <button className="sv-newsletter-local-business-trust-1__submit" type="submit">Subscribe</button>
        </form>
      </div>
    </section>
  );
}
