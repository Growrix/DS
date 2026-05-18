# Agents Entry Point — Frontend Master DS

> If you are an AI agent (Copilot, Claude Code, Replit, custom orchestrator) operating against this repository, this is your first-read file.

This DS is a **factory** for client sites, not a deliverable in itself. Agents extend it by adding **new files** under specific paths; they do NOT edit the DS core. The lockdown is the entire point — it lets 10 different client projects all look intentional rather than incoherent.

---

## Mandatory reads (in order)

1. **`AGENTS.md`** — this file
2. **`AI-AGENT-CONTRACT.md`** — full rules, allowed/forbidden actions, verification gate
3. **`.ai-scope.json`** — machine-readable scope (locked / extensible / consumable / project-content glob lists)
4. **`generated/ds.contract.json`** — live registry of every variant, archetype, motion preset, theme, preset

Reading 1–4 first costs ~5 minutes and prevents every common agent failure mode.

---

## The 30-second model of this repo

```
src/ds/                          ← LOCKED. Foundation, primitives, components, composition,
                                   layouts, platform, runtime, visuals, widgets, styles.
                                   DO NOT EDIT existing files here.

src/ds/composition/sections/
  variants/<kind>/*.tsx          ← EXTENSIBLE. Add new variant files here.
  _registry.ts                   ← LOCKED, except one surgical edit per new variant:
                                   add 1 import + 1 entry to SECTION_REGISTRY.

src/site/
  presets/*.ts                   ← EXTENSIBLE. Add new industry presets here.
  index.ts                       ← LOCKED, except one surgical edit per new preset:
                                   add 1 import + 1 entry to SITE_PRESETS.

src/app/**, src/features/**,     ← PROJECT CONTENT. Per-project, freely editable
src/flows/**                       within a client clone.

DOC/, scripts/, package.json,    ← LOCKED. Configuration, docs, tooling.
tsconfig.json, eslint config,
jest config, AI contract files
```

---

## How an agent picks a section variant

1. Read `generated/ds.contract.json`.
2. For each section in the brief, filter `sectionVariants` by `kind`.
3. Among matches, prefer the variant whose `archetype` matches the project archetype.
4. Verify `supportsThemes` includes the project's required themes.
5. Verify the variant's `effects` are all within the matched archetype's `permissions`.
6. Use the variant's `id` in the project's `PublicSitePreset.pages.<page>.sections[].variant` field.

If no variant matches a kind/archetype combination, **do not invent one** — block and report the gap so a human can decide whether to add a new variant (via the extension flow in `AI-AGENT-CONTRACT.md` §2.a) or use a different archetype.

---

## Verification gate (mandatory before claiming any extension is complete)

```bash
npm run verify
```

This chains:
1. `typecheck` — TypeScript across the repo
2. `lint` — ESLint with `--max-warnings 0` (no warnings tolerated)
3. `test` — full Jest suite (127+ tests)
4. `build` — Next.js production build
5. `ds:audit` — token discipline scan (no raw hex / rgb outside `ds.tokens.css`)
6. `ds:a11y` — focused a11y tests
7. `ds:contract` — regenerate + validate `generated/ds.contract.json` (archetype permission cross-check)

Any non-zero exit means the extension is incomplete. Investigate the failure; do not bypass.

---

## Most common agent failure modes (avoid)

- Editing locked files (token CSS, primitives, registry, schema). The audit catches this.
- Inventing new variants when an existing one already covers the brief. Always check `ds.contract.json` first.
- Smuggling Tailwind / framer-motion / shadcn / chakra into a system that deliberately avoids them.
- Renaming or removing registered variant ids (they are a public contract — every consuming project depends on them).
- Inline `style={{ color: "#abc123" }}` or raw px / ms / hex in component code. Lint and audit catch this.
- Adding motion outside the motion preset registry.
- Declaring an effect on a variant that the archetype does not permit (e.g., glassmorphism on `dashboard-ops`). The contract emitter catches this.

If `npm run verify` passes green, the extension is well-behaved.

---

## Where to look for further detail

| Question | File |
|---|---|
| What is a section variant and how do I add one? | `DOC/DS BUILDING/HandBook_Frontend/21-SECTION-VARIANTS.md` |
| What's the archetype system? | `DOC/DS BUILDING/HandBook_Frontend/22-ARCHETYPE-THEMES.md` |
| What motion presets exist and how do I add one? | `DOC/DS BUILDING/HandBook_Frontend/23-MOTION-PRESETS.md` |
| Why are these rules in place? | `DOC/DS BUILDING/HandBook_Frontend/24-AI-AGENT-CONTRACT.md` |
| What's the section schema? | `src/ds/composition/sections/_schema.ts` |
| What's the preset shape? | `src/ds/platform/publicSitePreset.ts` |
| What's available right now? | `generated/ds.contract.json` |

---

## Counts (as of latest contract emission)

Run `npm run ds:contract` to refresh; the live counts live in `generated/ds.contract.json`.
