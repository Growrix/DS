"use client";

import * as React from "react";

import { Container, DsErrorState, PublicShell } from "@/ds";

export default function GlobalError({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  return (
    <PublicShell>
      <Container size="narrow">
        <div className="ui-section">
          <DsErrorState
            title="Something went wrong"
            description="The page failed to render. You can try again or return home."
            errorMessage={error.message}
            onRetry={reset}
          />
        </div>
      </Container>
    </PublicShell>
  );
}
