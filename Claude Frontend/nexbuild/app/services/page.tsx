import type { Metadata } from "next";
import { PageHero }           from "@/components/layout/PageHero";
import { Container, SectionLabel, Heading } from "@/components/ui/primitives";
import { ServiceCard }        from "@/components/ui/Cards";
import { DesignServiceCard }  from "@/components/ui/Cards";
import { ServiceAreasSection } from "@/components/sections/ServiceAreasSection";
import { SERVICES, DESIGN_SERVICES } from "@/data";

export const metadata: Metadata = {
  title:       "Our Services",
  description: "Explore the full range of construction management, engineering, and specialist services offered by NexBuild.",
};

export default function ServicesPage() {
  return (
    <>
      <PageHero
        title="Our Services"
        breadcrumbs={[
          { label: "NexBuild", href: "/" },
          { label: "Our Services" },
        ]}
      />

      {/* All Services */}
      <section className="py-20 md:py-28 bg-white">
        <Container>
          <div className="text-center mb-14">
            <SectionLabel className="justify-center">What We Provide</SectionLabel>
            <Heading size="lg" className="mt-2">
              Full-Spectrum <span className="text-accent">Construction Services</span>
            </Heading>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-7">
            {SERVICES.map((service) => (
              <ServiceCard key={service.id} service={service} />
            ))}
          </div>
        </Container>
      </section>

      {/* Specialised Design Services — 2 col */}
      <section className="py-20 md:py-28 bg-[#F7F8FC]">
        <Container>
          <div className="mb-14">
            <SectionLabel>Working with Excellence</SectionLabel>
            <Heading size="lg" className="mt-2 max-w-sm">
              Our Special <span className="text-accent">Design Services</span>
            </Heading>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-7">
            {DESIGN_SERVICES.map((service) => (
              <DesignServiceCard key={service.id} service={service} />
            ))}
          </div>
        </Container>
      </section>

      <ServiceAreasSection />
    </>
  );
}
