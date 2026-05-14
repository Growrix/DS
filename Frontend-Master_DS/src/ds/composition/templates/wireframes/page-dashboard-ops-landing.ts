import type { PublicPageModel } from "../../../platform/publicSitePreset";
import type { WireframeMeta } from "./_schema";

export const PAGE_DASHBOARD_OPS_LANDING_META: WireframeMeta = {
  id: "page-dashboard-ops-landing",
  archetype: "dashboard-ops",
  purpose: "landing",
  shell: "public",
  label: "Page — Dashboard Ops Landing",
  description: "Ops centred hero → ops 3-col capabilities → ops 4-col KPI stats → ops vertical process → ops 2-col FAQ → ops banner CTA.",
  density: "compact",
  complexity: "standard",
  isDefault: true,
  sections: [
      { kind: "hero", variantId: "hero-dashboard-ops-1" },
      { kind: "features", variantId: "features-dashboard-ops-1" },
      { kind: "stats-band", variantId: "stats-band-dashboard-ops-1" },
      { kind: "process-steps", variantId: "process-steps-dashboard-ops-1" },
      { kind: "faq", variantId: "faq-dashboard-ops-1" },
      { kind: "cta", variantId: "cta-dashboard-ops-1" },
  ],
};

/** Demo content factory. Returns a complete PublicPageModel for preview/smoke. */
export function getPageDashboardOpsLandingDemoPage(): PublicPageModel {
  return {
    id: "demo-page-dashboard-ops-landing",
    title: "Page — Dashboard Ops Landing",
    archetype: "dashboard-ops",
    sections: [
      {
        id: "hero",
        kind: "hero",
        variant: "hero-dashboard-ops-1",
        kicker: "New",
        title: "Build with confidence.",
        lede: "A focused product that delivers measurable outcomes for shipping teams.",
        primaryAction: { label: "Get started", href: "#" },
        secondaryAction: { label: "Learn more", href: "#" },
      },
      {
        id: "features",
        kind: "features",
        variant: "features-dashboard-ops-1",
        header: { kicker: "Capabilities", title: "Everything you need." },
        features: [
          { id: "f1", title: "Reliable", description: "Built on proven primitives." },
          { id: "f2", title: "Fast", description: "Sub-second response across the board." },
          { id: "f3", title: "Secure", description: "Audit log and SSO out of the box." },
          { id: "f4", title: "Open", description: "First-class APIs and exports." },
          { id: "f5", title: "Scalable", description: "Grows with your workload." },
          { id: "f6", title: "Calm", description: "Operators-first design throughout." },
        ],
      },
      {
        id: "stats",
        kind: "stats-band",
        variant: "stats-band-dashboard-ops-1",
        header: { kicker: "Results", title: "What teams achieve." },
        stats: [
          { id: "s1", value: "99.99%", label: "Uptime", sublabel: "12-month rolling" },
          { id: "s2", value: "4.7×", label: "Faster deploys", sublabel: "vs. legacy CI" },
          { id: "s3", value: "62%", label: "Lower MTTR", sublabel: "Median across teams" },
          { id: "s4", value: "12 min", label: "Onboarding", sublabel: "From signup to first deploy" },
        ],
      },
      {
        id: "process",
        kind: "process-steps",
        variant: "process-steps-dashboard-ops-1",
        header: { kicker: "How it works", title: "Three steps to production." },
        steps: [
          { id: "p1", number: "01", title: "Connect", description: "Sign in with SSO and link your repo." },
          { id: "p2", number: "02", title: "Configure", description: "Pick your region and runtime." },
          { id: "p3", number: "03", title: "Ship", description: "Deploy with one click and roll back at any time." },
        ],
      },
      {
        id: "faq",
        kind: "faq",
        variant: "faq-dashboard-ops-1",
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
        variant: "cta-dashboard-ops-1",
        header: { kicker: "Get started", title: "Ship your first deploy this afternoon." },
        body: "Free for the first 14 days. No credit card required.",
        primaryAction: { label: "Start free trial", href: "#" },
        secondaryAction: { label: "Talk to sales", href: "#" },
      },
    ],
  };
}
