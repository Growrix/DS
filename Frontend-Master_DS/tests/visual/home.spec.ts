/**
 * tests/visual/home.spec.ts — Phase 12I
 *
 * Smoke visual-regression spec for the canonical DS home route. Run via
 *   npm run ds:visual
 *
 * Snapshots land in `tests/visual/__screenshots__/` and are git-tracked so
 * unexpected visual drift breaks the next run.
 *
 * Note: this file uses `@playwright/test` which is NOT a default project
 * dependency. `ds:visual` runs it via `npx -y` so the binary is fetched on
 * demand. The DS test runner (Jest) ignores this directory by virtue of
 * the `testDir` glob in `jest.config.js`.
 */

// eslint-disable-next-line import/no-unresolved -- playwright is opt-in
import { test, expect } from "@playwright/test";

test.describe("DS home — visual baseline", () => {
  test("renders the home route without unexpected drift", async ({ page }) => {
    await page.goto("/");
    await page.waitForLoadState("networkidle");
    await expect(page).toHaveScreenshot("home.png", { fullPage: true });
  });
});
