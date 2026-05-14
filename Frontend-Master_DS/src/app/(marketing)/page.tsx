import { Card, Container, PublicShell, Stack } from "@/ds";

export default function HomePage() {
  return (
    <PublicShell>
      <Container>
        <div className="ui-section">
          <Stack gap="loose">
            <header>
              <p className="text-caption" style={{ textTransform: "uppercase", letterSpacing: "0.14em" }}>
                Factory root
              </p>
              <h1 className="text-heading-1">Frontend Master DS</h1>
              <p className="text-body-large">
                The canonical DS runtime is intentionally neutral. Build project-specific sites and preview
                surfaces from run-scoped clones under DOC/output/runs.
              </p>
            </header>

            <Card>
              <Stack gap="compact">
                <h2 className="text-heading-4">What stays here</h2>
                <p className="text-body-small">
                  Design tokens, primitives, components, layouts, section variants, wireframes, and the
                  verification toolchain.
                </p>
              </Stack>
            </Card>

            <Card>
              <Stack gap="compact">
                <h2 className="text-heading-4">What does not run here</h2>
                <p className="text-body-small">
                  Legacy example sites and preview experiences. Those belong in cloned run outputs so the
                  canonical DS remains a clean factory base.
                </p>
              </Stack>
            </Card>
          </Stack>
        </div>
      </Container>
    </PublicShell>
  );
}

