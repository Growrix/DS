/**
 * i18n.ts — Phase 12G
 *
 * Locale + direction primitives for the DS. The DS itself is locale-neutral
 * (strings come from content adapters, not from a baked translation table);
 * this module exposes:
 *
 *  - `Locale` — the locale id type (BCP-47-ish kebab strings).
 *  - `getDirection(locale)` — resolves "ltr" | "rtl" per locale.
 *  - `RTL_LOCALES` — canonical list of RTL languages.
 *  - `formatNumber`, `formatDate`, `formatRelativeTime` — thin Intl wrappers
 *    that consume the resolved locale so projects don't reimplement them.
 *
 * Wiring: project root layout reads `getDirection(locale)` and sets it on
 * `<html dir>`. The DS components rely on CSS logical properties (already in
 * `ds.base.css` / utilities) so flipping `dir` cascades correctly.
 */

export type Locale = string;
export type TextDirection = "ltr" | "rtl";

/**
 * Two-letter ISO codes for RTL scripts. Resolution checks the primary
 * subtag of the locale (e.g. "ar-EG" → "ar" → rtl).
 */
export const RTL_LOCALES: readonly string[] = [
  "ar", // Arabic
  "fa", // Persian
  "he", // Hebrew
  "ur", // Urdu
  "ps", // Pashto
  "sd", // Sindhi
  "ug", // Uyghur
  "yi", // Yiddish
  "dv", // Divehi
  "ku", // Kurdish (Sorani variant)
];

export function getDirection(locale: Locale): TextDirection {
  const primary = (locale ?? "").split("-")[0]?.toLowerCase() ?? "";
  return RTL_LOCALES.includes(primary) ? "rtl" : "ltr";
}

export function isRtl(locale: Locale): boolean {
  return getDirection(locale) === "rtl";
}

// -----------------------------------------------------------------------------
// Intl wrappers — all locale-aware, no hardcoded en-US defaults.
// -----------------------------------------------------------------------------

export function formatNumber(
  value: number,
  locale: Locale,
  options?: Intl.NumberFormatOptions,
): string {
  return new Intl.NumberFormat(locale, options).format(value);
}

export function formatDate(
  value: Date | number,
  locale: Locale,
  options?: Intl.DateTimeFormatOptions,
): string {
  return new Intl.DateTimeFormat(locale, options).format(value);
}

export function formatRelativeTime(
  value: number,
  unit: Intl.RelativeTimeFormatUnit,
  locale: Locale,
  options?: Intl.RelativeTimeFormatOptions,
): string {
  return new Intl.RelativeTimeFormat(locale, options).format(value, unit);
}

/**
 * Plural classifier — returns the CLDR plural category ("zero" | "one" |
 * "two" | "few" | "many" | "other"). Projects use this to pick the right
 * string from a CLDR-shaped plural bag.
 */
export function pluralCategory(
  value: number,
  locale: Locale,
  type: "cardinal" | "ordinal" = "cardinal",
): Intl.LDMLPluralRule {
  return new Intl.PluralRules(locale, { type }).select(value);
}
