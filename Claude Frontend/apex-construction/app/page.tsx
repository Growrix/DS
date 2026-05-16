"use client";
import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import {
  Building2, Wrench, Home, Shield, Zap, Wifi, Flame,
  CheckCircle, Play, ChevronLeft, ChevronRight,
  Hammer, Cog, Leaf, Anchor, HardHat, TreePine, BarChart3, Award,
} from "lucide-react";
import ServiceCard from "@/components/ServiceCard";
import TeamMember from "@/components/TeamMember";
import BlogCard from "@/components/BlogCard";
import ContactForm from "@/components/ContactForm";

// ── Data ──────────────────────────────────────────────────────────────────────

const highlightServices = [
  {
    icon: Building2,
    title: "Architecture & Construct Works",
    description:
      "We focus on exclusive design thinking, building layers, frames & design products that wow within the marketplace.",
  },
  {
    icon: Wrench,
    title: "Renovation & Material Supply",
    description:
      "We focus on exclusive change thinking, building pages, forms, frames & design products that wow within the market.",
  },
  {
    icon: Home,
    title: "Home Interior & Exterior Design",
    description:
      "We focus on exclusive design thinking, building layers, frames & design products that wow within the market.",
  },
];

const tabsData = [
  {
    id: "facade",
    label: "Facade Consultancy",
    icon: Building2,
    title: "Expert Facade Consultancy",
    content:
      "All perceived that building networks can provide a wide range of tasks in order to grow the industry. Apex Construction helps you design, plan, and execute exceptional facade engineering projects with precision and expertise.",
  },
  {
    id: "power",
    label: "Power Supply Management",
    icon: Zap,
    title: "Power Supply Management",
    content:
      "Regardless of the project type, a lot of effort and strong coordination is required for the fire industry. Our power management solutions ensure efficient and reliable energy systems for every construction project.",
  },
  {
    id: "sensor",
    label: "Sensor Connection",
    icon: Wifi,
    title: "Smart Sensor Connection",
    content:
      "Modern construction demands smart technology integration. Our sensor connection services provide real-time monitoring, safety alerts, and operational efficiency for complex construction environments.",
  },
  {
    id: "alarm",
    label: "Alarm Systems",
    icon: Flame,
    title: "Alarm Systems & Lightning Safety",
    content:
      "Safety is paramount. Our comprehensive alarm systems and lightning safety solutions protect workers, equipment, and structures throughout every phase of construction.",
  },
];

const designServices = [
  {
    icon: Anchor,
    title: "Shipbuilding Contracting",
    description:
      "Diversify what you feel you would bring to the table if you were hired for this position. Interactively productize premium technologies.",
  },
  {
    icon: HardHat,
    title: "Preconstruction Services",
    description:
      "Personal development and polishing, so commitment to the cause draft policy proposal. Objectively integrate enterprise-wide strategic theme.",
  },
  {
    icon: Award,
    title: "Management Certification",
    description:
      "We need to future-proof this where do we stand on the latest client ask. Uniquely matrix economically sound value through cooperative.",
  },
  {
    icon: Leaf,
    title: "Sustainable Air Design",
    description:
      "We need to socialize the comms with the wider stakeholder community. Globally network focused materials vis-a-vis cost effective manufactured.",
  },
  {
    icon: BarChart3,
    title: "Virtual Construction",
    description:
      "Level the playing field high touch client we need more paper out of the loop. Quickly communicate enabled technology and turnkey leadership.",
  },
  {
    icon: Cog,
    title: "Manage Certification",
    description:
      "We need to future-proof where we stand on the latest client ask productize. Uniquely matrix economically sound value through innovative approaches.",
  },
];

const teamMembers = [
  {
    name: "Antony Karlson",
    role: "Owner / President",
    title: "Chief Executive",
    imageUrl: "https://images.unsplash.com/photo-1560250097-0b93528c311a?w=400&q=80",
  },
  {
    name: "Laura Stone",
    role: "Vice President",
    title: "Operations Director",
    imageUrl: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=400&q=80",
  },
  {
    name: "Kelly Orlando",
    role: "Accounting",
    title: "Finance Manager",
    imageUrl: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400&q=80",
  },
  {
    name: "Eddie Adkins",
    role: "Executive Director",
    title: "Project Lead",
    imageUrl: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?w=400&q=80",
  },
];

const testimonials = [
  {
    text: "We've used Apex for the last five years. I didn't even need training. Thanks for the great service. I like Apex more and more each day because it makes my work so much easier and more enjoyable.",
    name: "Lauren Lopez",
    title: "CEO, DigitalPro",
  },
  {
    text: "Apex Construction delivered our project on time and within budget. Their attention to detail and commitment to quality is unmatched. Highly recommend their services to anyone in need.",
    name: "Marcus Chen",
    title: "Founder, Urban Build Co.",
  },
];

