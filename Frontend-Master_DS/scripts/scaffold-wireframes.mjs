#!/usr/bin/env node
/**
 * Wireframe scaffold generator.
 *
 * Reads a manifest (path from argv[2]) and:
 *   1. Emits a .ts file per wireframe under src/ds/composition/templates/wireframes/<id>.ts
 *      (META + demo content factory, with minimal per-kind demo data).
 *   2. Patches src/ds/composition/templates/wireframes/_registry.ts (idempotent
 *      imports + two entries per wireframe).
 *
 * Idempotent: re-running with the same manifest skips existing files and edits.
 *
 * Manifest shape:
 * [
 *   {
 *     "id": "page-ai-product-landing",
 *     "archetype": "ai-product",
 *     "purpose": "landing",
 *     "shell": "public",
 *     "label": "Page — AI Product Landing",
 *     "description": "...",
 *     "density": "comfortable",
 *     "complexity": "standard",
 *     "isDefault": true,
 *     "sections": [
 *       { "id": "hero", "kind": "hero", "variantId": "hero-ai-product-2" }
 *     ]
 *   }
 * ]
 */

import fs from "node:fs";
import path from "node:path";
import url from "node:url";

const __dirname = path.dirname(url.fileURLToPath(import.meta.url));
const ROOT = path.resolve(__dirname, "..");
const WIREFRAMES_DIR = path.join(ROOT, "src/ds/composition/templates/wireframes");
const REGISTRY = path.join(WIREFRAMES_DIR, "_registry.ts");

const manifestPath = process.argv[2] ? path.resolve(process.argv[2]) : null;
if (!manifestPath || !fs.existsSync(manifestPath)) {
  console.error(`manifest not found: ${manifestPath}`);
  process.exit(1);
}

const manifest = JSON.parse(fs.readFileSync(manifestPath, "utf8"));
if (!Array.isArray(manifest)) {
  console.error("manifest must be an array");
  process.exit(1);
}

/** PascalCase helper: page-ai-product-landing → PageAiProductLanding. */
function pascal(s) {
  return s.split(/[^a-zA-Z0-9]/).filter(Boolean).map(p => p[0].toUpperCase() + p.slice(1)).join("");
}
function upperSnake(s) {
  return s.toUpperCase().replace(/-/g, "_");
}

