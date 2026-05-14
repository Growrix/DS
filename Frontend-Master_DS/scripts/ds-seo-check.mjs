#!/usr/bin/env node
// ds-seo-check.mjs
//
// Lightweight SEO surface audit. Reads `src/site/index.ts` to find
// `ACTIVE_SITE_PRESET`, dynamically imports the compiled tree (via the
// `.next/types` build is heavy — instead we scan the preset module
// source for `seo:` / `organization:` / `title:` / `description:`).
//
// Goals:
//   * Warn (exit 0) when an active preset has no `seo` block.
//   * Fail (exit 1) when an `seo` block exists but is missing both
//     `title` and `description` (the bare minimum for ranking).
//
// Run via: npm run ds:seo-check

import { readFileSync, existsSync } from "node:fs";
import path from "node:path";

const ROOT = process.cwd();

function findActivePresetFile() {
  const indexPath = path.join(ROOT, "src/site/index.ts");
  if (!existsSync(indexPath)) {
    console.error("ds:seo-check: src/site/index.ts not found.");
    process.exit(2);
  }
  const idx = readFileSync(indexPath, "utf8");
  const m = idx.match(/ACTIVE_SITE_PRESET\s*:\s*PublicSitePreset\s*=\s*([A-Z_]+)/);
  if (!m) {
    console.warn("ds:seo-check: cannot identify ACTIVE_SITE_PRESET; skipping.");
    return null;
  }
  const presetName = m[1];
  const importMatch = idx.match(new RegExp(`import\\s*\\{[^}]*${presetName}[^}]*\\}\\s*from\\s*"([^"]+)"`));
  if (!importMatch) return null;
  const importPath = importMatch[1].replace(/^@\//, "src/");
  const candidates = [`${importPath}.ts`, `${importPath}/index.ts`, `${importPath}.tsx`];
  for (const c of candidates) {
    const abs = path.join(ROOT, c);
    if (existsSync(abs)) return abs;
  }
  return null;
}

const presetFile = findActivePresetFile();
if (!presetFile) {
  console.log("ds:seo-check: SKIP — could not resolve active preset file.");
  process.exit(0);
}

const src = readFileSync(presetFile, "utf8");
const hasSeo = /\bseo\s*:/.test(src);
const hasTitle = /\bseo\s*:\s*\{[^}]*\btitle\s*:/.test(src) || /title\s*:/.test(src);
const hasDescription = /\bseo\s*:\s*\{[^}]*\bdescription\s*:/.test(src) || /description\s*:/.test(src);
const hasOrg = /\borganization\s*:/.test(src);

console.log("ds:seo-check —", path.relative(ROOT, presetFile));
console.log(`  seo block:       ${hasSeo ? "yes" : "no  (warning)"}`);
console.log(`  title:           ${hasTitle ? "yes" : "no"}`);
console.log(`  description:     ${hasDescription ? "yes" : "no"}`);
console.log(`  organization JSON-LD: ${hasOrg ? "yes" : "no"}`);

if (hasSeo && !hasTitle && !hasDescription) {
  console.error("ds:seo-check: FAIL — seo block present but missing both title and description.");
  process.exit(1);
}
console.log("ds:seo-check: OK");
