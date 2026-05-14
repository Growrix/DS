import type { PublicPageModel } from "../../../platform/publicSitePreset";
import type { WireframeMeta } from "./_schema";

export const PAGE_MODERN_SAAS_CONTACT_META: WireframeMeta = {
  id: "page-modern-saas-contact",
  archetype: "modern-saas",
  purpose: "contact",
  shell: "public",
  label: "Page — Modern SaaS Contact",
  description: "Hero centred title → contact form-info split → FAQ accordion → CTA banner strip. Standard density.",
  density: "comfortable",
  complexity: "standard",
  isDefault: true,
  sections: [
      { kind: "hero", variantId: "hero-modern-saas-split" },
      { kind: "contact", variantId: "contact-modern-saas-form-info" },
      { kind: "faq", variantId: "faq-modern-saas-accordion" },
      { kind: "cta", variantId: "cta-modern-saas-banner-strip" },
  ],
};

/** Demo content factory. Returns a complete PublicPageModel for preview/smoke. */
export function getPageModernSaasContactDemoPage(): PublicPageModel {
  return {
    id: "demo-page-modern-saas-contact",
    title: "Page — Modern SaaS Contact",
    archetype: "modern-saas",
    sections: [
      {
        id: "hero",
        kind: "hero",
        variant: "hero-modern-saas-split",
        kicker: "New",
        title: "Build with confidence.",
        lede: "A focused product that delivers measurable outcomes for shipping teams.",
        primaryAction: { label: "Get started", href: "#" },
        secondaryAction: { label: "Learn more", href: "#" },
      },
      {
        id: "contact",
        kind: "contact",
        variant: "contact-modern-saas-form-info",
        header: { kicker: "Contact", title: "Talk to us." },
        channels: [
          { id: "e1", kind: "email", label: "Email", value: "hello@example.com", href: "mailto:hello@example.com" },
          { id: "p1", kind: "phone", label: "Phone", value: "+1 (555) 123-4567", href: "tel:+15551234567" },
          { id: "a1", kind: "address", label: "Address", value: "123 Market St, Suite 400, San Francisco, CA" },
        ],
      },
      {
        id: "faq",
        kind: "faq",
        variant: "faq-modern-saas-accordion",
        header: { kicker: "Questions", title: "Common questions." },
        items: [
          { id: "q1", q: "How does pricing scale?", a: "Per seat, no minimums." },
          { id: "q2", q: "Can I bring my own data?", a: "Yes — import via API or CSV." },
          { id: "q3", q: "Is there an SLA?", a: "99.99% uptime on paid tiers." },
          { id: "q4", q: "Where is data stored?", a: "Region of your choice; encrypted at rest." },
        ],
      },
      {
        id: "cta",
        kind: "cta",
        variant: "cta-modern-saas-banner-strip",
        header: { kicker: "Get started", title: "Ship your first deploy this afternoon." },
        body: "Free for the first 14 days. No credit card required.",
        primaryAction: { label: "Start free trial", href: "#" },
        secondaryAction: { label: "Talk to sales", href: "#" },
      },
    ],
  };
}
