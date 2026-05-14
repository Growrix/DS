import { Card, Container, PublicShell, Stack } from "@/ds";

export default function NotFound() {
  return (
    <PublicShell>
      <Container size="narrow">
        <div className="ui-section">
          <Card>
            <Stack gap="compact">
              <p className="text-caption" style={{ textTransform: "uppercase", letterSpacing: "0.14em" }}>
                Factory runtime
              </p>
              <h1 className="text-heading-2">Page not found</h1>
              <p className="text-body-small">
                The canonical DS root does not host project pages. Build and preview sites from run-scoped
                clones after selecting the variants and wireframes you need.
              </p>
            </Stack>
          </Card>
        </div>
      </Container>
    </PublicShell>
  );
}