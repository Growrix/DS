import { promises as fs } from "fs";
import path from "path";
import Link from "next/link";

import {
  ARCHETYPES,
  Container,
  MOTION_PRESET_IDS,
  PublicShell,
  Stack,
  THEMES,
  getMotionPreset,
  tokens,
} from "@/ds";

export const metadata = {
  title: "Foundations - Preview",
};

const semanticColorTokens = Object.entries(tokens.color);
const paletteTokens = Object.entries(tokens.palette);
const spaceTokens = Object.entries(tokens.space).slice(0, 12);
const radiusTokens = Object.entries(tokens.radius);
const shadowTokens = Object.entries(tokens.shadow);
const fontFamilyTokens = Object.entries(tokens.fontFamily);
const fontSizeTokens = Object.entries(tokens.fontSize);
const motionPresets = MOTION_PRESET_IDS.map((id) => getMotionPreset(id));
const archetypes = Object.values(ARCHETYPES);

async function listStyleFiles() {
  const stylesDir = path.join(process.cwd(), "src", "ds", "styles");
  const entries = await fs.readdir(stylesDir, { withFileTypes: true });
  return entries
    .filter((entry) => entry.isFile() && entry.name.endsWith(".css"))
    .map((entry) => entry.name)
    .sort((a, b) => a.localeCompare(b));
}

function SwatchGrid({ items, mode = "background" }: { items: Array<[string, string]>; mode?: "background" | "text" }) {
  return (
    <div
      style={{
        display: "grid",
        gridTemplateColumns: "repeat(auto-fit, minmax(170px, 1fr))",
        gap: "0.75rem",
      }}
    >
      {items.map(([name, variable]) => (
        <article
          key={name}
          style={{
            border: "1px solid var(--ds-color-border)",
            borderRadius: "var(--ds-radius-md)",
            background: "var(--ds-color-surface)",
            overflow: "hidden",
          }}
        >
          <div
            style={
              mode === "background"
                ? {
                    height: "5rem",
                    background: variable,
                    borderBottom: "1px solid var(--ds-color-border)",
                  }
                : {
                    height: "5rem",
                    display: "grid",
                    placeItems: "center",
                    background: "var(--ds-color-surface-sunken)",
                    color: variable,
                    borderBottom: "1px solid var(--ds-color-border)",
                    fontSize: "var(--ds-font-size-6)",
                    fontWeight: "var(--ds-font-weight-semibold)",
                  }
            }
          >
            {mode === "text" ? "Aa" : null}
          </div>
          <div style={{ padding: "0.75rem" }}>
            <p className="text-body-small" style={{ fontWeight: "var(--ds-font-weight-semibold)" }}>
              {name}
            </p>
            <p className="text-caption" style={{ wordBreak: "break-word" }}>
              {variable}
            </p>
          </div>
        </article>
      ))}
    </div>
  );
}

