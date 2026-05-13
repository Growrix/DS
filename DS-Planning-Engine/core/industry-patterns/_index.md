# Industry Patterns — Index

> Registry of all industry patterns available to `DS_site_planner`. Each pattern provides the default site shape for a class of clients so the planner doesn't start from a blank canvas.

Add an entry here whenever a new pattern file is created under this folder.

---

## Pattern registry

| Pattern id | File | Business types covered | Archetype | Notes |
|---|---|---|---|---|
| `local-services` | [local-services.md](./local-services.md) | `local-services` | `local-business-trust` | Trades, electricians, plumbers, cleaning, landscaping, HVAC, solar installers |
| `modern-saas` | [modern-saas.md](./modern-saas.md) | `modern-saas`, `startup` | `modern-saas`, `startup-conversion` | B2B SaaS products, dev tools, productivity apps |

---

## When to add a new pattern

Add a new pattern file when:
- A new client brief has a `business_type` not covered by any current pattern.
- The planner has used `open_questions` to ask about site structure for a type more than twice.
- A real project shipped a novel site shape worth preserving as a reusable default.

**Do NOT add a pattern for a single client.** Patterns are industry-level defaults, not client-specific presets. Client-specific decisions go into the per-project `site-plan.json`.

---

## Pattern file convention

Each pattern file MUST declare:

```markdown
# Industry Pattern: <Name>

## pattern_id
<kebab-case>

## business_types_covered
<comma-separated list of business_type values this pattern applies to>

## recommended_archetype
<one DS archetype id>

## default_theme
<dark | light>

## default_site_map
<standard routes + nav + footer shape>

## default_journeys
<primary conversion path + secondary paths>

## default_trust_signals
<what trust evidence this industry expects on a site>

## default_section_kinds_by_page
<per-page section kind composition — using DS kinds ONLY>

## forbidden_patterns
<what this industry must NOT do on a site>

## notes
<any contextual notes for the planner>
```

Pattern files live in `core/industry-patterns/` and are registered here in `_index.md`.
