"use client";

import * as React from "react";

import { Button } from "@/ds/primitives/Button";
import type { PublicSectionModel } from "@/ds/platform/publicSitePreset";
import type { SectionVariantMeta } from "@/ds/composition/sections/_schema";

type NewsletterModel = Extract<PublicSectionModel, { kind: "newsletter" }>;

export const NEWSLETTER_MODERN_SAAS_CENTERED_CARD_META: SectionVariantMeta = {
  id: "newsletter-modern-saas-centered-card",
  kind: "newsletter",
  archetype: "modern-saas",
  label: "Newsletter — Modern SaaS Centered Card",
  description:
    "Elevated centered card with kicker, headline, lede, inline email field, and submit button. Card surface uses raised elevation token; email field has visible focus ring.",
  supportsThemes: ["dark", "light"],
  motionPresets: ["rise-soft"],
  effects: {},
  density: "comfortable",
  complexity: "standard",
};

export function NewsletterModernSaasCenteredCard(props: NewsletterModel) {
  const { header, title } = props;
  const [submitted, setSubmitted] = React.useState(false);

  return (
    <section
      className="sv-section-root sv-newsletter-modern-saas-centered-card"
      data-variant={NEWSLETTER_MODERN_SAAS_CENTERED_CARD_META.id}
      data-archetype={NEWSLETTER_MODERN_SAAS_CENTERED_CARD_META.archetype}
    >
      <div className="sv-content-layer sv-newsletter-modern-saas-centered-card__card motion-rise-soft">
        {header?.kicker ? (
          <div className="sv-newsletter-modern-saas-centered-card__kicker">{header.kicker}</div>
        ) : null}
        <h2 className="sv-newsletter-modern-saas-centered-card__title">
          {title ?? header?.title ?? "Subscribe"}
        </h2>
        {header?.lede ? (
          <p className="sv-newsletter-modern-saas-centered-card__lede">{header.lede}</p>
        ) : null}

        <form
          className="sv-newsletter-modern-saas-centered-card__form"
          onSubmit={(e) => {
            e.preventDefault();
            setSubmitted(true);
          }}
          aria-live="polite"
        >
          <label className="sv-newsletter-modern-saas-centered-card__field">
            <span className="sv-newsletter-modern-saas-centered-card__label">Email</span>
            <input
              type="email"
              required
              placeholder="you@example.com"
              className="sv-newsletter-modern-saas-centered-card__input"
            />
          </label>
          <Button type="submit" size="lg">
            {submitted ? "Subscribed" : "Subscribe"}
          </Button>
        </form>
      </div>
    </section>
  );
}
