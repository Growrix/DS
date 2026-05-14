import { defineConfig, globalIgnores } from "eslint/config";
import nextVitals from "eslint-config-next/core-web-vitals";
import nextTs from "eslint-config-next/typescript";

const eslintConfig = defineConfig([
  ...nextVitals,
  ...nextTs,
  // Override default ignores of eslint-config-next.
  globalIgnores([
    // Default ignores of eslint-config-next:
    ".next/**",
    "out/**",
    "build/**",
    "next-env.d.ts",
    "DOC/**",
    // Phase 12I: visual regression specs use opt-in @playwright/test which
    // is not a default project dependency. Skip lint to avoid import-resolver
    // failures when Playwright isn't installed locally.
    "tests/visual/**",
    "playwright.config.ts",
  ]),

  {
    files: ["src/**/*.{ts,tsx}"],
    ignores: ["src/ds/**/*.{ts,tsx}"],
    rules: {
      "no-restricted-imports": [
        "error",
        {
          patterns: [
            {
              group: ["@/ds/*", "@/ds/**"],
              message: "Import UI only from '@/ds' (single public entry).",
            },
          ],
        },
      ],
    },
  },

  {
    files: ["src/ds/**/*.{ts,tsx}"],
    rules: {
      "no-restricted-syntax": [
        "error",
        {
          selector: "JSXAttribute[name.name='style']",
          message: "Do not use inline styles in DS. Use CSS classes + CSS variables set via refs if needed.",
        },
      ],
    },
  },
]);

export default eslintConfig;