function ThemePanel({ theme, stylesheets }: { theme: (typeof THEMES)[number]; stylesheets: string[] }) {
  return (
    <section
      data-theme={theme.name}
      style={{
        border: "1px solid var(--ds-color-border)",
        borderRadius: "var(--ds-radius-lg)",
        background: "var(--ds-color-background)",
        color: "var(--ds-color-foreground)",
        padding: "1rem",
      }}
    >
      <Stack gap="compact">
        <header>
          <p className="text-caption" style={{ textTransform: "uppercase", letterSpacing: "0.14em" }}>
            {theme.colorScheme} scheme
          </p>
          <h2 className="text-heading-4">{theme.label} Theme</h2>
        </header>

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(170px, 1fr))",
            gap: "0.75rem",
          }}
        >
          {[
            ["background", "var(--ds-color-background)", "var(--ds-color-foreground)"],
            ["surface", "var(--ds-color-surface)", "var(--ds-color-foreground)"],
            ["raised", "var(--ds-color-surface-raised)", "var(--ds-color-foreground)"],
            ["accent", "var(--ds-color-accent)", "var(--ds-color-foreground-on-accent)"],
          ].map(([label, background, foreground]) => (
            <div
              key={label}
              style={{
                background,
                color: foreground,
                minHeight: "6rem",
                borderRadius: "var(--ds-radius-md)",
                border: "1px solid var(--ds-color-border)",
                padding: "0.9rem",
                display: "flex",
                alignItems: "end",
              }}
            >
              <span className="text-body-small">{label}</span>
            </div>
          ))}
        </div>

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "minmax(0, 1.2fr) minmax(0, 0.8fr)",
            gap: "0.75rem",
          }}
        >
          <article
            style={{
              background: "var(--ds-color-surface)",
              border: "1px solid var(--ds-color-border)",
              borderRadius: "var(--ds-radius-md)",
              padding: "1rem",
              boxShadow: "var(--ds-shadow-sm)",
            }}
          >
            <p className="text-caption">Typography</p>
            <h3 className="text-heading-3" style={{ marginBottom: "0.4rem" }}>
              Display rhythm under {theme.label.toLowerCase()}
            </h3>
            <p className="text-body-small" style={{ color: "var(--ds-color-foreground-secondary)" }}>
              The preview clone now exposes the DS token surface directly so you can inspect colors, spacing,
              motion, and theme posture in context.
            </p>
          </article>

          <article
            style={{
              background: "var(--ds-color-surface-sunken)",
              border: "1px solid var(--ds-color-border)",
              borderRadius: "var(--ds-radius-md)",
              padding: "1rem",
            }}
          >
            <p className="text-caption">Stylesheet stack</p>
            <ul style={{ margin: 0, paddingLeft: "1rem" }}>
              {stylesheets.slice(0, 5).map((file) => (
                <li key={`${theme.name}-${file}`} className="text-body-small">
                  {file}
                </li>
              ))}
            </ul>
          </article>
        </div>
      </Stack>
    </section>
  );
}

function TokenBars({ items }: { items: Array<[string, string]> }) {
  return (
    <div style={{ display: "grid", gap: "0.75rem" }}>
      {items.map(([name, variable]) => (
        <div key={name}>
          <div className="ui-row ui-row--between" style={{ marginBottom: "0.3rem", gap: "0.75rem" }}>
            <span className="text-body-small">{name}</span>
            <span className="text-caption">{variable}</span>
          </div>
          <div
            style={{
              height: "0.75rem",
              width: variable,
              maxWidth: "100%",
              minWidth: "1px",
              borderRadius: "var(--ds-radius-full)",
              background: "var(--ds-color-accent)",
            }}
          />
        </div>
      ))}
    </div>
  );
}

function TokenChips({ items, kind }: { items: Array<[string, string]>; kind: "radius" | "shadow" }) {
  return (
    <div
      style={{
        display: "grid",
        gridTemplateColumns: "repeat(auto-fit, minmax(170px, 1fr))",
        gap: "0.75rem",
      }}
    >
      {items.map(([name, variable]) => (
        <article
          key={name}
          style={{
            border: "1px solid var(--ds-color-border)",
            borderRadius: "var(--ds-radius-md)",
            background: "var(--ds-color-surface)",
            padding: "0.9rem",
          }}
        >
          <div
            style={
              kind === "radius"
                ? {
                    height: "4rem",
                    borderRadius: variable,
                    border: "1px solid var(--ds-color-border-strong)",
                    background: "var(--ds-color-surface-raised)",
                  }
                : {
                    height: "4rem",
                    borderRadius: "var(--ds-radius-md)",
                    background: "var(--ds-color-surface-raised)",
                    boxShadow: variable,
                  }
            }
          />
          <p className="text-body-small" style={{ marginTop: "0.65rem", fontWeight: "var(--ds-font-weight-semibold)" }}>
            {name}
          </p>
          <p className="text-caption">{variable}</p>
        </article>
      ))}
    </div>
  );
}

