import Link from "next/link";

import { Container, PublicShell, Stack } from "@/ds";

import { readDsContract } from "./_lib/dsContract";

export const metadata = {
  title: "DS Preview Hub",
};

export default async function PreviewHubPage() {
  const contract = await readDsContract();

  const cards = [
    {
      href: "/preview/foundations",
      title: "Foundations",
      body: "Visualize themes, colors, token scales, motion presets, archetypes, and stylesheet layers.",
      value: `${contract.counts.themes} themes`,
    },
    {
      href: "/preview/sections",
      title: "Section Variants",
      body: "Render every registered section variant with deterministic sample content.",
      value: `${contract.counts.variants} variants`,
    },
    {
      href: "/preview/wireframes",
      title: "Wireframes",
      body: "Preview complete page recipes currently registered in the DS.",
      value: `${contract.counts.wireframes} wireframes`,
    },
    {
      href: "/preview/components",
      title: "Component Inventory",
      body: "Visual inventory of primitives, components, layouts, widgets, visuals, and runtime surfaces.",
      value: "Live inventory",
    },
    {
      href: "/preview/coverage",
      title: "Coverage Matrix",
      body: "Archetype x section-kind matrix to expose implemented vs uncovered combinations.",
      value: `${contract.counts.archetypes} archetypes`,
    },
    {
      href: "/preview/missing",
      title: "Missing Tracker",
      body: "Actionable list of unimplemented kinds, sparse kinds, and wireframe purpose gaps.",
      value: `${contract.sectionKinds.length} declared kinds`,
    },
  ];

  return (
    <PublicShell>
      <Container>
        <div className="ui-section">
          <Stack>
            <header>
              <p className="text-caption" style={{ textTransform: "uppercase", letterSpacing: "0.14em" }}>
                Design system audit surface
              </p>
              <h1 className="text-heading-1">Preview Hub</h1>
              <p className="text-body-large">
                This run-scoped clone exposes the DS visually so you can inspect what exists and what is still
                missing before adding new variants or wireframes.
              </p>
            </header>

            <div
              style={{
                display: "grid",
                gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))",
                gap: "1rem",
              }}
            >
              {cards.map((card) => (
                <article
                  key={card.href}
                  style={{
                    border: "1px solid var(--ds-color-border)",
                    borderRadius: "var(--ds-radius-md, 0.75rem)",
                    background: "var(--ds-color-surface)",
                    padding: "1rem",
                  }}
                >
                  <p className="text-caption" style={{ marginBottom: "0.25rem" }}>
                    {card.value}
                  </p>
                  <h2 className="text-heading-4" style={{ marginBottom: "0.5rem" }}>
                    {card.title}
                  </h2>
                  <p className="text-body-small" style={{ marginBottom: "1rem" }}>
                    {card.body}
                  </p>
                  <Link href={card.href} className="ui-button ui-button--md ui-button--primary ui-focus-ring">
                    Open
                  </Link>
                </article>
              ))}
            </div>
          </Stack>
        </div>
      </Container>
    </PublicShell>
  );
}
