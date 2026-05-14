"use client";

import * as React from "react";

import { Button } from "@/ds/primitives/Button";
import type { PublicSectionModel } from "@/ds/platform/publicSitePreset";
import type { SectionVariantMeta } from "@/ds/composition/sections/_schema";

type NewsletterModel = Extract<PublicSectionModel, { kind: "newsletter" }>;

export const NEWSLETTER_MODERN_SAAS_SPLIT_ILLUSTRATION_META: SectionVariantMeta = {
  id: "newsletter-modern-saas-split-illustration",
  kind: "newsletter",
  archetype: "modern-saas",
  label: "Newsletter — Modern SaaS Split Illustration",
  description:
    "Two-column layout: gradient-mesh illustration panel left, signup form right. Form is single email field + button. Collapses to stacked layout under 720 px.",
  supportsThemes: ["dark", "light"],
  motionPresets: ["rise-soft", "reveal-glass"],
  effects: { gradientMesh: true },
  density: "comfortable",
  complexity: "standard",
};

export function NewsletterModernSaasSplitIllustration(props: NewsletterModel) {
  const { header, title } = props;
  const [submitted, setSubmitted] = React.useState(false);
  const heading = header?.title ?? title ?? "Subscribe";

  return (
    <section
      className="sv-section-root sv-newsletter-modern-saas-split-illustration"
      data-variant={NEWSLETTER_MODERN_SAAS_SPLIT_ILLUSTRATION_META.id}
      data-archetype={NEWSLETTER_MODERN_SAAS_SPLIT_ILLUSTRATION_META.archetype}
    >
      <div className="sv-content-layer sv-newsletter-modern-saas-split-illustration__grid motion-rise-soft">
        <div
          className="sv-newsletter-modern-saas-split-illustration__illustration motion-reveal-glass"
          aria-hidden="true"
        />
        <div className="sv-newsletter-modern-saas-split-illustration__body">
          {header?.kicker ? (
            <div className="sv-newsletter-modern-saas-split-illustration__kicker">
              {header.kicker}
            </div>
          ) : null}
          <h2 className="sv-newsletter-modern-saas-split-illustration__title">{heading}</h2>
          {header?.lede ? (
            <p className="sv-newsletter-modern-saas-split-illustration__lede">{header.lede}</p>
          ) : null}
          {submitted ? (
            <p
              className="sv-newsletter-modern-saas-split-illustration__success"
              role="status"
              aria-live="polite"
            >
              Thanks — check your inbox.
            </p>
          ) : (
            <form
              className="sv-newsletter-modern-saas-split-illustration__form"
              onSubmit={(e) => {
                e.preventDefault();
                setSubmitted(true);
              }}
            >
              <label className="sv-newsletter-modern-saas-split-illustration__field">
                <span className="sv-newsletter-modern-saas-split-illustration__field-label">
                  Email
                </span>
                <input
                  className="sv-newsletter-modern-saas-split-illustration__input"
                  type="email"
                  required
                  placeholder="you@company.com"
                />
              </label>
              <Button type="submit" variant="primary" size="md">
                Subscribe
              </Button>
            </form>
          )}
        </div>
      </div>
    </section>
  );
}