export default async function FoundationsPreviewPage() {
  const stylesheets = await listStyleFiles();

  return (
    <PublicShell>
      <Container>
        <div className="ui-section">
          <Stack>
            <header className="ui-row ui-row--between" style={{ alignItems: "end", gap: "1rem", flexWrap: "wrap" }}>
              <div>
                <p className="text-caption" style={{ textTransform: "uppercase", letterSpacing: "0.14em" }}>
                  Foundations
                </p>
                <h1 className="text-heading-1">Theme, Tokens, and Styling System</h1>
                <p className="text-body-large">
                  Inspect the live DS foundation layer: theme modes, archetype posture, motion presets, token
                  families, and stylesheet architecture.
                </p>
              </div>
              <Link href="/preview" className="ui-button ui-button--md ui-button--secondary ui-focus-ring">
                Preview hub
              </Link>
            </header>

            <section>
              <h2 className="text-heading-3" style={{ marginBottom: "0.75rem" }}>
                Theme Modes
              </h2>
              <div
                style={{
                  display: "grid",
                  gridTemplateColumns: "repeat(auto-fit, minmax(320px, 1fr))",
                  gap: "1rem",
                }}
              >
                {THEMES.map((theme) => (
                  <ThemePanel key={theme.name} theme={theme} stylesheets={stylesheets} />
                ))}
              </div>
            </section>

            <section>
              <h2 className="text-heading-3" style={{ marginBottom: "0.75rem" }}>
                Semantic Color Tokens
              </h2>
              <SwatchGrid items={semanticColorTokens} />
            </section>

            <section>
              <h2 className="text-heading-3" style={{ marginBottom: "0.75rem" }}>
                Palette Tokens
              </h2>
              <SwatchGrid items={paletteTokens} />
            </section>

            <div
              style={{
                display: "grid",
                gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
                gap: "1rem",
              }}
            >
              <section>
                <h2 className="text-heading-3" style={{ marginBottom: "0.75rem" }}>
                  Spacing Scale
                </h2>
                <TokenBars items={spaceTokens} />
              </section>

              <section>
                <h2 className="text-heading-3" style={{ marginBottom: "0.75rem" }}>
                  Font Families
                </h2>
                <div style={{ display: "grid", gap: "0.75rem" }}>
                  {fontFamilyTokens.map(([name, variable]) => (
                    <article
                      key={name}
                      style={{
                        border: "1px solid var(--ds-color-border)",
                        borderRadius: "var(--ds-radius-md)",
                        background: "var(--ds-color-surface)",
                        padding: "0.9rem",
                        fontFamily: variable,
                      }}
                    >
                      <p className="text-caption">{variable}</p>
                      <p style={{ margin: "0.35rem 0 0", fontSize: "var(--ds-font-size-5)" }}>
                        {name} typography sample
                      </p>
                    </article>
                  ))}
                </div>
              </section>
            </div>

            <section>
              <h2 className="text-heading-3" style={{ marginBottom: "0.75rem" }}>
                Radius Tokens
              </h2>
              <TokenChips items={radiusTokens} kind="radius" />
            </section>

            <section>
              <h2 className="text-heading-3" style={{ marginBottom: "0.75rem" }}>
                Shadow Tokens
              </h2>
              <TokenChips items={shadowTokens} kind="shadow" />
            </section>

            <section>
              <h2 className="text-heading-3" style={{ marginBottom: "0.75rem" }}>
                Typography Scale
              </h2>
              <div style={{ display: "grid", gap: "0.75rem" }}>
                {fontSizeTokens.map(([name, variable]) => (
                  <article
                    key={name}
                    style={{
                      border: "1px solid var(--ds-color-border)",
                      borderRadius: "var(--ds-radius-md)",
                      background: "var(--ds-color-surface)",
                      padding: "0.9rem",
                    }}
                  >
                    <div className="ui-row ui-row--between" style={{ gap: "0.75rem", flexWrap: "wrap" }}>
                      <span className="text-caption">{name}</span>
                      <span className="text-caption">{variable}</span>
                    </div>
                    <p style={{ fontSize: variable, margin: "0.5rem 0 0" }}>The DS type scale stays token-driven.</p>
                  </article>
                ))}
              </div>
            </section>

            <section>
              <h2 className="text-heading-3" style={{ marginBottom: "0.75rem" }}>
                Motion Presets
              </h2>
              <div
                style={{
                  display: "grid",
                  gridTemplateColumns: "repeat(auto-fit, minmax(250px, 1fr))",
                  gap: "0.75rem",
                }}
              >
                {motionPresets.map((preset) => (
                  <article
                    key={preset.id}
                    style={{
                      border: "1px solid var(--ds-color-border)",
                      borderRadius: "var(--ds-radius-md)",
                      background: "var(--ds-color-surface)",
                      padding: "0.9rem",
                    }}
                  >
                    <p className="text-caption">{preset.category}</p>
                    <h3 className="text-heading-4" style={{ marginBottom: "0.4rem" }}>
                      {preset.id}
                    </h3>
                    <p className="text-body-small" style={{ marginBottom: "0.75rem" }}>
                      {preset.description}
                    </p>
                    <div className="ui-stack ui-stack--sm">
                      <p className="text-caption">Duration: {preset.duration}</p>
                      <p className="text-caption">Ease: {preset.ease}</p>
                      <p className="text-caption">Transform: {preset.transform}</p>
                      <p className="text-caption">Class: {preset.className}</p>
                    </div>
                  </article>
                ))}
              </div>
            </section>

            <section>
              <h2 className="text-heading-3" style={{ marginBottom: "0.75rem" }}>
                Archetypes
              </h2>
              <div
                style={{
                  display: "grid",
                  gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))",
                  gap: "0.75rem",
                }}
              >
                {archetypes.map((archetype) => (
                  <article
                    key={archetype.id}
                    style={{
                      border: "1px solid var(--ds-color-border)",
                      borderRadius: "var(--ds-radius-md)",
                      background: "var(--ds-color-surface)",
                      padding: "0.9rem",
                    }}
                  >
                    <p className="text-caption">{archetype.id}</p>
                    <h3 className="text-heading-4" style={{ marginBottom: "0.35rem" }}>
                      {archetype.label}
                    </h3>
                    <p className="text-body-small" style={{ marginBottom: "0.65rem" }}>
                      {archetype.description}
                    </p>
                    <p className="text-caption" style={{ marginBottom: "0.5rem" }}>
                      Density: {archetype.density} · Preferred scheme: {archetype.preferredScheme}
                    </p>
                    <p className="text-body-small" style={{ color: "var(--ds-color-foreground-secondary)" }}>
                      {archetype.mood}
                    </p>
                    <div className="ui-row" style={{ gap: "0.4rem", flexWrap: "wrap", marginTop: "0.8rem" }}>
                      {archetype.motionTemperament.map((motionId) => (
                        <span key={`${archetype.id}-${motionId}`} className="ui-chip">
                          {motionId}
                        </span>
                      ))}
                    </div>
                  </article>
                ))}
              </div>
            </section>

            <section>
              <h2 className="text-heading-3" style={{ marginBottom: "0.75rem" }}>
                Stylesheet Layers
              </h2>
              <div
                style={{
                  display: "grid",
                  gridTemplateColumns: "repeat(auto-fit, minmax(190px, 1fr))",
                  gap: "0.75rem",
                }}
              >
                {stylesheets.map((file) => (
                  <article
                    key={file}
                    style={{
                      border: "1px solid var(--ds-color-border)",
                      borderRadius: "var(--ds-radius-md)",
                      background: "var(--ds-color-surface)",
                      padding: "0.9rem",
                    }}
                  >
                    <p className="text-body-small">{file}</p>
                  </article>
                ))}
              </div>
            </section>
          </Stack>
        </div>
      </Container>
    </PublicShell>
  );
}