import type { Metadata } from "next";
import { notFound }          from "next/navigation";
import Image                 from "next/image";
import { PageHero }          from "@/components/layout/PageHero";
import { Container, SectionLabel, Heading } from "@/components/ui/primitives";
import { Button }            from "@/components/ui/Button";
import { ServiceCard }       from "@/components/ui/Cards";
import { SERVICES }          from "@/data";
import { CheckCircle, ArrowRight, Phone } from "lucide-react";
import { SITE_CONFIG } from "@/constants";

interface Props {
  params: { slug: string };
}

export async function generateStaticParams() {
  return SERVICES.map((s) => ({ slug: s.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const service = SERVICES.find((s) => s.slug === params.slug);
  if (!service) return {};
  return {
    title:       service.title,
    description: service.shortDescription,
  };
}

export default function ServiceDetailPage({ params }: Props) {
  const service = SERVICES.find((s) => s.slug === params.slug);
  if (!service) notFound();

  const related = SERVICES.filter((s) => s.id !== service.id).slice(0, 3);

  return (
    <>
      <PageHero
        title={service.title}
        breadcrumbs={[
          { label: "NexBuild",     href: "/" },
          { label: "Services",     href: "/services" },
          { label: service.title },
        ]}
      />

      <section className="py-20 md:py-28 bg-white">
        <Container>
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            {/* Main Content */}
            <div className="lg:col-span-2">
              <div className="relative aspect-[16/9] rounded-ds-xl overflow-hidden bg-neutral-100 mb-10">
                <Image
                  src={service.image ?? `/images/services/${service.slug}.jpg`}
                  alt={service.title}
                  fill
                  className="object-cover"
                  sizes="(max-width: 1024px) 100vw, 66vw"
                />
              </div>

              <SectionLabel>Service Detail</SectionLabel>
              <Heading size="md" className="mt-2 mb-5">{service.title}</Heading>
              <p className="text-neutral-500 leading-relaxed mb-8 font-body">
                {service.description}
              </p>

              <h3 className="heading-display text-lg text-primary mb-5">
                What&apos;s Included
              </h3>
              <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-10">
                {service.features.map((feat) => (
                  <li key={feat} className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-accent shrink-0 mt-0.5" />
                    <span className="text-sm text-neutral-600 font-body">{feat}</span>
                  </li>
                ))}
              </ul>

              <Button href="/contact" variant="primary" size="lg">
                Request a Quote <ArrowRight className="w-5 h-5" />
              </Button>
            </div>

            {/* Sidebar */}
            <aside className="space-y-6">
              {/* All Services list */}
              <div className="bg-[#F7F8FC] rounded-ds-lg p-6">
                <h4 className="heading-display text-base text-primary mb-4">
                  All Services
                </h4>
                <ul className="space-y-2">
                  {SERVICES.map((s) => (
                    <li key={s.id}>
                      <a
                        href={`/services/${s.slug}`}
                        className={`flex items-center justify-between py-2 px-3 rounded text-sm font-accent transition-colors ${
                          s.id === service.id
                            ? "bg-accent text-white"
                            : "text-neutral-600 hover:text-accent hover:bg-accent/5"
                        }`}
                      >
                        {s.title}
                        <ArrowRight className="w-3.5 h-3.5 shrink-0" />
                      </a>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Contact card */}
              <div className="bg-primary rounded-ds-lg p-6 text-white">
                <h4 className="heading-display text-base mb-3">Need Help?</h4>
                <p className="text-sm text-neutral-300 mb-4 font-body">
                  Speak with one of our project managers about how this service applies to your next build.
                </p>
                <a
                  href={`tel:${SITE_CONFIG.phone}`}
                  className="flex items-center gap-2 text-accent font-semibold font-accent text-sm"
                >
                  <Phone className="w-4 h-4" />
                  {SITE_CONFIG.phone}
                </a>
              </div>
            </aside>
          </div>
        </Container>
      </section>

      {/* Related Services */}
      <section className="py-16 bg-[#F7F8FC]">
        <Container>
          <Heading size="md" className="mb-8">Related Services</Heading>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-7">
            {related.map((s) => <ServiceCard key={s.id} service={s} />)}
          </div>
        </Container>
      </section>
    </>
  );
}
