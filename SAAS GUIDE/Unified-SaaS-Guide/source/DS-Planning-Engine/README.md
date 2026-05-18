# DS-Planning-Engine

A DS-bound, DS-aware site planning system. Consumes a client brief and emits a deterministic `site-plan.json` that the `DS_Frontend_developer` agent executes against `Frontend-Master_DS`.

## AI agents — start here

1. [`AGENTS.md`](./AGENTS.md) — entry point (universal AI convention)
2. [`AI-AGENT-CONTRACT.md`](./AI-AGENT-CONTRACT.md) — full lockdown rules
3. [`.ai-scope.json`](./.ai-scope.json) — machine-readable scope (locked / extensible / consumable / runOutput globs)
4. [`templates/site-plan.schema.json`](./templates/site-plan.schema.json) — authoritative output shape

## Humans — start here

This folder is one of three sibling systems in the workspace:

| System | Role | State |
|---|---|---|
| `DOC/` | Legacy planner (composes from primitives) | Proven, frozen |
| `Frontend-Master_DS/` | The Design System (closed-world, locked) | Production-ready |
| **`DS-Planning-Engine/`** | **DS-aware planner — this folder** | **NEW** |
| `DS_Frontend_developer` agent (in `DOC/agents/`) | Executor — clones DS, applies plan, ships | Built |

## Pipeline

```
Client brief
   ↓
DS-Planning-Engine/agents/DS_site_planner.agent.md
   ↓
DS-Planning-Engine/output/runs/<ts>-<slug>/plan/
   ├── brief.json
   ├── site-plan.json          ← the plan (machine-readable)
   ├── pages/<route>.plan.md   ← per-page human-readable briefs
   ├── content-library.json
   ├── ds-gap-report.md        ← what DS variants this plan needs that don't exist
   ├── plan.lock.json          ← status: passed | needs_ds_extension | partial_coverage | needs_clarification
   └── README.md
   ↓
verify-plan.mjs (gate)
   ↓
DS_Frontend_developer (DOC/agents/)
   ↓
codegen/<slug>/  ← cloned DS + project preset + content
   ↓
Client deliverable
```

## Folder layout

```
DS-Planning-Engine/
├── AGENTS.md, AI-AGENT-CONTRACT.md, README.md, .ai-scope.json  ← lockdown contract
├── core/                       ← planning rules + industry patterns
│   ├── planning-protocol.md
│   ├── ds-awareness-rules.md
│   ├── archetype-mapping.md
│   ├── quality-gates.md
│   └── industry-patterns/
│       ├── _index.md
│       ├── local-services.md
│       └── modern-saas.md
├── agents/
│   └── DS_site_planner.agent.md
├── templates/                  ← schemas + intake form
├── output/runs/<ts>-<slug>/    ← per-run plans (generated)
└── scripts/
    └── verify-plan.mjs
```

## Commands

```bash
# Validate an emitted plan
node DS-Planning-Engine/scripts/verify-plan.mjs DS-Planning-Engine/output/runs/<run-id>
```

## What this planner does NOT do

- Invent components, design tokens, motion catalogs, themes, or layout shells (the DS owns those)
- Auto-expand the DS when gaps surface (humans do that via the DS's own extension flow)
- Plan backend, deployment, or CMS schemas (frontend only)
- Replace `DOC/agents/frontend_planner` (DOC stays untouched for its legacy execution path)

## When to use this planner vs DOC's

| Need | Use |
|---|---|
| Build a site that ships through `Frontend-Master_DS` | **DS-Planning-Engine** |
| Build a site through the legacy `frontend_developer` (composes from primitives) | DOC's `frontend_planner` |
| Audit / design / smoke / determinism modes on the agentic system itself | `system_architect` (DOC) |
