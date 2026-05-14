#!/usr/bin/env node
/**
 * Variant scaffold generator.
 *
 * Reads a manifest at scripts/variants-manifest.json (or path from argv[2]) and:
 *   1. Emits a .tsx file per variant under src/ds/composition/sections/variants/<kind>/
 *   2. Patches src/ds/composition/sections/_registry.ts (idempotent imports + map entries)
 *   3. Appends CSS to src/ds/styles/ds.section-variants.css inside the existing
 *      @layer ds.section-variants { ... } block, before the reduced-motion override.
 *
 * Idempotent: re-running with the same manifest skips files that already exist
 * and skips registry/css edits that are already present.
 *
 * Manifest shape:
 * [
 *   {
 *     "id": "hero-editorial-premium-2",
 *     "kind": "hero",
 *     "archetype": "editorial-premium",
 *     "label": "Hero — Editorial Premium 2 (Centered Display)",
 *     "description": "Centred display headline, narrow lede, single primary CTA. Restrained motion.",
 *     "density": "comfortable",
 *     "complexity": "standard",
 *     "motionPresets": ["rise-soft", "fade-in"],
 *     "effects": {},
 *     "template": "hero-centered",
 *     "container": "wide"
 *   }
 * ]
 */

import fs from "node:fs";
import path from "node:path";
import url from "node:url";

const __dirname = path.dirname(url.fileURLToPath(import.meta.url));
const ROOT = path.resolve(__dirname, "..");
const VARIANTS_DIR = path.join(ROOT, "src/ds/composition/sections/variants");
const REGISTRY = path.join(ROOT, "src/ds/composition/sections/_registry.ts");
const CSS_FILE = path.join(ROOT, "src/ds/styles/ds.section-variants.css");

const manifestPath = process.argv[2]
  ? path.resolve(process.argv[2])
  : path.join(__dirname, "variants-manifest.json");

if (!fs.existsSync(manifestPath)) {
  console.error(`manifest not found: ${manifestPath}`);
  process.exit(1);
}

const manifest = JSON.parse(fs.readFileSync(manifestPath, "utf8"));

/* ---------- naming helpers ---------- */
const pascal = (id) =>
  id
    .split(/[-_]/)
    .map((s) => s.charAt(0).toUpperCase() + s.slice(1).toLowerCase())
    .join("");

const macro = (id) => id.replace(/-/g, "_").toUpperCase() + "_META";
const fnName = (id) => pascal(id);

/* ---------- shared TSX preamble ---------- */
const preamble = (id, kind, archetype, label, description, density, complexity, motionPresets, effects, isClient) => {
  const useClient = isClient ? `"use client";\n\n` : "";
  return `/* eslint-disable @typescript-eslint/no-explicit-any */
${useClient}import * as React from "react";

import type { PublicSectionModel } from "@/ds/platform/publicSitePreset";
import type { SectionVariantMeta } from "@/ds/composition/sections/_schema";

type Model = Extract<PublicSectionModel, { kind: "${kind}" }>;

export const ${macro(id)}: SectionVariantMeta = {
  id: "${id}",
  kind: "${kind}",
  archetype: "${archetype}",
  label: ${JSON.stringify(label)},
  description: ${JSON.stringify(description)},
  supportsThemes: ["dark", "light"],
  motionPresets: ${JSON.stringify(motionPresets)},
  effects: ${JSON.stringify(effects)},
  density: ${JSON.stringify(density)},
  complexity: ${JSON.stringify(complexity)},
};

`;
};

/* ---------- per-kind template registry ----------
 * Each template returns { tsxBody, css }.
 * tsxBody is the body of `export function <FnName>(props: Model) { ... }`.
 * css is the CSS rules to append (raw text; will be wrapped in 2-space indent).
 */
