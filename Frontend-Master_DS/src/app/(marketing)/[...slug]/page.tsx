import { notFound } from "next/navigation";

export default async function DynamicMarketingPage({
  params,
}: {
  params: Promise<{ slug?: string[] }>;
}) {
  await params;
  notFound();
}
