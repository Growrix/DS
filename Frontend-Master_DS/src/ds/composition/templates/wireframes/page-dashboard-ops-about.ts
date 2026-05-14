import type { PublicPageModel } from "../../../platform/publicSitePreset";
import type { WireframeMeta } from "./_schema";

export const PAGE_DASHBOARD_OPS_ABOUT_META: WireframeMeta = {
  id: "page-dashboard-ops-about",
  archetype: "dashboard-ops",
  purpose: "about",
  shell: "public",
  label: "Page — Dashboard Ops About",
  description: "Ops centred hero → ops 3-col capabilities → ops directory team → ops 3-col case studies → ops 2-col FAQ → ops banner CTA.",
  density: "compact",
  complexity: "standard",
  isDefault: true,
  sections: [
      { kind: "hero", variantId: "hero-dashboard-ops-1" },
      { kind: "features", variantId: "features-dashboard-ops-1" },
      { kind: "team", variantId: "team-dashboard-ops-directory" },
      { kind: "case-studies", variantId: "case-studies-dashboard-ops-1" },
      { kind: "faq", variantId: "faq-dashboard-ops-1" },
      { kind: "cta", variantId: "cta-dashboard-ops-1" },
  ],
};

/** Demo content factory. Returns a complete PublicPageModel for preview/smoke. */
export function getPageDashboardOpsAboutDemoPage(): PublicPageModel {
  return {
    id: "demo-page-dashboard-ops-about",
    title: "Page — Dashboard Ops About",
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
        id: "team",
        kind: "team",
        variant: "team-dashboard-ops-directory",
        header: { kicker: "Team", title: "The people behind the product." },
        members: [
          { id: "m1", name: "Aiko Tanaka", role: "Founder & CEO" },
          { id: "m2", name: "Marcus Reid", role: "Head of Engineering" },
          { id: "m3", name: "Priya Bhattacharjee", role: "Staff Engineer" },
          { id: "m4", name: "Diego Salgado", role: "Design Lead" },
        ],
      },
      {
        id: "cases",
        kind: "case-studies",
        variant: "case-studies-dashboard-ops-1",
        header: { kicker: "Case studies", title: "Outcomes that compound." },
        items: [
          { id: "c1", title: "Coastline cut MTTR by 62%", excerpt: "Atomic rollbacks ended late-night incidents.", href: "#", tags: ["Reliability"] },
          { id: "c2", title: "Atlas Co. onboarded 200 engineers", excerpt: "SSO + SCIM made provisioning trivial.", href: "#", tags: ["Scale"] },
          { id: "c3", title: "Forge launched in three regions", excerpt: "Region-aware autoscaling cut spend by 38%.", href: "#", tags: ["Cost"] },
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
