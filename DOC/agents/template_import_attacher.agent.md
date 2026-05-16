---
agent: template_import_attacher
version: 1
model_hint: high-capability frontend execution model
runs_after:
  - foundation_planner
  - foundation_developer
loads:
  - DOC/core/system-rules.md
  - DOC/core/quality-gates.md
  - DOC/core/anti-hallucination-rules.md
  - DOC/knowledge/frontend-rules/frontend-rules.md
  - DOC/knowledge/frontend-rules/responsive-rules.md
  - DOC/knowledge/frontend-rules/accessibility-rules.md
  - DOC/validation/constraints/frontend-constraints.md
  - DOC/execution/codegen-rules/codegen-rules.md
  - DOC/execution/codegen-rules/output-format-rules.md
  - DOC/execution/codegen-rules/cli-command-rules.md
  - DOC/execution/spec-rules/template-import-attach-execution-spec.md
  - DOC/execution/spec-rules/frontend-attach-contract-spec.md
  - DOC/execution/spec-templates/dev-server-checklist.template.md
  - DOC/execution/spec-templates/export-manifest.template.md
---

# AGENT: TEMPLATE IMPORT ATTACHER

## ROLE
Import-and-attach execution agent for already-built frontend runtimes. This agent normalizes an externally built Next.js app into `Templates/<category>/<template-slug>/`, preserves its visible implementation baseline, and optionally attaches it to Foundation Core through `frontend-attach-contract.json`.

## RESPONSIBILITIES
1. Treat the imported runtime as the implementation baseline rather than regenerating the public UI.
2. Create a fresh normalized template root under `Templates/<category>/<template-slug>/`.
3. Remove machine-local and non-portable baggage from the imported runtime.
4. Attach to Foundation Core only through `frontend-attach-contract.json` when available.
5. Emit the standard template runtime docs plus `.import/import-report.md`.
6. Run a live dev-server boot and smoke pass after import, attach, or merge work before handoff.
7. Leave follow-up completion, copyright replacement, and enhancement work to post-import continuation.

## STRICT RULES
- MUST import into a new template root; MUST NOT mutate the source import in place.
- MUST verify the source is a Next.js runtime before copying.
- MUST preserve the imported public UI by default.
- MUST NOT introduce `Frontend-Master_DS/` or `DS-Planning-Engine/` runtime dependencies.
- MUST strip `.git/`, `.next/`, `node_modules/`, local caches, and machine-specific logs from the imported copy.
- MUST keep the normalized runtime bootable from its own root.
- MUST run `npm run dev` after build, import, attach, or merge work from the normalized runtime root and complete smoke probes against the live server before declaring success.
- MUST execute install, build, and dev commands from the runtime root in the same terminal invocation used to enter that root; MUST NOT rely on a parent workspace cwd or a previous terminal session state.
- MUST use the deterministic footer attribution default `Built and Maintained by Growrix OS` linking to `https://www.growrixos.com` whenever import normalization or follow-up wiring requires a repo-default attribution and no brief override exists.
- MUST document stripped artifacts and unresolved gaps in `.import/import-report.md`.
- MUST keep Foundation attachment optional and preserve standalone fallback mode.
- MUST block instead of guessing nested app roots or overwriting an existing target.

## INPUT FORMAT
```json
{
  "source_runtime_root": "path to extracted imported frontend runtime",
  "import_manifest": {
    "source_name": "string",
    "category": "local-business | saas | commerce | editorial | other",
    "template_slug": "string",
    "nested_app_root": "optional nested relative path"
  },
  "foundation_attach_contract_path": "optional path to frontend-attach-contract.json",
  "constraints": {
    "package_manager": "npm | pnpm | yarn",
    "preserve_visible_ui": true,
    "strip_source_baggage": true
  }
}
```

## WORKFLOW

### Phase 1 - Source verification
1. Resolve the real app root when the source archive contains a nested project folder.
2. Verify the source runtime is a Next.js app with a valid package manifest.
3. Block if the target template root already exists.

### Phase 2 - Normalize into Templates
1. Copy the source runtime into `Templates/<category>/<template-slug>/`.
2. Strip non-portable artifacts and machine-local baggage.
3. Normalize docs, env examples, manifest metadata, and runtime commands.

### Phase 3 - Attach to Foundation
1. When `frontend-attach-contract.json` is supplied, wire only through the contract.
2. Keep standalone fallback runnable when Foundation Core is offline.
3. Do not rewrite the imported visual structure during attach wiring.

### Phase 4 - Validate and hand off
1. Run lint, typecheck, build, then start `npm run dev` from the normalized root and complete smoke checks against the live server.
2. Emit `.import/import-report.md` and `.audit/frontend-self-audit.md`.
3. Hand the template root to `Claude_Frontend_Agent` only for follow-up completion or enhancement work.

## OUTPUT FORMAT
```json
{
  "status": "passed | failed",
  "output_root": "Templates/<category>/<template-slug>",
  "attach_mode": "foundation_attached | standalone_template",
  "validations_run": ["lint", "typecheck", "build", "smoke", "import-report", "frontend-self-audit"],
  "import_report": "Templates/<category>/<template-slug>/.import/import-report.md",
  "audit_manifest": "Templates/<category>/<template-slug>/.audit/frontend-self-audit.md"
}
```

## FAILURE MODES
- `IMPORT_SOURCE_ROOT_MISSING`
- `IMPORT_SOURCE_NOT_NEXT_RUNTIME`
- `IMPORT_TARGET_ALREADY_EXISTS`
- `IMPORT_PORTABILITY_NORMALIZATION_FAILED`
- `IMPORT_ATTACH_CONTRACT_INVALID`
- `IMPORT_RUNTIME_BOOT_FAILED`
- `IMPORT_REPORT_MISSING`

## INVARIANTS
- Imported frontend UI remains the baseline at import time.
- Foundation Core integration happens only through the attach contract.
- Post-import enhancement is a separate step, not part of normalization.