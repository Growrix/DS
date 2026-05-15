import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import PageBanner from "@/components/shared/PageBanner";
import QuoteSection from "@/components/home/QuoteSection";
import { PROJECTS } from "@/lib/content";

interface Props {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return PROJECTS.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const project = PROJECTS.find((p) => p.slug === slug);
  return { title: project?.title ?? "Project" };
}

export default async function SingleProjectPage({ params }: Props) {
  const { slug } = await params;
  const project = PROJECTS.find((p) => p.slug === slug);
  if (!project) notFound();

  const related = PROJECTS.filter((p) => p.slug !== slug).slice(0, 3);

  return (
    <>
      <PageBanner
        title={project.title}
        breadcrumbs={[{ label: "Projects", href: "/projects" }, { label: project.title }]}
      />

      <section className="sp-section">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            <div className="lg:col-span-2">
              <div className="rounded-xl overflow-hidden mb-8">
                <Image
                  src={project.image}
                  alt={project.title}
                  width={900}
                  height={520}
                  className="w-full object-cover"
                />
              </div>
              <div className="flex gap-2 mb-5 flex-wrap">
                {project.tags.map((tag) => (
                  <span key={tag} className="sp-badge">{tag}</span>
                ))}
              </div>
              <h2 className="sp-section-title">{project.title}</h2>
              <hr className="sp-divider" />
              <p className="mt-4 text-base leading-relaxed" style={{ color: "var(--sp-muted)" }}>
                {project.description}
              </p>
              <p className="mt-4 text-base leading-relaxed" style={{ color: "var(--sp-muted)" }}>
                We announced the expansion of our program for PV module
                manufacturers, providing working capital solutions that enable
                them to purchase raw materials, pay employees and manage their
                cash flow more effectively through the sales cycle.
              </p>
              <div className="flex gap-4 mt-8">
                <Link href="/contact" className="sp-btn sp-btn-primary">Get In Touch</Link>
                <Link href="/projects" className="sp-btn sp-btn-dark">All Projects</Link>
              </div>
            </div>

            {/* Sidebar */}
            <aside>
              <div className="rounded-xl p-6" style={{ background: "var(--sp-surface)" }}>
                <h3 className="font-bold text-lg mb-5" style={{ color: "var(--sp-text)" }}>
                  Project Details
                </h3>
                <dl className="space-y-3 text-sm">
                  {[
                    { label: "Category", value: project.category },
                    { label: "Tags", value: project.tags.join(", ") },
                    { label: "Status", value: "Completed" },
                    { label: "Year", value: "2024" },
                  ].map(({ label, value }) => (
                    <div key={label} className="flex justify-between" style={{ borderBottom: "1px solid var(--sp-border)", paddingBottom: "0.5rem" }}>
                      <dt className="font-semibold" style={{ color: "var(--sp-muted)" }}>{label}</dt>
                      <dd className="font-bold" style={{ color: "var(--sp-text)" }}>{value}</dd>
                    </div>
                  ))}
                </dl>
                <Link href="/contact" className="sp-btn sp-btn-primary w-full justify-center mt-6 text-sm">
                  Request Similar Project
                </Link>
              </div>
            </aside>
          </div>

          {/* Related projects */}
          {related.length > 0 && (
            <div className="mt-16">
              <h3 className="text-2xl font-bold mb-8" style={{ color: "var(--sp-text)" }}>
                Related Projects
              </h3>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
                {related.map((p) => (
                  <article key={p.slug} className="sp-card group">
                    <div className="relative overflow-hidden" style={{ height: 180 }}>
                      <Image
                        src={p.image}
                        alt={p.title}
                        fill
                        sizes="33vw"
                        className="object-cover transition-transform duration-500 group-hover:scale-105"
                      />
                    </div>
                    <div className="p-5">
                      <div className="flex gap-2 mb-2 flex-wrap">
                        {p.tags.slice(0, 2).map((tag) => (
                          <span key={tag} className="sp-badge">{tag}</span>
                        ))}
                      </div>
                      <h4 className="font-bold text-sm leading-snug" style={{ color: "var(--sp-text)" }}>
                        {p.title}
                      </h4>
                      <Link
                        href={`/projects/${p.slug}`}
                        className="text-sm font-bold mt-2 inline-block"
                        style={{ color: "var(--sp-primary)" }}
                      >
                        Explore More →
                      </Link>
                    </div>
                  </article>
                ))}
              </div>
            </div>
          )}
        </div>
      </section>

      <QuoteSection />
    </>
  );
}
