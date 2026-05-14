/* ==========================================================================
   Font Preset Registry — typography posture per project (Phase 11B)
   Layer: ds.foundation.typography

   Why this file exists:
   ─────────────────────
   Archetypes ship a default visual rhythm (density, motion, permissions) but
   typography was a single global pair until now (Inter + Montserrat). Real
   archetypes need very different type postures: editorial-premium wants a
   serif display + transitional italic; bold-consumer wants a heavy
   geometric display; ai-product wants a single technical sans.

   A FontPreset is a *named bundle* of family slots:
     - sans     → body / UI baseline
     - display  → headlines, hero, marketing
     - quote    → blockquotes, editorial pull-quotes
     - mono     → code, kbd, technical readouts

   Presets do NOT introduce new tokens. They override the existing
   `--ds-font-*` slots when a `[data-font-preset="<id>"]` attribute is
   mounted on an ancestor (the public shell mounts this in Phase 11C).

   The next/font declarations themselves live in `src/app/layout.tsx`
   (Phase 11D wires the superset). This registry only describes which CSS
   `--font-*` variables each preset consumes.
   ========================================================================== */

export type FontPresetId =
  | "editorial-classic"
  | "editorial-modern"
  | "saas-modern"
  | "saas-precision"
  | "consumer-bold"
  | "ai-technical"
  | "trust-warm"
  | "ops-compact";

export type FontPresetDefinition = {
  id: FontPresetId;
  label: string;
  /** One-sentence positioning: when an archetype should reach for this. */
  intent: string;
  /** Display name of the family slot — surfaced in DS Preview. */
  families: {
    sans: string;
    display: string;
    quote: string;
    mono: string;
  };
  /** Weight that variants tagged `font-weight: var(--ds-font-weight-display)` pick up. */
  displayWeight: 300 | 400 | 500 | 600 | 700 | 800 | 900;
  /**
   * Next.js `next/font` CSS variable names this preset consumes. Layout.tsx
   * (Phase 11D) MUST mount every variable listed here, in any order, on the
   * `<html>` element.
   */
  nextFontVars: string[];
};

export const FONT_PRESETS: Record<FontPresetId, FontPresetDefinition> = {
  "editorial-classic": {
    id: "editorial-classic",
    label: "Editorial Classic",
    intent: "Long-form magazine: humanist sans body, transitional serif display, italic serif pull-quote.",
    families: {
      sans: "Inter",
      display: "Playfair Display",
      quote: "Source Serif 4",
      mono: "JetBrains Mono",
    },
    displayWeight: 400,
    nextFontVars: ["--font-inter", "--font-playfair", "--font-source-serif", "--font-jetbrains-mono"],
  },

  "editorial-modern": {
    id: "editorial-modern",
    label: "Editorial Modern",
    intent: "Contemporary editorial: geometric sans body, variable serif display, italic display pull-quote.",
    families: {
      sans: "Manrope",
      display: "Fraunces",
      quote: "Fraunces",
      mono: "JetBrains Mono",
    },
    displayWeight: 500,
    nextFontVars: ["--font-manrope", "--font-fraunces", "--font-jetbrains-mono"],
  },

  "saas-modern": {
    id: "saas-modern",
    label: "SaaS Modern",
    intent: "Product marketing default: single neutral sans across body + display, monospace for codeblocks.",
    families: {
      sans: "Inter",
      display: "Inter",
      quote: "Source Serif 4",
      mono: "JetBrains Mono",
    },
    displayWeight: 700,
    nextFontVars: ["--font-inter", "--font-source-serif", "--font-jetbrains-mono"],
  },

  "saas-precision": {
    id: "saas-precision",
    label: "SaaS Precision",
    intent: "Higher-end SaaS: tight geometric sans, restrained display weight, premium feel.",
    families: {
      sans: "Manrope",
      display: "Manrope",
      quote: "Source Serif 4",
      mono: "JetBrains Mono",
    },
    displayWeight: 600,
    nextFontVars: ["--font-manrope", "--font-source-serif", "--font-jetbrains-mono"],
  },

  "consumer-bold": {
    id: "consumer-bold",
    label: "Consumer Bold",
    intent: "DTC / lifestyle: friendly sans body, heavyweight geometric display, dramatic serif pull-quote.",
    families: {
      sans: "Inter",
      display: "Montserrat",
      quote: "Playfair Display",
      mono: "Fira Code",
    },
    displayWeight: 900,
    nextFontVars: ["--font-inter", "--font-display", "--font-playfair", "--font-fira-code"],
  },

  "ai-technical": {
    id: "ai-technical",
    label: "AI Technical",
    intent: "AI / ML product: single technical sans across all roles, monospaced numerics.",
    families: {
      sans: "Sora",
      display: "Sora",
      quote: "Sora",
      mono: "JetBrains Mono",
    },
    displayWeight: 700,
    nextFontVars: ["--font-sora", "--font-jetbrains-mono"],
  },

  "trust-warm": {
    id: "trust-warm",
    label: "Trust Warm",
    intent: "Local business / services: warm humanist sans, friendly serif display, photographic pairing.",
    families: {
      sans: "Inter",
      display: "Source Serif 4",
      quote: "Source Serif 4",
      mono: "Fira Code",
    },
    displayWeight: 600,
    nextFontVars: ["--font-inter", "--font-source-serif", "--font-fira-code"],
  },

  "ops-compact": {
    id: "ops-compact",
    label: "Ops Compact",
    intent: "Internal tools / dashboards: dense neutral sans, monospace bias on numerics, no decoration.",
    families: {
      sans: "Inter",
      display: "Inter",
      quote: "Source Serif 4",
      mono: "JetBrains Mono",
    },
    displayWeight: 600,
    nextFontVars: ["--font-inter", "--font-source-serif", "--font-jetbrains-mono"],
  },
};

export const FONT_PRESET_IDS = Object.keys(FONT_PRESETS) as FontPresetId[];

export function getFontPreset(id: FontPresetId): FontPresetDefinition {
  return FONT_PRESETS[id];
}

export function isFontPresetId(value: string | null | undefined): value is FontPresetId {
  return typeof value === "string" && value in FONT_PRESETS;
}

/**
 * Union of every `--font-*` CSS variable across all presets. Layout.tsx
 * (Phase 11D) MUST mount every variable in this list. The `ds:font-audit`
 * script (Phase 11E) cross-checks layout against this set.
 */
export const ALL_NEXT_FONT_VARS: readonly string[] = Array.from(
  new Set(FONT_PRESET_IDS.flatMap((id) => FONT_PRESETS[id].nextFontVars)),
).sort();