const blogPosts = [
  {
    imageUrl: "https://images.unsplash.com/photo-1504307651254-35680f356dfd?w=800&q=80",
    date: "March 15, 2025",
    category: "Industry",
    title: "Veterans in Business Network National Conference",
    excerpt:
      "Apex Construction has made workflow so much easier for teams across the board. We continue to grow thanks to innovative tools.",
  },
  {
    imageUrl: "https://images.unsplash.com/photo-1581094794329-c8112a89af12?w=800&q=80",
    date: "February 28, 2025",
    category: "News",
    title: "Although Many People May Overlook This Need",
    excerpt:
      "At thought leadership conference, construction leaders discussed the future of sustainable building practices and material innovation.",
  },
  {
    imageUrl: "https://images.unsplash.com/photo-1541888946425-d81bb19240f5?w=800&q=80",
    date: "January 10, 2025",
    category: "Law",
    title: "Top Saas Construction Law On The Construction",
    excerpt:
      "Although thought many people may overlook this need for legal clarity, construction law continues to reshape the industry landscape.",
  },
];

const certIcons = [
  { label: "ISO 9001", icon: Shield },
  { label: "LEED Certified", icon: Leaf },
  { label: "OSHA Compliant", icon: HardHat },
  { label: "Project Awards", icon: Award },
  { label: "Analytics", icon: BarChart3 },
];

// ── Component ──────────────────────────────────────────────────────────────────

