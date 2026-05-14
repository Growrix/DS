import Link from "next/link";
import { notFound } from "next/navigation";

import {
  PublicPresetPage,
  PublicShell,
  WIREFRAME_META_LIST,
  getWireframe,
  getWireframeDemoPage,
  Container,
} from "@/ds";

type Params = Promise<{ id: string }>;

export async function generateStaticParams() {
  return WIREFRAME_META_LIST.map((w) => ({ id: w.id }));
}

export async function generateMetadata({ params }: { params: Params }) {
  const { id } = await params;
  const meta = getWireframe(id);
  return {
    title: meta ? `${meta.label} — Preview` : "Wireframe — Preview",
  };
}

export default async function WireframePreviewPage({ params }: { params: Params }) {
  const { id } = await params;
  const meta = getWireframe(id);
  const page = getWireframeDemoPage(id);

  if (!meta || !page) {
    notFound();
  }

  return (
    <PublicShell>
      <Container>
        <div
          className="ui-section ui-section--sm"
          style={{
            borderBottom: "1px solid var(--ds-color-border)",
            background: "var(--ds-color-surface)",
          }}
        >
          <div className="ui-row ui-row--between" style={{ alignItems: "baseline" }}>
            <div>
              <div className="text-caption" style={{ textTransform: "uppercase", letterSpacing: "0.14em" }}>
                Wireframe preview
              </div>
              <h1 className="text-heading-3">{meta.label}</h1>
              <div className="text-caption">
                <code>{meta.id}</code> · archetype <code>{meta.archetype}</code> · purpose{" "}
                <code>{meta.purpose}</code> · {meta.sections.length} sections
              </div>
            </div>
            <Link
              href="/preview/wireframes"
              className="ui-button ui-button--md ui-button--secondary ui-focus-ring"
            >
              All wireframes
            </Link>
          </div>
        </div>
      </Container>

      <PublicPresetPage page={page} />
    </PublicShell>
  );
}
