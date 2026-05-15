import Image from "next/image";
import Link from "next/link";
import { SERVICES } from "@/lib/content";

export default function ServicesSection() {
  return (
    <section className="sp-section sp-section-light-bg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-14 items-center mb-14">
          <div>
            <p className="sp-kicker">Our Services</p>
            <h2 className="sp-section-title mt-2">
              Making Tomorrow Different Today.
            </h2>
            <p className="sp-section-sub">
              A Leading Supplier Of Solar Materials For Manufacturers, Installers
              &amp; Contractors.
            </p>
            <hr className="sp-divider mt-4" />
            <p className="text-base mt-4" style={{ color: "var(--sp-muted)" }}>
              Our Solar business is focused on creating PV material solutions that
              reduce manufacturing costs, while improving the yield and performance
              of solar energy products.
            </p>
            <div className="flex gap-4 mt-8">
              <Link href="/contact" className="sp-btn sp-btn-primary">
                Request A Quote
              </Link>
              <Link href="/services" className="sp-btn sp-btn-dark">
                Explore All Services
              </Link>
            </div>
          </div>
          {/* Featured service image */}
          <div className="rounded-xl overflow-hidden aspect-video">
            <Image
              src="https://images.unsplash.com/photo-1548337138-e87d889cc369?auto=format&fit=crop&w=800&q=80"
              alt="Solar panel installation"
              width={800}
              height={450}
              className="w-full h-full object-cover"
            />
          </div>
        </div>

        {/* Service cards grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {SERVICES.map((service) => (
            <article key={service.slug} className="sp-card group">
              <div className="relative overflow-hidden" style={{ height: 200 }}>
                <Image
                  src={service.image}
                  alt={service.title}
                  fill
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                />
              </div>
              <div className="p-5">
                <div className="flex items-center gap-2 mb-3">
                  <span className="text-2xl">{service.icon}</span>
                  <h3 className="font-bold text-lg" style={{ color: "var(--sp-text)" }}>
                    {service.title}
                  </h3>
                </div>
                <p className="text-sm line-clamp-2" style={{ color: "var(--sp-muted)" }}>
                  {service.description}
                </p>
                <Link
                  href={`/services/${service.slug}`}
                  className="inline-flex items-center gap-1 mt-4 text-sm font-bold transition-colors"
                  style={{ color: "var(--sp-primary)" }}
                >
                  Read More →
                </Link>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