const templates = {
  /* --- HERO --- */
  "hero-centered": (id) => ({
    tsxBody: `  const { kicker, title, lede, primaryAction, secondaryAction, trustChips } = props as any;
  return (
    <section className="sv-section-root sv-${id}" data-variant="${id}">
      <div className="sv-${id}__panel">
        {kicker ? <div className="sv-${id}__kicker">{kicker}</div> : null}
        <h1 className="sv-${id}__title">{title}</h1>
        {lede ? <p className="sv-${id}__lede">{lede}</p> : null}
        {(primaryAction || secondaryAction) ? (
          <div className="sv-${id}__actions">
            {primaryAction ? <a className="sv-${id}__cta sv-${id}__cta--primary" href={primaryAction.href}>{primaryAction.label}</a> : null}
            {secondaryAction ? <a className="sv-${id}__cta sv-${id}__cta--secondary" href={secondaryAction.href}>{secondaryAction.label}</a> : null}
          </div>
        ) : null}
        {trustChips && trustChips.length > 0 ? (
          <ul className="sv-${id}__chips">
            {trustChips.map((c: any) => <li key={c.id} className="sv-${id}__chip">{c.label}</li>)}
          </ul>
        ) : null}
      </div>
    </section>
  );`,
    css: `.sv-${id}{padding:var(--ds-space-20) var(--ds-space-6);background-color:var(--ds-color-background);color:var(--ds-color-foreground);text-align:center;}
.sv-${id}__panel{max-width:60ch;margin:0 auto;display:flex;flex-direction:column;gap:var(--ds-space-5);align-items:center;}
.sv-${id}__kicker{font-size:var(--ds-font-size-3);text-transform:uppercase;letter-spacing:var(--ds-letter-spacing-widest);color:var(--ds-color-accent);font-weight:var(--ds-font-weight-medium);}
.sv-${id}__title{font-size:var(--ds-font-size-fluid-display);line-height:var(--ds-line-height-tight);letter-spacing:var(--ds-letter-spacing-tight);font-weight:var(--ds-font-weight-bold);color:var(--ds-color-foreground-secondary);margin:0;}
.sv-${id}__lede{font-size:var(--ds-font-size-7);line-height:var(--ds-line-height-relaxed);color:var(--ds-color-foreground-muted);margin:0;}
.sv-${id}__actions{display:flex;gap:var(--ds-space-3);flex-wrap:wrap;justify-content:center;margin-top:var(--ds-space-2);}
.sv-${id}__cta{display:inline-flex;align-items:center;justify-content:center;padding:var(--ds-space-3) var(--ds-space-6);border-radius:var(--ds-radius-md);font-weight:var(--ds-font-weight-semibold);font-size:var(--ds-font-size-5);text-decoration:none;border:1px solid transparent;}
.sv-${id}__cta--primary{background:var(--ds-color-accent);color:var(--ds-color-accent-foreground);}
.sv-${id}__cta--secondary{background:transparent;color:var(--ds-color-foreground-secondary);border-color:var(--ds-color-border-strong);}
.sv-${id}__chips{list-style:none;padding:0;margin:var(--ds-space-2) 0 0;display:flex;flex-wrap:wrap;gap:var(--ds-space-2);justify-content:center;}
.sv-${id}__chip{padding:var(--ds-space-2) var(--ds-space-3);border-radius:var(--ds-radius-full);background:var(--ds-color-surface-raised);color:var(--ds-color-foreground-muted);font-size:var(--ds-font-size-3);}`,
  }),

  "hero-split": (id) => ({
    tsxBody: `  const { kicker, title, lede, primaryAction, secondaryAction } = props as any;
  return (
    <section className="sv-section-root sv-${id}" data-variant="${id}">
      <div className="sv-${id}__grid">
        <div className="sv-${id}__copy">
          {kicker ? <div className="sv-${id}__kicker">{kicker}</div> : null}
          <h1 className="sv-${id}__title">{title}</h1>
          {lede ? <p className="sv-${id}__lede">{lede}</p> : null}
          {(primaryAction || secondaryAction) ? (
            <div className="sv-${id}__actions">
              {primaryAction ? <a className="sv-${id}__cta sv-${id}__cta--primary" href={primaryAction.href}>{primaryAction.label}</a> : null}
              {secondaryAction ? <a className="sv-${id}__cta sv-${id}__cta--secondary" href={secondaryAction.href}>{secondaryAction.label}</a> : null}
            </div>
          ) : null}
        </div>
        <div className="sv-${id}__visual" aria-hidden="true" />
      </div>
    </section>
  );`,
    css: `.sv-${id}{padding:var(--ds-space-16) var(--ds-space-6);background-color:var(--ds-color-background);color:var(--ds-color-foreground);}
.sv-${id}__grid{max-width:80rem;margin:0 auto;display:grid;grid-template-columns:1fr 1fr;gap:var(--ds-space-12);align-items:center;}
@media (max-width:768px){.sv-${id}__grid{grid-template-columns:1fr;}}
.sv-${id}__copy{display:flex;flex-direction:column;gap:var(--ds-space-5);}
.sv-${id}__kicker{font-size:var(--ds-font-size-3);text-transform:uppercase;letter-spacing:var(--ds-letter-spacing-widest);color:var(--ds-color-accent);font-weight:var(--ds-font-weight-medium);}
.sv-${id}__title{font-size:var(--ds-font-size-fluid-display);line-height:var(--ds-line-height-tight);letter-spacing:var(--ds-letter-spacing-tight);font-weight:var(--ds-font-weight-bold);color:var(--ds-color-foreground-secondary);margin:0;}
.sv-${id}__lede{font-size:var(--ds-font-size-7);line-height:var(--ds-line-height-relaxed);color:var(--ds-color-foreground-muted);margin:0;}
.sv-${id}__actions{display:flex;gap:var(--ds-space-3);flex-wrap:wrap;}
.sv-${id}__cta{display:inline-flex;align-items:center;justify-content:center;padding:var(--ds-space-3) var(--ds-space-6);border-radius:var(--ds-radius-md);font-weight:var(--ds-font-weight-semibold);font-size:var(--ds-font-size-5);text-decoration:none;border:1px solid transparent;}
.sv-${id}__cta--primary{background:var(--ds-color-accent);color:var(--ds-color-accent-foreground);}
.sv-${id}__cta--secondary{background:transparent;color:var(--ds-color-foreground-secondary);border-color:var(--ds-color-border-strong);}
.sv-${id}__visual{border-radius:var(--ds-radius-xl);background:linear-gradient(135deg,var(--ds-color-accent-soft) 0%,var(--ds-color-surface-raised) 100%);aspect-ratio:4/3;border:1px solid var(--ds-color-border-muted);}`,
  }),

  "hero-fullbleed-photo": (id) => ({
    tsxBody: `  const { kicker, title, lede, primaryAction, media } = props as any;
  return (
    <section className="sv-section-root sv-${id}" data-variant="${id}">
      {media?.src ? (
        // eslint-disable-next-line @next/next/no-img-element
        <img className="sv-${id}__bg" src={media.src} alt={media.alt ?? ""} aria-hidden={media.alt ? undefined : true} />
      ) : <div className="sv-${id}__bg sv-${id}__bg--placeholder" aria-hidden="true" />}
      <div className="sv-${id}__scrim" aria-hidden="true" />
      <div className="sv-${id}__panel">
        {kicker ? <div className="sv-${id}__kicker">{kicker}</div> : null}
        <h1 className="sv-${id}__title">{title}</h1>
        {lede ? <p className="sv-${id}__lede">{lede}</p> : null}
        {primaryAction ? <a className="sv-${id}__cta" href={primaryAction.href}>{primaryAction.label}</a> : null}
      </div>
    </section>
  );`,
    css: `.sv-${id}{position:relative;min-height:80vh;display:flex;align-items:flex-end;color:var(--ds-color-on-image);overflow:hidden;}
.sv-${id}__bg{position:absolute;inset:0;width:100%;height:100%;object-fit:cover;}
.sv-${id}__bg--placeholder{background:linear-gradient(135deg,var(--ds-color-surface-raised) 0%,var(--ds-color-background) 100%);}
.sv-${id}__scrim{position:absolute;inset:0;background:linear-gradient(to top,var(--ds-color-scrim-darker) 0%,var(--ds-color-scrim-clear) 70%);}
.sv-${id}__panel{position:relative;max-width:60ch;padding:var(--ds-space-12) var(--ds-space-8);display:flex;flex-direction:column;gap:var(--ds-space-4);}
.sv-${id}__kicker{font-size:var(--ds-font-size-3);text-transform:uppercase;letter-spacing:var(--ds-letter-spacing-widest);color:var(--ds-color-on-image-strong);font-weight:var(--ds-font-weight-medium);}
.sv-${id}__title{font-size:var(--ds-font-size-fluid-display);line-height:var(--ds-line-height-tight);font-weight:var(--ds-font-weight-bold);margin:0;color:var(--ds-color-on-image);}
.sv-${id}__lede{font-size:var(--ds-font-size-7);line-height:var(--ds-line-height-relaxed);color:var(--ds-color-on-image-strong);margin:0;}
.sv-${id}__cta{align-self:flex-start;padding:var(--ds-space-3) var(--ds-space-6);background:var(--ds-color-accent);color:var(--ds-color-accent-foreground);border-radius:var(--ds-radius-md);font-weight:var(--ds-font-weight-semibold);text-decoration:none;margin-top:var(--ds-space-3);}`,
  }),

  /* --- FEATURES --- */
  "features-grid": (id, opts) => {
    const cols = opts?.cols ?? 3;
    return {
      tsxBody: `  const { header, features } = props as any;
  return (
    <section className="sv-section-root sv-${id}" data-variant="${id}">
      <div className="sv-${id}__inner">
        {header ? (
          <div className="sv-${id}__header">
            {header.kicker ? <div className="sv-${id}__kicker">{header.kicker}</div> : null}
            {header.title ? <h2 className="sv-${id}__title">{header.title}</h2> : null}
            {header.lede ? <p className="sv-${id}__lede">{header.lede}</p> : null}
          </div>
        ) : null}
        <ul className="sv-${id}__grid">
          {features.map((f: any) => (
            <li key={f.id} className="sv-${id}__item">
              <h3 className="sv-${id}__item-title">{f.title}</h3>
              {f.description ? <p className="sv-${id}__item-desc">{f.description}</p> : null}
            </li>
          ))}
        </ul>
      </div>
    </section>
  );`,
      css: `.sv-${id}{padding:var(--ds-space-16) var(--ds-space-6);background-color:var(--ds-color-background);color:var(--ds-color-foreground);}
.sv-${id}__inner{max-width:80rem;margin:0 auto;display:flex;flex-direction:column;gap:var(--ds-space-10);}
.sv-${id}__header{max-width:60ch;display:flex;flex-direction:column;gap:var(--ds-space-3);}
.sv-${id}__kicker{font-size:var(--ds-font-size-3);text-transform:uppercase;letter-spacing:var(--ds-letter-spacing-widest);color:var(--ds-color-accent);font-weight:var(--ds-font-weight-medium);}
.sv-${id}__title{font-size:var(--ds-font-size-fluid-h1);font-weight:var(--ds-font-weight-bold);color:var(--ds-color-foreground-secondary);margin:0;line-height:var(--ds-line-height-tight);}
.sv-${id}__lede{font-size:var(--ds-font-size-6);color:var(--ds-color-foreground-muted);margin:0;line-height:var(--ds-line-height-relaxed);}
.sv-${id}__grid{list-style:none;padding:0;margin:0;display:grid;grid-template-columns:repeat(${cols},minmax(0,1fr));gap:var(--ds-space-8);}
@media (max-width:960px){.sv-${id}__grid{grid-template-columns:repeat(2,minmax(0,1fr));}}
@media (max-width:600px){.sv-${id}__grid{grid-template-columns:1fr;}}
.sv-${id}__item{padding:var(--ds-space-6);background:var(--ds-color-surface-raised);border:1px solid var(--ds-color-border-muted);border-radius:var(--ds-radius-lg);display:flex;flex-direction:column;gap:var(--ds-space-3);}
.sv-${id}__item-title{font-size:var(--ds-font-size-7);font-weight:var(--ds-font-weight-semibold);color:var(--ds-color-foreground-secondary);margin:0;}
.sv-${id}__item-desc{font-size:var(--ds-font-size-5);color:var(--ds-color-foreground-muted);line-height:var(--ds-line-height-relaxed);margin:0;}`,
    };
  },

  "features-stacked": (id) => ({
    tsxBody: `  const { header, features } = props as any;
  return (
    <section className="sv-section-root sv-${id}" data-variant="${id}">
      <div className="sv-${id}__inner">
        {header ? (
          <div className="sv-${id}__header">
            {header.kicker ? <div className="sv-${id}__kicker">{header.kicker}</div> : null}
            {header.title ? <h2 className="sv-${id}__title">{header.title}</h2> : null}
            {header.lede ? <p className="sv-${id}__lede">{header.lede}</p> : null}
          </div>
        ) : null}
        <ol className="sv-${id}__list">
          {features.map((f: any, i: number) => (
            <li key={f.id} className="sv-${id}__row">
              <span className="sv-${id}__num">{String(i + 1).padStart(2, "0")}</span>
              <div className="sv-${id}__body">
                <h3 className="sv-${id}__row-title">{f.title}</h3>
                {f.description ? <p className="sv-${id}__row-desc">{f.description}</p> : null}
              </div>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );`,
    css: `.sv-${id}{padding:var(--ds-space-16) var(--ds-space-6);background-color:var(--ds-color-background);color:var(--ds-color-foreground);}
.sv-${id}__inner{max-width:72rem;margin:0 auto;display:flex;flex-direction:column;gap:var(--ds-space-10);}
.sv-${id}__header{max-width:60ch;display:flex;flex-direction:column;gap:var(--ds-space-3);}
.sv-${id}__kicker{font-size:var(--ds-font-size-3);text-transform:uppercase;letter-spacing:var(--ds-letter-spacing-widest);color:var(--ds-color-accent);font-weight:var(--ds-font-weight-medium);}
.sv-${id}__title{font-size:var(--ds-font-size-fluid-h1);font-weight:var(--ds-font-weight-bold);color:var(--ds-color-foreground-secondary);margin:0;line-height:var(--ds-line-height-tight);}
.sv-${id}__lede{font-size:var(--ds-font-size-6);color:var(--ds-color-foreground-muted);margin:0;}
.sv-${id}__list{list-style:none;padding:0;margin:0;display:flex;flex-direction:column;gap:var(--ds-space-8);}
.sv-${id}__row{display:grid;grid-template-columns:4rem minmax(0,1fr);gap:var(--ds-space-6);padding-block:var(--ds-space-6);border-top:1px solid var(--ds-color-border-muted);}
.sv-${id}__num{font-size:var(--ds-font-size-9);font-weight:var(--ds-font-weight-light);color:var(--ds-color-accent);line-height:1;}
.sv-${id}__body{display:flex;flex-direction:column;gap:var(--ds-space-2);}
.sv-${id}__row-title{font-size:var(--ds-font-size-7);font-weight:var(--ds-font-weight-semibold);color:var(--ds-color-foreground-secondary);margin:0;}
.sv-${id}__row-desc{font-size:var(--ds-font-size-5);color:var(--ds-color-foreground-muted);line-height:var(--ds-line-height-relaxed);margin:0;}`,
  }),

  /* --- TESTIMONIALS --- */
  "testimonials-cards": (id, opts) => {
    const cols = opts?.cols ?? 3;
    return {
      tsxBody: `  const { header, items } = props as any;
  return (
    <section className="sv-section-root sv-${id}" data-variant="${id}">
      <div className="sv-${id}__inner">
        {header ? (
          <div className="sv-${id}__header">
            {header.kicker ? <div className="sv-${id}__kicker">{header.kicker}</div> : null}
            {header.title ? <h2 className="sv-${id}__title">{header.title}</h2> : null}
          </div>
        ) : null}
        <ul className="sv-${id}__grid">
          {items.map((t: any) => (
            <li key={t.id} className="sv-${id}__card">
              <blockquote className="sv-${id}__quote">{t.quote}</blockquote>
              <div className="sv-${id}__attr">
                <span className="sv-${id}__name">{t.name}</span>
                {t.meta ? <span className="sv-${id}__meta">{t.meta}</span> : null}
              </div>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );`,
      css: `.sv-${id}{padding:var(--ds-space-16) var(--ds-space-6);background-color:var(--ds-color-background);color:var(--ds-color-foreground);}
.sv-${id}__inner{max-width:80rem;margin:0 auto;display:flex;flex-direction:column;gap:var(--ds-space-10);}
.sv-${id}__header{max-width:60ch;display:flex;flex-direction:column;gap:var(--ds-space-3);}
.sv-${id}__kicker{font-size:var(--ds-font-size-3);text-transform:uppercase;letter-spacing:var(--ds-letter-spacing-widest);color:var(--ds-color-accent);font-weight:var(--ds-font-weight-medium);}
.sv-${id}__title{font-size:var(--ds-font-size-fluid-h1);font-weight:var(--ds-font-weight-bold);color:var(--ds-color-foreground-secondary);margin:0;line-height:var(--ds-line-height-tight);}
.sv-${id}__grid{list-style:none;padding:0;margin:0;display:grid;grid-template-columns:repeat(${cols},minmax(0,1fr));gap:var(--ds-space-6);}
@media (max-width:900px){.sv-${id}__grid{grid-template-columns:1fr;}}
.sv-${id}__card{padding:var(--ds-space-7);background:var(--ds-color-surface-raised);border:1px solid var(--ds-color-border-muted);border-radius:var(--ds-radius-lg);display:flex;flex-direction:column;gap:var(--ds-space-5);}
.sv-${id}__quote{font-size:var(--ds-font-size-6);line-height:var(--ds-line-height-relaxed);color:var(--ds-color-foreground-secondary);margin:0;font-style:italic;}
.sv-${id}__attr{display:flex;flex-direction:column;gap:var(--ds-space-1);border-top:1px solid var(--ds-color-border-muted);padding-top:var(--ds-space-4);}
.sv-${id}__name{font-weight:var(--ds-font-weight-semibold);color:var(--ds-color-foreground-secondary);font-size:var(--ds-font-size-5);}
.sv-${id}__meta{color:var(--ds-color-foreground-muted);font-size:var(--ds-font-size-4);}`,
    };
  },

  "testimonials-large-quote": (id) => ({
    tsxBody: `  const { header, items } = props as any;
  const item = items[0];
  if (!item) return null;
  return (
    <section className="sv-section-root sv-${id}" data-variant="${id}">
      <div className="sv-${id}__inner">
        {header?.kicker ? <div className="sv-${id}__kicker">{header.kicker}</div> : null}
        <blockquote className="sv-${id}__quote">{item.quote}</blockquote>
        <div className="sv-${id}__attr">
          <span className="sv-${id}__name">{item.name}</span>
          {item.meta ? <span className="sv-${id}__meta">{item.meta}</span> : null}
        </div>
      </div>
    </section>
  );`,
    css: `.sv-${id}{padding:var(--ds-space-20) var(--ds-space-6);background-color:var(--ds-color-background);color:var(--ds-color-foreground);}
.sv-${id}__inner{max-width:60rem;margin:0 auto;display:flex;flex-direction:column;gap:var(--ds-space-8);align-items:flex-start;}
.sv-${id}__kicker{font-size:var(--ds-font-size-3);text-transform:uppercase;letter-spacing:var(--ds-letter-spacing-widest);color:var(--ds-color-accent);font-weight:var(--ds-font-weight-medium);}
.sv-${id}__quote{font-size:var(--ds-font-size-fluid-h1);line-height:var(--ds-line-height-snug);color:var(--ds-color-foreground-secondary);margin:0;font-weight:var(--ds-font-weight-light);letter-spacing:var(--ds-letter-spacing-tight);}
.sv-${id}__attr{display:flex;flex-direction:column;gap:var(--ds-space-1);}
.sv-${id}__name{font-weight:var(--ds-font-weight-semibold);color:var(--ds-color-foreground-secondary);font-size:var(--ds-font-size-6);}
.sv-${id}__meta{color:var(--ds-color-foreground-muted);font-size:var(--ds-font-size-5);}`,
  }),

  /* --- FAQ --- */
  "faq-accordion": (id) => ({
    tsxBody: `  const { header, items } = props as any;
  return (
    <section className="sv-section-root sv-${id}" data-variant="${id}">
      <div className="sv-${id}__inner">
        {header ? (
          <div className="sv-${id}__header">
            {header.kicker ? <div className="sv-${id}__kicker">{header.kicker}</div> : null}
            {header.title ? <h2 className="sv-${id}__title">{header.title}</h2> : null}
            {header.lede ? <p className="sv-${id}__lede">{header.lede}</p> : null}
          </div>
        ) : null}
        <ul className="sv-${id}__list">
          {items.map((it: any) => (
            <li key={it.id} className="sv-${id}__item">
              <details>
                <summary className="sv-${id}__q">{it.q}</summary>
                <p className="sv-${id}__a">{it.a}</p>
              </details>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );`,
    css: `.sv-${id}{padding:var(--ds-space-16) var(--ds-space-6);background-color:var(--ds-color-background);color:var(--ds-color-foreground);}
.sv-${id}__inner{max-width:64rem;margin:0 auto;display:flex;flex-direction:column;gap:var(--ds-space-10);}
.sv-${id}__header{max-width:60ch;display:flex;flex-direction:column;gap:var(--ds-space-3);}
.sv-${id}__kicker{font-size:var(--ds-font-size-3);text-transform:uppercase;letter-spacing:var(--ds-letter-spacing-widest);color:var(--ds-color-accent);font-weight:var(--ds-font-weight-medium);}
.sv-${id}__title{font-size:var(--ds-font-size-fluid-h1);font-weight:var(--ds-font-weight-bold);color:var(--ds-color-foreground-secondary);margin:0;line-height:var(--ds-line-height-tight);}
.sv-${id}__lede{font-size:var(--ds-font-size-6);color:var(--ds-color-foreground-muted);margin:0;}
.sv-${id}__list{list-style:none;padding:0;margin:0;display:flex;flex-direction:column;}
.sv-${id}__item{border-top:1px solid var(--ds-color-border-muted);}
.sv-${id}__item:last-child{border-bottom:1px solid var(--ds-color-border-muted);}
.sv-${id}__item details{padding:var(--ds-space-5) 0;}
.sv-${id}__q{cursor:pointer;font-size:var(--ds-font-size-6);font-weight:var(--ds-font-weight-semibold);color:var(--ds-color-foreground-secondary);list-style:none;display:flex;justify-content:space-between;align-items:center;gap:var(--ds-space-4);}
.sv-${id}__q::after{content:"+";font-size:var(--ds-font-size-7);color:var(--ds-color-foreground-muted);font-weight:var(--ds-font-weight-light);}
.sv-${id}__item details[open] .sv-${id}__q::after{content:"−";}
.sv-${id}__a{margin:var(--ds-space-4) 0 0;color:var(--ds-color-foreground-muted);line-height:var(--ds-line-height-relaxed);font-size:var(--ds-font-size-5);}`,
  }),

  "faq-two-col": (id) => ({
    tsxBody: `  const { header, items } = props as any;
  const mid = Math.ceil(items.length / 2);
  const left = items.slice(0, mid);
  const right = items.slice(mid);
  return (
    <section className="sv-section-root sv-${id}" data-variant="${id}">
      <div className="sv-${id}__inner">
        {header ? (
          <div className="sv-${id}__header">
            {header.kicker ? <div className="sv-${id}__kicker">{header.kicker}</div> : null}
            {header.title ? <h2 className="sv-${id}__title">{header.title}</h2> : null}
          </div>
        ) : null}
        <div className="sv-${id}__cols">
          {[left, right].map((col, idx) => (
            <ul key={idx} className="sv-${id}__col">
              {col.map((it: any) => (
                <li key={it.id} className="sv-${id}__entry">
                  <h3 className="sv-${id}__q">{it.q}</h3>
                  <p className="sv-${id}__a">{it.a}</p>
                </li>
              ))}
            </ul>
          ))}
        </div>
      </div>
    </section>
  );`,
    css: `.sv-${id}{padding:var(--ds-space-16) var(--ds-space-6);background-color:var(--ds-color-background);color:var(--ds-color-foreground);}
.sv-${id}__inner{max-width:80rem;margin:0 auto;display:flex;flex-direction:column;gap:var(--ds-space-10);}
.sv-${id}__header{max-width:60ch;display:flex;flex-direction:column;gap:var(--ds-space-3);}
.sv-${id}__kicker{font-size:var(--ds-font-size-3);text-transform:uppercase;letter-spacing:var(--ds-letter-spacing-widest);color:var(--ds-color-accent);font-weight:var(--ds-font-weight-medium);}
.sv-${id}__title{font-size:var(--ds-font-size-fluid-h1);font-weight:var(--ds-font-weight-bold);color:var(--ds-color-foreground-secondary);margin:0;line-height:var(--ds-line-height-tight);}
.sv-${id}__cols{display:grid;grid-template-columns:1fr 1fr;gap:var(--ds-space-10);}
@media (max-width:768px){.sv-${id}__cols{grid-template-columns:1fr;}}
.sv-${id}__col{list-style:none;padding:0;margin:0;display:flex;flex-direction:column;gap:var(--ds-space-6);}
.sv-${id}__entry{display:flex;flex-direction:column;gap:var(--ds-space-2);}
.sv-${id}__q{font-size:var(--ds-font-size-6);font-weight:var(--ds-font-weight-semibold);color:var(--ds-color-foreground-secondary);margin:0;}
.sv-${id}__a{font-size:var(--ds-font-size-5);line-height:var(--ds-line-height-relaxed);color:var(--ds-color-foreground-muted);margin:0;}`,
  }),

  /* --- BLOGLIST --- */
  "bloglist-cards": (id, opts) => {
    const cols = opts?.cols ?? 3;
    return {
      tsxBody: `  const { header, posts } = props as any;
  return (
    <section className="sv-section-root sv-${id}" data-variant="${id}">
      <div className="sv-${id}__inner">
        {header ? (
          <div className="sv-${id}__header">
            {header.kicker ? <div className="sv-${id}__kicker">{header.kicker}</div> : null}
            {header.title ? <h2 className="sv-${id}__title">{header.title}</h2> : null}
          </div>
        ) : null}
        <ul className="sv-${id}__grid">
          {posts.map((p: any) => (
            <li key={p.id} className="sv-${id}__card">
              <div className="sv-${id}__thumb" aria-hidden="true" />
              <h3 className="sv-${id}__post-title"><a href={p.href}>{p.title}</a></h3>
              {p.excerpt ? <p className="sv-${id}__excerpt">{p.excerpt}</p> : null}
            </li>
          ))}
        </ul>
      </div>
    </section>
  );`,
      css: `.sv-${id}{padding:var(--ds-space-16) var(--ds-space-6);background-color:var(--ds-color-background);color:var(--ds-color-foreground);}
.sv-${id}__inner{max-width:80rem;margin:0 auto;display:flex;flex-direction:column;gap:var(--ds-space-10);}
.sv-${id}__header{max-width:60ch;display:flex;flex-direction:column;gap:var(--ds-space-3);}
.sv-${id}__kicker{font-size:var(--ds-font-size-3);text-transform:uppercase;letter-spacing:var(--ds-letter-spacing-widest);color:var(--ds-color-accent);font-weight:var(--ds-font-weight-medium);}
.sv-${id}__title{font-size:var(--ds-font-size-fluid-h1);font-weight:var(--ds-font-weight-bold);color:var(--ds-color-foreground-secondary);margin:0;line-height:var(--ds-line-height-tight);}
.sv-${id}__grid{list-style:none;padding:0;margin:0;display:grid;grid-template-columns:repeat(${cols},minmax(0,1fr));gap:var(--ds-space-8);}
@media (max-width:900px){.sv-${id}__grid{grid-template-columns:1fr;}}
.sv-${id}__card{display:flex;flex-direction:column;gap:var(--ds-space-4);}
.sv-${id}__thumb{aspect-ratio:16/10;background:linear-gradient(135deg,var(--ds-color-accent-soft) 0%,var(--ds-color-surface-raised) 100%);border-radius:var(--ds-radius-lg);border:1px solid var(--ds-color-border-muted);}
.sv-${id}__post-title{font-size:var(--ds-font-size-7);font-weight:var(--ds-font-weight-semibold);color:var(--ds-color-foreground-secondary);margin:0;line-height:var(--ds-line-height-snug);}
.sv-${id}__post-title a{color:inherit;text-decoration:none;}
.sv-${id}__excerpt{font-size:var(--ds-font-size-5);color:var(--ds-color-foreground-muted);line-height:var(--ds-line-height-relaxed);margin:0;}`,
    };
  },

  "bloglist-list": (id) => ({
    tsxBody: `  const { header, posts } = props as any;
  return (
    <section className="sv-section-root sv-${id}" data-variant="${id}">
      <div className="sv-${id}__inner">
        {header ? (
          <div className="sv-${id}__header">
            {header.kicker ? <div className="sv-${id}__kicker">{header.kicker}</div> : null}
            {header.title ? <h2 className="sv-${id}__title">{header.title}</h2> : null}
          </div>
        ) : null}
        <ol className="sv-${id}__list">
          {posts.map((p: any) => (
            <li key={p.id} className="sv-${id}__row">
              <a className="sv-${id}__link" href={p.href}>
                <h3 className="sv-${id}__post-title">{p.title}</h3>
                {p.excerpt ? <p className="sv-${id}__excerpt">{p.excerpt}</p> : null}
              </a>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );`,
    css: `.sv-${id}{padding:var(--ds-space-16) var(--ds-space-6);background-color:var(--ds-color-background);color:var(--ds-color-foreground);}
.sv-${id}__inner{max-width:64rem;margin:0 auto;display:flex;flex-direction:column;gap:var(--ds-space-10);}
.sv-${id}__header{max-width:60ch;display:flex;flex-direction:column;gap:var(--ds-space-3);}
.sv-${id}__kicker{font-size:var(--ds-font-size-3);text-transform:uppercase;letter-spacing:var(--ds-letter-spacing-widest);color:var(--ds-color-accent);font-weight:var(--ds-font-weight-medium);}
.sv-${id}__title{font-size:var(--ds-font-size-fluid-h1);font-weight:var(--ds-font-weight-bold);color:var(--ds-color-foreground-secondary);margin:0;line-height:var(--ds-line-height-tight);}
.sv-${id}__list{list-style:none;padding:0;margin:0;display:flex;flex-direction:column;}
.sv-${id}__row{border-top:1px solid var(--ds-color-border-muted);}
.sv-${id}__row:last-child{border-bottom:1px solid var(--ds-color-border-muted);}
.sv-${id}__link{display:block;padding:var(--ds-space-6) 0;color:inherit;text-decoration:none;}
.sv-${id}__post-title{font-size:var(--ds-font-size-7);font-weight:var(--ds-font-weight-semibold);color:var(--ds-color-foreground-secondary);margin:0 0 var(--ds-space-2);line-height:var(--ds-line-height-snug);}
.sv-${id}__excerpt{font-size:var(--ds-font-size-5);color:var(--ds-color-foreground-muted);line-height:var(--ds-line-height-relaxed);margin:0;}`,
  }),

  /* --- CTA --- */
  "cta-card": (id) => ({
    tsxBody: `  const { header, body, primaryAction, secondaryAction } = props as any;
  return (
    <section className="sv-section-root sv-${id}" data-variant="${id}">
      <div className="sv-${id}__card">
        {header?.kicker ? <div className="sv-${id}__kicker">{header.kicker}</div> : null}
        {header?.title ? <h2 className="sv-${id}__title">{header.title}</h2> : null}
        {body ? <p className="sv-${id}__body">{body}</p> : header?.lede ? <p className="sv-${id}__body">{header.lede}</p> : null}
        {(primaryAction || secondaryAction) ? (
          <div className="sv-${id}__actions">
            {primaryAction ? <a className="sv-${id}__cta sv-${id}__cta--primary" href={primaryAction.href}>{primaryAction.label}</a> : null}
            {secondaryAction ? <a className="sv-${id}__cta sv-${id}__cta--secondary" href={secondaryAction.href}>{secondaryAction.label}</a> : null}
          </div>
        ) : null}
      </div>
    </section>
  );`,
    css: `.sv-${id}{padding:var(--ds-space-16) var(--ds-space-6);background-color:var(--ds-color-background);color:var(--ds-color-foreground);}
.sv-${id}__card{max-width:64rem;margin:0 auto;padding:var(--ds-space-12) var(--ds-space-10);background:var(--ds-color-surface-raised);border:1px solid var(--ds-color-border-muted);border-radius:var(--ds-radius-xl);display:flex;flex-direction:column;gap:var(--ds-space-5);align-items:center;text-align:center;}
.sv-${id}__kicker{font-size:var(--ds-font-size-3);text-transform:uppercase;letter-spacing:var(--ds-letter-spacing-widest);color:var(--ds-color-accent);font-weight:var(--ds-font-weight-medium);}
.sv-${id}__title{font-size:var(--ds-font-size-fluid-h1);font-weight:var(--ds-font-weight-bold);color:var(--ds-color-foreground-secondary);margin:0;line-height:var(--ds-line-height-tight);}
.sv-${id}__body{font-size:var(--ds-font-size-6);color:var(--ds-color-foreground-muted);max-width:60ch;line-height:var(--ds-line-height-relaxed);margin:0;}
.sv-${id}__actions{display:flex;gap:var(--ds-space-3);flex-wrap:wrap;justify-content:center;margin-top:var(--ds-space-2);}
.sv-${id}__cta{display:inline-flex;align-items:center;padding:var(--ds-space-3) var(--ds-space-6);border-radius:var(--ds-radius-md);font-weight:var(--ds-font-weight-semibold);text-decoration:none;border:1px solid transparent;font-size:var(--ds-font-size-5);}
.sv-${id}__cta--primary{background:var(--ds-color-accent);color:var(--ds-color-accent-foreground);}
.sv-${id}__cta--secondary{background:transparent;color:var(--ds-color-foreground-secondary);border-color:var(--ds-color-border-strong);}`,
  }),

  "cta-banner": (id) => ({
    tsxBody: `  const { header, body, primaryAction } = props as any;
  return (
    <section className="sv-section-root sv-${id}" data-variant="${id}">
      <div className="sv-${id}__bar">
        <div className="sv-${id}__copy">
          {header?.title ? <h2 className="sv-${id}__title">{header.title}</h2> : null}
          {body ? <p className="sv-${id}__body">{body}</p> : null}
        </div>
        {primaryAction ? <a className="sv-${id}__cta" href={primaryAction.href}>{primaryAction.label}</a> : null}
      </div>
    </section>
  );`,
    css: `.sv-${id}{padding:var(--ds-space-12) var(--ds-space-6);background-color:var(--ds-color-background);color:var(--ds-color-foreground);}
.sv-${id}__bar{max-width:80rem;margin:0 auto;padding:var(--ds-space-8) var(--ds-space-10);background:var(--ds-color-accent);color:var(--ds-color-accent-foreground);border-radius:var(--ds-radius-xl);display:flex;align-items:center;justify-content:space-between;gap:var(--ds-space-8);flex-wrap:wrap;}
.sv-${id}__copy{display:flex;flex-direction:column;gap:var(--ds-space-2);}
.sv-${id}__title{font-size:var(--ds-font-size-8);font-weight:var(--ds-font-weight-bold);margin:0;line-height:var(--ds-line-height-snug);color:var(--ds-color-accent-foreground);}
.sv-${id}__body{font-size:var(--ds-font-size-5);margin:0;opacity:0.9;}
.sv-${id}__cta{display:inline-flex;align-items:center;padding:var(--ds-space-3) var(--ds-space-6);background:var(--ds-color-surface);color:var(--ds-color-foreground-secondary);border-radius:var(--ds-radius-md);font-weight:var(--ds-font-weight-semibold);text-decoration:none;font-size:var(--ds-font-size-5);}`,
  }),

  /* --- NEWSLETTER --- */
  "newsletter-static": (id) => ({
    tsxBody: `  const { header, title } = props as any;
  return (
    <section className="sv-section-root sv-${id}" data-variant="${id}">
      <div className="sv-${id}__inner">
        <div className="sv-${id}__copy">
          {header?.kicker ? <div className="sv-${id}__kicker">{header.kicker}</div> : null}
          <h2 className="sv-${id}__title">{header?.title ?? title ?? "Subscribe"}</h2>
          {header?.lede ? <p className="sv-${id}__lede">{header.lede}</p> : null}
        </div>
        <form className="sv-${id}__form" action="/subscribe" method="post">
          <label className="sv-${id}__field">
            <span className="sv-${id}__label">Email</span>
            <input className="sv-${id}__input" type="email" name="email" required placeholder="you@example.com" />
          </label>
          <button className="sv-${id}__submit" type="submit">Subscribe</button>
        </form>
      </div>
    </section>
  );`,
    css: `.sv-${id}{padding:var(--ds-space-16) var(--ds-space-6);background-color:var(--ds-color-background);color:var(--ds-color-foreground);}
.sv-${id}__inner{max-width:64rem;margin:0 auto;display:flex;flex-direction:column;gap:var(--ds-space-8);align-items:center;text-align:center;}
.sv-${id}__copy{display:flex;flex-direction:column;gap:var(--ds-space-3);max-width:56ch;}
.sv-${id}__kicker{font-size:var(--ds-font-size-3);text-transform:uppercase;letter-spacing:var(--ds-letter-spacing-widest);color:var(--ds-color-accent);font-weight:var(--ds-font-weight-medium);}
.sv-${id}__title{font-size:var(--ds-font-size-fluid-h1);font-weight:var(--ds-font-weight-bold);color:var(--ds-color-foreground-secondary);margin:0;line-height:var(--ds-line-height-tight);}
.sv-${id}__lede{font-size:var(--ds-font-size-6);color:var(--ds-color-foreground-muted);line-height:var(--ds-line-height-relaxed);margin:0;}
.sv-${id}__form{display:flex;gap:var(--ds-space-3);width:100%;max-width:32rem;flex-wrap:wrap;}
.sv-${id}__field{flex:1 1 18rem;text-align:left;}
.sv-${id}__label{display:block;font-size:var(--ds-font-size-4);color:var(--ds-color-foreground-muted);margin-bottom:var(--ds-space-1);}
.sv-${id}__input{width:100%;padding:var(--ds-space-3) var(--ds-space-4);background:var(--ds-color-surface);border:1px solid var(--ds-color-border-strong);border-radius:var(--ds-radius-md);color:var(--ds-color-foreground-secondary);font-size:var(--ds-font-size-5);}
.sv-${id}__submit{padding:var(--ds-space-3) var(--ds-space-6);background:var(--ds-color-accent);color:var(--ds-color-accent-foreground);border:none;border-radius:var(--ds-radius-md);font-weight:var(--ds-font-weight-semibold);cursor:pointer;align-self:flex-end;font-size:var(--ds-font-size-5);}`,
  }),

  /* --- STATS-BAND --- */
  "stats-band": (id, opts) => {
    const cols = opts?.cols ?? 4;
    return {
      tsxBody: `  const { header, stats } = props as any;
  return (
    <section className="sv-section-root sv-${id}" data-variant="${id}">
      <div className="sv-${id}__inner">
        {header?.title ? <h2 className="sv-${id}__title">{header.title}</h2> : null}
        <dl className="sv-${id}__grid">
          {stats.map((s: any) => (
            <div key={s.id} className="sv-${id}__cell">
              <dt className="sv-${id}__value">{s.value}</dt>
              <dd className="sv-${id}__label">{s.label}{s.sublabel ? <span className="sv-${id}__sub">{s.sublabel}</span> : null}</dd>
            </div>
          ))}
        </dl>
      </div>
    </section>
  );`,
      css: `.sv-${id}{padding:var(--ds-space-14) var(--ds-space-6);background-color:var(--ds-color-surface);color:var(--ds-color-foreground);}
.sv-${id}__inner{max-width:80rem;margin:0 auto;display:flex;flex-direction:column;gap:var(--ds-space-8);}
.sv-${id}__title{font-size:var(--ds-font-size-fluid-h2);font-weight:var(--ds-font-weight-bold);color:var(--ds-color-foreground-secondary);margin:0;text-align:center;}
.sv-${id}__grid{display:grid;grid-template-columns:repeat(${cols},minmax(0,1fr));gap:var(--ds-space-8);margin:0;}
@media (max-width:768px){.sv-${id}__grid{grid-template-columns:repeat(2,minmax(0,1fr));}}
.sv-${id}__cell{display:flex;flex-direction:column;gap:var(--ds-space-2);text-align:center;}
.sv-${id}__value{font-size:var(--ds-font-size-11);font-weight:var(--ds-font-weight-bold);color:var(--ds-color-accent);line-height:1;margin:0;letter-spacing:var(--ds-letter-spacing-tight);}
.sv-${id}__label{font-size:var(--ds-font-size-5);color:var(--ds-color-foreground-muted);margin:0;display:flex;flex-direction:column;gap:var(--ds-space-1);}
.sv-${id}__sub{font-size:var(--ds-font-size-3);color:var(--ds-color-foreground-muted);opacity:0.75;}`,
    };
  },

  /* --- PROCESS-STEPS --- */
  "process-steps-vertical": (id) => ({
    tsxBody: `  const { header, steps } = props as any;
  return (
    <section className="sv-section-root sv-${id}" data-variant="${id}">
      <div className="sv-${id}__inner">
        {header ? (
          <div className="sv-${id}__header">
            {header.kicker ? <div className="sv-${id}__kicker">{header.kicker}</div> : null}
            {header.title ? <h2 className="sv-${id}__title">{header.title}</h2> : null}
          </div>
        ) : null}
        <ol className="sv-${id}__list">
          {steps.map((s: any, i: number) => (
            <li key={s.id} className="sv-${id}__step">
              <span className="sv-${id}__num">{s.number ?? String(i + 1).padStart(2, "0")}</span>
              <div className="sv-${id}__body">
                <h3 className="sv-${id}__step-title">{s.title}</h3>
                {s.description ? <p className="sv-${id}__step-desc">{s.description}</p> : null}
              </div>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );`,
    css: `.sv-${id}{padding:var(--ds-space-16) var(--ds-space-6);background-color:var(--ds-color-background);color:var(--ds-color-foreground);}
.sv-${id}__inner{max-width:64rem;margin:0 auto;display:flex;flex-direction:column;gap:var(--ds-space-10);}
.sv-${id}__header{max-width:60ch;display:flex;flex-direction:column;gap:var(--ds-space-3);}
.sv-${id}__kicker{font-size:var(--ds-font-size-3);text-transform:uppercase;letter-spacing:var(--ds-letter-spacing-widest);color:var(--ds-color-accent);font-weight:var(--ds-font-weight-medium);}
.sv-${id}__title{font-size:var(--ds-font-size-fluid-h1);font-weight:var(--ds-font-weight-bold);color:var(--ds-color-foreground-secondary);margin:0;line-height:var(--ds-line-height-tight);}
.sv-${id}__list{list-style:none;padding:0;margin:0;display:flex;flex-direction:column;gap:var(--ds-space-8);}
.sv-${id}__step{display:grid;grid-template-columns:3rem 1fr;gap:var(--ds-space-5);align-items:flex-start;}
.sv-${id}__num{width:3rem;height:3rem;display:flex;align-items:center;justify-content:center;background:var(--ds-color-accent-soft);color:var(--ds-color-accent);border-radius:var(--ds-radius-full);font-weight:var(--ds-font-weight-bold);font-size:var(--ds-font-size-5);}
.sv-${id}__body{display:flex;flex-direction:column;gap:var(--ds-space-2);padding-top:var(--ds-space-2);}
.sv-${id}__step-title{font-size:var(--ds-font-size-7);font-weight:var(--ds-font-weight-semibold);color:var(--ds-color-foreground-secondary);margin:0;}
.sv-${id}__step-desc{font-size:var(--ds-font-size-5);color:var(--ds-color-foreground-muted);line-height:var(--ds-line-height-relaxed);margin:0;}`,
  }),

  /* --- LOGO-CLOUD --- */
  "logo-cloud-grid": (id) => ({
    tsxBody: `  const { header, logos } = props as any;
  return (
    <section className="sv-section-root sv-${id}" data-variant="${id}">
      <div className="sv-${id}__inner">
        {header?.title ? <h2 className="sv-${id}__title">{header.title}</h2> : null}
        <ul className="sv-${id}__grid">
          {logos.map((l: any) => (
            <li key={l.id} className="sv-${id}__cell">
              {l.href ? <a href={l.href} className="sv-${id}__link">{l.label}</a> : <span>{l.label}</span>}
            </li>
          ))}
        </ul>
      </div>
    </section>
  );`,
    css: `.sv-${id}{padding:var(--ds-space-12) var(--ds-space-6);background-color:var(--ds-color-background);color:var(--ds-color-foreground);}
.sv-${id}__inner{max-width:80rem;margin:0 auto;display:flex;flex-direction:column;gap:var(--ds-space-8);align-items:center;}
.sv-${id}__title{font-size:var(--ds-font-size-5);color:var(--ds-color-foreground-muted);font-weight:var(--ds-font-weight-medium);text-transform:uppercase;letter-spacing:var(--ds-letter-spacing-wide);margin:0;text-align:center;}
.sv-${id}__grid{list-style:none;padding:0;margin:0;display:grid;grid-template-columns:repeat(auto-fit,minmax(8rem,1fr));gap:var(--ds-space-6);width:100%;align-items:center;}
.sv-${id}__cell{display:flex;align-items:center;justify-content:center;padding:var(--ds-space-4);color:var(--ds-color-foreground-muted);font-weight:var(--ds-font-weight-semibold);font-size:var(--ds-font-size-6);}
.sv-${id}__link{color:inherit;text-decoration:none;}`,
  }),

  /* --- CASE-STUDIES --- */
  "case-studies-grid": (id, opts) => {
    const cols = opts?.cols ?? 2;
    return {
      tsxBody: `  const { header, items } = props as any;
  return (
    <section className="sv-section-root sv-${id}" data-variant="${id}">
      <div className="sv-${id}__inner">
        {header ? (
          <div className="sv-${id}__header">
            {header.kicker ? <div className="sv-${id}__kicker">{header.kicker}</div> : null}
            {header.title ? <h2 className="sv-${id}__title">{header.title}</h2> : null}
          </div>
        ) : null}
        <ul className="sv-${id}__grid">
          {items.map((c: any) => (
            <li key={c.id} className="sv-${id}__card">
              <a href={c.href} className="sv-${id}__link">
                <div className="sv-${id}__thumb" aria-hidden="true" />
                {c.tags && c.tags.length > 0 ? (
                  <ul className="sv-${id}__tags">{c.tags.map((t: string) => <li key={t} className="sv-${id}__tag">{t}</li>)}</ul>
                ) : null}
                <h3 className="sv-${id}__case-title">{c.title}</h3>
                {c.excerpt ? <p className="sv-${id}__excerpt">{c.excerpt}</p> : null}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );`,
      css: `.sv-${id}{padding:var(--ds-space-16) var(--ds-space-6);background-color:var(--ds-color-background);color:var(--ds-color-foreground);}
.sv-${id}__inner{max-width:80rem;margin:0 auto;display:flex;flex-direction:column;gap:var(--ds-space-10);}
.sv-${id}__header{max-width:60ch;display:flex;flex-direction:column;gap:var(--ds-space-3);}
.sv-${id}__kicker{font-size:var(--ds-font-size-3);text-transform:uppercase;letter-spacing:var(--ds-letter-spacing-widest);color:var(--ds-color-accent);font-weight:var(--ds-font-weight-medium);}
.sv-${id}__title{font-size:var(--ds-font-size-fluid-h1);font-weight:var(--ds-font-weight-bold);color:var(--ds-color-foreground-secondary);margin:0;line-height:var(--ds-line-height-tight);}
.sv-${id}__grid{list-style:none;padding:0;margin:0;display:grid;grid-template-columns:repeat(${cols},minmax(0,1fr));gap:var(--ds-space-8);}
@media (max-width:768px){.sv-${id}__grid{grid-template-columns:1fr;}}
.sv-${id}__card{display:flex;}
.sv-${id}__link{display:flex;flex-direction:column;gap:var(--ds-space-4);color:inherit;text-decoration:none;width:100%;}
.sv-${id}__thumb{aspect-ratio:16/10;background:linear-gradient(135deg,var(--ds-color-accent-soft) 0%,var(--ds-color-surface-raised) 100%);border-radius:var(--ds-radius-lg);border:1px solid var(--ds-color-border-muted);}
.sv-${id}__tags{list-style:none;padding:0;margin:0;display:flex;flex-wrap:wrap;gap:var(--ds-space-2);}
.sv-${id}__tag{font-size:var(--ds-font-size-3);padding:var(--ds-space-1) var(--ds-space-3);background:var(--ds-color-surface-raised);color:var(--ds-color-foreground-muted);border-radius:var(--ds-radius-full);}
.sv-${id}__case-title{font-size:var(--ds-font-size-7);font-weight:var(--ds-font-weight-semibold);color:var(--ds-color-foreground-secondary);margin:0;line-height:var(--ds-line-height-snug);}
.sv-${id}__excerpt{font-size:var(--ds-font-size-5);color:var(--ds-color-foreground-muted);line-height:var(--ds-line-height-relaxed);margin:0;}`,
    };
  },

  /* --- PRICING --- */
  "pricing-single": (id) => ({
    tsxBody: `  const { header, tiers, footnote } = props as any;
  const tier = tiers.find((t: any) => t.highlight) ?? tiers[0];
  if (!tier) return null;
  return (
    <section className="sv-section-root sv-${id}" data-variant="${id}">
      <div className="sv-${id}__inner">
        {header ? (
          <div className="sv-${id}__header">
            {header.kicker ? <div className="sv-${id}__kicker">{header.kicker}</div> : null}
            {header.title ? <h2 className="sv-${id}__title">{header.title}</h2> : null}
          </div>
        ) : null}
        <article className="sv-${id}__card">
          {tier.badge ? <div className="sv-${id}__badge">{tier.badge}</div> : null}
          <h3 className="sv-${id}__name">{tier.name}</h3>
          <div className="sv-${id}__price"><span className="sv-${id}__amount">{tier.price.monthly}</span>{tier.price.suffix ? <span className="sv-${id}__suffix">{tier.price.suffix}</span> : null}</div>
          {tier.description ? <p className="sv-${id}__desc">{tier.description}</p> : null}
          <ul className="sv-${id}__features">{tier.features.map((f: string, i: number) => <li key={i} className="sv-${id}__feature">{f}</li>)}</ul>
          <a className="sv-${id}__cta" href={tier.cta.href}>{tier.cta.label}</a>
          {footnote ? <p className="sv-${id}__footnote">{footnote}</p> : null}
        </article>
      </div>
    </section>
  );`,
    css: `.sv-${id}{padding:var(--ds-space-16) var(--ds-space-6);background-color:var(--ds-color-background);color:var(--ds-color-foreground);}
.sv-${id}__inner{max-width:48rem;margin:0 auto;display:flex;flex-direction:column;gap:var(--ds-space-10);align-items:center;text-align:center;}
.sv-${id}__header{max-width:60ch;display:flex;flex-direction:column;gap:var(--ds-space-3);align-items:center;}
.sv-${id}__kicker{font-size:var(--ds-font-size-3);text-transform:uppercase;letter-spacing:var(--ds-letter-spacing-widest);color:var(--ds-color-accent);font-weight:var(--ds-font-weight-medium);}
.sv-${id}__title{font-size:var(--ds-font-size-fluid-h1);font-weight:var(--ds-font-weight-bold);color:var(--ds-color-foreground-secondary);margin:0;line-height:var(--ds-line-height-tight);}
.sv-${id}__card{width:100%;padding:var(--ds-space-10);background:var(--ds-color-surface-raised);border:1px solid var(--ds-color-border-strong);border-radius:var(--ds-radius-xl);display:flex;flex-direction:column;gap:var(--ds-space-5);align-items:center;}
.sv-${id}__badge{padding:var(--ds-space-1) var(--ds-space-3);background:var(--ds-color-accent);color:var(--ds-color-accent-foreground);border-radius:var(--ds-radius-full);font-size:var(--ds-font-size-3);font-weight:var(--ds-font-weight-semibold);text-transform:uppercase;letter-spacing:var(--ds-letter-spacing-wide);}
.sv-${id}__name{font-size:var(--ds-font-size-7);font-weight:var(--ds-font-weight-semibold);color:var(--ds-color-foreground-secondary);margin:0;}
.sv-${id}__price{display:flex;align-items:baseline;gap:var(--ds-space-2);}
.sv-${id}__amount{font-size:var(--ds-font-size-12);font-weight:var(--ds-font-weight-bold);color:var(--ds-color-foreground-secondary);line-height:1;}
.sv-${id}__suffix{font-size:var(--ds-font-size-5);color:var(--ds-color-foreground-muted);}
.sv-${id}__desc{font-size:var(--ds-font-size-5);color:var(--ds-color-foreground-muted);max-width:48ch;line-height:var(--ds-line-height-relaxed);margin:0;}
.sv-${id}__features{list-style:none;padding:0;margin:0;display:flex;flex-direction:column;gap:var(--ds-space-2);width:100%;max-width:32rem;}
.sv-${id}__feature{padding:var(--ds-space-2) 0;border-top:1px solid var(--ds-color-border-muted);color:var(--ds-color-foreground);font-size:var(--ds-font-size-5);}
.sv-${id}__feature::before{content:"✓ ";color:var(--ds-color-accent);font-weight:var(--ds-font-weight-bold);}
.sv-${id}__cta{margin-top:var(--ds-space-3);padding:var(--ds-space-3) var(--ds-space-8);background:var(--ds-color-accent);color:var(--ds-color-accent-foreground);border-radius:var(--ds-radius-md);font-weight:var(--ds-font-weight-semibold);text-decoration:none;font-size:var(--ds-font-size-5);}
.sv-${id}__footnote{font-size:var(--ds-font-size-3);color:var(--ds-color-foreground-muted);margin:var(--ds-space-3) 0 0;}`,
  }),

  /* --- TEAM --- */
  "team-grid": (id, opts) => {
    const cols = opts?.cols ?? 4;
    return {
      tsxBody: `  const { header, members } = props as any;
  return (
    <section className="sv-section-root sv-${id}" data-variant="${id}">
      <div className="sv-${id}__inner">
        {header ? (
          <div className="sv-${id}__header">
            {header.kicker ? <div className="sv-${id}__kicker">{header.kicker}</div> : null}
            {header.title ? <h2 className="sv-${id}__title">{header.title}</h2> : null}
          </div>
        ) : null}
        <ul className="sv-${id}__grid">
          {members.map((m: any) => (
            <li key={m.id} className="sv-${id}__member">
              <div className="sv-${id}__avatar" aria-hidden="true" />
              <div className="sv-${id}__name">{m.name}</div>
              <div className="sv-${id}__role">{m.role}</div>
              {m.bio ? <p className="sv-${id}__bio">{m.bio}</p> : null}
            </li>
          ))}
        </ul>
      </div>
    </section>
  );`,
      css: `.sv-${id}{padding:var(--ds-space-16) var(--ds-space-6);background-color:var(--ds-color-background);color:var(--ds-color-foreground);}
.sv-${id}__inner{max-width:80rem;margin:0 auto;display:flex;flex-direction:column;gap:var(--ds-space-10);}
.sv-${id}__header{max-width:60ch;display:flex;flex-direction:column;gap:var(--ds-space-3);}
.sv-${id}__kicker{font-size:var(--ds-font-size-3);text-transform:uppercase;letter-spacing:var(--ds-letter-spacing-widest);color:var(--ds-color-accent);font-weight:var(--ds-font-weight-medium);}
.sv-${id}__title{font-size:var(--ds-font-size-fluid-h1);font-weight:var(--ds-font-weight-bold);color:var(--ds-color-foreground-secondary);margin:0;line-height:var(--ds-line-height-tight);}
.sv-${id}__grid{list-style:none;padding:0;margin:0;display:grid;grid-template-columns:repeat(${cols},minmax(0,1fr));gap:var(--ds-space-6);}
@media (max-width:900px){.sv-${id}__grid{grid-template-columns:repeat(2,minmax(0,1fr));}}
@media (max-width:480px){.sv-${id}__grid{grid-template-columns:1fr;}}
.sv-${id}__member{display:flex;flex-direction:column;gap:var(--ds-space-2);text-align:center;align-items:center;}
.sv-${id}__avatar{width:6rem;height:6rem;border-radius:var(--ds-radius-full);background:linear-gradient(135deg,var(--ds-color-accent-soft) 0%,var(--ds-color-surface-raised) 100%);border:1px solid var(--ds-color-border-muted);margin-bottom:var(--ds-space-2);}
.sv-${id}__name{font-weight:var(--ds-font-weight-semibold);color:var(--ds-color-foreground-secondary);font-size:var(--ds-font-size-6);}
.sv-${id}__role{color:var(--ds-color-accent);font-size:var(--ds-font-size-4);font-weight:var(--ds-font-weight-medium);}
.sv-${id}__bio{color:var(--ds-color-foreground-muted);font-size:var(--ds-font-size-4);line-height:var(--ds-line-height-relaxed);margin:var(--ds-space-2) 0 0;}`,
    };
  },

  /* --- CONTACT --- */
  "contact-channels": (id) => ({
    tsxBody: `  const { header, channels } = props as any;
  return (
    <section className="sv-section-root sv-${id}" data-variant="${id}">
      <div className="sv-${id}__inner">
        {header ? (
          <div className="sv-${id}__header">
            {header.kicker ? <div className="sv-${id}__kicker">{header.kicker}</div> : null}
            {header.title ? <h2 className="sv-${id}__title">{header.title}</h2> : null}
            {header.lede ? <p className="sv-${id}__lede">{header.lede}</p> : null}
          </div>
        ) : null}
        {channels && channels.length > 0 ? (
          <ul className="sv-${id}__channels">
            {channels.map((c: any) => (
              <li key={c.id} className="sv-${id}__channel">
                <span className="sv-${id}__label">{c.label}</span>
                {c.href ? <a className="sv-${id}__value" href={c.href}>{c.value}</a> : <span className="sv-${id}__value">{c.value}</span>}
              </li>
            ))}
          </ul>
        ) : null}
      </div>
    </section>
  );`,
    css: `.sv-${id}{padding:var(--ds-space-16) var(--ds-space-6);background-color:var(--ds-color-background);color:var(--ds-color-foreground);}
.sv-${id}__inner{max-width:64rem;margin:0 auto;display:flex;flex-direction:column;gap:var(--ds-space-10);}
.sv-${id}__header{max-width:60ch;display:flex;flex-direction:column;gap:var(--ds-space-3);}
.sv-${id}__kicker{font-size:var(--ds-font-size-3);text-transform:uppercase;letter-spacing:var(--ds-letter-spacing-widest);color:var(--ds-color-accent);font-weight:var(--ds-font-weight-medium);}
.sv-${id}__title{font-size:var(--ds-font-size-fluid-h1);font-weight:var(--ds-font-weight-bold);color:var(--ds-color-foreground-secondary);margin:0;line-height:var(--ds-line-height-tight);}
.sv-${id}__lede{font-size:var(--ds-font-size-6);color:var(--ds-color-foreground-muted);line-height:var(--ds-line-height-relaxed);margin:0;}
.sv-${id}__channels{list-style:none;padding:0;margin:0;display:grid;grid-template-columns:repeat(auto-fit,minmax(16rem,1fr));gap:var(--ds-space-6);}
.sv-${id}__channel{padding:var(--ds-space-5);background:var(--ds-color-surface-raised);border:1px solid var(--ds-color-border-muted);border-radius:var(--ds-radius-lg);display:flex;flex-direction:column;gap:var(--ds-space-2);}
.sv-${id}__label{font-size:var(--ds-font-size-3);color:var(--ds-color-foreground-muted);text-transform:uppercase;letter-spacing:var(--ds-letter-spacing-wide);font-weight:var(--ds-font-weight-medium);}
.sv-${id}__value{font-size:var(--ds-font-size-6);color:var(--ds-color-foreground-secondary);font-weight:var(--ds-font-weight-medium);text-decoration:none;}`,
  }),

  /* --- FOOTER-CONTENT --- */
  "footer-columns": (id) => ({
    tsxBody: `  const { brand, columns, socials, legalLinks, attribution } = props as any;
  return (
    <footer className="sv-section-root sv-${id}" data-variant="${id}">
      <div className="sv-${id}__inner">
        <div className="sv-${id}__top">
          {brand ? (
            <div className="sv-${id}__brand">
              <div className="sv-${id}__brand-name">{brand.name}</div>
              {brand.tagline ? <p className="sv-${id}__tagline">{brand.tagline}</p> : null}
            </div>
          ) : null}
          {columns && columns.length > 0 ? (
            <nav className="sv-${id}__cols">
              {columns.map((col: any, i: number) => (
                <div key={i} className="sv-${id}__col">
                  <h3 className="sv-${id}__col-title">{col.title}</h3>
                  <ul className="sv-${id}__col-list">
                    {col.links.map((l: any, j: number) => <li key={j}><a href={l.href} className="sv-${id}__col-link">{l.label}</a></li>)}
                  </ul>
                </div>
              ))}
            </nav>
          ) : null}
        </div>
        <div className="sv-${id}__bottom">
          {legalLinks && legalLinks.length > 0 ? (
            <ul className="sv-${id}__legal">{legalLinks.map((l: any) => <li key={l.id}><a href={l.href}>{l.label}</a></li>)}</ul>
          ) : null}
          {socials && socials.length > 0 ? (
            <ul className="sv-${id}__socials">{socials.map((s: any) => <li key={s.id}><a href={s.href} aria-label={s.label}>{s.label}</a></li>)}</ul>
          ) : null}
        </div>
        {attribution?.enabled ? <p className="sv-${id}__attr">{attribution.text ?? "Built with care"}</p> : null}
      </div>
    </footer>
  );`,
    css: `.sv-${id}{padding:var(--ds-space-14) var(--ds-space-6) var(--ds-space-8);background-color:var(--ds-color-surface-sunken);color:var(--ds-color-foreground);}
.sv-${id}__inner{max-width:80rem;margin:0 auto;display:flex;flex-direction:column;gap:var(--ds-space-8);}
.sv-${id}__top{display:grid;grid-template-columns:1fr 2fr;gap:var(--ds-space-10);}
@media (max-width:768px){.sv-${id}__top{grid-template-columns:1fr;}}
.sv-${id}__brand{display:flex;flex-direction:column;gap:var(--ds-space-2);}
.sv-${id}__brand-name{font-size:var(--ds-font-size-7);font-weight:var(--ds-font-weight-bold);color:var(--ds-color-foreground-secondary);}
.sv-${id}__tagline{color:var(--ds-color-foreground-muted);font-size:var(--ds-font-size-4);margin:0;max-width:32ch;line-height:var(--ds-line-height-relaxed);}
.sv-${id}__cols{display:grid;grid-template-columns:repeat(auto-fit,minmax(8rem,1fr));gap:var(--ds-space-6);}
.sv-${id}__col{display:flex;flex-direction:column;gap:var(--ds-space-3);}
.sv-${id}__col-title{font-size:var(--ds-font-size-4);color:var(--ds-color-foreground-secondary);font-weight:var(--ds-font-weight-semibold);margin:0;text-transform:uppercase;letter-spacing:var(--ds-letter-spacing-wide);}
.sv-${id}__col-list{list-style:none;padding:0;margin:0;display:flex;flex-direction:column;gap:var(--ds-space-2);}
.sv-${id}__col-link{color:var(--ds-color-foreground-muted);font-size:var(--ds-font-size-4);text-decoration:none;}
.sv-${id}__bottom{display:flex;justify-content:space-between;align-items:center;gap:var(--ds-space-6);padding-top:var(--ds-space-5);border-top:1px solid var(--ds-color-border-muted);flex-wrap:wrap;}
.sv-${id}__legal{list-style:none;padding:0;margin:0;display:flex;gap:var(--ds-space-4);flex-wrap:wrap;}
.sv-${id}__legal a{color:var(--ds-color-foreground-muted);font-size:var(--ds-font-size-3);text-decoration:none;}
.sv-${id}__socials{list-style:none;padding:0;margin:0;display:flex;gap:var(--ds-space-3);}
.sv-${id}__socials a{color:var(--ds-color-foreground-muted);text-decoration:none;font-size:var(--ds-font-size-4);}
.sv-${id}__attr{color:var(--ds-color-foreground-muted);font-size:var(--ds-font-size-3);margin:0;text-align:center;}`,
  }),

  "footer-minimal": (id) => ({
    tsxBody: `  const { brand, legalLinks, attribution } = props as any;
  return (
    <footer className="sv-section-root sv-${id}" data-variant="${id}">
      <div className="sv-${id}__inner">
        {brand ? <span className="sv-${id}__brand">{brand.name}</span> : null}
        {legalLinks && legalLinks.length > 0 ? (
          <ul className="sv-${id}__legal">{legalLinks.map((l: any) => <li key={l.id}><a href={l.href}>{l.label}</a></li>)}</ul>
        ) : null}
        {attribution?.enabled ? <span className="sv-${id}__attr">{attribution.text ?? "Built with care"}</span> : null}
      </div>
    </footer>
  );`,
    css: `.sv-${id}{padding:var(--ds-space-8) var(--ds-space-6);background-color:var(--ds-color-surface-sunken);color:var(--ds-color-foreground);}
.sv-${id}__inner{max-width:80rem;margin:0 auto;display:flex;justify-content:space-between;align-items:center;gap:var(--ds-space-6);flex-wrap:wrap;font-size:var(--ds-font-size-3);}
.sv-${id}__brand{font-weight:var(--ds-font-weight-semibold);color:var(--ds-color-foreground-secondary);}
.sv-${id}__legal{list-style:none;padding:0;margin:0;display:flex;gap:var(--ds-space-4);}
.sv-${id}__legal a{color:var(--ds-color-foreground-muted);text-decoration:none;}
.sv-${id}__attr{color:var(--ds-color-foreground-muted);}`,
  }),
};

