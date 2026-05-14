import { notFound } from "next/navigation";

import { PublicPresetPage } from "@/ds";
import { ROUTES } from "@/app/route-map";
import { SITE_PREVIEW_PRESET } from "@/app/site-preview-preset";

function resolvePageId(slug: string[]) {
  const pathname = `/${slug.join("/")}`;
  const routeEntry = Object.entries(ROUTES).find(([, href]) => href === pathname);

  if (routeEntry) {
    const [routeKey] = routeEntry;
    if (routeKey in SITE_PREVIEW_PRESET.pages) {
      return routeKey;
    }
  }

  const directId = slug.join("/");
  if (directId in SITE_PREVIEW_PRESET.pages) {
    return directId;
  }

  const normalizedId = directId.replace(/-([a-z])/g, (_, letter: string) => letter.toUpperCase());
  if (normalizedId in SITE_PREVIEW_PRESET.pages) {
    return normalizedId;
  }

  return null;
}

export default async function DynamicMarketingPage({
  params,
}: {
  params: Promise<{ slug?: string[] }>;
}) {
  const { slug = [] } = await params;
  const pageId = resolvePageId(slug);

  if (!pageId) {
    notFound();
  }

  return <PublicPresetPage page={SITE_PREVIEW_PRESET.pages[pageId]} />;
}