/** Demo content generators per section kind. Each returns object literal source (string). */
function demoContent(kind, sectionId, variantId) {
  const v = JSON.stringify(variantId);
  const id = JSON.stringify(sectionId);
  switch (kind) {
    case "hero":
      return `      {
        id: ${id},
        kind: "hero",
        variant: ${v},
        kicker: "New",
        title: "Build with confidence.",
        lede: "A focused product that delivers measurable outcomes for shipping teams.",
        primaryAction: { label: "Get started", href: "#" },
        secondaryAction: { label: "Learn more", href: "#" },
      }`;
    case "features":
      return `      {
        id: ${id},
        kind: "features",
        variant: ${v},
        header: { kicker: "Capabilities", title: "Everything you need." },
        features: [
          { id: "f1", title: "Reliable", description: "Built on proven primitives." },
          { id: "f2", title: "Fast", description: "Sub-second response across the board." },
          { id: "f3", title: "Secure", description: "Audit log and SSO out of the box." },
          { id: "f4", title: "Open", description: "First-class APIs and exports." },
          { id: "f5", title: "Scalable", description: "Grows with your workload." },
          { id: "f6", title: "Calm", description: "Operators-first design throughout." },
        ],
      }`;
    case "testimonials":
      return `      {
        id: ${id},
        kind: "testimonials",
        variant: ${v},
        header: { kicker: "Customers", title: "What teams say." },
        items: [
          { id: "t1", quote: "Cut our onboarding time in half within a quarter.", name: "Priya Bhattacharjee", meta: "Staff Engineer, Coastline" },
          { id: "t2", quote: "Audit, SSO, and rollbacks worked on day one.", name: "Mark Andersson", meta: "Head of Platform, Atlas Co." },
          { id: "t3", quote: "The docs match the product. That's all I want.", name: "Diego Salgado", meta: "Founding Engineer, Forge" },
        ],
      }`;
    case "faq":
      return `      {
        id: ${id},
        kind: "faq",
        variant: ${v},
        header: { kicker: "Questions", title: "Common questions." },
        items: [
          { id: "q1", q: "How does pricing scale?", a: "Per seat, no minimums." },
          { id: "q2", q: "Can I bring my own data?", a: "Yes — import via API or CSV." },
          { id: "q3", q: "Is there an SLA?", a: "99.99% uptime on paid tiers." },
          { id: "q4", q: "Where is data stored?", a: "Region of your choice; encrypted at rest." },
        ],
      }`;
    case "blogList":
      return `      {
        id: ${id},
        kind: "blogList",
        variant: ${v},
        header: { kicker: "Journal", title: "Latest writing." },
        posts: [
          { id: "p1", title: "Designing for calm operations", excerpt: "Why throughput is not the only metric.", href: "#" },
          { id: "p2", title: "Rollback windows in practice", excerpt: "How teams use atomic deploys.", href: "#" },
          { id: "p3", title: "The cost of glue code", excerpt: "Measuring what bespoke tooling really costs.", href: "#" },
        ],
      }`;
    case "cta":
      return `      {
        id: ${id},
        kind: "cta",
        variant: ${v},
        header: { kicker: "Get started", title: "Ship your first deploy this afternoon." },
        body: "Free for the first 14 days. No credit card required.",
        primaryAction: { label: "Start free trial", href: "#" },
        secondaryAction: { label: "Talk to sales", href: "#" },
      }`;
    case "newsletter":
      return `      {
        id: ${id},
        kind: "newsletter",
        variant: ${v},
        header: { kicker: "Stay in touch", title: "Get monthly updates." },
        title: "Subscribe",
      }`;
    case "stats-band":
      return `      {
        id: ${id},
        kind: "stats-band",
        variant: ${v},
        header: { kicker: "Results", title: "What teams achieve." },
        stats: [
          { id: "s1", value: "99.99%", label: "Uptime", sublabel: "12-month rolling" },
          { id: "s2", value: "4.7×", label: "Faster deploys", sublabel: "vs. legacy CI" },
          { id: "s3", value: "62%", label: "Lower MTTR", sublabel: "Median across teams" },
          { id: "s4", value: "12 min", label: "Onboarding", sublabel: "From signup to first deploy" },
        ],
      }`;
    case "process-steps":
      return `      {
        id: ${id},
        kind: "process-steps",
        variant: ${v},
        header: { kicker: "How it works", title: "Three steps to production." },
        steps: [
          { id: "p1", number: "01", title: "Connect", description: "Sign in with SSO and link your repo." },
          { id: "p2", number: "02", title: "Configure", description: "Pick your region and runtime." },
          { id: "p3", number: "03", title: "Ship", description: "Deploy with one click and roll back at any time." },
        ],
      }`;
    case "logo-cloud":
      return `      {
        id: ${id},
        kind: "logo-cloud",
        variant: ${v},
        header: { kicker: "Trusted by", title: "Teams that ship every day." },
        logos: [
          { id: "l1", label: "Northwind" },
          { id: "l2", label: "Atlas Co." },
          { id: "l3", label: "Helix" },
          { id: "l4", label: "Coastline" },
          { id: "l5", label: "Forge" },
          { id: "l6", label: "Vanta" },
        ],
      }`;
    case "case-studies":
      return `      {
        id: ${id},
        kind: "case-studies",
        variant: ${v},
        header: { kicker: "Case studies", title: "Outcomes that compound." },
        items: [
          { id: "c1", title: "Coastline cut MTTR by 62%", excerpt: "Atomic rollbacks ended late-night incidents.", href: "#", tags: ["Reliability"] },
          { id: "c2", title: "Atlas Co. onboarded 200 engineers", excerpt: "SSO + SCIM made provisioning trivial.", href: "#", tags: ["Scale"] },
          { id: "c3", title: "Forge launched in three regions", excerpt: "Region-aware autoscaling cut spend by 38%.", href: "#", tags: ["Cost"] },
        ],
      }`;
    case "pricing":
      return `      {
        id: ${id},
        kind: "pricing",
        variant: ${v},
        header: { kicker: "Pricing", title: "Pay for what you ship." },
        tiers: [
          {
            id: "starter",
            name: "Starter",
            price: { monthly: "$0", suffix: "/seat / month" },
            description: "For weekend projects.",
            features: ["1 environment", "Community support", "Single region"],
            cta: { label: "Start free", href: "#" },
          },
          {
            id: "team",
            name: "Team",
            price: { monthly: "$29", suffix: "/seat / month" },
            description: "For shipping teams.",
            features: ["Unlimited environments", "SSO + SCIM", "Multi-region", "Priority support"],
            cta: { label: "Start trial", href: "#" },
            badge: "Most popular",
            highlight: true,
          },
          {
            id: "enterprise",
            name: "Enterprise",
            price: { monthly: "Custom", suffix: "" },
            description: "Compliance and custom regions.",
            features: ["Everything in Team", "Custom regions", "SLA 99.99%", "Dedicated CSM"],
            cta: { label: "Contact sales", href: "#" },
          },
        ],
        footnote: "All plans include unlimited deploys and rollbacks.",
      }`;
    case "team":
      return `      {
        id: ${id},
        kind: "team",
        variant: ${v},
        header: { kicker: "Team", title: "The people behind the product." },
        members: [
          { id: "m1", name: "Aiko Tanaka", role: "Founder & CEO" },
          { id: "m2", name: "Marcus Reid", role: "Head of Engineering" },
          { id: "m3", name: "Priya Bhattacharjee", role: "Staff Engineer" },
          { id: "m4", name: "Diego Salgado", role: "Design Lead" },
        ],
      }`;
    case "contact":
      return `      {
        id: ${id},
        kind: "contact",
        variant: ${v},
        header: { kicker: "Contact", title: "Talk to us." },
        channels: [
          { id: "e1", kind: "email", label: "Email", value: "hello@example.com", href: "mailto:hello@example.com" },
          { id: "p1", kind: "phone", label: "Phone", value: "+1 (555) 123-4567", href: "tel:+15551234567" },
          { id: "a1", kind: "address", label: "Address", value: "123 Market St, Suite 400, San Francisco, CA" },
        ],
      }`;
    case "footer-content":
      return `      {
        id: ${id},
        kind: "footer-content",
        variant: ${v},
        columns: [
          { id: "product", title: "Product", links: [{ id: "features", label: "Features", href: "#" }, { id: "pricing", label: "Pricing", href: "#" }] },
          { id: "company", title: "Company", links: [{ id: "about", label: "About", href: "#" }, { id: "contact", label: "Contact", href: "#" }] },
          { id: "legal", title: "Legal", links: [{ id: "privacy", label: "Privacy", href: "#" }, { id: "terms", label: "Terms", href: "#" }] },
        ],
        legalLinks: [{ id: "privacy", label: "Privacy", href: "#" }, { id: "terms", label: "Terms", href: "#" }],
      }`;
    default:
      throw new Error(`unknown section kind: ${kind}`);
  }
}

