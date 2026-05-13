#!/usr/bin/env node
/**
 * verify-plan.mjs
 * DS-Planning-Engine — plan validation gate
 *
 * Usage:
 *   node DS-Planning-Engine/scripts/verify-plan.mjs <run-folder-path>
 *
 * Exit codes:
 *   0  — plan is valid and ready for DS_Frontend_developer
 *   1  — one or more checks failed (see stdout for details)
 *
 * The run-folder-path should point to the run directory (not the plan/ subdirectory).
 * e.g., node scripts/verify-plan.mjs DS-Planning-Engine/output/runs/2026-05-13-acme-electrical
 */

import { readFileSync, existsSync, statSync } from 'fs';
import { resolve, join, dirname } from 'path';
import { fileURLToPath } from 'url';

const __dirname = dirname(fileURLToPath(import.meta.url));
const WORKSPACE_ROOT = resolve(__dirname, '../..');
const DS_CONTRACT_PATH = join(WORKSPACE_ROOT, 'Frontend-Master_DS/generated/ds.contract.json');
const SITE_PLAN_SCHEMA_PATH = join(WORKSPACE_ROOT, 'DS-Planning-Engine/templates/site-plan.schema.json');
const PLAN_LOCK_SCHEMA_PATH = join(WORKSPACE_ROOT, 'DS-Planning-Engine/templates/plan-lock.schema.json');

// ─── Argument parsing ────────────────────────────────────────────────────────

const runFolderArg = process.argv[2];
if (!runFolderArg) {
  console.error('Usage: node verify-plan.mjs <run-folder-path>');
  process.exit(1);
}

const RUN_FOLDER = resolve(process.cwd(), runFolderArg);
const PLAN_FOLDER = join(RUN_FOLDER, 'plan');

// ─── Helpers ─────────────────────────────────────────────────────────────────

let failures = 0;

function pass(checkNum, label) {
  console.log(`  ✓ [${checkNum}] ${label}`);
}

function fail(checkNum, code, message, detail = '') {
  failures++;
  console.error(`  ✗ [${checkNum}] ${code}: ${message}`);
  if (detail) console.error(`       → ${detail}`);
}

function readJson(filePath, label) {
  if (!existsSync(filePath)) {
    fail('?', 'FILE_MISSING', `${label} not found`, filePath);
    return null;
  }
  try {
    return JSON.parse(readFileSync(filePath, 'utf8'));
  } catch (e) {
    fail('?', 'JSON_PARSE_ERROR', `${label} is not valid JSON`, e.message);
    return null;
  }
}

// ─── Load artefacts ──────────────────────────────────────────────────────────

console.log('\n▶ DS-Planning-Engine — Plan Verifier');
console.log(`  Run folder : ${RUN_FOLDER}`);
console.log(`  Plan folder: ${PLAN_FOLDER}\n`);

if (!existsSync(PLAN_FOLDER)) {
  console.error(`  ✗ Plan folder not found: ${PLAN_FOLDER}`);
  process.exit(1);
}

const sitePlan    = readJson(join(PLAN_FOLDER, 'site-plan.json'), 'site-plan.json');
const planLock    = readJson(join(PLAN_FOLDER, 'plan.lock.json'), 'plan.lock.json');
const brief       = readJson(join(PLAN_FOLDER, 'brief.json'),     'brief.json');
const contentLib  = readJson(join(PLAN_FOLDER, 'content-library.json'), 'content-library.json');
const dsContract  = readJson(DS_CONTRACT_PATH, 'ds.contract.json');
const sitePlanSchema = readJson(SITE_PLAN_SCHEMA_PATH, 'site-plan.schema.json');
const planLockSchema = readJson(PLAN_LOCK_SCHEMA_PATH, 'plan-lock.schema.json');

// Abort early if critical artefacts missing
if (!sitePlan || !planLock || !dsContract) {
  console.error('\n✗ Critical artefacts missing — cannot continue.\n');
  process.exit(1);
}

// ─── Check 1 — site-plan.json structural minimum ────────────────────────────
console.log('Running checks…\n');
{
  const required = ['version', 'project', 'brand', 'site_map', 'pages', 'content_library', 'ds_dependency', 'ds_gaps', 'lock_status'];
  const missing = required.filter(k => !(k in sitePlan));
  if (missing.length === 0) {
    pass(1, 'site-plan.json has all required top-level keys');
  } else {
    fail(1, 'SCHEMA_VIOLATION', `site-plan.json missing required keys: ${missing.join(', ')}`);
  }
}

