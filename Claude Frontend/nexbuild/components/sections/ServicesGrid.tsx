import { Container } from "@/components/ui/primitives";
import { ServiceCard } from "@/components/ui/Cards";
import { SERVICES } from "@/data";

export function ServicesGrid() {
  const featured = SERVICES.slice(0, 3);

  return (
    <section className="bg-white py-0">
      <Container>
        {/* Cards hang below the hero */}
        <div className="relative -mt-8 z-10">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {featured.map((service) => (
              <ServiceCard key={service.id} service={service} />
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
}
