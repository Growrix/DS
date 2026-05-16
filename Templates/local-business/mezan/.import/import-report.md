# Import Report - Mezan

## Source
- source_runtime_root: `Claude Frontend/mezan-nextjs/mezan`
- target_output_root: `Templates/local-business/mezan`
- import_mode: `import_attach`

## Stripped artifacts
- `.git/`
- `.github/`
- `.claude/`
- `.next/`
- `node_modules/`
- `.venv/`
- `DOC/`
- `AGENTS.md`
- `CLAUDE.md`
- `dev.log`

## Normalization added
- runtime docs and export docs
- `template.manifest.json`
- `.audit/frontend-self-audit.md`
- Foundation attach status route at `/api/template-attach-status`
- required footer attribution update

## Unresolved gaps
- visual parity is not yet audited because no screenshot pack was supplied
- privacy and terms links still point to placeholder anchors from the imported runtime
- placeholder business content remains and should be handled in a continuation pass

## Validation status
- lint: pending
- typecheck: pending
- build: pending
- smoke: pending