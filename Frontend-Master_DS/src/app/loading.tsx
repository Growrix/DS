import { Container, DsSkeleton, PublicShell, Stack } from "@/ds";

export default function Loading() {
  return (
    <PublicShell>
      <Container size="wide">
        <div className="ui-section">
          <Stack gap="default">
            <DsSkeleton aspect="hero" ariaLabel="Loading page…" />
            <DsSkeleton aspect="landscape" />
            <DsSkeleton aspect="card" />
          </Stack>
        </div>
      </Container>
    </PublicShell>
  );
}
