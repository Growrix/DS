/* ==========================================================================
   Wireframe Registry — central map of wireframeId → WireframeMeta.
   Layer: ds.composition.templates.wireframes (LOCKED)

   AI agents READ from this registry. They MUST NOT EDIT this file directly
   when adding new wireframes. The correct extension pattern is:

   1. Create a new file under `wireframes/page-<archetype>-<purpose>.ts`
      exporting `<NAME>_META` (matching WireframeMeta) AND a demo content
      factory `get<Name>DemoPage()`.
   2. Add ONE import + ONE entry to the WIREFRAME_REGISTRY map below.
   3. Run `npm run ds:contract` to regenerate `generated/ds.contract.json`.

   Build-time validation:
   ──────────────────────
   The contract emitter (src/ds/__codegen__/ds-contract.gen.test.ts) asserts
   that every wireframe section's variantId exists in SECTION_REGISTRY AND
   has the same archetype as the wireframe. Cross-archetype mixing fails the
   build.
   ========================================================================== */

import { SECTION_REGISTRY } from "../../sections/_registry";

import {
  PAGE_MODERN_SAAS_LANDING_META,
  getModernSaasLandingDemoPage,
} from "./page-modern-saas-landing";
import {
  PAGE_MODERN_SAAS_PRICING_META,
  getModernSaasPricingDemoPage,
} from "./page-modern-saas-pricing";
import {
  PAGE_MODERN_SAAS_404_META,
  getModernSaas404DemoPage,
} from "./page-modern-saas-404";
import {
  PAGE_LOCAL_BUSINESS_TRUST_CONTACT_META,
  getLocalBusinessTrustContactDemoPage,
} from "./page-local-business-trust-contact";
import {
  PAGE_EDITORIAL_PREMIUM_BLOG_INDEX_META,
  getEditorialPremiumBlogIndexDemoPage,
} from "./page-editorial-premium-blog-index";

import type {
  WireframeFilter,
  WireframeMeta,
  WireframePurpose,
  WireframeRegistry,
} from "./_schema";
import type { ArchetypeId } from "../../../foundation/themes/archetypeRegistry";
import type { PublicPageModel } from "../../../platform/publicSitePreset";

/** Canonical wireframe registry. Add new wireframes here. */
export const WIREFRAME_REGISTRY: WireframeRegistry = {
  [PAGE_MODERN_SAAS_LANDING_META.id]: PAGE_MODERN_SAAS_LANDING_META,
  [PAGE_MODERN_SAAS_PRICING_META.id]: PAGE_MODERN_SAAS_PRICING_META,
  [PAGE_MODERN_SAAS_404_META.id]: PAGE_MODERN_SAAS_404_META,
  [PAGE_LOCAL_BUSINESS_TRUST_CONTACT_META.id]: PAGE_LOCAL_BUSINESS_TRUST_CONTACT_META,
  [PAGE_EDITORIAL_PREMIUM_BLOG_INDEX_META.id]: PAGE_EDITORIAL_PREMIUM_BLOG_INDEX_META,
};

/** Demo content factories keyed by wireframe id. */
export const WIREFRAME_DEMO_FACTORIES: Record<string, () => PublicPageModel> = {
  [PAGE_MODERN_SAAS_LANDING_META.id]: getModernSaasLandingDemoPage,
  [PAGE_MODERN_SAAS_PRICING_META.id]: getModernSaasPricingDemoPage,
  [PAGE_MODERN_SAAS_404_META.id]: getModernSaas404DemoPage,
  [PAGE_LOCAL_BUSINESS_TRUST_CONTACT_META.id]: getLocalBusinessTrustContactDemoPage,
  [PAGE_EDITORIAL_PREMIUM_BLOG_INDEX_META.id]: getEditorialPremiumBlogIndexDemoPage,
};

export const WIREFRAME_META_LIST: WireframeMeta[] = Object.values(WIREFRAME_REGISTRY);

/** Find a wireframe by id; returns undefined if not registered. */
export function getWireframe(wireframeId: string): WireframeMeta | undefined {
  return WIREFRAME_REGISTRY[wireframeId];
}

/** Find the default wireframe for an (archetype, purpose) pair. */
export function getDefaultWireframe(
  archetype: ArchetypeId,
  purpose: WireframePurpose,
): WireframeMeta | undefined {
  return WIREFRAME_META_LIST.find(
    (w) => w.archetype === archetype && w.purpose === purpose && w.isDefault === true,
  );
}

/** Filter wireframes by any subset of {archetype, purpose, shell, complexity}. */
export function listWireframes(filter: WireframeFilter = {}): WireframeMeta[] {
  return WIREFRAME_META_LIST.filter((w) => {
    if (filter.archetype && w.archetype !== filter.archetype) return false;
    if (filter.purpose && w.purpose !== filter.purpose) return false;
    if (filter.shell && w.shell !== filter.shell) return false;
    if (filter.complexity && w.complexity !== filter.complexity) return false;
    return true;
  });
}

/** Build a demo PublicPageModel for a wireframe id. */
export function getWireframeDemoPage(wireframeId: string): PublicPageModel | undefined {
  const factory = WIREFRAME_DEMO_FACTORIES[wireframeId];
  return factory?.();
}

/**
 * Validate wireframe → section variant references.
 * Returns a list of violations: missing variantId, kind mismatch, or
 * archetype mismatch between wireframe and referenced variant.
 *
 * Used by the contract emitter to fail the build on inconsistency.
 */
export type WireframeViolation = {
  wireframeId: string;
  sectionIndex: number;
  reason: string;
};

export function validateWireframes(): WireframeViolation[] {
  const violations: WireframeViolation[] = [];
  for (const w of WIREFRAME_META_LIST) {
    w.sections.forEach((spec, i) => {
      const entry = SECTION_REGISTRY[spec.variantId];
      if (!entry) {
        violations.push({
          wireframeId: w.id,
          sectionIndex: i,
          reason: `variantId "${spec.variantId}" not found in section registry`,
        });
        return;
      }
      if (entry.meta.kind !== spec.kind) {
        violations.push({
          wireframeId: w.id,
          sectionIndex: i,
          reason: `variantId "${spec.variantId}" has kind "${entry.meta.kind}" but wireframe section declares kind "${spec.kind}"`,
        });
      }
      if (entry.meta.archetype !== w.archetype) {
        violations.push({
          wireframeId: w.id,
          sectionIndex: i,
          reason: `variantId "${spec.variantId}" has archetype "${entry.meta.archetype}" but wireframe archetype is "${w.archetype}"`,
        });
      }
    });
  }
  return violations;
}
