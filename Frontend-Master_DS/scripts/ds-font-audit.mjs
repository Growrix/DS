#!/usr/bin/env node
// ds-font-audit.mjs
//
// Verifies that every `--font-*` CSS variable referenced by any preset in
// `src/ds/foundation/typography/fontPresetRegistry.ts` is mounted on the
// root `<html>` element via `src/app/layout.tsx`. Pure source-text scan —
// no TS import, no Node loader gymnastics.
//
// Failure modes:
//   - a preset references a `--font-xxx` var that layout.tsx does not mount
//   - non-zero exit, with the missing vars listed
//
// Run via: npm run ds:font-audit
// Wired into the `verify` chain alongside ds:audit / ds:a11y / ds:contract.

import { readFileSync } from "node:fs";
import path from "node:path";

const ROOT = process.cwd();
const REGISTRY = path.join(ROOT, "src/ds/foundation/typography/fontPresetRegistry.ts");
const LAYOUT = path.join(ROOT, "src/app/layout.tsx");

function readOrFail(file, label) {
  try {
    return readFileSync(file, "utf8");
  } catch (err) {
    console.error(`ds:font-audit: cannot read ${label} (${file})`);
    console.error(err.message);
    process.exit(2);
  }
}

const registrySource = readOrFail(REGISTRY, "font preset registry");
const layoutSource = readOrFail(LAYOUT, "root layout");

// Extract every "--font-xxx" string literal from the registry source.
const fontVarRegex = /"(--font-[a-z0-9-]+)"/g;
const declaredVars = new Set();
for (const match of registrySource.matchAll(fontVarRegex)) {
  declaredVars.add(match[1]);
}

if (declaredVars.size === 0) {
  console.error("ds:font-audit: no `--font-*` vars found in registry — registry malformed?");
  process.exit(2);
}

// For each declared var, confirm layout.tsx mounts it via `variable: "--font-xxx"`.
const missing = [];
for (const v of declaredVars) {
  const needle = `variable: "${v}"`;
  if (!layoutSource.includes(needle)) {
    missing.push(v);
  }
}

if (missing.length > 0) {
  console.error("ds:font-audit: FAIL — layout.tsx is missing mounts for these font vars:");
  for (const v of missing.sort()) {
    console.error(`  - ${v}`);
  }
  console.error("");
  console.error("Fix: add a matching next/font/google import in src/app/layout.tsx");
  console.error("with `variable: \"<var-name>\"`, then include `.variable` in the <html className>.");
  process.exit(1);
}

console.log(
  `ds:font-audit: OK — layout.tsx mounts all ${declaredVars.size} font vars from fontPresetRegistry`,
);
