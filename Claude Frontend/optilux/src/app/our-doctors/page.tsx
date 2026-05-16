import Image from "next/image";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import { CTABanner, PageHero } from "@/components/ui/shared";
import { doctors } from "@/data/doctors";

function SocialLink({ href, label }: { href: string; label: string }) {
  return (
    <a href={href} className="w-8 h-8 rounded-full bg-[#EAF8F6] flex items-center justify-center text-[#7A9BAA] hover:bg-[#00B5A3] hover:text-white transition-all text-xs font-bold">
      {label}
    </a>
  );
}

export default function OurDoctorsPage() {
  return (
    <>
      <Navbar />
      <main className="flex-1">
        <PageHero title="Our Doctors" breadcrumb={[{ label: "Home", href: "/" }, { label: "Our Doctors" }]} />
        <section className="py-20 max-w-7xl mx-auto px-4 sm:px-6">
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-10">
            {doctors.map((doc) => (
              <div key={doc.name} className="text-center">
                <div className="w-52 h-52 mx-auto rounded-2xl overflow-hidden bg-[#C8EEE9] mb-5 relative">
                  <Image src={doc.image} alt={doc.name} fill className="object-cover object-top" />
                </div>
                <h3 className="text-base font-bold text-[#1B3C4A]">{doc.name}</h3>
                <p className="text-sm text-[#7A9BAA] mt-1">{doc.title}</p>
                <div className="flex items-center justify-center gap-3 mt-4">
                  <SocialLink href={doc.social.facebook} label="f" />
                  <SocialLink href={doc.social.twitter} label="𝕏" />
                  <SocialLink href={doc.social.instagram} label="ig" />
                </div>
              </div>
            ))}
          </div>
        </section>
        <CTABanner />
      </main>
      <Footer />
    </>
  );
}
