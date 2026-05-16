# Agent Entry Points (Copilot / VS Code)

This folder is the **public agent surface** for VS Code Copilot and any AI session opening the repo. Pick one of the 5 default named agents below for the stable general-purpose workflow. Separate adjunct lanes are listed below for DS-native work and screenshot-template work.

The canonical agent files live at `DOC/agents/<name>.agent.md`. Files here are byte-identical mirrors maintained by `system_architect DOCUMENT` mode.

---

## Workflow at a glance

```
                         ┌──────────────────────────────────┐
                         │   intake_strategist (DOC only)   │
                         │   one-line brief → brief.json    │
                         └─────────────┬────────────────────┘
                                       │
       ┌───────────────────────────────┴───────────────────────────────┐
       │                                                                │
       ▼                                                                ▼
┌──────────────────────┐                                  ┌─────────────────────────────┐
│  frontend_planner    │  produces frontend.json +        │  backend_planner            │
│  (architect+designer)│  full planning artifact bundle   │  (backend + integrations    │
│                      │                                  │   + devops + security       │
│                      │                                  │   + qa + performance lead)  │
└──────────┬───────────┘                                  └──────────────┬──────────────┘
           │                                                             │
           ▼                                                             ▼
┌──────────────────────┐                                  ┌─────────────────────────────┐
│  frontend_developer  │  emits everything under web/     │  backend_developer          │
│  (frontend only,     │  + tests scaffold + audit        │  closes production:         │
│   no backend code)   │                                  │  api/, server/, prisma/,    │
│                      │                                  │  studio/, emails/, inngest/,│
│                      │                                  │  CI/CD, IaC, monitoring,    │
│                      │                                  │  backups, runbooks, deploy  │
└──────────────────────┘                                  └─────────────────────────────┘

           ╭──────────────────── system_architect ────────────────────╮
           │   out-of-band meta-agent: AUDIT / DESIGN / FIX / SMOKE / │
           │   DETERMINISM / DOCUMENT against any agentic system      │
           ╰──────────────────────────────────────────────────────────╯
```

**Two prompts for the planning phase. Two prompts for the execution phase. One meta-agent that audits the lot.**

The default workflow above remains the stable system. A separate Foundation Core + screenshot-template adjunct lane now exists for new screenshot-based template work:

`foundation_planner` -> `foundation_developer` -> `Claude_Frontend_Agent`

For imported externally built frontends that already have the visible UI done, use the import lane instead of rebuilding from screenshots:

`foundation_planner` -> `foundation_developer` -> `template_import_attacher` -> `Claude_Frontend_Agent`

This lane is complementary. It does not replace `frontend_planner`, `frontend_developer`, or the DS lane.

---

## The five agents

### 1. `frontend_planner`
**Use when:** starting a new project, after the brief is locked.
**Role:** pro-level frontend architect + visual/interaction designer in one. Produces the entire frontend planning bundle: site map, journeys, design tokens, component system, motion catalog, content library, per-page specs, per-component specs, visual reference pack, ai-context.yaml, README.
**Output root:** `DOC/output/runs/<timestamp>/planning/frontend/`
**Quality bar:** Stripe / Linear / Vercel / Notion-class.
**Does not produce:** any backend or integration plan; that's `backend_planner`.

### 2. `backend_planner`
**Use when:** the frontend planning bundle is complete and `frontend.json.status: passed`.
**Role:** lead planner for everything non-frontend. Backend architecture, database, APIs, integrations, third-party services, automation outbound surface, devops + CI/CD, security, qa, performance, post-launch support stack.
**Output root:** `DOC/output/runs/<timestamp>/planning/backend/`
**Inputs:** brief + frontend.json.
**Does not produce:** frontend artifacts; that's `frontend_planner`.

