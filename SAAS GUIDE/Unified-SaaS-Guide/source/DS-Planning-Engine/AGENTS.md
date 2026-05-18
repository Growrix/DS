# Agents Entry Point — DS-Planning-Engine

> If you are an AI agent (Copilot, Claude Code, Replit, custom orchestrator) operating against this planning engine, this is your first-read file.

This is a **DS-bound, DS-aware site planner**. Its only job is to consume a client brief and emit a `site-plan.json` that the `DS_Frontend_developer` agent can execute against `Frontend-Master_DS`. It does NOT invent components, design tokens, motion catalogs, or visual styling — the DS owns all of that.

---

## Mandatory reads (in order)

1. **`AGENTS.md`** — this file
2. **`AI-AGENT-CONTRACT.md`** — full rules, allowed/forbidden actions
3. **`.ai-scope.json`** — machine-readable scope (locked / extensible / consumable / output globs)
4. **`core/planning-protocol.md`** — what a valid plan MUST contain
5. **`core/ds-awareness-rules.md`** — how the planner reads the DS contract
6. **`core/quality-gates.md`** — when a plan locks vs blocks
7. **`templates/site-plan.schema.json`** — authoritative output shape
8. **`../Frontend-Master_DS/generated/ds.contract.json`** — the LIVE DS registry (variants, archetypes, motion presets, themes)
9. **`../Frontend-Master_DS/AGENTS.md`** — DS lockdown rules (the planner must respect these)

Reading 1–9 first costs ~10 minutes and prevents every common planning-mismatch failure.

---

## The 30-second model

```
Client brief (free text or structured)
       ↓
DS_site_planner.agent.md (this folder's agent)
       │  Phase 1: read DS contract
       │  Phase 2: intake brief → brief.json
       │  Phase 3: pick DS archetype + theme
       │  Phase 4: site map + nav + footer
       │  Phase 5: per-page section composition (using DS kinds only)
       │  Phase 6: content library (copy + locale strings)
       │  Phase 7: DS gap analysis (what variants DS lacks)
       │  Phase 8: lock + emit site-plan.json + ds-gap-report.md
       ↓
DS_Frontend_developer (executor — lives in DOC/agents/)
       ↓
codegen/<project-slug>/  (cloned DS + project preset + content)
       ↓
Client deliverable
```

---

## Folder layout

```
DS-Planning-Engine/
├── AGENTS.md                  ← you are here
├── AI-AGENT-CONTRACT.md       ← full rules
├── README.md                  ← human entry-point
├── .ai-scope.json             ← machine-readable scope
├── core/                      ← LOCKED — planning protocol + rules
│   ├── planning-protocol.md
│   ├── ds-awareness-rules.md
│   ├── archetype-mapping.md
│   ├── quality-gates.md
│   └── industry-patterns/     ← EXTENSIBLE — add new patterns per industry
├── agents/                    ← LOCKED — the planner agent spec
│   └── DS_site_planner.agent.md
├── templates/                 ← LOCKED — schemas + intake form
│   ├── site-plan.schema.json
│   ├── plan-lock.schema.json
│   ├── brief-intake.template.md
│   └── ds-gap-report.template.md
├── output/runs/<ts>-<slug>/   ← per-run plan output (planner WRITES here)
└── scripts/
    └── verify-plan.mjs        ← validate emitted plans against schema
```

---

## What this planner OWNS (and what it does NOT)

| Concern | OWNS | NOT |
|---|---|---|
| Brief intake (project, brand, audience, locale, contact) | ✅ | |
| Archetype selection (one of DS's 8) | ✅ | |
| Site map (routes + nav + footer columns) | ✅ | |
| Page composition (which DS section kinds in which order) | ✅ | |
| Content slots + content library (copy, locale strings) | ✅ | |
| Brand token override hints (palette accent, font hint) | ✅ | |
| Section variant SUGGESTION (optional; executor can override) | ✅ | |
| DS gap detection + report | ✅ | |
| Plan lock status (`passed` / `needs_ds_extension` / `partial_coverage` / `needs_clarification`) | ✅ | |
| Components / visual design / tokens / motion catalog / themes / layout shells | | ❌ DS owns |
| Creating new variants / expanding DS | | ❌ Human (or future `DS_variant_builder` with human gate) |

---

## Critical rules

- The planner reads `Frontend-Master_DS/generated/ds.contract.json` first. Every kind, archetype, motion preset, and theme it references in the output plan MUST exist in that contract.
- When the brief asks for something DS doesn't expose, the planner does NOT invent a workaround. It records a gap in `ds-gap-report.md` with the recommended variant id to build, and locks the plan with `status: "needs_ds_extension"`.
- The planner NEVER edits any file under `Frontend-Master_DS/`.
- The planner's only output destination is `DS-Planning-Engine/output/runs/<timestamp>-<project-slug>/plan/`.
- Plans are deterministic: same brief + same DS contract → byte-identical plan (after stripping timestamps).

---

## Verification gate

Before claiming a plan is ready for execution, run:

```bash
node DS-Planning-Engine/scripts/verify-plan.mjs DS-Planning-Engine/output/runs/<run-id>
```

This validates:
- `site-plan.json` conforms to `templates/site-plan.schema.json`
- Every `section.kind` exists in the DS contract
- Every `section.variant` (if specified) exists in the DS contract for that kind
- `lock_status` is one of the four allowed values
- All referenced content keys are present in `content-library.json`
- The brief's required fields are non-empty

Non-zero exit means the plan is incomplete or inconsistent — `DS_Frontend_developer` must not be invoked.

---

## What this is NOT

- **Not a replacement for `DOC/agents/frontend_planner`.** That planner is proven for the legacy execution path; it stays untouched.
- **Not a DS extender.** Gap reports are recommendations to a human, not auto-create instructions.
- **Not a backend planner.** Frontend only. Backend Core is a separate later concern.
- **Not a deployment system.** Once the plan is locked and the executor emits `codegen/<slug>/`, the operator handles hosting (Vercel, GitHub, etc.).
