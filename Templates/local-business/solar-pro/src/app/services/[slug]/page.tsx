import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import PageBanner from "@/components/shared/PageBanner";
import QuoteSection from "@/components/home/QuoteSection";
import { SERVICES } from "@/lib/content";

interface Props {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return SERVICES.map((s) => ({ slug: s.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const service = SERVICES.find((s) => s.slug === slug);
  return { title: service?.title ?? "Service" };
}

export default async function SingleServicePage({ params }: Props) {
  const { slug } = await params;
  const service = SERVICES.find((s) => s.slug === slug);
  if (!service) notFound();

  const others = SERVICES.filter((s) => s.slug !== slug).slice(0, 3);

  return (
    <>
      <PageBanner
        title={service.title}
        breadcrumbs={[{ label: "Services", href: "/services" }, { label: service.title }]}
      />

      <section className="sp-section">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            {/* Main */}
            <div className="lg:col-span-2">
              <div className="rounded-xl overflow-hidden mb-8">
                <Image
                  src={service.image}
                  alt={service.title}
                  width={900}
                  height={500}
                  className="w-full object-cover"
                />
              </div>
              <div className="flex items-center gap-3 mb-4">
                <span className="text-4xl">{service.icon}</span>
                <h2 className="sp-section-title">{service.title}</h2>
              </div>
              <hr className="sp-divider" />
              <p className="text-base mt-4 leading-relaxed" style={{ color: "var(--sp-muted)" }}>
                {service.description}
              </p>
              <p className="text-base mt-4 leading-relaxed" style={{ color: "var(--sp-muted)" }}>
                Our Solar business is focused on creating material solutions that
                reduce manufacturing costs, while improving the yield and
                performance of solar energy products. With over 20 years of
                industry experience, we deliver on every project.
              </p>
              <ul className="mt-6 space-y-2 text-sm font-medium" style={{ color: "var(--sp-text)" }}>
                {[
                  "Professional on-site service and support for certification",
                  "Regular performance testing for stable conversion efficiency",
                  "Lowest degradation through periodic monitoring and quality wafers",
                  "Competitive pricing with volume discount programs",
                ].map((item) => (
                  <li key={item} className="flex items-start gap-2">
                    <span style={{ color: "var(--sp-primary)" }}>✓</span>
                    {item}
                  </li>
                ))}
              </ul>
              <div className="flex gap-4 mt-8">
                <Link href="/contact" className="sp-btn sp-btn-primary">Request A Quote</Link>
                <Link href="/services" className="sp-btn sp-btn-dark">All Services</Link>
              </div>
            </div>

            {/* Sidebar */}
            <aside>
              <div className="rounded-xl p-6 mb-6" style={{ background: "var(--sp-surface)" }}>
                <h3 className="font-bold text-lg mb-4" style={{ color: "var(--sp-text)" }}>All Services</h3>
                <div className="space-y-2">
                  {SERVICES.map((s) => (
                    <Link
                      key={s.slug}
                      href={`/services/${s.slug}`}
                      className="flex items-center gap-2 p-3 rounded-lg font-medium text-sm transition-all"
                      style={{
                        background: s.slug === slug ? "var(--sp-primary)" : "transparent",
                        color: s.slug === slug ? "var(--sp-navy)" : "var(--sp-text)",
                      }}
                    >
                      <span>{s.icon}</span> {s.title}
                    </Link>
                  ))}
                </div>
              </div>

              <div className="rounded-xl p-6" style={{ background: "var(--sp-navy)" }}>
                <h3 className="font-bold text-white text-lg mb-3">Need Help?</h3>
                <p className="text-white/60 text-sm mb-5">
                  Our team of certified engineers is ready to help you design
                  the perfect solution.
                </p>
                <Link href="/contact" className="sp-btn sp-btn-primary w-full justify-center text-sm py-3">
                  Contact Us Today
                </Link>
              </div>
            </aside>
          </div>

          {/* Related services */}
          {others.length > 0 && (
            <div className="mt-16">
              <h3 className="text-2xl font-bold mb-8" style={{ color: "var(--sp-text)" }}>
                Related Services
              </h3>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
                {others.map((s) => (
                  <article key={s.slug} className="sp-card group">
                    <div className="relative overflow-hidden" style={{ height: 180 }}>
                      <Image
                        src={s.image}
                        alt={s.title}
                        fill
                        sizes="33vw"
                        className="object-cover transition-transform duration-500 group-hover:scale-105"
                      />
                    </div>
                    <div className="p-5">
                      <div className="flex items-center gap-2 mb-2">
                        <span>{s.icon}</span>
                        <h4 className="font-bold" style={{ color: "var(--sp-text)" }}>{s.title}</h4>
                      </div>
                      <Link
                        href={`/services/${s.slug}`}
                        className="text-sm font-bold"
                        style={{ color: "var(--sp-primary)" }}
                      >
                        Read More →
                      </Link>
                    </div>
                  </article>
                ))}
              </div>
            </div>
          )}
        </div>
      </section>

      <QuoteSection />
    </>
  );
}
