import Image from "next/image";
import Link from "next/link";
import { PROJECTS } from "@/lib/content";

export default function ProjectsSection() {
  const featured = PROJECTS.slice(0, 4);
  return (
    <section className="sp-section">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-end mb-12">
          <div>
            <p className="sp-kicker">Our Portfolio</p>
            <h2 className="sp-section-title mt-2">
              Improving The Performance Of Solar Energy.
            </h2>
          </div>
          <div>
            <p className="text-base" style={{ color: "var(--sp-muted)" }}>
              Latest Projects, Solutions And Energy Supplies. With our innovative
              technologies and 2,500+ dedicated employees, we energize society.
              Let&apos;s make tomorrow different today!
            </p>
            <Link href="/projects" className="sp-btn sp-btn-primary mt-5 inline-flex">
              Our Core Values
            </Link>
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          {featured.map((project) => (
            <article key={project.slug} className="sp-card group relative overflow-hidden rounded-xl">
              <div className="relative" style={{ height: 280 }}>
                <Image
                  src={project.image}
                  alt={project.title}
                  fill
                  sizes="(max-width: 640px) 100vw, 50vw"
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div
                  className="absolute inset-0 flex flex-col justify-end p-6 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                  style={{ background: "linear-gradient(to top, rgba(12,27,46,0.92) 50%, transparent)" }}
                >
                  <div className="flex gap-2 mb-2">
                    {project.tags.map((tag) => (
                      <span key={tag} className="sp-badge">{tag}</span>
                    ))}
                  </div>
                  <h3 className="font-bold text-white text-lg leading-snug">
                    {project.title}
                  </h3>
                  <Link
                    href={`/projects/${project.slug}`}
                    className="sp-btn sp-btn-primary mt-3 text-xs py-2 px-4 self-start"
                  >
                    Explore More
                  </Link>
                </div>
              </div>
              {/* Card always-visible tags on mobile */}
              <div className="p-4 lg:hidden">
                <div className="flex gap-2 mb-2">
                  {project.tags.map((tag) => (
                    <span key={tag} className="sp-badge">{tag}</span>
                  ))}
                </div>
                <h3 className="font-bold text-base" style={{ color: "var(--sp-text)" }}>
                  {project.title}
                </h3>
                <Link
                  href={`/projects/${project.slug}`}
                  className="inline-flex items-center gap-1 mt-3 text-sm font-bold"
                  style={{ color: "var(--sp-primary)" }}
                >
                  Explore More →
                </Link>
              </div>
            </article>
          ))}
        </div>

        <div className="text-center mt-10">
          <Link href="/projects" className="sp-btn sp-btn-dark">
            Explore All Projects
          </Link>
        </div>
      </div>
    </section>
  );
}