### 3. `frontend_developer`
**Use when:** the frontend planning bundle is locked.
**Role:** implements the frontend in `web/`. Materializes design tokens, generates every shared component with full state coverage, generates every page with full section composition, wires the content library, implements motion + reduced-motion, generates SEO assets, scaffolds tests (bodies as TODO).
**Output root:** `web/`
**Strict boundary:** no files outside `web/`. No backend code, no CMS schemas, no deployment configs.

### 4. `backend_developer`
**Use when:** the backend planning bundle is locked and the frontend code is in flight (or already shipped).
**Role:** implements backend + every integration end-to-end + CI/CD + IaC + monitoring + alerts + backups + DR + runbooks. Closes production by deploying, running smoke tests, and verifying rollback.
**Output root:** project root, EXCLUDING `web/`. Specifically: `src/server/`, `src/inngest/`, `src/lib/`, `src/app/api/`, `prisma/`, `studio/`, `emails/`, `terraform/`, `.github/workflows/`, `docs/`, root config files.
**Strict boundary:** read-only against `web/`.

### 5. `system_architect`
**Use when:** auditing the OS itself, designing a new agentic workflow, fixing audit findings, smoke-testing a fixture, verifying determinism.
**Role:** out-of-band meta-agent. Six modes: `DESIGN`, `AUDIT`, `FIX`, `SMOKE`, `DETERMINISM`, `DOCUMENT`.
**Output root:** `DOC/output/runs/<timestamp>/reports/` (or `<target>/reports/` when auditing a different system).

---

## Experimental mirrored agents

## Foundation + screenshot-template adjuncts

### `foundation_planner`
**Use when:** defining the reusable backend-first runtime that screenshot-driven templates will attach to.
**Role:** plans `Foundation-Core/` as a standalone runtime system. Owns backend modules, content contracts, auth/session, integrations baseline, devops standards, portability rules, `frontend-attach-contract.json`, the E2E factory plan, the backend parity matrix, and release-readiness gates.
**Output root:** `DOC/output/runs/<timestamp>/planning/foundation-core/`
**Important:** this lane stays frontend-agnostic and does not plan a public design system.

### `foundation_developer`
**Use when:** the Foundation Core planning bundle is locked.
**Role:** materializes `Foundation-Core/` as a standalone runtime with auth, content, forms, media, jobs, preview/admin surfaces, portability docs, runtime validation, and a Foundation-scoped CI verification workflow.
**Output root:** `Foundation-Core/`
**Important:** this agent does not build template-specific public pages.

### `Claude_Frontend_Agent`
**Use when:** building a new public-facing template from screenshots and references.
**Role:** screenshot-first template executor. Recreates the reference UI with minimal planning, saves each result under `Templates/<category>/<template-slug>/`, and optionally attaches to Foundation Core through `frontend-attach-contract.json`. It also supports post-import continuation against a template root normalized by `template_import_attacher`.
**Output root:** `Templates/<category>/<template-slug>/`
**Important:** screenshots are the source of truth for visible UI. This agent does not use `Frontend-Master_DS/` as a runtime dependency.

### `template_import_attacher`
**Use when:** you already have an imported frontend runtime, such as a Claude-built Next.js app, and want to normalize it into the template library before doing completion work.
**Role:** import-and-attach executor. Verifies the source runtime, copies it into `Templates/<category>/<template-slug>/`, strips non-portable baggage, emits runtime docs/manifests, and optionally wires Foundation Core through `frontend-attach-contract.json`.
**Output root:** `Templates/<category>/<template-slug>/`
**Important:** this agent preserves the imported visible UI baseline. Completion and enhancement work happen afterward.

## Experimental mirrored agents

These factory experiments assume an external `ai-product-factory/` runtime contract. They remain available for historical benchmarking, but they are not the recommended path for new screenshot-template work in this workspace.

