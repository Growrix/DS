// playwright.config.ts — Phase 12I
//
// Opt-in visual-regression configuration. Installed/executed only via
// `npm run ds:visual` (which uses `npx -y playwright`). Not part of the
// default verify chain — projects that want visual regression pin the
// Playwright version explicitly in their own package.json and add the
// browser binaries (`npx playwright install --with-deps`).
//
// The canonical DS ships only the config + a tiny smoke spec covering the
// home route. Projects extend with their own routes.

import { defineConfig, devices } from "@playwright/test";

export default defineConfig({
  testDir: "./tests/visual",
  fullyParallel: true,
  forbidOnly: !!process.env.CI,
  retries: process.env.CI ? 1 : 0,
  reporter: [["list"]],
  use: {
    baseURL: process.env.DS_VISUAL_BASE_URL ?? "http://localhost:3000",
    trace: "on-first-retry",
    screenshot: "only-on-failure",
    video: "off",
  },
  projects: [
    {
      name: "chromium-desktop",
      use: { ...devices["Desktop Chrome"], viewport: { width: 1440, height: 900 } },
    },
    {
      name: "chromium-mobile",
      use: { ...devices["Pixel 7"] },
    },
  ],
  webServer: {
    command: "npm run start",
    url: "http://localhost:3000",
    reuseExistingServer: !process.env.CI,
    timeout: 120_000,
  },
  expect: {
    toHaveScreenshot: {
      // Soft-strict pixel ratio — anti-aliasing flake mitigation.
      maxDiffPixelRatio: 0.01,
    },
  },
});