/* ---------- main loop ---------- */
const cssRulesNew = [];
const registryImports = [];
const registryEntries = [];
let createdCount = 0;
let skippedCount = 0;

for (const v of manifest) {
  const tmpl = templates[v.template];
  if (!tmpl) {
    console.error(`unknown template "${v.template}" for variant ${v.id}`);
    process.exit(1);
  }
  const { tsxBody, css } = tmpl(v.id, v.options || {});

  // 1) write tsx file
  const filePath = path.join(VARIANTS_DIR, v.kind, `${v.id}.tsx`);
  if (fs.existsSync(filePath)) {
    skippedCount++;
  } else {
    fs.mkdirSync(path.dirname(filePath), { recursive: true });
    const tsx =
      preamble(v.id, v.kind, v.archetype, v.label, v.description, v.density, v.complexity, v.motionPresets, v.effects, !!v.client) +
      `export function ${fnName(v.id)}(props: Model) {\n${tsxBody}\n}\n`;
    fs.writeFileSync(filePath, tsx, "utf8");
    createdCount++;
  }

  registryImports.push(
    `import { ${macro(v.id)}, ${fnName(v.id)} } from "./variants/${v.kind}/${v.id}";`
  );
  registryEntries.push(
    `  [${macro(v.id)}.id]: { meta: ${macro(v.id)}, component: ${fnName(v.id)} },`
  );
  cssRulesNew.push(css);
}

