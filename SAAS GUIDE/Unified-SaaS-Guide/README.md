# Unified SaaS Guide (Generic, Deduplicated)

This folder is a standalone, reusable SaaS handbook corpus assembled from the workspace's distributed framework, agent, planning, governance, and validation docs.

## What this contains

- `source/`: deduplicated copies of selected handbook/rules/instruction files.
- `manifest.json`: full source-to-copy ledger with SHA256 hashes and duplicate tracking.
- `SOURCE_INDEX.md`: quick index with counts and duplicate skip samples.
- `GENERIC-SAAS-HANDBOOK.md`: generic cross-functional SaaS playbook distilled from the source corpus.

## How genericity was enforced

- Included only governance/framework-oriented sources.
- Excluded dependency/build/generated paths (`node_modules`, `.next`, `coverage`, `dist`, `build`, `generated`, run outputs, virtual env folders).
- Excluded app runtime implementation trees from project templates.
- Deduplicated by content hash (SHA256), so identical files appear once.

## Selection + dedupe summary

- Selected candidate files: 946
- Copied unique files: 687
- Duplicates skipped: 259

## Rebuild note

If you want, this can be refreshed later using the same inventory + hash-dedupe approach against newly added systems.
