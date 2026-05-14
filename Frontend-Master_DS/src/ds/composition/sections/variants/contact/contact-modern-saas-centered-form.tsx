"use client";

import * as React from "react";

import { Button } from "@/ds/primitives/Button";
import type { PublicSectionModel } from "@/ds/platform/publicSitePreset";
import type { SectionVariantMeta } from "@/ds/composition/sections/_schema";

type ContactModel = Extract<PublicSectionModel, { kind: "contact" }>;

export const CONTACT_MODERN_SAAS_CENTERED_FORM_META: SectionVariantMeta = {
  id: "contact-modern-saas-centered-form",
  kind: "contact",
  archetype: "modern-saas",
  label: "Contact — Modern SaaS Centered Form",
  description:
    "Single centred form (max-width 56ch). Contact channels rendered as inline row below the form. Suitable for product enquiries with minimal channel surface.",
  supportsThemes: ["dark", "light"],
  motionPresets: ["rise-soft", "stagger-text-60"],
  effects: {},
  density: "comfortable",
  complexity: "standard",
};

export function ContactModernSaasCenteredForm(props: ContactModel) {
  const { header, channels, form } = props;
  const [submitted, setSubmitted] = React.useState(false);

  return (
    <section
      className="sv-section-root sv-contact-modern-saas-centered-form"
      data-variant={CONTACT_MODERN_SAAS_CENTERED_FORM_META.id}
      data-archetype={CONTACT_MODERN_SAAS_CENTERED_FORM_META.archetype}
    >
      <div className="sv-content-layer sv-contact-modern-saas-centered-form__inner">
        {header ? (
          <header className="sv-contact-modern-saas-centered-form__header motion-stagger-text-60">
            {header.kicker ? (
              <div className="sv-contact-modern-saas-centered-form__kicker">{header.kicker}</div>
            ) : null}
            {header.title ? (
              <h2 className="sv-contact-modern-saas-centered-form__title">{header.title}</h2>
            ) : null}
            {header.lede ? (
              <p className="sv-contact-modern-saas-centered-form__lede">{header.lede}</p>
            ) : null}
          </header>
        ) : null}

        {form ? (
          submitted ? (
            <p
              className="sv-contact-modern-saas-centered-form__success motion-rise-soft"
              role="status"
              aria-live="polite"
            >
              Thanks — we&rsquo;ll be in touch shortly.
            </p>
          ) : (
            <form
              className="sv-contact-modern-saas-centered-form__form motion-rise-soft"
              onSubmit={(e) => {
                e.preventDefault();
                setSubmitted(true);
              }}
            >
              {form.fields.map((field) => (
                <label key={field.id} className="sv-contact-modern-saas-centered-form__field">
                  <span className="sv-contact-modern-saas-centered-form__field-label">
                    {field.label}
                  </span>
                  {field.type === "textarea" ? (
                    <textarea
                      className="sv-contact-modern-saas-centered-form__textarea"
                      required={field.required}
                      placeholder={field.placeholder}
                    />
                  ) : (
                    <input
                      className="sv-contact-modern-saas-centered-form__input"
                      type={field.type === "select" ? "text" : field.type}
                      required={field.required}
                      placeholder={field.placeholder}
                    />
                  )}
                </label>
              ))}
              {form.consentNote ? (
                <p className="sv-contact-modern-saas-centered-form__consent">{form.consentNote}</p>
              ) : null}
              <Button type="submit" variant="primary" size="lg">
                {form.submitLabel}
              </Button>
            </form>
          )
        ) : null}

        {channels && channels.length > 0 ? (
          <ul className="sv-contact-modern-saas-centered-form__channels">
            {channels.map((c) => (
              <li key={c.id} className="sv-contact-modern-saas-centered-form__channel">
                <span className="sv-contact-modern-saas-centered-form__channel-label">
                  {c.label}
                </span>
                {c.href ? (
                  <a href={c.href} className="sv-contact-modern-saas-centered-form__channel-value">
                    {c.value}
                  </a>
                ) : (
                  <span className="sv-contact-modern-saas-centered-form__channel-value">
                    {c.value}
                  </span>
                )}
              </li>
            ))}
          </ul>
        ) : null}
      </div>
    </section>
  );
}
