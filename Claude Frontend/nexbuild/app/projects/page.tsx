import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { PageHero } from "@/components/layout/PageHero";
import { Container, SectionLabel, Heading, Badge } from "@/components/ui/primitives";
import { CTABannerSection } from "@/components/sections/HomeSections";
import { ArrowRight } from "lucide-react";

export const metadata: Metadata = {
  title:       "Projects",
  description: "Explore NexBuild's portfolio of commercial, industrial, residential, and infrastructure projects.",
};

const CATEGORIES = ["All", "Commercial", "Industrial", "Residential", "Infrastructure"];

const PROJECTS = [
  { id: "1", slug: "meridian-tower",         title: "Meridian Tower Office Complex",      category: "Commercial",      image: "/images/projects/p-01.jpg", year: 2024, location: "Houston, TX" },
  { id: "2", slug: "westgate-logistics-hub", title: "Westgate Logistics Hub",             category: "Industrial",      image: "/images/projects/p-02.jpg", year: 2024, location: "Dallas, TX" },
  { id: "3", slug: "riverside-residences",   title: "Riverside Residences",               category: "Residential",     image: "/images/projects/p-03.jpg", year: 2023, location: "Austin, TX" },
  { id: "4", slug: "harbor-bridge-retrofit", title: "Harbor Bridge Seismic Retrofit",     category: "Infrastructure",  image: "/images/projects/p-04.jpg", year: 2023, location: "Galveston, TX" },
  { id: "5", slug: "solarvast-plant",        title: "SolarVast Energy Processing Plant",  category: "Industrial",      image: "/images/projects/p-05.jpg", year: 2022, location: "Midland, TX" },
  { id: "6", slug: "downtown-medical",       title: "Downtown Medical Centre",            category: "Commercial",      image: "/images/projects/p-06.jpg", year: 2022, location: "Houston, TX" },
];

export default function ProjectsPage() {
  return (
    <>
      <PageHero
        title="Our Projects"
        breadcrumbs={[
          { label: "NexBuild", href: "/" },
          { label: "Projects" },
        ]}
      />

      <section className="py-20 md:py-28 bg-white">
        <Container>
          <div className="text-center mb-14">
            <SectionLabel className="justify-center">Portfolio</SectionLabel>
            <Heading size="lg" className="mt-2">
              Award-Winning <span className="text-accent">Construction</span>
            </Heading>
          </div>

          {/* Category Filter */}
          <div className="flex flex-wrap justify-center gap-3 mb-12">
            {CATEGORIES.map((cat) => (
              <button
                key={cat}
                className="px-5 py-2 rounded-full text-sm font-accent font-semibold border border-neutral-200 hover:bg-accent hover:text-white hover:border-accent transition-all first:bg-accent first:text-white first:border-accent"
              >
                {cat}
              </button>
            ))}
          </div>

          {/* Project Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-7">
            {PROJECTS.map((project) => (
              <Link
                key={project.id}
                href={`/projects/${project.slug}`}
                className="group block bg-white rounded-ds-lg overflow-hidden border border-neutral-100 shadow-ds-sm hover:shadow-ds-lg transition-all duration-300 hover:-translate-y-1"
              >
                <div className="relative aspect-[4/3] bg-neutral-100 overflow-hidden">
                  <Image
                    src={project.image}
                    alt={project.title}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                    sizes="(max-width: 768px) 100vw, 33vw"
                  />
                  <div className="absolute inset-0 bg-primary/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                    <span className="bg-accent text-white px-5 py-2.5 rounded-ds-sm font-accent font-semibold text-sm flex items-center gap-2">
                      View Project <ArrowRight className="w-4 h-4" />
                    </span>
                  </div>
                </div>
                <div className="p-5">
                  <Badge variant="accent" className="mb-3">{project.category}</Badge>
                  <h3 className="heading-display text-base text-primary mb-2 group-hover:text-accent transition-colors">
                    {project.title}
                  </h3>
                  <p className="text-xs text-neutral-400 font-accent">
                    {project.location} · {project.year}
                  </p>
                </div>
              </Link>
            ))}
          </div>
        </Container>
      </section>

      <CTABannerSection />
    </>
  );
}
