import Image from "next/image";
import Link from "next/link";
import PageHero from "@/components/PageHero";
import TeamMember from "@/components/TeamMember";
import ContactForm from "@/components/ContactForm";
import { Anchor, HardHat, Award, Leaf, BarChart3, Cog } from "lucide-react";

const services = [
  {
    icon: Anchor,
    title: "Shipbuilding Contracting",
    description:
      "Diversify what do you feel you would bring to the table if you were hired for this position. Interactively productize premium technologies whereas.",
  },
  {
    icon: HardHat,
    title: "Preconstruction Services",
    description:
      "Personal development turd polishing, so commitment to the cause draft policy proposal. Objectively integrate enterprise-wide strategic theme.",
  },
  {
    icon: Award,
    title: "Management Certification",
    description:
      "We need to future-proof this where do we stand on the latest client ask productize. Uniquely matrix economically sound value throug.",
  },
  {
    icon: Leaf,
    title: "Virtual Design & Construction",
    description:
      "Level the playing field high touch client we need more paper out of the loop. Quickly communicate enabled technology and turnkey leadership.",
  },
  {
    icon: BarChart3,
    title: "Sustainable Design",
    description:
      "We need to socialize the comms with the wider stakeholder community low-hanging fruit. Globally network focused materials vis-a-vis cost.",
  },
  {
    icon: Cog,
    title: "Construction Management",
    description:
      "Completely synergize resource taxing relationships via premier niche markets. Professionally cultivate one-to-one customer service with robust ideas.",
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

export default function ServicesPage() {
  return (
    <>
      <PageHero
        title="Our Services 2 Columns"
        breadcrumbs={[
          { label: "Apex", href: "/" },
          { label: "Our Services 2 Columns" },
        ]}
        imageUrl="https://images.unsplash.com/photo-1504307651254-35680f356dfd?w=1920&q=80"
      />

      {/* Services Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-0 mb-12">
            {/* Left: Section Header */}
            <div className="bg-white p-8 border border-gray-100">
              <div className="text-brand-orange text-xs font-semibold uppercase tracking-widest flex items-center gap-2 mb-4">
                <span className="inline-block w-8 h-0.5 bg-brand-orange" />
                Working With Excellence
              </div>
              <h2 className="font-display text-brand-navy text-3xl font-bold leading-tight">
                Our Special Design Services
              </h2>
            </div>

            {/* First service card */}
            <div className="bg-white p-8 border border-gray-100 flex flex-col items-start">
              <div className="w-14 h-14 mb-4 flex items-center justify-center">
                <Anchor size={32} className="text-brand-orange" strokeWidth={1.5} />
              </div>
              <h3 className="font-display text-brand-navy text-lg font-bold mb-2">
                Shipbuilding Contracting
              </h3>
              <p className="text-gray-500 text-sm leading-relaxed">
                Diversify what do you feel you would bring to the table if you were hired for this
                position. Interactively productize premium technologies whereas.
              </p>
            </div>
          </div>

          {/* 2-column grid */}
          <div className="grid md:grid-cols-2 gap-6">
            {services.slice(1).map((svc) => (
              <div
                key={svc.title}
                className="service-card border border-gray-100 p-8 bg-white group flex flex-col items-center text-center"
              >
                <div className="w-16 h-16 mb-5 flex items-center justify-center">
                  <svc.icon size={36} className="text-brand-orange" strokeWidth={1.5} />
                </div>
                <h3 className="font-display text-brand-navy text-lg font-bold mb-3 group-hover:text-brand-orange transition-colors">
                  {svc.title}
                </h3>
                <p className="text-gray-500 text-sm leading-relaxed">{svc.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Site Areas + Contact (same as homepage) ── */}
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
          <div className="relative h-72 lg:h-80 hidden md:block">
            <Image
              src="https://images.unsplash.com/photo-1613665813446-82a78c468a1d?w=600&q=80"
              alt="Worker"
              fill
              className="object-cover object-top"
            />
          </div>
          <ContactForm />
        </div>
      </section>

      {/* ── Team ── */}
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
    </>
  );
}