// ─── Check 2 — plan.lock.json structural minimum ────────────────────────────
{
  const required = ['version', 'status', 'site_plan_path', 'ds_contract_path', 'summary'];
  const missing = required.filter(k => !(k in planLock));
  if (missing.length === 0) {
    pass(2, 'plan.lock.json has all required top-level keys');
  } else {
    fail(2, 'LOCK_SCHEMA_VIOLATION', `plan.lock.json missing required keys: ${missing.join(', ')}`);
  }
}

// ─── Check 3 — brief.json required fields ───────────────────────────────────
{
  if (!brief) {
    fail(3, 'BRIEF_INCOMPLETE', 'brief.json not found or not parseable');
  } else {
    const requiredBriefFields = [
      ['project', 'name'], ['project', 'locale'], ['project', 'business_type'],
      ['brand', 'voice'], ['brand', 'archetype']
    ];
    const missingBrief = requiredBriefFields
      .filter(([a, b]) => !brief[a] || !brief[a][b] || brief[a][b] === '')
      .map(([a, b]) => `${a}.${b}`);
    if (missingBrief.length === 0) {
      pass(3, 'brief.json has all required fields');
    } else {
      fail(3, 'BRIEF_INCOMPLETE', `brief.json missing or empty fields: ${missingBrief.join(', ')}`);
    }
  }
}

// ─── Build DS contract caches ─────────────────────────────────────────────────
const dsKinds    = new Set((dsContract.sectionVariants || []).map(v => v.kind));
const dsVariants = new Set((dsContract.sectionVariants || []).map(v => v.id));
const dsVariantKindMap = {};
(dsContract.sectionVariants || []).forEach(v => {
  if (!dsVariantKindMap[v.id]) dsVariantKindMap[v.id] = v.kind;
});
const dsArchetypes = new Set((dsContract.archetypes || []).map(a => a.id));
const dsThemes     = new Set((dsContract.themes || []).map(t => t.name));
const dsMotion     = new Set((dsContract.motionPresets || []).map(m => m.id));

// ─── Check 4 — All section kinds exist in DS ──────────────────────────────────
{
  const unknownKinds = new Set();
  const pages = sitePlan.pages || {};
  Object.values(pages).forEach(page => {
    (page.sections || []).forEach(section => {
      if (section.kind && !dsKinds.has(section.kind)) {
        unknownKinds.add(section.kind);
      }
    });
  });
  if (unknownKinds.size === 0) {
    pass(4, `All section kinds exist in DS contract (available: ${[...dsKinds].join(', ')})`);
  } else {
    fail(4, 'UNKNOWN_KIND', `Sections reference kinds not in DS: ${[...unknownKinds].join(', ')}`, 'These must be added to ds_gaps[] or removed from the plan.');
  }
}

// ─── Check 5 — All non-null variant ids exist in DS ──────────────────────────
{
  const unknownVariants = new Set();
  const pages = sitePlan.pages || {};
  Object.values(pages).forEach(page => {
    (page.sections || []).forEach(section => {
      if (section.variant != null && !dsVariants.has(section.variant)) {
        unknownVariants.add(section.variant);
      }
    });
  });
  if (unknownVariants.size === 0) {
    pass(5, 'All non-null section variants exist in DS contract');
  } else {
    fail(5, 'UNKNOWN_VARIANT', `Sections reference variant ids not in DS: ${[...unknownVariants].join(', ')}`, 'Null the variant or build it in DS first.');
  }
}

// ─── Check 6 — Variant-kind coherence ────────────────────────────────────────
{
  const mismatches = [];
  const pages = sitePlan.pages || {};
  Object.values(pages).forEach(page => {
    (page.sections || []).forEach(section => {
      if (section.variant != null && dsVariantKindMap[section.variant]) {
        const actualKind = dsVariantKindMap[section.variant];
        if (actualKind !== section.kind) {
          mismatches.push(`section "${section.id}": variant "${section.variant}" belongs to kind "${actualKind}", not "${section.kind}"`);
        }
      }
    });
  });
  if (mismatches.length === 0) {
    pass(6, 'Variant-kind coherence: all variants match their declared kind');
  } else {
    fail(6, 'VARIANT_KIND_MISMATCH', 'Some variants are assigned to the wrong kind:', mismatches.join('; '));
  }
}

