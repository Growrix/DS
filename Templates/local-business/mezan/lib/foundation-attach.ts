export type TemplateAttachStatus = {
  mode: "attached" | "mock-fallback";
  foundationBaseUrl: string | null;
  reachable: boolean;
  checkedAt: string;
};

const foundationBaseUrl = process.env.FOUNDATION_BASE_URL?.replace(/\/$/, "") ?? null;

export async function getTemplateAttachStatus(): Promise<TemplateAttachStatus> {
  if (!foundationBaseUrl) {
    return {
      mode: "mock-fallback",
      foundationBaseUrl: null,
      reachable: false,
      checkedAt: new Date().toISOString(),
    };
  }

  try {
    const response = await fetch(`${foundationBaseUrl}/api/health`, {
      cache: "no-store",
    });

    return {
      mode: response.ok ? "attached" : "mock-fallback",
      foundationBaseUrl,
      reachable: response.ok,
      checkedAt: new Date().toISOString(),
    };
  } catch {
    return {
      mode: "mock-fallback",
      foundationBaseUrl,
      reachable: false,
      checkedAt: new Date().toISOString(),
    };
  }
}