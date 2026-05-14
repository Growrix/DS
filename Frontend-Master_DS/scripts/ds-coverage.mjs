#!/usr/bin/env node
// ds-coverage.mjs
//
// Reads generated/ds.contract.json and emits a kind × archetype coverage
// matrix. Used to surface variant gaps that wireframes currently work
// around by reusing off-archetype variants.
//
// Output:
//   stdout: human-readable table
//   generated/ds-coverage.json: machine-readable matrix
//
// Exit behaviour:
//   exit 0 — informational only by default
//   exit 1 — when invoked with --strict and ANY (kind, archetype) cell has 0 variants
//            (used by CI to gate wireframes that reuse off-archetype variants).
//
// Run via: npm run ds:coverage   (or  npm run ds:coverage -- --strict)

import { readFileSync, writeFileSync, mkdirSync } from "node:fs";
import path from "node:path";

const ROOT = process.cwd();
const CONTRACT_PATH = path.join(ROOT, "generated/ds.contract.json");

let contract;
try {
  contract = JSON.parse(readFileSync(CONTRACT_PATH, "utf8"));
} catch (err) {
  console.error(`ds:coverage: cannot read ${CONTRACT_PATH}`);
  console.error("Run `npm run ds:contract` first to emit the contract.");
  console.error(err.message);
  process.exit(2);
}

const kinds = contract.sectionKinds ?? [];
const archetypes = (contract.archetypes ?? []).map((a) => a.id);
const variants = contract.sectionVariants ?? [];

// Build matrix: { [kind]: { [archetype]: count } }
const matrix = {};
for (const kind of kinds) {
  matrix[kind] = {};
  for (const arch of archetypes) {
    matrix[kind][arch] = 0;
  }
}
for (const v of variants) {
  if (matrix[v.kind] && matrix[v.kind][v.archetype] !== undefined) {
    matrix[v.kind][v.archetype]++;
  }
}

// Compute gap list
const gaps = [];
for (const kind of kinds) {
  for (const arch of archetypes) {
    if (matrix[kind][arch] === 0) {
      gaps.push({ kind, archetype: arch });
    }
  }
}

// Wireframe off-archetype substitutions: walk wireframes, for each section
// in a wireframe, check whether a variant of (section.kind, wireframe.archetype)
// exists. If not, the wireframe is using an off-archetype variant.
const wireframes = contract.wireframes ?? [];
const offArchetypeReuses = [];
for (const wf of wireframes) {
  for (const section of wf.sections ?? []) {
    const has = matrix[section.kind]?.[wf.archetype] > 0;
    if (!has) {
      offArchetypeReuses.push({
        wireframeId: wf.id,
        wireframeArchetype: wf.archetype,
        sectionKind: section.kind,
        sectionVariantId: section.variantId,
      });
    }
  }
}

// Print matrix
const KIND_W = Math.max(...kinds.map((k) => k.length), 12);
const ARCH_W = 6;
const header = "kind".padEnd(KIND_W) + " │ " + archetypes.map((a) => a.slice(0, ARCH_W).padStart(ARCH_W)).join(" ");
console.log("");
console.log("ds:coverage — variant kind × archetype matrix");
console.log("=".repeat(header.length));
console.log(header);
console.log("-".repeat(header.length));
for (const kind of kinds) {
  const row = kind.padEnd(KIND_W) + " │ " + archetypes
    .map((a) => {
      const n = matrix[kind][a];
      return (n === 0 ? "·" : String(n)).padStart(ARCH_W);
    })
    .join(" ");
  console.log(row);
}
console.log("");
console.log(`total variants: ${variants.length}`);
console.log(`total cells:    ${kinds.length * archetypes.length}`);
console.log(`empty cells:    ${gaps.length}`);
console.log(`wireframe off-archetype reuses: ${offArchetypeReuses.length}`);
console.log("");

if (gaps.length > 0) {
  console.log("gaps (kind, archetype) — 0 variants:");
  for (const g of gaps) console.log(`  - ${g.kind} × ${g.archetype}`);
  console.log("");
}

if (offArchetypeReuses.length > 0) {
  console.log("wireframe sections using off-archetype variants:");
  for (const r of offArchetypeReuses) {
    console.log(`  - ${r.wireframeId} [${r.wireframeArchetype}] uses ${r.sectionVariantId} (${r.sectionKind})`);
  }
  console.log("");
}

// Emit JSON report
const outDir = path.join(ROOT, "generated");
mkdirSync(outDir, { recursive: true });
const report = {
  generatedFrom: "generated/ds.contract.json",
  kinds,
  archetypes,
  matrix,
  totals: {
    variants: variants.length,
    cells: kinds.length * archetypes.length,
    emptyCells: gaps.length,
  },
  gaps,
  wireframeOffArchetypeReuses: offArchetypeReuses,
};
writeFileSync(path.join(outDir, "ds-coverage.json"), JSON.stringify(report, null, 2) + "\n", "utf8");

const strict = process.argv.includes("--strict");
if (strict && gaps.length > 0) {
  console.error("ds:coverage: FAIL (--strict) — uncovered (kind, archetype) cells exist");
  process.exit(1);
}

console.log("ds:coverage: OK");
