export type PageSection = {
  id: string;
  kind: "hero" | "value" | "proof" | "conversion" | "footer";
  title: string;
  body: string;
};

export type PageDto = {
  slug: string;
  title: string;
  description: string;
  updatedAt: string;
  sections: PageSection[];
};

export type CollectionRecord = {
  id: string;
  title: string;
  summary: string;
};