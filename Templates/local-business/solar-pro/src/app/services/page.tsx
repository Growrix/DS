import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import PageBanner from "@/components/shared/PageBanner";
import QuoteSection from "@/components/home/QuoteSection";
import { SERVICES } from "@/lib/content";

export const metadata: Metadata = { title: "Our Services" };

export default function ServicesPage() {
  return (
    <>
      <PageBanner
        title="Our Services"
        breadcrumbs={[{ label: "Services" }]}
      />

      <section className="sp-section">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            <p className="sp-kicker">What We Offer</p>
            <h2 className="sp-section-title mt-2">
              Fostering The Growth Of Solar Energy Market
            </h2>
            <p className="sp-section-sub max-w-2xl mx-auto">
              A Leading Supplier Of Solar Materials For Manufacturers, Installers
              &amp; Contractors.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {SERVICES.map((service) => (
              <article key={service.slug} className="sp-card group">
                <div className="relative overflow-hidden" style={{ height: 220 }}>
                  <Image
                    src={service.image}
                    alt={service.title}
                    fill
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                </div>
                <div className="p-6">
                  <div className="flex items-center gap-2 mb-3">
                    <span className="text-2xl">{service.icon}</span>
                    <h3 className="font-bold text-xl" style={{ color: "var(--sp-text)" }}>
                      {service.title}
                    </h3>
                  </div>
                  <p className="text-sm" style={{ color: "var(--sp-muted)" }}>
                    {service.description}
                  </p>
                  <Link
                    href={`/services/${service.slug}`}
                    className="sp-btn sp-btn-primary mt-5 text-xs py-2 px-4 inline-flex"
                  >
                    Read More
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
