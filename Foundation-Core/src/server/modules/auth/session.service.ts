import { getAdapterStatus } from "@/server/config/env";

export type SessionDto = {
  authenticated: boolean;
  user: null | {
    id: string;
    email: string;
    roles: string[];
  };
  mode: "anonymous_fallback" | "configured";
};

export function getSessionSnapshot(): SessionDto {
  const adapters = getAdapterStatus();

  if (!adapters.auth) {
    return {
      authenticated: false,
      user: null,
      mode: "anonymous_fallback",
    };
  }

  return {
    authenticated: false,
    user: null,
    mode: "configured",
  };
}