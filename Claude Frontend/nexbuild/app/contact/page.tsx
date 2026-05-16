"use client";

import { useState }   from "react";
import { PageHero }   from "@/components/layout/PageHero";
import { Container, SectionLabel, Heading } from "@/components/ui/primitives";
import { SITE_CONFIG } from "@/constants";
import { Phone, Mail, MapPin, Clock, Send, CheckCircle } from "lucide-react";

const CONTACT_INFO = [
  {
    icon:  Phone,
    label: "Phone",
    value: SITE_CONFIG.phone,
    href:  `tel:${SITE_CONFIG.phone}`,
  },
  {
    icon:  Mail,
    label: "Email",
    value: SITE_CONFIG.email,
    href:  `mailto:${SITE_CONFIG.email}`,
  },
  {
    icon:  MapPin,
    label: "Address",
    value: SITE_CONFIG.address,
    href:  "#map",
  },
  {
    icon:  Clock,
    label: "Hours",
    value: SITE_CONFIG.hours,
    href:  undefined,
  },
];

export default function ContactPage() {
  const [form, setForm]     = useState({ name: "", email: "", phone: "", subject: "", message: "" });
  const [sent, setSent]     = useState(false);
  const [loading, setLoad]  = useState(false);

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setLoad(true);
    await new Promise((r) => setTimeout(r, 1200)); // simulate API
    setSent(true);
    setLoad(false);
  }

  return (
    <>
      <PageHero
        title="Contact Us"
        breadcrumbs={[
          { label: "NexBuild", href: "/" },
          { label: "Contact" },
        ]}
      />

      {/* Info Cards */}
      <section className="py-16 bg-[#F7F8FC] border-b border-neutral-100">
        <Container>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {CONTACT_INFO.map(({ icon: Icon, label, value, href }) => {
              const Content = (
                <div className="flex flex-col items-center text-center p-6 bg-white rounded-ds-lg border border-neutral-100 shadow-ds-sm h-full">
                  <div className="w-12 h-12 rounded-full bg-accent/10 flex items-center justify-center mb-4">
                    <Icon className="w-5 h-5 text-accent" />
                  </div>
                  <p className="text-xs font-accent font-semibold uppercase tracking-widest text-neutral-400 mb-2">
                    {label}
                  </p>
                  <p className="text-sm text-neutral-700 font-body leading-snug">{value}</p>
                </div>
              );
              return href ? (
                <a key={label} href={href} className="block hover:shadow-ds-md transition-shadow">
                  {Content}
                </a>
              ) : (
                <div key={label}>{Content}</div>
              );
            })}
          </div>
        </Container>
      </section>

      {/* Form + Map */}
      <section className="py-20 md:py-28 bg-white">
        <Container>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-14">

            {/* Form */}
            <div>
              <SectionLabel>Send a Message</SectionLabel>
              <Heading size="md" className="mt-2 mb-8">
                Let&apos;s Start a <span className="text-accent">Conversation</span>
              </Heading>

              {sent ? (
                <div className="flex flex-col items-center text-center py-16 px-8 bg-[#F7F8FC] rounded-ds-xl">
                  <CheckCircle className="w-16 h-16 text-accent mb-5" />
                  <h3 className="heading-display text-2xl text-primary mb-3">Message Sent!</h3>
                  <p className="text-neutral-500 font-body">
                    Thank you for reaching out. A member of our team will respond within one business day.
                  </p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-5">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                    <div>
                      <label className="block text-xs font-accent font-semibold uppercase tracking-widest text-neutral-500 mb-2">
                        Full Name *
                      </label>
                      <input
                        type="text"
                        required
                        value={form.name}
                        onChange={(e) => setForm({ ...form, name: e.target.value })}
                        placeholder="John Smith"
                        className="w-full border border-neutral-200 rounded-ds-sm px-4 py-3 text-sm font-body outline-none focus:border-accent transition-colors placeholder-neutral-400"
                      />
                    </div>
                    <div>
                      <label className="block text-xs font-accent font-semibold uppercase tracking-widest text-neutral-500 mb-2">
                        Email Address *
                      </label>
                      <input
                        type="email"
                        required
                        value={form.email}
                        onChange={(e) => setForm({ ...form, email: e.target.value })}
                        placeholder="john@company.com"
                        className="w-full border border-neutral-200 rounded-ds-sm px-4 py-3 text-sm font-body outline-none focus:border-accent transition-colors placeholder-neutral-400"
                      />
                    </div>
                  </div>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                    <div>
                      <label className="block text-xs font-accent font-semibold uppercase tracking-widest text-neutral-500 mb-2">
                        Phone
                      </label>
                      <input
                        type="tel"
                        value={form.phone}
                        onChange={(e) => setForm({ ...form, phone: e.target.value })}
                        placeholder="+1 (555) 000-0000"
                        className="w-full border border-neutral-200 rounded-ds-sm px-4 py-3 text-sm font-body outline-none focus:border-accent transition-colors placeholder-neutral-400"
                      />
                    </div>
                    <div>
                      <label className="block text-xs font-accent font-semibold uppercase tracking-widest text-neutral-500 mb-2">
                        Subject
                      </label>
                      <select
                        value={form.subject}
                        onChange={(e) => setForm({ ...form, subject: e.target.value })}
                        className="w-full border border-neutral-200 rounded-ds-sm px-4 py-3 text-sm font-body outline-none focus:border-accent transition-colors text-neutral-600 bg-white"
                      >
                        <option value="">Select a topic…</option>
                        <option>Project Enquiry</option>
                        <option>Cost Estimate Request</option>
                        <option>Partnership Opportunity</option>
                        <option>General Enquiry</option>
                      </select>
                    </div>
                  </div>
                  <div>
                    <label className="block text-xs font-accent font-semibold uppercase tracking-widest text-neutral-500 mb-2">
                      Message *
                    </label>
                    <textarea
                      required
                      rows={6}
                      value={form.message}
                      onChange={(e) => setForm({ ...form, message: e.target.value })}
                      placeholder="Tell us about your project…"
                      className="w-full border border-neutral-200 rounded-ds-sm px-4 py-3 text-sm font-body outline-none focus:border-accent transition-colors resize-none placeholder-neutral-400"
                    />
                  </div>
                  <button
                    type="submit"
                    disabled={loading}
                    className="inline-flex items-center gap-2 bg-accent hover:bg-accent-dark text-white font-accent font-semibold px-8 py-4 rounded-ds-sm transition-colors disabled:opacity-60"
                  >
                    {loading ? (
                      <>
                        <div className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                        Sending…
                      </>
                    ) : (
                      <>
                        <Send className="w-4 h-4" />
                        Send Message
                      </>
                    )}
                  </button>
                </form>
              )}
            </div>

            {/* Map placeholder */}
            <div id="map" className="relative rounded-ds-xl overflow-hidden bg-neutral-100 min-h-[400px] lg:min-h-0">
              <div className="absolute inset-0 flex flex-col items-center justify-center text-center p-8 bg-gradient-to-br from-primary/10 to-primary/5">
                <MapPin className="w-12 h-12 text-accent mb-4" />
                <p className="heading-display text-xl text-primary mb-2">Our Headquarters</p>
                <p className="text-sm text-neutral-500 font-body">{SITE_CONFIG.address}</p>
                <a
                  href="https://maps.google.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-6 inline-flex items-center gap-2 bg-accent text-white font-accent font-semibold px-5 py-2.5 rounded-ds-sm text-sm hover:bg-accent-dark transition-colors"
                >
                  Open in Google Maps
                </a>
              </div>
            </div>
          </div>
        </Container>
      </section>
    </>
  );
}