// ─── Check 7 — Archetype validity ────────────────────────────────────────────
{
  const archetype = sitePlan.brand?.archetype;
  if (dsArchetypes.has(archetype)) {
    pass(7, `Archetype "${archetype}" is valid`);
  } else {
    fail(7, 'UNKNOWN_ARCHETYPE', `brand.archetype "${archetype}" is not one of the 8 DS archetypes`, `Valid: ${[...dsArchetypes].join(', ')}`);
  }
}

// ─── Check 8 — Theme validity ────────────────────────────────────────────────
{
  const theme = sitePlan.brand?.theme_default;
  if (dsThemes.has(theme)) {
    pass(8, `Theme "${theme}" is valid`);
  } else {
    fail(8, 'UNKNOWN_THEME', `brand.theme_default "${theme}" is not a DS theme`, `Valid: ${[...dsThemes].join(', ')}`);
  }
}

// ─── Check 9 — Mobile nav count ──────────────────────────────────────────────
{
  const nav = sitePlan.site_map?.mobile_bottom_nav || [];
  if (nav.length >= 3 && nav.length <= 5) {
    pass(9, `Mobile bottom nav has ${nav.length} entries (valid: 3-5)`);
  } else {
    fail(9, 'MOBILE_NAV_COUNT_VIOLATION', `mobile_bottom_nav has ${nav.length} entries; must be 3-5`);
  }
}

// ─── Check 10 — Content library completeness ─────────────────────────────────
{
  if (!contentLib) {
    fail(10, 'MISSING_CONTENT_LIBRARY', 'content-library.json not found or not parseable');
  } else {
    // Collect all string values from section.content objects that look like content keys
    // (strings that start with a known prefix pattern like "home." or are present in contentLib)
    const missingKeys = [];
    const pages = sitePlan.pages || {};
    const flatLib = flattenObject(contentLib);

    Object.values(pages).forEach(page => {
      (page.sections || []).forEach(section => {
        if (section.content && typeof section.content === 'object') {
          collectContentKeys(section.content).forEach(key => {
            // Only check keys that look like content-library references (contain a dot)
            if (key.includes('.') && !flatLib[key] && !contentLib[key]) {
              missingKeys.push(key);
            }
          });
        }
      });
    });

    if (missingKeys.length === 0) {
      pass(10, 'Content library covers all referenced content keys');
    } else {
      fail(10, 'MISSING_CONTENT_KEY', `${missingKeys.length} content key(s) referenced in sections but not in content-library.json:`, missingKeys.slice(0, 5).join(', ') + (missingKeys.length > 5 ? ` … (+${missingKeys.length - 5} more)` : ''));
    }
  }
}

// ─── Check 11 — Gap vs lock_status coherence ─────────────────────────────────
{
  const lockStatus = sitePlan.lock_status;
  const gapsCount = (sitePlan.ds_gaps || []).length;
  const validStatuses = ['passed', 'needs_ds_extension', 'partial_coverage', 'needs_clarification'];

  if (!validStatuses.includes(lockStatus)) {
    fail(11, 'INVALID_LOCK_STATUS', `lock_status "${lockStatus}" is not one of the 4 valid values`, validStatuses.join(', '));
  } else if (lockStatus === 'passed' && gapsCount > 0) {
    fail(11, 'GAP_STATUS_MISMATCH', `lock_status is "passed" but ds_gaps[] has ${gapsCount} entry/entries`, 'A passed plan must have an empty ds_gaps array.');
  } else if (lockStatus !== 'passed' && lockStatus !== 'needs_clarification' && gapsCount === 0) {
    fail(11, 'GAP_STATUS_MISMATCH', `lock_status is "${lockStatus}" but ds_gaps[] is empty`, 'If no gaps exist, lock_status should be "passed".');
  } else {
    pass(11, `Gap vs lock_status coherence: ${lockStatus} (${gapsCount} gap(s))`);
  }
}

