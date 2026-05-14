/* eslint-disable @typescript-eslint/no-explicit-any */
import * as React from "react";

import type { PublicSectionModel } from "@/ds/platform/publicSitePreset";
import type { SectionVariantMeta } from "@/ds/composition/sections/_schema";

type Model = Extract<PublicSectionModel, { kind: "newsletter" }>;

export const NEWSLETTER_BOLD_CONSUMER_1_META: SectionVariantMeta = {
  id: "newsletter-bold-consumer-1",
  kind: "newsletter",
  archetype: "bold-consumer",
  label: "Newsletter — Bold Inline Form",
  description: "Inline newsletter form with bold headline above and email input + submit; posts to /subscribe; rise-soft entry.",
  supportsThemes: ["dark", "light"],
  motionPresets: ["rise-soft"],
  effects: {},
  density: "comfortable",
  complexity: "minimal",
};

export function NewsletterBoldConsumer1(props: Model) {
  const { header, title } = props as any;
  return (
    <section className="sv-section-root sv-newsletter-bold-consumer-1" data-variant="newsletter-bold-consumer-1">
      <div className="sv-newsletter-bold-consumer-1__inner">
        <div className="sv-newsletter-bold-consumer-1__copy">
          {header?.kicker ? <div className="sv-newsletter-bold-consumer-1__kicker">{header.kicker}</div> : null}
          <h2 className="sv-newsletter-bold-consumer-1__title">{header?.title ?? title ?? "Subscribe"}</h2>
          {header?.lede ? <p className="sv-newsletter-bold-consumer-1__lede">{header.lede}</p> : null}
        </div>
        <form className="sv-newsletter-bold-consumer-1__form" action="/subscribe" method="post">
          <label className="sv-newsletter-bold-consumer-1__field">
            <span className="sv-newsletter-bold-consumer-1__label">Email</span>
            <input className="sv-newsletter-bold-consumer-1__input" type="email" name="email" required placeholder="you@example.com" />
          </label>
          <button className="sv-newsletter-bold-consumer-1__submit" type="submit">Subscribe</button>
        </form>
      </div>
    </section>
  );
}
