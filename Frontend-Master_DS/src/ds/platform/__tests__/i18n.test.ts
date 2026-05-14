/**
 * i18n.test.ts — Phase 12G smoke test for locale + direction primitives.
 */

import {
  formatDate,
  formatNumber,
  formatRelativeTime,
  getDirection,
  isRtl,
  pluralCategory,
  RTL_LOCALES,
} from "../i18n";

describe("ds platform i18n", () => {
  test("getDirection resolves ltr for English/French/German", () => {
    expect(getDirection("en")).toBe("ltr");
    expect(getDirection("en-US")).toBe("ltr");
    expect(getDirection("fr")).toBe("ltr");
    expect(getDirection("de-DE")).toBe("ltr");
  });

  test("getDirection resolves rtl for every locale in RTL_LOCALES", () => {
    for (const loc of RTL_LOCALES) {
      expect(getDirection(loc)).toBe("rtl");
      expect(isRtl(loc)).toBe(true);
    }
  });

  test("getDirection handles regional subtags", () => {
    expect(getDirection("ar-EG")).toBe("rtl");
    expect(getDirection("he-IL")).toBe("rtl");
  });

  test("formatNumber respects locale separators", () => {
    expect(formatNumber(1234.5, "en-US")).toMatch(/1,234\.5/);
    // German uses ',' as decimal separator. ICU output uses NBSP-style grouping.
    const de = formatNumber(1234.5, "de-DE");
    expect(de).toContain("1");
    expect(de).toContain("234");
    expect(de).toContain(",5");
  });

  test("formatDate produces a non-empty string", () => {
    const out = formatDate(new Date("2026-05-14T00:00:00Z"), "en-US");
    expect(typeof out).toBe("string");
    expect(out.length).toBeGreaterThan(0);
  });

  test("formatRelativeTime produces a non-empty string", () => {
    const out = formatRelativeTime(-2, "day", "en-US");
    expect(typeof out).toBe("string");
    expect(out.length).toBeGreaterThan(0);
  });

  test("pluralCategory classifies basic cardinals in English", () => {
    expect(pluralCategory(1, "en")).toBe("one");
    expect(pluralCategory(2, "en")).toBe("other");
    expect(pluralCategory(0, "en")).toBe("other");
  });
});
