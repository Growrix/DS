import { notFound } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import { Calendar, MapPin, Tag, ArrowLeft, ArrowRight, CheckCircle } from "lucide-react";
import { PROJECTS } from "@/data/index";
import { PageHero } from "@/components/layout/PageHero";
import { Button } from "@/components/ui/Button";
import { formatDate } from "@/lib/utils";
import { SITE_NAME } from "@/constants";

export function generateStaticParams() {
  return PROJECTS.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({ params }: { params: { slug: string } }) {
  const project = PROJECTS.find((p) => p.slug === params.slug);
  if (!project) return {};
  return {
    title: `${project.title} | ${SITE_NAME}`,
    description: project.description,
  };
}

const PROJECT_DETAILS: Record<string, { challenge: string; solution: string; outcomes: string[] }> =
  {
    "riverside-district-cleanup": {
      challenge:
        "The Riverside commercial district had accumulated years of irregular waste collection, leading to overflowing bins, blocked alleyways, and non-compliance with municipal hygiene standards affecting 120 businesses.",
      solution:
        "EcoHaul deployed a dedicated fleet of collection vehicles on a rotating daily schedule, implemented colour-coded recycling stations throughout the district, and conducted on-site staff training for all participating businesses.",
      outcomes: [
        "98% waste diversion rate achieved within 8 weeks",
        "Reduced district collection costs by 32%",
        "Full municipal compliance certification obtained",
        "120 businesses on sustainable waste management plans",
      ],
    },
    "metro-center-collection": {
      challenge:
        "Metro Center's residential towers generated over 40 tonnes of bulk and electronic waste annually with no structured collection programme, resulting in illegal dumping and neighbourhood complaints.",
      solution:
        "A six-week intensive collection campaign with scheduled drive-through drop-off events, door-to-door bulk item removal, and certified e-waste recycling partnerships was implemented across all tower blocks.",
      outcomes: [
        "42 tonnes of bulk and e-waste collected",
        "Zero illegal dumping incidents post-campaign",
        "85% resident participation rate",
        "All electronics responsibly recycled or refurbished",
      ],
    },
    "hospital-biohazard-disposal": {
      challenge:
        "A 400-bed regional hospital required a reliable, regulation-compliant biohazard and pharmaceutical waste disposal programme that could handle sensitive materials with strict chain-of-custody requirements.",
      solution:
        "EcoHaul established a monthly scheduled collection service using purpose-built biohazard vehicles, secure manifesting documentation, and direct liaison with certified treatment facilities.",
      outcomes: [
        "100% regulatory compliance across all collections",
        "Secure chain-of-custody documentation for every shipment",
        "Zero incidents or spills over the 12-month programme",
        "Ongoing contract renewed for 3 additional years",
      ],
    },
  };

const DEFAULT_DETAIL = {
  challenge:
    "Managing waste at scale requires precise logistics, regulatory knowledge, and a committed team. This project presented unique operational challenges that demanded a tailored approach.",
  solution:
    "EcoHaul applied its proven multi-stream methodology, deploying the right equipment and personnel to deliver timely, compliant, and environmentally responsible waste management outcomes.",
  outcomes: [
    "Project delivered on time and within budget",
    "Full regulatory compliance achieved",
    "Significant reduction in landfill contribution",
    "Client committed to ongoing partnership",
  ],
};

export default function ProjectDetailPage({ params }: { params: { slug: string } }) {
  const project = PROJECTS.find((p) => p.slug === params.slug);
  if (!project) notFound();

  const detail = PROJECT_DETAILS[project.slug] ?? DEFAULT_DETAIL;
  const currentIndex = PROJECTS.indexOf(project);
  const prev = PROJECTS[currentIndex - 1] ?? null;
  const next = PROJECTS[currentIndex + 1] ?? null;

  return (
    <>
      <PageHero
        title={project.title}
        breadcrumbs={[
          { label: "Home", href: "/" },
          { label: "Projects", href: "/projects" },
          { label: project.title },
        ]}
      />

      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 max-w-5xl">
          <div className="grid lg:grid-cols-3 gap-12">
            {/* Main content */}
            <div className="lg:col-span-2 space-y-10">
              {/* Hero image */}
              <div className="relative h-72 md:h-96 rounded-2xl overflow-hidden shadow-lg">
                <Image
                  src={project.image}
                  alt={project.title}
                  fill
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-forest-dark/40 to-transparent" />
                <span className="absolute top-4 left-4 bg-accent-400 text-forest-dark text-xs font-bold px-3 py-1.5 rounded-full uppercase tracking-wide">
                  {project.category}
                </span>
              </div>

              {/* Challenge */}
              <div>
                <h2 className="font-display text-2xl font-bold text-forest-dark mb-4">
                  The Challenge
                </h2>
                <p className="text-neutral-600 leading-relaxed">{detail.challenge}</p>
              </div>

              {/* Solution */}
              <div>
                <h2 className="font-display text-2xl font-bold text-forest-dark mb-4">
                  Our Solution
                </h2>
                <p className="text-neutral-600 leading-relaxed">{detail.solution}</p>
              </div>

              {/* Outcomes */}
              <div>
                <h2 className="font-display text-2xl font-bold text-forest-dark mb-4">
                  Key Outcomes
                </h2>
                <ul className="space-y-3">
                  {detail.outcomes.map((o) => (
                    <li key={o} className="flex items-start gap-3">
                      <CheckCircle className="w-5 h-5 text-primary-500 shrink-0 mt-0.5" />
                      <span className="text-neutral-600">{o}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* Sidebar */}
            <div className="space-y-6">
              {/* Project meta */}
              <div className="bg-neutral-50 rounded-2xl p-6 border border-neutral-100 space-y-4">
                <h3 className="font-display font-bold text-forest-dark text-lg">Project Details</h3>
                <div className="space-y-3">
                  <div className="flex items-center gap-3 text-sm text-neutral-600">
                    <Calendar className="w-4 h-4 text-primary-500 shrink-0" />
                    <span>{formatDate(project.date)}</span>
                  </div>
                  <div className="flex items-center gap-3 text-sm text-neutral-600">
                    <MapPin className="w-4 h-4 text-primary-500 shrink-0" />
                    <span>{project.location}</span>
                  </div>
                  <div className="flex items-center gap-3 text-sm text-neutral-600">
                    <Tag className="w-4 h-4 text-primary-500 shrink-0" />
                    <span>{project.category}</span>
                  </div>
                </div>
              </div>

              {/* CTA card */}
              <div className="bg-primary-600 rounded-2xl p-6 text-white">
                <h3 className="font-display font-bold text-xl mb-3">Need Similar Service?</h3>
                <p className="text-primary-100 text-sm leading-relaxed mb-5">
                  We can design a custom waste management solution for your business or community.
                </p>
                <Button href="/contact" variant="accent" size="md" fullWidth>
                  Request a Pickup
                </Button>
              </div>

              {/* Other projects */}
              <div className="bg-white rounded-2xl p-6 border border-neutral-100">
                <h3 className="font-display font-bold text-forest-dark text-lg mb-4">
                  More Projects
                </h3>
                <ul className="space-y-3">
                  {PROJECTS.filter((p) => p.slug !== project.slug)
                    .slice(0, 4)
                    .map((p) => (
                      <li key={p.slug}>
                        <Link
                          href={`/projects/${p.slug}`}
                          className="flex items-center gap-2 text-sm text-neutral-600 hover:text-primary-600 transition-colors group"
                        >
                          <ArrowRight className="w-3.5 h-3.5 text-primary-400 shrink-0 group-hover:translate-x-0.5 transition-transform" />
                          {p.title}
                        </Link>
                      </li>
                    ))}
                </ul>
              </div>
            </div>
          </div>

          {/* Prev / Next navigation */}
          <div className="mt-14 pt-8 border-t border-neutral-100 flex items-center justify-between gap-4">
            {prev ? (
              <Link
                href={`/projects/${prev.slug}`}
                className="group flex items-center gap-2 text-sm font-medium text-neutral-600 hover:text-primary-600 transition-colors"
              >
                <ArrowLeft className="w-4 h-4 group-hover:-translate-x-0.5 transition-transform" />
                <span>{prev.title}</span>
              </Link>
            ) : (
              <div />
            )}
            {next ? (
              <Link
                href={`/projects/${next.slug}`}
                className="group flex items-center gap-2 text-sm font-medium text-neutral-600 hover:text-primary-600 transition-colors"
              >
                <span>{next.title}</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" />
              </Link>
            ) : (
              <div />
            )}
          </div>
        </div>
      </section>
    </>
  );
}
