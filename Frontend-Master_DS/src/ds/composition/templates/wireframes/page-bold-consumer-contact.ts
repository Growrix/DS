import type { PublicPageModel } from "../../../platform/publicSitePreset";
import type { WireframeMeta } from "./_schema";

export const PAGE_BOLD_CONSUMER_CONTACT_META: WireframeMeta = {
  id: "page-bold-consumer-contact",
  archetype: "bold-consumer",
  purpose: "contact",
  shell: "public",
  label: "Page — Bold Consumer Contact",
  description: "Hero full-bleed photograph → bold channel cards → bold accordion FAQ → bold banner CTA.",
  density: "comfortable",
  complexity: "standard",
  isDefault: true,
  sections: [
      { kind: "hero", variantId: "hero-bold-consumer-3" },
      { kind: "contact", variantId: "contact-bold-consumer-1" },
      { kind: "faq", variantId: "faq-bold-consumer-1" },
      { kind: "cta", variantId: "cta-bold-consumer-2" },
  ],
};

/** Demo content factory. Returns a complete PublicPageModel for preview/smoke. */
export function getPageBoldConsumerContactDemoPage(): PublicPageModel {
  return {
    id: "demo-page-bold-consumer-contact",
    title: "Page — Bold Consumer Contact",
    archetype: "bold-consumer",
    sections: [
      {
        id: "hero",
        kind: "hero",
        variant: "hero-bold-consumer-3",
        kicker: "New",
        title: "Build with confidence.",
        lede: "A focused product that delivers measurable outcomes for shipping teams.",
        primaryAction: { label: "Get started", href: "#" },
        secondaryAction: { label: "Learn more", href: "#" },
      },
      {
        id: "contact",
        kind: "contact",
        variant: "contact-bold-consumer-1",
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
        variant: "faq-bold-consumer-1",
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
        variant: "cta-bold-consumer-2",
        header: { kicker: "Get started", title: "Ship your first deploy this afternoon." },
        body: "Free for the first 14 days. No credit card required.",
        primaryAction: { label: "Start free trial", href: "#" },
        secondaryAction: { label: "Talk to sales", href: "#" },
      },
    ],
  };
}
