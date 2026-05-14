import Link from "next/link";

import { Container, PublicShell, Stack } from "@/ds";

import { ComponentGallery } from "./ComponentGallery";
import { listDsFiles } from "../_lib/dsContract";

export const metadata = {
  title: "Component Inventory - Preview",
};

async function getInventory() {
  const [primitives, components, layouts, widgets, visuals, runtimeMobile, runtimeTablet, runtimeWeb] =
    await Promise.all([
      listDsFiles("primitives"),
      listDsFiles("components"),
      listDsFiles("layouts"),
      listDsFiles("widgets"),
      listDsFiles("visuals"),
      listDsFiles("runtime/app/mobile"),
      listDsFiles("runtime/app/tablet"),
      listDsFiles("runtime/web"),
    ]);

  return [
    { family: "primitives", files: primitives },
    { family: "components", files: components },
    { family: "layouts", files: layouts },
    { family: "widgets", files: widgets },
    { family: "visuals", files: visuals },
    { family: "runtime/mobile", files: runtimeMobile },
    { family: "runtime/tablet", files: runtimeTablet },
    { family: "runtime/web", files: runtimeWeb },
  ];
}

export default async function ComponentsInventoryPage() {
  const inventory = await getInventory();
  const total = inventory.reduce((sum, block) => sum + block.files.length, 0);

  return (
    <PublicShell>
      <Container>
        <div className="ui-section">
          <Stack>
            <header className="ui-row ui-row--between" style={{ alignItems: "end" }}>
              <div>
                <p className="text-caption" style={{ textTransform: "uppercase", letterSpacing: "0.14em" }}>
                  Inventory
                </p>
                <h1 className="text-heading-1">DS Components</h1>
                <p className="text-body-large">
                  {total} source modules discovered. This page now pairs a live gallery with the underlying
                  module inventory so you can audit both rendered behavior and raw DS surface area.
                </p>
              </div>
              <Link href="/preview" className="ui-button ui-button--md ui-button--secondary ui-focus-ring">
                Preview hub
              </Link>
            </header>

            <ComponentGallery />

            {inventory.map((block) => (
              <section key={block.family}>
                <h2 className="text-heading-3" style={{ marginBottom: "0.75rem" }}>
                  {block.family} ({block.files.length})
                </h2>
                <div
                  style={{
                    display: "grid",
                    gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))",
                    gap: "0.65rem",
                  }}
                >
                  {block.files.map((file) => (
                    <article
                      key={`${block.family}-${file}`}
                      style={{
                        border: "1px solid var(--ds-color-border)",
                        borderRadius: "var(--ds-radius-sm, 0.5rem)",
                        background: "var(--ds-color-surface)",
                        padding: "0.7rem",
                      }}
                    >
                      <p className="text-body-small">{file.replace(/\.tsx$/, "")}</p>
                    </article>
                  ))}
                </div>
              </section>
            ))}
          </Stack>
        </div>
      </Container>
    </PublicShell>
  );
}
