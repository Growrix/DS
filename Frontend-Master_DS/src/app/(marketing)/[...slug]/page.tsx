import { PublicPresetPage } from "@/ds";
import { ACTIVE_SITE_PRESET } from "@/site";
import { notFound } from "next/navigation";

function keyToSlug(key: string): string {
  return key.replace(/([a-z0-9])([A-Z])/g, "$1-$2").toLowerCase();
}

export default async function DynamicMarketingPage({
  params,
}: {
  params: Promise<{ slug?: string[] }>;
}) {
  const { slug = [] } = await params;
  const requested = slug.join("/");

  const pageEntry = Object.entries(ACTIVE_SITE_PRESET.pages).find(([key]) => {
    if (!requested) {
      return key === "home";
    }

    return requested === key || requested === keyToSlug(key);
  });

  if (!pageEntry) {
    notFound();
  }

  const [, page] = pageEntry;
  return <PublicPresetPage page={page} />;
}
