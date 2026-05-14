import type { PublicPageModel } from "../../../platform/publicSitePreset";
import type { WireframeMeta } from "./_schema";

export const PAGE_MODERN_SAAS_LANDING_META: WireframeMeta = {
  id: "page-modern-saas-landing",
  archetype: "modern-saas",
  purpose: "landing",
  shell: "public",
  label: "Page — Modern SaaS Landing",
  description:
    "Hero (split) → logo cloud → features (bento) → stats band → testimonials marquee → pricing 3-tier cards → FAQ accordion → CTA split-with-form. Standard comfortable density.",
  density: "comfortable",
  complexity: "standard",
  isDefault: true,
  sections: [
    { kind: "hero", variantId: "hero-modern-saas-split" },
    { kind: "logo-cloud", variantId: "logo-cloud-grid" },
    { kind: "features", variantId: "features-bento-asymmetric" },
    { kind: "stats-band", variantId: "stats-band-4col" },
    { kind: "testimonials", variantId: "testimonials-marquee" },
    { kind: "pricing", variantId: "pricing-modern-saas-3-tier-cards" },
    { kind: "faq", variantId: "faq-modern-saas-accordion" },
    { kind: "cta", variantId: "cta-modern-saas-split-with-form" },
  ],
};

/**
 * Demo content factory. Returns a complete PublicPageModel suitable for
 * rendering this wireframe in a preview or as a smoke test. Real consumers
 * replace this with their own content shapes.
 */
export function getModernSaasLandingDemoPage(): PublicPageModel {
  return {
    id: "demo-modern-saas-landing",
    title: "Modern SaaS — Demo Landing",
    archetype: "modern-saas",
    sections: [
      {
        id: "hero",
        kind: "hero",
        variant: "hero-modern-saas-split",
        kicker: "New • 2026",
        title: "Ship your roadmap, not your tooling.",
        lede: "The platform engineering team for teams that don't have one. Provision, monitor, and roll back from one console.",
        primaryAction: { label: "Start free trial", href: "#" },
        secondaryAction: { label: "Book a demo", href: "#" },
      },
      {
        id: "logos",
        kind: "logo-cloud",
        variant: "logo-cloud-grid",
        header: {
          kicker: "Trusted by",
          title: "Teams that ship every day",
        },
        logos: [
          { id: "l1", label: "Northwind" },
          { id: "l2", label: "Atlas Co." },
          { id: "l3", label: "Helix" },
          { id: "l4", label: "Coastline" },
          { id: "l5", label: "Forge" },
          { id: "l6", label: "Vanta" },
        ],
      },
      {
        id: "features",
        kind: "features",
        variant: "features-bento-asymmetric",
        header: {
          kicker: "Platform",
          title: "Everything you need to run production.",
          lede: "Six primitives. Zero glue code.",
        },
        features: [
          { id: "f1", title: "Provision", description: "Spin up environments from a single declarative spec." },
          { id: "f2", title: "Observe", description: "Per-service latency, error rate, and trace sampling out of the box." },
          { id: "f3", title: "Deploy", description: "Atomic rollouts with one-click rollback windows." },
          { id: "f4", title: "Secure", description: "Workload identity, secret rotation, audit log included." },
          { id: "f5", title: "Scale", description: "Region-aware autoscaling with cost guardrails." },
          { id: "f6", title: "Restore", description: "Point-in-time recovery for any managed resource." },
        ],
      },
      {
        id: "stats",
        kind: "stats-band",
        variant: "stats-band-4col",
        header: {
          kicker: "Results",
          title: "Operators choose calm tooling.",
        },
        stats: [
          { id: "s1", value: "99.99%", label: "Uptime", sublabel: "12-month rolling" },
          { id: "s2", value: "4.7×", label: "Faster deploys", sublabel: "vs. legacy CI" },
          { id: "s3", value: "62%", label: "Lower MTTR", sublabel: "Median across teams" },
          { id: "s4", value: "12 min", label: "Onboarding", sublabel: "From signup to first deploy" },
        ],
      },
      {
        id: "testimonials",
        kind: "testimonials",
        variant: "testimonials-marquee",
        header: {
          kicker: "Customers",
          title: "What teams say after 90 days.",
        },
        items: [
          {
            id: "t1",
            quote: "We cut our deploy pipeline maintenance to almost zero. The console is the SSOT now.",
            name: "Priya Bhattacharjee",
            meta: "Staff SRE, Coastline",
          },
          {
            id: "t2",
            quote: "Audit logs, rollbacks, and SSO worked on day one. No glue scripts. None.",
            name: "Mark Andersson",
            meta: "Head of Platform, Atlas Co.",
          },
          {
            id: "t3",
            quote: "Cheap, calm, and the docs match the product. That's all I want.",
            name: "Diego Salgado",
            meta: "Founding Engineer, Forge",
          },
          {
            id: "t4",
            quote: "The cost guardrails alone paid for the platform in the first quarter.",
            name: "Aiko Tanaka",
            meta: "Engineering Lead, Helix",
          },
        ],
      },
      {
        id: "pricing",
        kind: "pricing",
        variant: "pricing-modern-saas-3-tier-cards",
        header: {
          kicker: "Pricing",
          title: "Pay for what you ship.",
          lede: "Linear pricing. No surprise multiplier on egress.",
        },
        tiers: [
          {
            id: "starter",
            name: "Starter",
            price: { monthly: "$0", suffix: "/seat / month" },
            description: "For weekend projects and prototypes.",
            features: ["1 environment", "Community Slack", "Single region", "Email support"],
            cta: { label: "Start free", href: "#" },
          },
          {
            id: "team",
            name: "Team",
            price: { monthly: "$29", suffix: "/seat / month" },
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
            price: { monthly: "Custom", suffix: "" },
            description: "Compliance, custom regions, dedicated CSM.",
            features: [
              "Everything in Team",
              "Custom regions",
              "SLA 99.99%",
              "Audit retention indefinite",
              "Dedicated CSM",
            ],
            cta: { label: "Contact sales", href: "#" },
          },
        ],
        footnote: "All plans include unlimited deploys and rollbacks.",
      },
      {
        id: "faq",
        kind: "faq",
        variant: "faq-modern-saas-accordion",
        header: {
          kicker: "Questions",
          title: "Common questions, short answers.",
        },
        items: [
          {
            id: "q1",
            q: "How does pricing scale as my team grows?",
            a: "Per seat, no minimums, no surprise multipliers. Cancel any time.",
          },
          {
            id: "q2",
            q: "Can I bring my own cloud account?",
            a: "Yes — on the Enterprise plan. Team and Starter run on our shared multi-tenant clusters.",
          },
          {
            id: "q3",
            q: "Do you support GDPR and SOC 2 Type II?",
            a: "SOC 2 Type II audited annually. GDPR compliant. Reports available under NDA.",
          },
          {
            id: "q4",
            q: "What happens if I downgrade?",
            a: "Features above your new tier become read-only for 14 days, then archive. No data is deleted without confirmation.",
          },
        ],
      },
      {
        id: "cta",
        kind: "cta",
        variant: "cta-modern-saas-split-with-form",
        header: {
          kicker: "Try it",
          title: "Ship your first deploy in 12 minutes.",
          lede: "Free 14-day trial. No credit card. SSO available on day one.",
        },
        primaryAction: { label: "Get started", href: "#" },
      },
    ],
  };
}
