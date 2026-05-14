/**
 * @jest-environment node
 *
 * ds-contract.gen.test.ts
 *
 * Code-generation "test" that emits `generated/ds.contract.json`
 * by importing the section registry, archetype registry, motion preset
 * registry, theme registry, and site preset registry.
 *
 * Implemented as a Jest test because the project already has full TS pipeline
 * support inside Jest (next/jest + babel). No extra runtime dependency required.
 *
 * Failure modes (test fails when):
 *   - a registered variant declares a visual effect that its archetype does not permit
 *   - the contract cannot be written to disk
 *
 * Run via:  npm run ds:contract     (only this test)
 * Also runs as part of `npm test` so the contract stays in sync with sources.
 */

import { mkdirSync, readFileSync, writeFileSync } from "node:fs";
import path from "node:path";

import { ARCHETYPES } from "@/ds/foundation/themes/archetypeRegistry";
import { MOTION_PRESETS, type MotionPreset } from "@/ds/foundation/motion/presets";
import { THEMES } from "@/ds/foundation/themes/registry";
import { SECTION_VARIANT_META_LIST } from "@/ds/composition/sections/_registry";
import {
  WIREFRAME_META_LIST,
  validateWireframes,
} from "@/ds/composition/templates/wireframes/_registry";
import { SITE_PRESETS } from "@/site/index";

/**
 * Static enums extracted from source-of-truth files so the emitted contract
 * is fully self-describing — an AI agent can read ds.contract.json alone and
 * know every kind/purpose/locked glob the DS recognises, without traversing
 * the TypeScript source.
 */
const SECTION_KINDS = [
  "hero",
  "features",
  "testimonials",
  "faq",
  "blogList",
  "cta",
  "newsletter",
  "stats-band",
  "process-steps",
  "logo-cloud",
  "case-studies",
  "pricing",
  "team",
  "contact",
  "footer-content",
] as const;

const WIREFRAME_PURPOSES = [
  "landing",
  "pricing",
  "about",
  "contact",
  "blog-index",
  "case-study-index",
  "auth",
  "404",
] as const;