export default function HomePage() {
  const [activeTab, setActiveTab] = useState("facade");
  const [testimonialIdx, setTestimonialIdx] = useState(0);

  const currentTab = tabsData.find((t) => t.id === activeTab)!;

  return (
    <>
      {/* ── Hero ──────────────────────────────────────────────────────────── */}
      <section className="relative min-h-[580px] flex items-center overflow-hidden">
        <div className="absolute inset-0">
          <Image
            src="https://images.unsplash.com/photo-1504307651254-35680f356dfd?w=1920&q=80"
            alt="Construction site hero"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-brand-navy-dark/85" />
        </div>
        <div className="relative max-w-7xl mx-auto px-4 py-20 grid lg:grid-cols-2 gap-8 items-center w-full">
          <div>
            <h1 className="font-display text-white text-4xl md:text-5xl xl:text-6xl font-bold leading-tight mb-6">
              <span className="block">Apex is</span>
              <span className="block font-normal">Innovation</span>
              <em className="block text-5xl md:text-6xl xl:text-7xl font-bold italic text-white">
                In Construction
              </em>
            </h1>
            <p className="text-gray-300 text-base mb-8 max-w-md leading-relaxed">
              Our company provides a wide selection of crawler cranes, forklifts,
              access platforms, mobile and tower cranes.
            </p>
            <Link href="/services" className="btn-orange uppercase tracking-widest text-sm font-bold">
              Check Services
            </Link>
          </div>
        </div>
      </section>

      {/* ── Highlight Service Cards ─────────────────────────────────────────── */}
      <section className="max-w-7xl mx-auto px-4 -mt-12 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-0 shadow-2xl">
          {highlightServices.map((svc) => (
            <ServiceCard key={svc.title} {...svc} />
          ))}
        </div>
      </section>

      {/* ── About / Agency ─────────────────────────────────────────────────── */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 grid lg:grid-cols-2 gap-14 items-center">
          {/* Left: Image + play button */}
          <div className="relative">
            <div className="relative h-[420px] overflow-hidden">
              <Image
                src="https://images.unsplash.com/photo-1581094794329-c8112a89af12?w=900&q=80"
                alt="Construction workers"
                fill
                className="object-cover"
              />
            </div>
            {/* Play button overlay */}
            <button className="absolute bottom-6 left-6 w-14 h-14 bg-brand-orange flex items-center justify-center shadow-lg hover:bg-brand-orange-dark transition-colors group">
              <Play size={20} fill="white" className="text-white ml-1" />
            </button>
            {/* Stats badge */}
            <div className="absolute -bottom-6 right-6 bg-brand-navy text-white p-5 shadow-xl">
              <div className="text-3xl font-display font-bold text-brand-orange">25+</div>
              <div className="text-xs uppercase tracking-widest mt-1">Years Experience</div>
            </div>
          </div>

          {/* Right: Text */}
          <div>
            <div className="section-label">About Our Company</div>
            <h2 className="section-title mb-5">
              A Modern Construction &amp;{" "}
              <span className="text-brand-orange">Industrial Agency</span>
            </h2>
            <p className="text-gray-500 text-sm leading-relaxed mb-6">
              At the end of the day, going forward, a new normal that has evolved from generation X
              is on the runway heading towards a streamlined cloud solution. User generated content
              in real-time will have multiple touchpoints for offshoring.
            </p>
            <ul className="space-y-3 mb-8">
              {[
                "Completely business strategy advantages allows us to generate the best results",
                "Collaboratively exploit scalable metrics via maintainable solutions.",
                "Quickly maximize timely deliverables for real-time schemas.",
                "Dramatically maintain clicks-and-mortar solutions without functional analytics.",
              ].map((item) => (
                <li key={item} className="flex items-start gap-3 text-sm text-gray-600">
                  <CheckCircle size={16} className="text-brand-orange mt-0.5 shrink-0" />
                  {item}
                </li>
              ))}
            </ul>
            {/* Signature */}
            <div className="flex items-center gap-4 pt-4 border-t border-gray-100">
              <div>
                <p className="font-display italic text-brand-navy text-xl">Antony Karlson</p>
                <p className="text-xs text-gray-400 uppercase tracking-wide">CEO & Founder</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── Full-Width CTA Banner ───────────────────────────────────────────── */}
      <section className="relative py-20 overflow-hidden">
        <div className="absolute inset-0">
          <Image
            src="https://images.unsplash.com/photo-1541888946425-d81bb19240f5?w=1920&q=80"
            alt="Construction banner"
            fill
            className="object-cover"
          />
          <div className="absolute inset-0 bg-brand-navy-dark/80" />
        </div>
        <div className="relative max-w-7xl mx-auto px-4 text-center text-white">
          <h2 className="font-display text-4xl md:text-5xl font-bold mb-2">
            Facade engineering
          </h2>
          <h3 className="font-display text-3xl md:text-4xl font-light italic mb-12">
            Building consultancy
          </h3>

          {/* Tabs */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-0 max-w-3xl mx-auto mb-0">
            {tabsData.map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`flex flex-col items-center gap-2 py-5 px-4 text-xs font-semibold uppercase tracking-wide transition-all duration-200 ${
                  activeTab === tab.id
                    ? "bg-brand-orange text-white"
                    : "bg-brand-navy-light/60 text-gray-300 hover:bg-brand-navy-light"
                }`}
              >
                <tab.icon size={24} strokeWidth={1.5} />
                {tab.label}
              </button>
            ))}
          </div>

          {/* Tab Content */}
          <div className="bg-white/10 backdrop-blur-sm p-8 max-w-3xl mx-auto text-left">
            <h4 className="font-display text-xl font-bold text-brand-orange mb-3">
              {currentTab.title}
            </h4>
            <p className="text-gray-300 text-sm leading-relaxed">{currentTab.content}</p>
          </div>
        </div>
      </section>

      {/* ── Design Services ────────────────────────────────────────────────── */}
      <section className="py-20 bg-brand-light-bg">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid lg:grid-cols-3 gap-10">
            {/* Left heading */}
            <div className="lg:col-span-1">
              <div className="section-label">Working With Excellence</div>
              <h2 className="section-title mb-4">Our Special Design Services</h2>
              <p className="text-gray-500 text-sm leading-relaxed mb-6">
                We offer a comprehensive suite of construction and design services, blending
                innovative techniques with proven methodologies to deliver outstanding results.
              </p>
              <Link href="/services" className="btn-orange text-sm font-bold uppercase tracking-widest">
                View All Services
              </Link>
            </div>

            {/* Right grid */}
            <div className="lg:col-span-2 grid grid-cols-1 md:grid-cols-2 gap-6">
              {designServices.map((svc) => (
                <div key={svc.title} className="service-card bg-white p-6 border border-gray-100 group">
                  <div className="w-12 h-12 mb-4 flex items-center justify-center">
                    <svc.icon size={28} className="text-brand-orange" strokeWidth={1.5} />
                  </div>
                  <h3 className="font-display text-brand-navy text-base font-bold mb-2 group-hover:text-brand-orange transition-colors">
                    {svc.title}
                  </h3>
                  <p className="text-gray-500 text-sm leading-relaxed">{svc.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── Site Areas + Contact ───────────────────────────────────────────── */}
      <section className="relative py-16 bg-brand-navy overflow-hidden">
        <div className="absolute inset-0">
          <Image
            src="https://images.unsplash.com/photo-1541888946425-d81bb19240f5?w=1920&q=80"
            alt="Site areas"
            fill
            className="object-cover opacity-20"
          />
        </div>
        <div className="relative max-w-7xl mx-auto px-4 grid lg:grid-cols-3 gap-8 items-center">
          {/* Left text */}
          <div className="text-white">
            <div className="text-brand-orange text-xs font-semibold uppercase tracking-widest flex items-center gap-2 mb-3">
              <span className="inline-block w-8 h-0.5 bg-brand-orange" />
              Our Better Vision
            </div>
            <h2 className="font-display text-3xl font-bold mb-4 leading-tight">
              What We Serve Site Areas
            </h2>
            <p className="text-gray-400 text-sm leading-relaxed mb-6">
              Sed ut perspiciatis unde omnis iste natus error vouptem accusantiu laudantium,
              totaim aperiam, eaque quaelo Lorem ipsum doloramet, consectetuer adipiscing.
            </p>
            <Link
              href="/contact"
              className="bg-brand-orange text-white px-6 py-3 text-sm font-bold uppercase tracking-widest hover:bg-brand-orange-dark transition-colors inline-block"
            >
              Read More
            </Link>
          </div>

          {/* Center: Worker image */}
          <div className="relative h-72 lg:h-80 hidden md:block">
            <Image
              src="https://images.unsplash.com/photo-1613665813446-82a78c468a1d?w=600&q=80"
              alt="Worker"
              fill
              className="object-cover object-top"
            />
          </div>

          {/* Right: Contact form */}
          <ContactForm />
        </div>
      </section>

      {/* ── Team Members ───────────────────────────────────────────────────── */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-12">
            <div className="flex items-center justify-center gap-2 mb-3">
              <span className="w-8 h-0.5 bg-brand-orange" />
              <span className="text-brand-orange text-xs font-semibold uppercase tracking-widest">
                Let's Help You
              </span>
              <span className="w-8 h-0.5 bg-brand-orange" />
            </div>
            <h2 className="font-display text-brand-navy text-3xl font-bold">Our Team Members</h2>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {teamMembers.map((member) => (
              <TeamMember key={member.name} {...member} />
            ))}
          </div>
        </div>
      </section>

      {/* ── Testimonials ───────────────────────────────────────────────────── */}
      <section className="py-20 bg-brand-light-bg">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <div className="flex items-center justify-center gap-2 mb-3">
            <span className="w-8 h-0.5 bg-brand-orange" />
            <span className="text-brand-orange text-xs font-semibold uppercase tracking-widest">
              Our Reviews
            </span>
            <span className="w-8 h-0.5 bg-brand-orange" />
          </div>
          <h2 className="font-display text-brand-navy text-3xl font-bold mb-12">
            We care about your opinion
          </h2>

          <div className="relative">
            <blockquote className="text-gray-600 text-base leading-relaxed mb-8 italic max-w-2xl mx-auto">
              "{testimonials[testimonialIdx].text}"
            </blockquote>
            <div>
              <p className="font-display text-brand-navy font-bold">
                {testimonials[testimonialIdx].name}
              </p>
              <p className="text-brand-orange text-xs uppercase tracking-widest mt-1">
                {testimonials[testimonialIdx].title}
              </p>
            </div>
          </div>

          {/* Navigation */}
          <div className="flex items-center justify-center gap-4 mt-8">
            <button
              onClick={() => setTestimonialIdx((i) => (i - 1 + testimonials.length) % testimonials.length)}
              className="w-10 h-10 border border-gray-300 flex items-center justify-center hover:bg-brand-orange hover:border-brand-orange hover:text-white transition-all"
            >
              <ChevronLeft size={18} />
            </button>
            <button
              onClick={() => setTestimonialIdx((i) => (i + 1) % testimonials.length)}
              className="w-10 h-10 border border-gray-300 flex items-center justify-center hover:bg-brand-orange hover:border-brand-orange hover:text-white transition-all"
            >
              <ChevronRight size={18} />
            </button>
          </div>
        </div>
      </section>

      {/* ── Certification / Partner Icons ──────────────────────────────────── */}
      <section className="py-14 bg-white border-t border-gray-100">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-3 md:grid-cols-5 gap-8">
            {certIcons.map(({ label, icon: Icon }) => (
              <div key={label} className="flex flex-col items-center gap-2 opacity-40 hover:opacity-70 transition-opacity cursor-pointer">
                <Icon size={36} strokeWidth={1} className="text-brand-navy" />
                <span className="text-xs text-gray-500 font-semibold uppercase tracking-wide text-center">
                  {label}
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Blog / News ────────────────────────────────────────────────────── */}
      <section className="py-20 bg-brand-light-bg">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-12">
            <div className="flex items-center justify-center gap-2 mb-3">
              <span className="w-8 h-0.5 bg-brand-orange" />
              <span className="text-brand-orange text-xs font-semibold uppercase tracking-widest">
                Our Blog
              </span>
              <span className="w-8 h-0.5 bg-brand-orange" />
            </div>
            <h2 className="font-display text-brand-navy text-3xl font-bold">From the Blog</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {blogPosts.map((post) => (
              <BlogCard key={post.title} {...post} />
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
