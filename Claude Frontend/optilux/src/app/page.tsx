import Link from "next/link";
import Image from "next/image";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import { CTABanner, StarRating } from "@/components/ui/shared";
import { stats } from "@/data/site";
import { services, expertise } from "@/data/services";
import { testimonials, faqCategories } from "@/data/content";
import {
  CalendarDays,
  Eye,
  Stethoscope,
  Heart,
  ArrowUpRight,
  ChevronDown,
  CheckCircle2,
} from "lucide-react";

function HeroSection() {
  return (
    <section className="relative bg-[#1B3C4A] overflow-hidden">
      <div className="absolute inset-0">
        <Image
          src="https://images.unsplash.com/photo-1516574187841-cb9cc2ca948b?w=1400&q=80"
          alt="Eye care background"
          fill
          className="object-cover opacity-25"
          priority
        />
      </div>
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 pt-20 pb-32 grid lg:grid-cols-2 gap-10 items-center">
        <div>
          <h1 className="text-white text-4xl md:text-5xl lg:text-[3.2rem] font-bold leading-tight mb-5">
            Expert Vision Care<br />and Trusted Eye<br />Specialists
          </h1>
          <p className="text-[#94C8D8] text-base leading-relaxed mb-8 max-w-md">
            Comprehensive eye exams with modern tools that provide accurate results while ensuring comfort and safety for every patient.
          </p>
          <Link href="/contact" className="btn-primary text-base px-8 py-3.5">
            Book Now
          </Link>
        </div>
        <div className="hidden lg:block relative h-80">
          <div className="absolute right-0 top-0 w-72 h-72 rounded-2xl overflow-hidden">
            <Image
              src="https://images.unsplash.com/photo-1559839734-2b71ea197ec2?w=500&q=80"
              alt="Doctor"
              fill
              className="object-cover"
            />
          </div>
          <div className="absolute bottom-0 right-24 bg-white rounded-xl px-4 py-3 shadow-xl flex items-center gap-3">
            <div className="w-9 h-9 bg-[#EAF8F6] rounded-full flex items-center justify-center">
              <Eye size={16} className="text-[#00B5A3]" />
            </div>
            <div>
              <p className="text-[10px] text-[#7A9BAA]">Total</p>
              <p className="text-xs font-bold text-[#1B3C4A]">2.1k Happy Patients</p>
            </div>
          </div>
        </div>
      </div>
      {/* Stats bar */}
      <div className="absolute bottom-0 left-0 right-0 bg-[#00B5A3]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 py-5 grid grid-cols-2 md:grid-cols-4 gap-4 text-white text-center">
          {stats.map((s) => (
            <div key={s.label}>
              <p className="text-2xl font-bold">{s.value}</p>
              <p className="text-xs text-white/80 mt-0.5">{s.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function AboutSection() {
  return (
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
          <h2 className="section-title mb-5">Professional and Personalized Eye Care Services</h2>
          <p className="text-[#4A6572] leading-relaxed mb-6 text-sm">
            We provide complete vision care designed for all ages. From routine eye exams to advanced treatments, our dedicated team ensures your eyes remain healthy and your vision clear.
          </p>
          <div className="grid grid-cols-2 gap-x-6 gap-y-2 mb-8">
            {["Comprehensive Eye Exams","Latest Diagnostic Technology","Gentle Care for Kids & Adults","Flexible Appointment Scheduling"].map((item) => (
              <div key={item} className="flex items-start gap-2 text-sm text-[#4A6572]">
                <CheckCircle2 size={15} className="text-[#00B5A3] flex-shrink-0 mt-0.5" />
                {item}
              </div>
            ))}
          </div>
          <Link href="/about" className="btn-primary">Book Your Visit</Link>
        </div>
      </div>
    </section>
  );
}

function ExpertiseSection() {
  return (
    <section className="pb-20 max-w-7xl mx-auto px-4 sm:px-6">
      <h2 className="text-[#1B3C4A] text-2xl font-bold mb-8">Our Expertise</h2>
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-x-12 gap-y-6">
        {expertise.map((item) => (
          <div key={item.label}>
            <div className="flex justify-between mb-1.5">
              <span className="text-sm text-[#1B3C4A] font-medium">{item.label}</span>
              <span className="text-sm font-semibold text-[#1B3C4A]">{item.percent}%</span>
            </div>
            <div className="h-2 bg-[#E2EEF2] rounded-full">
              <div className="h-full bg-[#00B5A3] rounded-full" style={{ width: `${item.percent}%` }} />
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

function TestimonialsSection() {
  return (
    <section className="py-20 bg-[#EAF8F6]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="mb-10">
          <p className="section-label mb-2">Testimonials</p>
          <h2 className="section-title">What Our Patients Are Saying</h2>
          <p className="text-[#4A6572] text-sm mt-3 max-w-xl">
            From comprehensive eye exams to advanced treatments, our clinic is dedicated to helping patients achieve clear, healthy vision with compassionate care.
          </p>
        </div>
        <div className="grid md:grid-cols-2 gap-6">
          {testimonials.slice(0,2).map((t) => (
            <div key={t.name} className="bg-white rounded-2xl p-7 shadow-sm">
              <div className="text-5xl text-[#00B5A3] leading-none mb-4 font-serif">"</div>
              <p className="text-[#4A6572] text-sm leading-relaxed mb-6">{t.text}</p>
              <div className="flex items-center gap-3">
                <Image src={t.avatar} alt={t.name} width={44} height={44} className="rounded-full" />
                <div className="flex-1">
                  <p className="text-sm font-semibold text-[#1B3C4A]">{t.name}</p>
                  <p className="text-xs text-[#7A9BAA]">{t.date}</p>
                </div>
                <StarRating rating={t.rating} />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function ServicesSection() {
  return (
    <section className="py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="text-center mb-12">
          <p className="section-label mb-2">Our Services</p>
          <h2 className="section-title">Comprehensive Eye Care &<br/>Optometry</h2>
        </div>
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
      </div>
    </section>
  );
}

const processSteps = [
  { icon: CalendarDays, title: "Book Appointment", desc: "Book your appointment online or by phone with our friendly staff." },
  { icon: Eye, title: "Eye Examination", desc: "Receive a comprehensive eye exam with state-of-the-art diagnostics." },
  { icon: Stethoscope, title: "Personalised Solutions", desc: "Get personalised recommendations for glasses, contacts, or treatments." },
  { icon: Heart, title: "Ongoing Care", desc: "Enjoy clearer vision and ongoing care with regular follow-ups." },
];

function ProcessSection() {
  return (
    <section className="py-20 bg-[#1B3C4A] relative overflow-hidden">
      <div className="absolute inset-0 opacity-10">
        <Image src="https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?w=1400&q=80" alt="" fill className="object-cover" />
      </div>
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 text-center">
        <p className="text-[#00B5A3] text-sm font-semibold uppercase tracking-widest mb-2">Our Process</p>
        <h2 className="text-white text-3xl md:text-4xl font-bold mb-14">Clear Steps to Better Vision</h2>
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {processSteps.map((step) => (
            <div key={step.title} className="text-center">
              <div className="w-14 h-14 rounded-2xl bg-[#00B5A3]/20 border border-[#00B5A3]/40 flex items-center justify-center mx-auto mb-4">
                <step.icon size={24} className="text-[#00B5A3]" />
              </div>
              <h3 className="text-white font-bold mb-2">{step.title}</h3>
              <p className="text-[#94B8C5] text-sm leading-relaxed">{step.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function FAQSection() {
  return (
    <section className="py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 grid lg:grid-cols-2 gap-14 items-start">
        <div>
          <p className="section-label mb-2">FAQ</p>
          <h2 className="section-title">Everything You Should Know About Eye Care</h2>
        </div>
        <div>
          <div className="flex flex-wrap gap-2 mb-6">
            {faqCategories.map((cat, i) => (
              <span key={cat.label} className={`px-4 py-2 rounded-full text-sm font-semibold cursor-pointer ${i === 0 ? "bg-[#00B5A3] text-white" : "text-[#7A9BAA] hover:text-[#00B5A3]"}`}>
                {cat.label}
              </span>
            ))}
          </div>
          <div className="divide-y divide-[#E2EEF2]">
            {faqCategories[0].items.slice(0,5).map((item) => (
              <div key={item.question} className="py-4 flex justify-between items-center cursor-pointer group">
                <p className="text-sm font-medium text-[#1B3C4A] group-hover:text-[#00B5A3] transition-colors">{item.question}</p>
                <ChevronDown size={16} className="text-[#7A9BAA] flex-shrink-0 ml-4" />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export default function HomePage() {
  return (
    <>
      <Navbar />
      <main className="flex-1">
        <HeroSection />
        <AboutSection />
        <ExpertiseSection />
        <TestimonialsSection />
        <ServicesSection />
        <ProcessSection />
        <FAQSection />
        <CTABanner />
      </main>
      <Footer />
    </>
  );
}