describe("ds.contract codegen", () => {
  test("emits generated/ds.contract.json", () => {
    const variants = SECTION_VARIANT_META_LIST.map((m) => ({
      id: m.id,
      kind: m.kind,
      archetype: m.archetype,
      label: m.label,
      description: m.description,
      supportsThemes: m.supportsThemes,
      motionPresets: m.motionPresets,
      effects: m.effects,
      density: m.density,
      complexity: m.complexity,
      isDefault: m.isDefault ?? false,
    }));

    const archetypes = Object.values(ARCHETYPES).map((a) => ({
      id: a.id,
      label: a.label,
      description: a.description,
      mood: a.mood,
      preferredScheme: a.preferredScheme,
      density: a.density,
      permissions: a.permissions,
      motionTemperament: a.motionTemperament,
      variantIdPrefixes: a.variantIdPrefixes,
    }));

    const motionPresets = (Object.values(MOTION_PRESETS) as MotionPreset[]).map((p) => ({
      id: p.id,
      description: p.description,
      category: p.category,
      duration: p.duration,
      ease: p.ease,
      staggerMs: p.staggerMs ?? null,
      transform: p.transform,
      repeat: p.repeat,
      yoyo: p.yoyo ?? false,
      reducedMotionFallback: p.reducedMotionFallback,
      className: p.className,
    }));

    const themes = THEMES.map((t) => ({
      name: t.name,
      label: t.label,
      colorScheme: t.colorScheme,
    }));

    const presets = Object.values(SITE_PRESETS).map((p) => ({
      id: p.id,
      label: p.label,
      archetype: p.archetype ?? null,
      pageIds: Object.keys(p.pages),
      pageSectionCounts: Object.fromEntries(
        Object.entries(p.pages).map(([pageId, page]) => [pageId, page.sections.length]),
      ),
    }));

    // Validate every variant's declared effects against its archetype permissions.
    type Violation = { variantId: string; effect?: string; archetype?: string; reason: string };
    const permissionViolations: Violation[] = [];
    for (const v of variants) {
      const arch = archetypes.find((a) => a.id === v.archetype);
      if (!arch) {
        permissionViolations.push({
          variantId: v.id,
          reason: `archetype "${v.archetype}" not found in registry`,
        });
        continue;
      }
      for (const [effect, used] of Object.entries(v.effects ?? {})) {
        if (used === true && (arch.permissions as Record<string, boolean>)[effect] !== true) {
          permissionViolations.push({
            variantId: v.id,
            effect,
            archetype: v.archetype,
            reason: `variant declares effect "${effect}" but archetype "${v.archetype}" does not permit it`,
          });
        }
      }
    }

    // Wireframe serialization + validation.
    const wireframes = WIREFRAME_META_LIST.map((w) => ({
      id: w.id,
      archetype: w.archetype,
      purpose: w.purpose,
      shell: w.shell,
      label: w.label,
      description: w.description,
      density: w.density,
      complexity: w.complexity,
      sections: w.sections,
      isDefault: w.isDefault ?? false,
    }));

    const wireframeViolations = validateWireframes();

    // Read .ai-scope.json so the contract surfaces locked globs + extension
    // allowlist + forbidden actions in one place. An AI that reads only
    // ds.contract.json must still see the full safety boundary.
    const scopeContractPath = path.join(process.cwd(), ".ai-scope.json");
    let safetyContract: unknown = null;
    try {
      const raw = readFileSync(scopeContractPath, "utf8");
      const parsed = JSON.parse(raw) as Record<string, unknown>;
      safetyContract = {
        version: parsed.version ?? null,
        topLevelRule: parsed.topLevelRule ?? null,
        discoveryFiles: parsed.discoveryFiles ?? null,
        lockedGlobs:
          ((parsed.fileScopes as Record<string, unknown> | undefined)?.locked as
            | { globs?: string[] }
            | undefined)?.globs ?? [],
        extensibleGlobs:
          ((parsed.fileScopes as Record<string, unknown> | undefined)?.extensible as
            | { globs?: string[] }
            | undefined)?.globs ?? [],
        projectContentGlobs:
          ((parsed.fileScopes as Record<string, unknown> | undefined)?.projectContent as
            | { globs?: string[] }
            | undefined)?.globs ?? [],
        forbiddenActions: parsed.forbiddenActions ?? [],
        allowedActions: parsed.allowedActions ?? [],
        verificationGate: parsed.verificationGate ?? null,
      };
    } catch {
      // Soft failure: contract still emits, but agents reading it should
      // fall back to reading .ai-scope.json directly.
      safetyContract = null;
    }

    const contract = {
      version: "1.0",
      // generatedAt omitted to keep emitted file deterministic across test runs.
      counts: {
        variants: variants.length,
        archetypes: archetypes.length,
        motionPresets: motionPresets.length,
        themes: themes.length,
        presets: presets.length,
        wireframes: wireframes.length,
      },
      sectionKinds: SECTION_KINDS,
      wireframePurposes: WIREFRAME_PURPOSES,
      themes,
      archetypes,
      motionPresets,
      sectionVariants: variants,
      wireframes,
      sitePresets: presets,
      safety: safetyContract,
      validation: {
        permissionViolations,
        wireframeViolations,
        ok: permissionViolations.length === 0 && wireframeViolations.length === 0,
      },
    };

    const outDir = path.join(process.cwd(), "generated");
    mkdirSync(outDir, { recursive: true });
    const outPath = path.join(outDir, "ds.contract.json");
    writeFileSync(outPath, JSON.stringify(contract, null, 2) + "\n", "utf8");

    if (permissionViolations.length > 0) {
      console.error("ds.contract permission violations:");
      for (const v of permissionViolations) {
        console.error(`  - ${v.variantId}: ${v.reason}`);
      }
    }

    if (wireframeViolations.length > 0) {
      console.error("ds.contract wireframe violations:");
      for (const v of wireframeViolations) {
        console.error(`  - ${v.wireframeId}[${v.sectionIndex}]: ${v.reason}`);
      }
    }

    expect(permissionViolations).toEqual([]);
    expect(wireframeViolations).toEqual([]);
    expect(variants.length).toBeGreaterThan(0);
    expect(archetypes.length).toBeGreaterThan(0);
    expect(motionPresets.length).toBeGreaterThan(0);
    expect(themes.length).toBe(2); // dark + light, per project decision
    expect(wireframes.length).toBeGreaterThan(0);
  });
});
