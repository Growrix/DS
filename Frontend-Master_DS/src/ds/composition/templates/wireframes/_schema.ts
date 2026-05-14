/* ==========================================================================
   Wireframe Schema — the contract every page wireframe must satisfy.
   Layer: ds.composition.templates.wireframes (LOCKED foundation)

   What is a "wireframe"?
   ──────────────────────
   A wireframe is a pre-sequenced recipe of section variants that compose a
   whole page. It is the unit of selection above section variants.

   The AI agent flow:
   ──────────────────
     1. Brief → pick an archetype (one decision from 8 options).
     2. Brief intent → pick a wireframe purpose (landing / pricing / about / …).
     3. Registry returns the wireframe whose archetype + purpose match.
     4. Each section variantId in the wireframe is resolved through
        SECTION_REGISTRY; the AI never invents variant IDs.
     5. Demo content (or user-supplied content) populates the section models.

   Why this matters:
   ─────────────────
   Without wireframes, the AI must compose a page section-by-section, which
   reintroduces invention risk (which kinds, in what order, which variants).
   A wireframe collapses all of that into a single registered selection.

   Lockdown contract:
   ──────────────────
   This file is part of the DS foundation. AI agents MUST NOT edit it.
   New wireframes are added by creating new files under `wireframes/` and
   registering them in `_registry.ts`. Every variantId referenced MUST exist
   in the section registry AND match the wireframe's archetype.
   ========================================================================== */

import type { ArchetypeId } from "../../../foundation/themes/archetypeRegistry";
import type {
  SectionComplexity,
  SectionDensity,
  SectionKind,
} from "../../sections/_schema";

/** Page purposes a wireframe can declare. Drives AI retrieval by intent. */
export type WireframePurpose =
  | "landing"
  | "pricing"
  | "about"
  | "contact"
  | "blog-index"
  | "case-study-index"
  | "auth"
  | "404";

/** Page shell to render the wireframe under. */
export type WireframeShell = "public" | "dashboard" | "docs" | "centered";

/**
 * One section slot in a wireframe.
 * The kind is informational (the renderer reads variantId.meta.kind);
 * keeping it explicit here makes the wireframe self-describing for AI agents
 * reading the contract JSON without dereferencing the section registry.
 */
export type WireframeSectionSpec = {
  kind: SectionKind;
  variantId: string;
};

/** Stable metadata for one page wireframe. */
export type WireframeMeta = {
  /** Stable wireframe identifier. Once published, NEVER renamed. */
  id: string;
  /** Archetype this wireframe belongs to. */
  archetype: ArchetypeId;
  /** Page purpose. Used by AI retrieval. */
  purpose: WireframePurpose;
  /** Shell to render the wireframe under. */
  shell: WireframeShell;
  /** Human-readable label for the catalog showcase. */
  label: string;
  /** One-sentence directive description. Use measurable phrasing, not "modern"/"clean". */
  description: string;
  /** Density classification (drives page rhythm). */
  density: SectionDensity;
  /** Visual complexity tier. */
  complexity: SectionComplexity;
  /** Ordered list of section slots. */
  sections: WireframeSectionSpec[];
  /** Whether this wireframe is the default for its (archetype, purpose) pair. */
  isDefault?: boolean;
};

/** Public type of the full wireframe registry map. */
export type WireframeRegistry = Record<string, WireframeMeta>;

/** Convenience predicate for AI agents picking wireframes for a brief. */
export type WireframeFilter = {
  archetype?: ArchetypeId;
  purpose?: WireframePurpose;
  shell?: WireframeShell;
  complexity?: SectionComplexity;
};