function renderFile(w) {
  const pasc = pascal(w.id);
  const META = `${upperSnake(w.id)}_META`;
  const factory = `get${pasc}DemoPage`;
  const sectionsLit = w.sections.map(s => `      { kind: "${s.kind}", variantId: "${s.variantId}" }`).join(",\n");
  const demoLit = w.sections.map(s => demoContent(s.kind, s.id || s.kind, s.variantId)).join(",\n");
  const isDefault = w.isDefault === true;

  return `import type { PublicPageModel } from "../../../platform/publicSitePreset";
import type { WireframeMeta } from "./_schema";

export const ${META}: WireframeMeta = {
  id: ${JSON.stringify(w.id)},
  archetype: ${JSON.stringify(w.archetype)},
  purpose: ${JSON.stringify(w.purpose)},
  shell: ${JSON.stringify(w.shell || "public")},
  label: ${JSON.stringify(w.label)},
  description: ${JSON.stringify(w.description)},
  density: ${JSON.stringify(w.density || "comfortable")},
  complexity: ${JSON.stringify(w.complexity || "standard")},${isDefault ? "\n  isDefault: true," : ""}
  sections: [
${sectionsLit},
  ],
};

/** Demo content factory. Returns a complete PublicPageModel for preview/smoke. */
export function ${factory}(): PublicPageModel {
  return {
    id: ${JSON.stringify("demo-" + w.id)},
    title: ${JSON.stringify(w.label)},
    archetype: ${JSON.stringify(w.archetype)},
    sections: [
${demoLit},
    ],
  };
}
`;
}

