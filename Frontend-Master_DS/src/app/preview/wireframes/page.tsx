import Link from "next/link";

import { PublicShell, WIREFRAME_META_LIST, Container, Stack } from "@/ds";

export const metadata = {
  title: "Wireframes — Preview",
};

export default function WireframesIndexPage() {
  // Group wireframes by archetype for readability.
  const groups = WIREFRAME_META_LIST.reduce<Record<string, typeof WIREFRAME_META_LIST>>(
    (acc, w) => {
      (acc[w.archetype] ??= []).push(w);
      return acc;
    },
    {},
  );

  return (
    <PublicShell>
      <Container>
        <div className="ui-section">
          <Stack>
            <header>
              <div className="text-caption" style={{ textTransform: "uppercase", letterSpacing: "0.14em" }}>
                Preview
              </div>
              <h1 className="text-heading-1">Wireframes</h1>
              <p className="text-body-large">
                {WIREFRAME_META_LIST.length} registered wireframe
                {WIREFRAME_META_LIST.length === 1 ? "" : "s"}. Each is an AI-pickable page recipe whose
                section variants are validated against its archetype at build time.
              </p>
            </header>

            {Object.entries(groups).map(([archetype, wireframes]) => (
              <section key={archetype}>
                <h2 className="text-heading-3">{archetype}</h2>
                <ul className="ui-stack" style={{ listStyle: "none", padding: 0, marginTop: "1rem" }}>
                  {wireframes.map((w) => (
                    <li
                      key={w.id}
                      style={{
                        padding: "1rem 1.25rem",
                        border: "1px solid var(--ds-color-border)",
                        borderRadius: "var(--ds-radius-md, 0.75rem)",
                        background: "var(--ds-color-surface)",
                      }}
                    >
                      <div className="ui-row ui-row--between" style={{ alignItems: "baseline" }}>
                        <div>
                          <div className="text-heading-4">{w.label}</div>
                          <div className="text-caption" style={{ color: "var(--ds-color-foreground)" }}>
                            <code>{w.id}</code> · {w.purpose} · {w.sections.length} sections
                          </div>
                        </div>
                        <Link
                          href={`/preview/wireframes/${w.id}`}
                          className="ui-button ui-button--md ui-button--primary ui-focus-ring"
                        >
                          Open preview
                        </Link>
                      </div>
                      <p className="text-body-small" style={{ marginTop: "0.5rem" }}>
                        {w.description}
                      </p>
                    </li>
                  ))}
                </ul>
              </section>
            ))}
          </Stack>
        </div>
      </Container>
    </PublicShell>
  );
}
