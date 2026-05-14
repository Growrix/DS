"use client";

import * as React from "react";

import { Button } from "@/ds/primitives/Button";
import type { PublicSectionModel } from "@/ds/platform/publicSitePreset";
import type { SectionVariantMeta } from "@/ds/composition/sections/_schema";

type ContactModel = Extract<PublicSectionModel, { kind: "contact" }>;

export const CONTACT_MODERN_SAAS_FORM_INFO_META: SectionVariantMeta = {
  id: "contact-modern-saas-form-info",
  kind: "contact",
  archetype: "modern-saas",
  label: "Contact — Modern SaaS Form + Info",
  description:
    "Two-column split; left column lists contact channels; right column hosts inline form (text, email, textarea); consent note rendered below submit.",
  supportsThemes: ["dark", "light"],
  motionPresets: ["rise-soft"],
  effects: {},
  density: "comfortable",
  complexity: "standard",
};

export function ContactModernSaasFormInfo(props: ContactModel) {
  const { header, channels, form } = props;
  const [submitted, setSubmitted] = React.useState(false);

  return (
    <section
      className="sv-section-root sv-contact-modern-saas-form-info"
      data-variant={CONTACT_MODERN_SAAS_FORM_INFO_META.id}
      data-archetype={CONTACT_MODERN_SAAS_FORM_INFO_META.archetype}
    >
      <div className="sv-content-layer sv-contact-modern-saas-form-info__inner">
        {header ? (
          <header className="sv-contact-modern-saas-form-info__header motion-stagger-text-60">
            {header.kicker ? (
              <div className="sv-contact-modern-saas-form-info__kicker">{header.kicker}</div>
            ) : null}
            {header.title ? (
              <h2 className="sv-contact-modern-saas-form-info__title">{header.title}</h2>
            ) : null}
            {header.lede ? (
              <p className="sv-contact-modern-saas-form-info__lede">{header.lede}</p>
            ) : null}
          </header>
        ) : null}

        <div className="sv-contact-modern-saas-form-info__grid motion-rise-soft">
          <aside className="sv-contact-modern-saas-form-info__info">
            {channels && channels.length > 0 ? (
              <ul className="sv-contact-modern-saas-form-info__channels">
                {channels.map((c) => (
                  <li key={c.id} className="sv-contact-modern-saas-form-info__channel">
                    <div className="sv-contact-modern-saas-form-info__channel-label">{c.label}</div>
                    {c.href ? (
                      <a href={c.href} className="sv-contact-modern-saas-form-info__channel-value">
                        {c.value}
                      </a>
                    ) : (
                      <div className="sv-contact-modern-saas-form-info__channel-value">{c.value}</div>
                    )}
                  </li>
                ))}
              </ul>
            ) : null}
          </aside>

          {form ? (
            <form
              className="sv-contact-modern-saas-form-info__form"
              onSubmit={(e) => {
                e.preventDefault();
                setSubmitted(true);
              }}
              aria-live="polite"
            >
              {form.fields.map((field) => (
                <label key={field.id} className="sv-contact-modern-saas-form-info__field">
                  <span className="sv-contact-modern-saas-form-info__label">
                    {field.label}
                    {field.required ? <span aria-hidden="true"> *</span> : null}
                  </span>
                  {field.type === "textarea" ? (
                    <textarea
                      required={field.required}
                      placeholder={field.placeholder}
                      className="sv-contact-modern-saas-form-info__textarea"
                      rows={4}
                    />
                  ) : (
                    <input
                      type={field.type === "select" ? "text" : field.type}
                      required={field.required}
                      placeholder={field.placeholder}
                      className="sv-contact-modern-saas-form-info__input"
                    />
                  )}
                </label>
              ))}
              <Button type="submit" size="lg">
                {submitted ? "Sent" : form.submitLabel}
              </Button>
              {form.consentNote ? (
                <p className="sv-contact-modern-saas-form-info__consent">{form.consentNote}</p>
              ) : null}
            </form>
          ) : null}
        </div>
      </div>
    </section>
  );
}