const created = [];
const skipped = [];
for (const w of manifest) {
  const file = path.join(WIREFRAMES_DIR, `${w.id}.ts`);
  if (fs.existsSync(file)) { skipped.push(w.id); continue; }
  fs.writeFileSync(file, renderFile(w));
  created.push(w);
}

/* Patch _registry.ts: insert imports + 2 entries per wireframe (idempotent). */
let reg = fs.readFileSync(REGISTRY, "utf8");

const IMPORT_MARKER = `import type {`; // first such import block — we insert imports BEFORE this.
const META_MARKER = `[PAGE_EDITORIAL_PREMIUM_BLOG_INDEX_META.id]: PAGE_EDITORIAL_PREMIUM_BLOG_INDEX_META,`;
const FACTORY_MARKER = `[PAGE_EDITORIAL_PREMIUM_BLOG_INDEX_META.id]: getEditorialPremiumBlogIndexDemoPage,`;
// Generic appender block markers used to make subsequent runs deterministic.
const SCAFFOLD_IMPORT_BEGIN = `// scaffold-wireframes batch — imports`;
const SCAFFOLD_META_BEGIN = `// scaffold-wireframes batch — META entries`;
const SCAFFOLD_FACTORY_BEGIN = `// scaffold-wireframes batch — factory entries`;

let importPatch = 0, metaPatch = 0, factoryPatch = 0;

for (const w of manifest) {
  const META = `${upperSnake(w.id)}_META`;
  const factory = `get${pascal(w.id)}DemoPage`;
  const importLine = `import { ${META}, ${factory} } from "./${w.id}";`;
  const metaLine = `  [${META}.id]: ${META},`;
  const factoryLine = `  [${META}.id]: ${factory},`;
  if (!reg.includes(importLine)) {
    if (!reg.includes(SCAFFOLD_IMPORT_BEGIN)) {
      reg = reg.replace(IMPORT_MARKER, `${SCAFFOLD_IMPORT_BEGIN}\n${importLine}\n\n${IMPORT_MARKER}`);
    } else {
      reg = reg.replace(SCAFFOLD_IMPORT_BEGIN, `${SCAFFOLD_IMPORT_BEGIN}\n${importLine}`);
    }
    importPatch++;
  }
  if (!reg.includes(metaLine)) {
    if (!reg.includes(SCAFFOLD_META_BEGIN)) {
      reg = reg.replace(META_MARKER, `${META_MARKER}\n  ${SCAFFOLD_META_BEGIN}\n${metaLine}`);
    } else {
      reg = reg.replace(SCAFFOLD_META_BEGIN, `${SCAFFOLD_META_BEGIN}\n${metaLine}`);
    }
    metaPatch++;
  }
  if (!reg.includes(factoryLine)) {
    if (!reg.includes(SCAFFOLD_FACTORY_BEGIN)) {
      reg = reg.replace(FACTORY_MARKER, `${FACTORY_MARKER}\n  ${SCAFFOLD_FACTORY_BEGIN}\n${factoryLine}`);
    } else {
      reg = reg.replace(SCAFFOLD_FACTORY_BEGIN, `${SCAFFOLD_FACTORY_BEGIN}\n${factoryLine}`);
    }
    factoryPatch++;
  }
}

fs.writeFileSync(REGISTRY, reg);

console.log(
  `scaffold-wireframes: created ${created.length} files, skipped ${skipped.length} existing, ` +
  `imports +${importPatch}, meta entries +${metaPatch}, factory entries +${factoryPatch}.`,
);