### `frontend_factory_planner`
**Use when:** you want a factory-native planning bundle without altering the current production DOC planning path.
**Role:** scoped, contract-first frontend planner. It consumes the locked brief and emits a factory handoff bundle under `DOC/output/runs/<timestamp>/planning/frontend-factory/` with `factory-frontend.json`, frontend and experience contracts, retrieval manifest, roots map, and scoped execution packets.
**Output root:** `DOC/output/runs/<timestamp>/planning/frontend-factory/`
**Important:** this agent is optional and experimental. The stable planning default remains `frontend_planner`.

### `frontend_factory_developer`
**Use when:** testing the factory-native frontend execution path without changing the current production DOC workflow.
**Role:** scoped, packet-driven frontend executor. It consumes the `frontend_factory_planner` bundle plus an explicit factory context packet that declares exact scopes, inputs, outputs, and validations. It implements only the declared slices, validates each slice immediately, and blocks instead of widening into repo-wide reasoning.
**Output roots:**
- `doc_bridge` mode -> declared project runtime root only
- `standalone_factory` mode -> `ai-product-factory/generated/apps/<run-id>/<project-slug>/`
**Important:** this agent is optional and experimental. If no factory planning bundle exists yet, continue using `frontend_developer`.

### `frontend_factory_hybrid_developer`
**Use when:** you want to keep planning strictly on the stable DOC path and only use factory runtime execution/output.
**Role:** hybrid frontend executor. It consumes only `DOC/output/runs/<timestamp>/planning/frontend/` artifacts and emits runtime code under the same factory app output contract.
**Planning source:** `DOC/output/runs/<timestamp>/planning/frontend/` (read-only)
**Runtime output:** `ai-product-factory/generated/apps/<run-id>/<project-slug>/`
**Important:** this agent is optional and experimental. It does not replace `frontend_developer` or `frontend_factory_developer`.

---

## Recommended invocation order

1. **Brief intake** — run `intake_strategist` from `DOC/agents/` (no Copilot mirror; it's a one-step gap-filler).
2. **Plan frontend** — invoke `frontend_planner` (this folder).
3. **Plan backend + everything else** — invoke `backend_planner` (this folder).
4. **Build frontend** — invoke `frontend_developer` (this folder). Can run in parallel with step 5.
5. **Build backend + ship** — invoke `backend_developer` (this folder). Can run in parallel with step 4.
6. **Audit the agentic OS itself** — at any time, invoke `system_architect` in `AUDIT` mode.

---

## What changed from the prior workflow

- Removed `master_planner.agent.md` from this folder. Its orchestration logic is split between `frontend_planner` (frontend planning lead) and `backend_planner` (everything else lead).
- Removed `execution_orchestrator.agent.md` from this folder. Its job is now done in parallel by `frontend_developer` (frontend code) and `backend_developer` (backend + integrations + devops + ship).
- Added `frontend_planner`, `backend_planner`, `frontend_developer`, `backend_developer` as the four named workflow entries.
- `system_architect` remains the meta-agent for system-level concerns.

---

## Sub-agents (internal references; not mirrored here)

These agents continue to live at `DOC/agents/` as internal skill references that the consolidated agents above absorb into their workflows:

- `ux_director`, `design_system_planner`, `component_system_planner`, `motion_planner`, `content_planner`, `interaction_planner`, `page_planner` — absorbed by `frontend_planner`
- `integration_planner`, `devops_planner`, `qa_planner`, `security_auditor`, `performance_auditor` — absorbed by `backend_planner`
- `spec_writer`, `diagram_writer`, `openapi_writer`, `adr_writer`, `runbook_writer` — invoked by `backend_developer` during execution

You don't invoke these directly. You invoke one of the five entry points above; the consolidated agent runs the relevant sub-workflow.

---

## Maintenance

`system_architect DOCUMENT` mode keeps these mirrors byte-identical with `DOC/agents/`. After any structural change in `DOC/agents/`, run `system_architect DOCUMENT` to refresh this folder + the registry at `DOC/agents/_index.md`.
