"use client";

import * as React from "react";

import { Button } from "@/ds/primitives/Button";
import { Input } from "@/ds/primitives/Input";
import type { PublicSectionModel } from "@/ds/platform/publicSitePreset";
import type { SectionVariantMeta } from "@/ds/composition/sections/_schema";

type CtaModel = Extract<PublicSectionModel, { kind: "cta" }>;

export const CTA_MODERN_SAAS_SPLIT_WITH_FORM_META: SectionVariantMeta = {
  id: "cta-modern-saas-split-with-form",
  kind: "cta",
  archetype: "modern-saas",
  label: "CTA — Modern SaaS Split With Form",
  description:
    "Left: title + lede + trust note. Right: inline email capture (email input + primary CTA). Gradient mesh band, animated border on form.",
  supportsThemes: ["dark", "light"],
  motionPresets: ["rise-soft", "magnetic-hover"],
  effects: {
    gradientMesh: true,
    animatedBorder: true,
  },
  density: "comfortable",
  complexity: "standard",
};

export function CtaModernSaasSplitWithForm(props: CtaModel) {
  const { header, body, primaryAction } = props;
  const submitLabel = primaryAction?.label ?? "Get started";
  const submitHref = primaryAction?.href ?? "#";

  return (
    <section
      className="sv-section-root sv-cta-modern-saas-split-with-form"
      data-variant={CTA_MODERN_SAAS_SPLIT_WITH_FORM_META.id}
      data-archetype={CTA_MODERN_SAAS_SPLIT_WITH_FORM_META.archetype}
    >
      <div className="sv-overlay sv-cta-modern-saas-split-with-form__mesh" aria-hidden="true" />
      <div className="sv-content-layer sv-cta-modern-saas-split-with-form__inner">
        <div className="sv-cta-modern-saas-split-with-form__copy motion-rise-soft">
          {header?.kicker ? (
            <div className="sv-cta-modern-saas-split-with-form__kicker">{header.kicker}</div>
          ) : null}
          {header?.title ? (
            <h2 className="sv-cta-modern-saas-split-with-form__title">{header.title}</h2>
          ) : null}
          {header?.lede || body ? (
            <p className="sv-cta-modern-saas-split-with-form__lede">{header?.lede ?? body}</p>
          ) : null}
        </div>

        <form
          className="sv-cta-modern-saas-split-with-form__form motion-rise-soft"
          action={submitHref}
          method="get"
          onSubmit={(e) => {
            // Mock UI — wire to backend before going live.
            if (submitHref === "#") e.preventDefault();
          }}
        >
          <label className="sv-cta-modern-saas-split-with-form__label" htmlFor="cta-msb-email">
            Email
          </label>
          <div className="sv-cta-modern-saas-split-with-form__row">
            <Input
              id="cta-msb-email"
              type="email"
              name="email"
              placeholder="you@company.com"
              required
            />
            <Button type="submit" size="lg" className="motion-magnetic-hover">
              {submitLabel}
            </Button>
          </div>
          <p className="sv-cta-modern-saas-split-with-form__note">
            No credit card required. Free 14-day trial.
          </p>
        </form>
      </div>
    </section>
  );
}
