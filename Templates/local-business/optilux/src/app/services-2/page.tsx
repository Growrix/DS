import Image from "next/image";
import CtaBand from "@/components/common/CtaBand";
import PageHero from "@/components/common/PageHero";
import { SERVICES } from "@/lib/site";

export default function ServicesAltPage() {
  return (
    <div>
      <PageHero title="Our Services" />
      <section className="container py-20">
        <div className="grid gap-8 md:grid-cols-3">
          {SERVICES.map((service) => (
            <article key={service.slug} className="service-card">
              <Image src={service.image} alt={service.title} width={600} height={255} className="service-image" />
              <div className="service-overlay" />
              <h3 className="service-title">{service.title}</h3>
            </article>
          ))}
        </div>
      </section>
      <CtaBand />
    </div>
  );
}
