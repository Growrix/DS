import Image from "next/image";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import { CTABanner, PageHero } from "@/components/ui/shared";
import { stats } from "@/data/site";
import { expertise } from "@/data/services";
import { doctors } from "@/data/doctors";
import { CheckCircle2 } from "lucide-react";

function SocialLink({ href, label }: { href: string; label: string }) {
  return (
    <a href={href} className="w-7 h-7 rounded-full bg-[#EAF8F6] flex items-center justify-center text-[#7A9BAA] hover:bg-[#00B5A3] hover:text-white transition-all text-xs font-bold">
      {label}
    </a>
  );
}

export default function AboutPage() {
  return (
    <>
      <Navbar />
      <main className="flex-1">
        <PageHero title="About Us" breadcrumb={[{ label: "Home", href: "/" }, { label: "About Us" }]} />

        <section className="py-20 max-w-7xl mx-auto px-4 sm:px-6">
          <div className="grid lg:grid-cols-2 gap-14 items-center">
            <div className="grid grid-cols-2 gap-4">
              <div className="rounded-2xl overflow-hidden h-72 mt-6">
                <Image src="https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?w=400&q=80" alt="Eye exam" width={300} height={300} className="w-full h-full object-cover" />
              </div>
              <div className="rounded-2xl overflow-hidden h-72">
                <Image src="https://images.unsplash.com/photo-1559839734-2b71ea197ec2?w=400&q=80" alt="Doctor" width={300} height={300} className="w-full h-full object-cover" />
              </div>
            </div>
            <div>
              <p className="section-label mb-3">About Us</p>
              <h2 className="section-title mb-5">Caring for Eyes, Enhancing Your Vision</h2>
              <p className="text-[#4A6572] leading-relaxed text-sm">
                We are a trusted optometry and eye health provider dedicated to keeping your vision clear and protected. With years of expertise in eye exams, vision correction, and advanced diagnostics, we blend care with innovation to safeguard your eye health. From routine checkups to specialized treatments, our mission is simple — better vision that helps you see life&apos;s moments more vividly every day.
              </p>
            </div>
          </div>
        </section>

        <section className="pb-20 max-w-7xl mx-auto px-4 sm:px-6">
          <h2 className="text-[#1B3C4A] text-2xl font-bold mb-8">Our Expertise</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-x-12 gap-y-6">
            {expertise.map((item) => (
              <div key={item.label}>
                <div className="flex justify-between mb-1.5">
                  <span className="text-sm text-[#1B3C4A] font-medium">{item.label}</span>
                  <span className="text-sm text-[#1B3C4A] font-semibold">{item.percent}%</span>
                </div>
                <div className="h-2 bg-[#E2EEF2] rounded-full">
                  <div className="h-full bg-[#00B5A3] rounded-full" style={{ width: `${item.percent}%` }} />
                </div>
              </div>
            ))}
          </div>
        </section>

        <section className="py-20 bg-[#EAF8F6]">
          <div className="max-w-7xl mx-auto px-4 sm:px-6">
            <div className="text-center mb-12">
              <p className="section-label mb-2">Our Doctors</p>
              <h2 className="section-title">Excellence in Optometry<br/>and Quality Care</h2>
            </div>
            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {doctors.slice(0,4).map((doc) => (
                <div key={doc.name} className="text-center">
                  <div className="w-36 h-36 mx-auto rounded-2xl overflow-hidden bg-[#C8EEE9] mb-4 relative">
                    <Image src={doc.image} alt={doc.name} fill className="object-cover object-top" />
                  </div>
                  <h3 className="text-sm font-bold text-[#1B3C4A]">{doc.name}</h3>
                  <p className="text-xs text-[#7A9BAA] mt-1">{doc.title}</p>
                  <div className="flex items-center justify-center gap-2 mt-3">
                    <SocialLink href={doc.social.facebook} label="f" />
                    <SocialLink href={doc.social.twitter} label="𝕏" />
                    <SocialLink href={doc.social.instagram} label="ig" />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="py-20 max-w-7xl mx-auto px-4 sm:px-6">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            {stats.map((s) => (
              <div key={s.label}>
                <p className="text-4xl font-bold text-[#1B3C4A] mb-1">{s.value}</p>
                <p className="text-sm text-[#7A9BAA]">{s.label}</p>
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
