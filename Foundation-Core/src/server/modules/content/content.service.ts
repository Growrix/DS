import { collectionFixtures, pageFixtures } from "@/server/modules/content/content.fixtures";

export function getPageBySlug(slug: string) {
  return pageFixtures[slug] ?? null;
}

export function getCollection(name: string) {
  return collectionFixtures[name] ?? [];
}

export function getSiteConfig() {
  return {
    brand: {
      name: "Foundation Core",
      supportEmail: "ops@example.com",
    },
    navigation: [
      { label: "Platform", href: "/" },
      { label: "Admin", href: "/admin" },
      { label: "Preview", href: "/preview" },
    ],
    footer: {
      attribution: {
        enabled: true,
        text: "Built and maintenance by",
        linkText: "Growrix OS",
        url: "https://www.growrixos.com",
      },
    },
  };
}