// ─── Check 12 — Open questions vs lock_status ────────────────────────────────
{
  const lockStatus = sitePlan.lock_status;
  const openQCount = (sitePlan.open_questions || []).length;
  if (lockStatus === 'passed' && openQCount > 0) {
    fail(12, 'OPEN_QUESTIONS_ON_PASSED', `lock_status is "passed" but open_questions[] has ${openQCount} entry/entries`, 'Resolve all open questions before marking a plan as passed.');
  } else {
    pass(12, `Open questions vs lock_status: OK (${openQCount} open question(s), status: ${lockStatus})`);
  }
}

// ─── Check 13 — Pages directory ──────────────────────────────────────────────
{
  const pagesDir = join(PLAN_FOLDER, 'pages');
  const declaredPages = Object.keys(sitePlan.pages || {});
  if (declaredPages.length === 0) {
    fail(13, 'MISSING_PAGE_BRIEF', 'site-plan.json declares 0 pages');
  } else if (!existsSync(pagesDir)) {
    fail(13, 'MISSING_PAGE_BRIEF', `pages/ directory not found at ${pagesDir}`);
  } else {
    const missingPageFiles = declaredPages.filter(pageId => {
      const slug = pageId.replace(/\//g, '-').replace(/^-/, '');
      return !existsSync(join(pagesDir, `${slug}.plan.md`)) &&
             !existsSync(join(pagesDir, `${pageId}.plan.md`));
    });
    if (missingPageFiles.length === 0) {
      pass(13, `pages/ directory exists with plan files for all ${declaredPages.length} declared page(s)`);
    } else {
      fail(13, 'MISSING_PAGE_BRIEF', `${missingPageFiles.length} page brief(s) missing from pages/ directory:`, missingPageFiles.join(', '));
    }
  }
}

// ─── Check 14 — content-library.json exists ──────────────────────────────────
{
  if (existsSync(join(PLAN_FOLDER, 'content-library.json'))) {
    pass(14, 'content-library.json exists');
  } else {
    fail(14, 'MISSING_CONTENT_LIBRARY', 'content-library.json not found in plan folder');
  }
}

// ─── Check 15 — DS contract readable (live) ──────────────────────────────────
{
  if (existsSync(DS_CONTRACT_PATH)) {
    pass(15, `ds.contract.json readable at ${DS_CONTRACT_PATH}`);
  } else {
    fail(15, 'DS_CONTRACT_UNREADABLE', `ds.contract.json not found at expected path`, DS_CONTRACT_PATH);
  }
}

// ─── Summary ─────────────────────────────────────────────────────────────────

console.log('\n' + '─'.repeat(60));
if (failures === 0) {
  console.log(`\n✅ All 15 checks passed. Plan is ready for DS_Frontend_developer.\n`);
  console.log(`   Lock status : ${sitePlan.lock_status}`);
  console.log(`   Pages       : ${Object.keys(sitePlan.pages || {}).length}`);
  console.log(`   Gaps        : ${(sitePlan.ds_gaps || []).length}`);
  console.log(`\n   Next step: invoke DS_Frontend_developer with plan_source:`);
  console.log(`   ${PLAN_FOLDER}\n`);
  process.exit(0);
} else {
  console.log(`\n✗ ${failures} check(s) failed. Fix the issues above before invoking DS_Frontend_developer.\n`);
  process.exit(1);
}

// ─── Utilities ────────────────────────────────────────────────────────────────

function flattenObject(obj, prefix = '') {
  const result = {};
  for (const [key, value] of Object.entries(obj)) {
    const fullKey = prefix ? `${prefix}.${key}` : key;
    if (value && typeof value === 'object' && !Array.isArray(value)) {
      Object.assign(result, flattenObject(value, fullKey));
    } else {
      result[fullKey] = value;
    }
  }
  return result;
}

function collectContentKeys(obj, keys = []) {
  for (const value of Object.values(obj)) {
    if (typeof value === 'string') {
      keys.push(value);
    } else if (value && typeof value === 'object' && !Array.isArray(value)) {
      collectContentKeys(value, keys);
    } else if (Array.isArray(value)) {
      value.forEach(item => {
        if (typeof item === 'string') keys.push(item);
        else if (item && typeof item === 'object') collectContentKeys(item, keys);
      });
    }
  }
  return keys;
}