/* ---------- patch registry ---------- */
let reg = fs.readFileSync(REGISTRY, "utf8");

// Append imports before the `import type {` line (only those not already present).
const importTypeIdx = reg.indexOf("import type {\n  SectionKind");
if (importTypeIdx < 0) {
  console.error("registry: marker not found");
  process.exit(1);
}
const before = reg.slice(0, importTypeIdx);
const after = reg.slice(importTypeIdx);

const importBlock = registryImports
  .filter((imp) => !before.includes(imp.replace(/\s+/g, " ").trim().split('"').slice(0, 2).join('"')))
  .filter((imp) => {
    // Match by macro name; if macro name already imported, skip.
    const m = imp.match(/import \{ (\w+)/);
    if (!m) return true;
    return !before.includes(m[1]);
  });

const newImportsText = importBlock.length > 0
  ? `\n// scaffold-variants batch — imports\n${importBlock.join("\n")}\n\n`
  : "";

// Insert before `export const SECTION_REGISTRY: SectionRegistry = {`
const mapIdx = after.indexOf("export const SECTION_REGISTRY: SectionRegistry = {");
if (mapIdx < 0) {
  console.error("registry: SECTION_REGISTRY marker not found");
  process.exit(1);
}
const closeBraceIdx = after.indexOf("\n};", mapIdx);
if (closeBraceIdx < 0) {
  console.error("registry: SECTION_REGISTRY close brace not found");
  process.exit(1);
}

const entryBlock = registryEntries
  .filter((entry) => {
    const m = entry.match(/\[(\w+)\.id\]/);
    if (!m) return true;
    return !after.slice(mapIdx, closeBraceIdx).includes(`[${m[1]}.id]`);
  });

let newAfter = after;
if (entryBlock.length > 0) {
  const insertion = `\n  // scaffold-variants batch — entries\n${entryBlock.join("\n")}\n`;
  newAfter = after.slice(0, closeBraceIdx) + insertion + after.slice(closeBraceIdx);
}

const newReg = before + newImportsText + newAfter;
fs.writeFileSync(REGISTRY, newReg, "utf8");

/* ---------- append CSS ---------- */
let css = fs.readFileSync(CSS_FILE, "utf8");
const reducedMarker = "/* Reduced motion override */";
const reducedIdx = css.indexOf(reducedMarker);
if (reducedIdx < 0) {
  console.error("css: reduced-motion marker not found");
  process.exit(1);
}

// Determine which rules already present (by class .sv-<id>{).
const cssToAppend = cssRulesNew.filter((block) => {
  const m = block.match(/\.sv-([\w-]+)\{/);
  if (!m) return true;
  return !css.includes(`.sv-${m[1]}{`);
});

if (cssToAppend.length > 0) {
  // Wrap each rule block with 2-space indent for layer-readability.
  const indented = cssToAppend
    .map((b) => b.split("\n").map((l) => (l ? `  ${l}` : l)).join("\n"))
    .join("\n\n");
  const header = `\n  /* ============== scaffold-variants batch (${new Date().toISOString().slice(0, 10)}) ============== */\n`;
  const newCss = css.slice(0, reducedIdx) + header + indented + "\n\n  " + css.slice(reducedIdx);
  fs.writeFileSync(CSS_FILE, newCss, "utf8");
}

console.log(
  `scaffold-variants: created ${createdCount} files, skipped ${skippedCount} existing, ` +
  `registry imports +${importBlock.length}, registry entries +${entryBlock.length}, ` +
  `css rules +${cssToAppend.length}.`
);
