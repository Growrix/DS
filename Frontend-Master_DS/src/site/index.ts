import type { PublicSitePreset } from "@/ds";

import { PREMIUM_HOME_SERVICES_PRESET } from "./presets/premiumHomeServices";
import { SOLAR_INSTALLATION_PRESET } from "./presets/solarInstallation";
import { MODERN_SAAS_STARTUP_PRESET } from "./presets/modernSaasStartup";

export {
  PREMIUM_HOME_SERVICES_PRESET,
  SOLAR_INSTALLATION_PRESET,
  MODERN_SAAS_STARTUP_PRESET,
};

/** Registered presets — extend by importing + adding here. */
export const SITE_PRESETS: Record<string, PublicSitePreset> = {
  [PREMIUM_HOME_SERVICES_PRESET.id]: PREMIUM_HOME_SERVICES_PRESET,
  [SOLAR_INSTALLATION_PRESET.id]: SOLAR_INSTALLATION_PRESET,
  [MODERN_SAAS_STARTUP_PRESET.id]: MODERN_SAAS_STARTUP_PRESET,
};

/**
 * The active preset selected for the root marketing routes.
 * Change this id (or wire it to env / config) to swap the entire site.
 */
export const ACTIVE_SITE_PRESET: PublicSitePreset = PREMIUM_HOME_SERVICES_PRESET;
