import Image from "next/image";
import Link from "next/link";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import { CTABanner, PageHero } from "@/components/ui/shared";
import { services } from "@/data/services";
import { ArrowUpRight } from "lucide-react";

export default function ServicesPage() {
  return (
    <>
      <Navbar />
      <main className="flex-1">
        <PageHero title="Our Services" breadcrumb={[{ label: "Home", href: "/" }, { label: "Our Services" }]} />

        <section className="py-20 max-w-7xl mx-auto px-4 sm:px-6">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((s) => (
              <Link key={s.slug} href={`/services/${s.slug}`} className="group relative rounded-2xl overflow-hidden h-56 block">
                <Image src={s.image} alt={s.title} fill className="object-cover transition-transform duration-500 group-hover:scale-105" />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0B3547]/90 via-[#0B3547]/30 to-transparent" />
                <div className="absolute bottom-0 left-0 right-0 p-5 flex items-end justify-between">
                  <div>
                    <h3 className="text-white font-bold text-lg">{s.title}</h3>
                    <p className="text-white/70 text-xs mt-1">{s.shortDesc}</p>
                  </div>
                  <div className="w-9 h-9 bg-[#00B5A3] rounded-full flex items-center justify-center flex-shrink-0">
                    <ArrowUpRight size={16} className="text-white" />
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </section>

        <CTABanner />
      </main>
      <Footer />
    </>
  );
}
