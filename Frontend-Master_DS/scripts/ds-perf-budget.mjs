#!/usr/bin/env node
// ds-perf-budget.mjs — Phase 12H
//
// Enforces post-build size budgets on Next.js output. Runs only when
// `.next/` exists (build completed). When the build hasn't run, this script
// is a no-op — `npm run build` lives upstream in the verify chain and will
// produce the artefact.
//
// Budgets are deliberately generous defaults appropriate for a DS shell
// (no business logic). Projects that extend the DS may raise them, but the
// canonical DS itself must stay within them — that's the contract.
//
// Failure mode: any single static chunk > budget OR aggregate first-load
// CSS+JS > aggregate budget → exit 1 with a diagnostic.

import { readdirSync, statSync } from "node:fs";
import path from "node:path";

const ROOT = process.cwd();
const NEXT_DIR = path.join(ROOT, ".next");
const STATIC_DIR = path.join(NEXT_DIR, "static");

const BUDGETS = {
  // Single file budgets (uncompressed). Next produces granular per-route chunks;
  // these caps catch accidental fat dependencies dragged into shared bundles.
  // CSS budget is generous because the DS ships a consolidated stylesheet
  // covering 8 archetypes × 2 themes × all variant utilities; project apps
  // that tree-shake will see this drop sharply.
  maxJsChunkBytes: 400 * 1024,
  maxCssChunkBytes: 350 * 1024,
  // Aggregate budgets across the entire static surface.
  maxJsTotalBytes: 2 * 1024 * 1024,
  maxCssTotalBytes: 600 * 1024,
};

function walk(dir) {
  const out = [];
  let entries;
  try {
    entries = readdirSync(dir);
  } catch {
    return out;
  }
  for (const name of entries) {
    const full = path.join(dir, name);
    const st = statSync(full);
    if (st.isDirectory()) out.push(...walk(full));
    else out.push({ path: full, size: st.size });
  }
  return out;
}

if (!statSync(NEXT_DIR, { throwIfNoEntry: false })) {
  console.log("ds:perf-budget: skipped — no .next/ build artefact present");
  process.exit(0);
}

const files = walk(STATIC_DIR);
const js = files.filter((f) => f.path.endsWith(".js"));
const css = files.filter((f) => f.path.endsWith(".css"));

const totalJs = js.reduce((acc, f) => acc + f.size, 0);
const totalCss = css.reduce((acc, f) => acc + f.size, 0);

const failures = [];

for (const f of js) {
  if (f.size > BUDGETS.maxJsChunkBytes) {
    failures.push(
      `oversized JS chunk: ${path.relative(ROOT, f.path)} (${(f.size / 1024).toFixed(1)} KB > ${(
        BUDGETS.maxJsChunkBytes / 1024
      ).toFixed(0)} KB)`,
    );
  }
}
for (const f of css) {
  if (f.size > BUDGETS.maxCssChunkBytes) {
    failures.push(
      `oversized CSS chunk: ${path.relative(ROOT, f.path)} (${(f.size / 1024).toFixed(1)} KB > ${(
        BUDGETS.maxCssChunkBytes / 1024
      ).toFixed(0)} KB)`,
    );
  }
}
if (totalJs > BUDGETS.maxJsTotalBytes) {
  failures.push(
    `aggregate JS budget exceeded: ${(totalJs / 1024).toFixed(1)} KB > ${(
      BUDGETS.maxJsTotalBytes / 1024
    ).toFixed(0)} KB`,
  );
}
if (totalCss > BUDGETS.maxCssTotalBytes) {
  failures.push(
    `aggregate CSS budget exceeded: ${(totalCss / 1024).toFixed(1)} KB > ${(
      BUDGETS.maxCssTotalBytes / 1024
    ).toFixed(0)} KB`,
  );
}

console.log(
  `ds:perf-budget: scanned ${js.length} JS + ${css.length} CSS files (JS ${(totalJs / 1024).toFixed(
    1,
  )} KB, CSS ${(totalCss / 1024).toFixed(1)} KB)`,
);

if (failures.length > 0) {
  console.error("ds:perf-budget: FAIL");
  for (const f of failures) console.error(`  - ${f}`);
  process.exit(1);
}

console.log("ds:perf-budget: OK — within all budgets");
