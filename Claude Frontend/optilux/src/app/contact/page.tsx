"use client";
import { useState } from "react";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import { PageHero } from "@/components/ui/shared";

const locations = [
  { city: "New York", address: "100 S Main St, New York, NY 10001", phone: "(212) 555-0199", email: "contact@optilux-ny.com" },
  { city: "Los Angeles", address: "742 S Olive St, Los Angeles, CA 90014", phone: "(310) 555-0147", email: "contact@optilux-la.com" },
  { city: "Chicago", address: "780 W Madison St, Chicago, IL 60661", phone: "(312) 555-0178", email: "ccontact@optilux-hi.com" },
  { city: "Miami", address: "500 Ocean Dr, Miami, FL 33139", phone: "(305) 555-0123", email: "miacontact@optilux-mi.com" },
];

export default function ContactPage() {
  const [form, setForm] = useState({ name: "", email: "", phone: "", message: "" });
  const [sent, setSent] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSent(true);
    setForm({ name: "", email: "", phone: "", message: "" });
  };

  return (
    <>
      <Navbar />
      <main className="flex-1">
        <PageHero title="Contact Us" breadcrumb={[{ label: "Home", href: "/" }, { label: "Contact Us" }]} />

        <section className="py-20 max-w-7xl mx-auto px-4 sm:px-6">
          <div className="grid lg:grid-cols-[1fr_420px] gap-16 items-start">
            {/* Locations */}
            <div className="grid sm:grid-cols-2 gap-8">
              {locations.map((loc) => (
                <div key={loc.city}>
                  <h3 className="text-base font-bold text-[#1B3C4A] mb-2">{loc.city}</h3>
                  <p className="text-sm text-[#4A6572] mb-1">{loc.address}</p>
                  <p className="text-sm text-[#4A6572] mb-1">{loc.phone}</p>
                  <p className="text-sm text-[#4A6572]">{loc.email}</p>
                </div>
              ))}
            </div>

            {/* Form */}
            <div>
              {sent ? (
                <div className="bg-[#EAF8F6] rounded-2xl p-8 text-center">
                  <div className="w-16 h-16 bg-[#00B5A3] rounded-full flex items-center justify-center mx-auto mb-4">
                    <svg width="28" height="28" fill="none" viewBox="0 0 24 24" stroke="white" strokeWidth="2"><path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7"/></svg>
                  </div>
                  <h3 className="text-[#1B3C4A] font-bold text-lg mb-2">Message Sent!</h3>
                  <p className="text-sm text-[#4A6572]">We&apos;ll get back to you within 24 hours.</p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                  {[
                    { name: "name", placeholder: "Your Name", type: "text" },
                    { name: "email", placeholder: "Your Email", type: "email" },
                    { name: "phone", placeholder: "Your Phone", type: "tel" },
                  ].map((field) => (
                    <input
                      key={field.name}
                      type={field.type}
                      placeholder={field.placeholder}
                      value={form[field.name as keyof typeof form]}
                      onChange={(e) => setForm({ ...form, [field.name]: e.target.value })}
                      className="w-full px-4 py-3 border border-[#E2EEF2] rounded-xl text-sm text-[#1B3C4A] placeholder-[#B0CDD8] focus:outline-none focus:border-[#00B5A3] transition-colors"
                    />
                  ))}
                  <textarea
                    placeholder="Your Message"
                    rows={5}
                    value={form.message}
                    onChange={(e) => setForm({ ...form, message: e.target.value })}
                    className="w-full px-4 py-3 border border-[#E2EEF2] rounded-xl text-sm text-[#1B3C4A] placeholder-[#B0CDD8] focus:outline-none focus:border-[#00B5A3] transition-colors resize-none"
                  />
                  <button
                    type="submit"
                    className="w-full py-3.5 bg-[#00B5A3] text-white font-semibold rounded-full text-sm hover:bg-[#009E8E] transition-colors"
                  >
                    Send Message
                  </button>
                </form>
              )}
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
