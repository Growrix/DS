import { PublicPresetPage } from "@/ds";
import { SITE_PREVIEW_PRESET } from "@/app/site-preview-preset";

export default function HomePage() {
  return <PublicPresetPage page={SITE_PREVIEW_PRESET.pages.home} />;
}

