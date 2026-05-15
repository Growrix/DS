import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import PageBanner from "@/components/shared/PageBanner";
import QuoteSection from "@/components/home/QuoteSection";
import { PROJECTS } from "@/lib/content";

export const metadata: Metadata = { title: "Our Projects" };

export default function ProjectsPage() {
  return (
    <>
      <PageBanner
        title="Our Projects"
        breadcrumbs={[{ label: "Projects" }]}
      />

      <section className="sp-section">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            <p className="sp-kicker">Portfolio</p>
            <h2 className="sp-section-title mt-2">
              Improving The Performance Of Solar Energy
            </h2>
            <p className="sp-section-sub max-w-2xl mx-auto">
              Latest Projects, Solutions And Energy Supplies
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {PROJECTS.map((project) => (
              <article key={project.slug} className="sp-card group">
                <div className="relative overflow-hidden" style={{ height: 240 }}>
                  <Image
                    src={project.image}
                    alt={project.title}
                    fill
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                </div>
                <div className="p-6">
                  <div className="flex gap-2 mb-3 flex-wrap">
                    {project.tags.map((tag) => (
                      <span key={tag} className="sp-badge">{tag}</span>
                    ))}
                  </div>
                  <h3 className="font-bold text-lg leading-snug" style={{ color: "var(--sp-text)" }}>
                    {project.title}
                  </h3>
                  <p className="text-sm mt-2 line-clamp-2" style={{ color: "var(--sp-muted)" }}>
                    {project.description}
                  </p>
                  <Link
                    href={`/projects/${project.slug}`}
                    className="sp-btn sp-btn-primary mt-4 text-xs py-2 px-4 inline-flex"
                  >
                    Explore More
                  </Link>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <QuoteSection />
    </>
  );
}
