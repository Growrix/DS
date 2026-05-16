import { notFound } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import { PageHero } from "@/components/ui/shared";
import { services, servicesSidebar } from "@/data/services";
import { CheckSquare } from "lucide-react";

export function generateStaticParams() {
  return services.map((s) => ({ slug: s.slug }));
}

export default async function ServiceSinglePage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const service = services.find((s) => s.slug === slug);
  if (!service) notFound();

  return (
    <>
      <Navbar />
      <main className="flex-1">
        <PageHero title={service.title} breadcrumb={[{ label: "Home", href: "/" }, { label: service.title }]} />

        <section className="py-20 max-w-7xl mx-auto px-4 sm:px-6">
          <div className="grid lg:grid-cols-[220px_1fr_320px] gap-10">
            {/* Sidebar */}
            <div className="space-y-1">
              {servicesSidebar.map((item) => (
                <Link
                  key={item.slug}
                  href={`/services/${item.slug}`}
                  className={`block px-4 py-3 rounded-xl text-sm font-medium transition-all ${
                    item.slug === slug
                      ? "bg-[#00B5A3] text-white"
                      : "bg-[#EAF8F6] text-[#1B3C4A] hover:bg-[#00B5A3] hover:text-white"
                  }`}
                >
                  {item.label}
                </Link>
              ))}
            </div>

            {/* Main */}
            <div>
              <h2 className="section-title mb-4">{service.title}</h2>
              <p className="text-[#4A6572] leading-relaxed text-sm mb-10">{service.description}</p>

              <h3 className="text-[#1B3C4A] text-xl font-bold mb-6">Key Benefits</h3>
              <div className="grid md:grid-cols-2 gap-5">
                {service.benefits.map((b) => (
                  <div key={b.title} className="flex gap-4">
                    <div className="w-10 h-10 bg-[#00B5A3] rounded-xl flex items-center justify-center flex-shrink-0">
                      <CheckSquare size={18} className="text-white" />
                    </div>
                    <div>
                      <h4 className="text-sm font-semibold text-[#1B3C4A] mb-1">{b.title}</h4>
                      <p className="text-xs text-[#4A6572] leading-relaxed">{b.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Right image & quote */}
            <div>
              <div className="rounded-2xl overflow-hidden relative h-72 mb-6">
                <Image src={service.image} alt={service.title} fill className="object-cover" />
                <div className="absolute bottom-4 left-4 right-4 bg-[#00B5A3] rounded-xl p-4">
                  <p className="text-white text-xs font-medium leading-relaxed">
                    Personalized vision solutions to help you see the world with clarity and confidence.
                  </p>
                </div>
              </div>
              <Link href="/contact" className="btn-primary w-full justify-center">
                Book Appointment
              </Link>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
