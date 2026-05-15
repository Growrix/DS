import { getAdapterStatus } from "@/server/config/env";

export function createUploadIntent(filename: string, contentType: string) {
  const adapters = getAdapterStatus();

  if (!adapters.storage) {
    return {
      enabled: false,
      reason: "Storage adapter is not configured.",
      filename,
      contentType,
    } as const;
  }

  return {
    enabled: true,
    filename,
    contentType,
    uploadUrl: `https://uploads.example.com/foundation/${encodeURIComponent(filename)}`,
    method: "PUT",
  } as const;
}