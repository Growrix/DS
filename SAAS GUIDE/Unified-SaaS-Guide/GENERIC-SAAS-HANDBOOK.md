# Generic SaaS Handbook

This handbook is intentionally system-agnostic and project-agnostic. Use it as a baseline operating model for any SaaS product.

## 1) Product and Planning

- Start with one source of truth for scope: goals, users, jobs-to-be-done, constraints, non-goals.
- Use contract-first planning: define interfaces and data contracts before implementation.
- Keep a traceable artifact chain: brief -> specs -> execution plan -> validation report.
- Separate backlog by capability domains: frontend, backend, data, integrations, security, QA, DevOps.

## 2) Architecture

- Define clear module boundaries and ownership.
- Prefer composition over coupling across services and UI layers.
- Keep architecture docs current with ADR-style decisions.
- Require explicit sync points between domain model, API schema, and UI view model.

## 3) Frontend Standards

- Build from a design system with component contracts, tokens, and accessibility defaults.
- Enforce route-level specs (data dependencies, loading states, error states, analytics events).
- Keep page composition aligned to planned content slots and component specifications.
- Include performance budgets for bundle size, image strategy, and runtime responsiveness.

## 4) Backend Standards

- Design APIs with typed, versioned contracts and predictable error envelopes.
- Apply authN/authZ consistently, including row-level access where applicable.
- Separate command/query concerns where complexity demands it.
- Document retry, idempotency, queue semantics, and failure handling.

## 5) Data and Integrations

- Keep schema evolution explicit: migrations, rollback plan, and compatibility notes.
- Define integration contracts with timeouts, retries, signing, and observability metadata.
- Maintain event taxonomy and payload governance for automation workflows.

## 6) Security and Compliance

- Treat security as a default gate, not a final phase.
- Include threat modeling, secrets handling, logging hygiene, and dependency policy checks.
- Define data retention and privacy boundaries per data class.

## 7) Quality and Validation

- Enforce multi-layer testing: unit, integration, contract, E2E, and smoke.
- Add release gates with explicit pass criteria and rollback triggers.
- Validate implementation completeness against planning specs to prevent drift.

## 8) DevOps and Delivery

- Use environment parity where possible and codify deployment runbooks.
- Keep CI deterministic with reproducible setup and pinned tooling.
- Monitor release health with actionable SLOs and incident runbooks.

## 9) Documentation Governance

- Keep docs close to execution artifacts and update them with every structural change.
- Use templates for consistency across specs and reports.
- Archive generated outputs with timestamped run folders for auditability.

## 10) Recommended Folder Model for New SaaS Projects

- `docs/` for architecture, specs, runbooks, ADRs, quality reports.
- `src/` for runtime code.
- `tests/` for all test tiers.
- `.github/` for automation workflows and agent or policy surface.
- `ops/` for deployment, incident response, and operational controls.

## 11) Operational Cadence

- Weekly architecture review for drift and technical debt.
- Per-feature contract review before implementation starts.
- Release-readiness review before production deploys.
- Post-incident mechanism updates (rules/checklists) to prevent recurrence.

## 12) Definition of Ready / Done

Ready:
- Problem and success metrics are explicit.
- Contracts and boundaries are defined.
- Dependencies and risks are known.

Done:
- All quality gates pass.
- Security and observability requirements are met.
- Docs and runbooks are updated.
- Production rollback path is verified.
