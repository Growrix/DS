import type { PublicPageModel } from "../../../platform/publicSitePreset";
import type { WireframeMeta } from "./_schema";

export const PAGE_MODERN_SAAS_PRICING_META: WireframeMeta = {
  id: "page-modern-saas-pricing",
  archetype: "modern-saas",
  purpose: "pricing",
  shell: "public",
  label: "Page — Modern SaaS Pricing",
  description:
    "CTA banner strip (page header) → pricing toggle-billing → pricing comparison table → FAQ accordion → CTA card. Standard comfortable density.",
  density: "comfortable",
  complexity: "standard",
  isDefault: true,
  sections: [
    { kind: "cta", variantId: "cta-modern-saas-banner-strip" },
    { kind: "pricing", variantId: "pricing-modern-saas-toggle-billing" },
    { kind: "pricing", variantId: "pricing-modern-saas-comparison-table" },
    { kind: "faq", variantId: "faq-modern-saas-accordion" },
    { kind: "cta", variantId: "cta-modern-saas-card" },
  ],
};

export function getModernSaasPricingDemoPage(): PublicPageModel {
  const tiers = [
    {
      id: "starter",
      name: "Starter",
      price: { monthly: "$0", yearly: "$0", suffix: "/seat / month" },
      description: "For weekend projects and prototypes.",
      features: ["1 environment", "Community Slack", "Single region", "Email support"],
      cta: { label: "Start free", href: "#" },
    },
    {
      id: "team",
      name: "Team",
      price: { monthly: "$29", yearly: "$23", suffix: "/seat / month" },
      description: "For shipping teams up to 50 engineers.",
      features: [
        "Unlimited environments",
        "SSO + SCIM",
        "Multi-region",
        "Audit log retention 90 days",
        "Priority support",
      ],
      cta: { label: "Start trial", href: "#" },
      badge: "Most popular",
      highlight: true,
    },
    {
      id: "enterprise",
      name: "Enterprise",
      price: { monthly: "Custom", yearly: "Custom", suffix: "" },
      description: "Compliance, custom regions, dedicated CSM.",
      features: [
        "Unlimited environments",
        "SSO + SCIM",
        "Multi-region",
        "Custom regions",
        "Audit retention indefinite",
        "SLA 99.99%",
        "Dedicated CSM",
      ],
      cta: { label: "Contact sales", href: "#" },
    },
  ];

  return {
    id: "demo-modern-saas-pricing",
    title: "Modern SaaS — Demo Pricing",
    archetype: "modern-saas",
    sections: [
      {
        id: "header",
        kind: "cta",
        variant: "cta-modern-saas-banner-strip",
        header: {
          kicker: "Pricing",
          title: "Pay for what you ship.",
          lede: "Linear pricing. No surprise multiplier on egress.",
        },
        primaryAction: { label: "Start free", href: "#" },
        secondaryAction: { label: "Talk to sales", href: "#" },
      },
      {
        id: "pricing-cards",
        kind: "pricing",
        variant: "pricing-modern-saas-toggle-billing",
        billingToggle: { monthlyLabel: "Monthly", yearlyLabel: "Yearly", defaultCadence: "monthly" },
        tiers,
        footnote: "All plans include unlimited deploys and rollbacks.",
      },
      {
        id: "pricing-table",
        kind: "pricing",
        variant: "pricing-modern-saas-comparison-table",
        header: {
          kicker: "Compare",
          title: "What's in each plan.",
        },
        tiers,
      },
      {
        id: "faq",
        kind: "faq",
        variant: "faq-modern-saas-accordion",
        header: {
          kicker: "Questions",
          title: "Pricing questions, short answers.",
        },
        items: [
          {
            id: "q1",
            q: "Do you charge for inactive seats?",
            a: "No — inactive seats are billed at $0 and reactivated automatically when used.",
          },
          {
            id: "q2",
            q: "Can I switch between monthly and yearly mid-cycle?",
            a: "Yes. Prorated credits apply automatically on the next invoice.",
          },
          {
            id: "q3",
            q: "Is there a discount for non-profits or open source projects?",
            a: "Yes — 100% off Team for registered non-profits and OSI-licensed projects with ≥6 months of activity.",
          },
        ],
      },
      {
        id: "cta",
        kind: "cta",
        variant: "cta-modern-saas-card",
        header: {
          kicker: "Try it",
          title: "12 minutes from signup to first deploy.",
          lede: "Free 14-day trial. No credit card. SSO on day one.",
        },
        primaryAction: { label: "Start trial", href: "#" },
        secondaryAction: { label: "Talk to sales", href: "#" },
      },
    ],
  };
}
