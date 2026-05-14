/* eslint-disable @typescript-eslint/no-explicit-any */
import * as React from "react";

import type { PublicSectionModel } from "@/ds/platform/publicSitePreset";
import type { SectionVariantMeta } from "@/ds/composition/sections/_schema";

type Model = Extract<PublicSectionModel, { kind: "newsletter" }>;

export const NEWSLETTER_STARTUP_CONVERSION_2_META: SectionVariantMeta = {
  id: "newsletter-startup-conversion-2",
  kind: "newsletter",
  archetype: "startup-conversion",
  label: "Newsletter — Startup Inline Form",
  description: "Inline newsletter form with bold headline above and email input + submit; posts to /subscribe; rise-soft entry.",
  supportsThemes: ["dark", "light"],
  motionPresets: ["rise-soft"],
  effects: {},
  density: "comfortable",
  complexity: "minimal",
};

export function NewsletterStartupConversion2(props: Model) {
  const { header, title } = props as any;
  return (
    <section className="sv-section-root sv-newsletter-startup-conversion-2" data-variant="newsletter-startup-conversion-2">
      <div className="sv-newsletter-startup-conversion-2__inner">
        <div className="sv-newsletter-startup-conversion-2__copy">
          {header?.kicker ? <div className="sv-newsletter-startup-conversion-2__kicker">{header.kicker}</div> : null}
          <h2 className="sv-newsletter-startup-conversion-2__title">{header?.title ?? title ?? "Subscribe"}</h2>
          {header?.lede ? <p className="sv-newsletter-startup-conversion-2__lede">{header.lede}</p> : null}
        </div>
        <form className="sv-newsletter-startup-conversion-2__form" action="/subscribe" method="post">
          <label className="sv-newsletter-startup-conversion-2__field">
            <span className="sv-newsletter-startup-conversion-2__label">Email</span>
            <input className="sv-newsletter-startup-conversion-2__input" type="email" name="email" required placeholder="you@example.com" />
          </label>
          <button className="sv-newsletter-startup-conversion-2__submit" type="submit">Subscribe</button>
        </form>
      </div>
    </section>
  );
}
