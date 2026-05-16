"use client";
import { useState } from "react";
import PageHero from "@/components/PageHero";
import { Phone, Mail, MapPin, Clock, Send } from "lucide-react";

export default function ContactPage() {
  const [form, setForm] = useState({ name: "", email: "", phone: "", subject: "", message: "" });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 4000);
    setForm({ name: "", email: "", phone: "", subject: "", message: "" });
  };

  return (
    <>
      <PageHero
        title="Contact Us"
        breadcrumbs={[
          { label: "Apex", href: "/" },
          { label: "Contact" },
        ]}
        imageUrl="https://images.unsplash.com/photo-1541888946425-d81bb19240f5?w=1920&q=80"
      />

      {/* Info Cards */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-16">
            {[
              { icon: Phone, label: "Phone", value: "(+1) 800 555 2020" },
              { icon: Mail, label: "Email", value: "apex@example.com" },
              { icon: MapPin, label: "Address", value: "123 Construction Ave, NY" },
              { icon: Clock, label: "Hours", value: "Mon–Fri: 09:00–19:00" },
            ].map(({ icon: Icon, label, value }) => (
              <div key={label} className="border border-gray-100 p-6 text-center service-card">
                <div className="w-14 h-14 mx-auto mb-4 bg-brand-orange/10 flex items-center justify-center">
                  <Icon size={24} className="text-brand-orange" />
                </div>
                <h4 className="font-display text-brand-navy font-bold mb-1">{label}</h4>
                <p className="text-gray-500 text-sm">{value}</p>
              </div>
            ))}
          </div>

          {/* Contact Form */}
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-10">
              <div className="section-label justify-center">Send Us a Message</div>
              <h2 className="section-title text-center">Get In Touch With Us</h2>
            </div>
            <form onSubmit={handleSubmit} className="grid grid-cols-1 md:grid-cols-2 gap-5">
              <input
                type="text"
                placeholder="Your Name *"
                value={form.name}
                onChange={(e) => setForm({ ...form, name: e.target.value })}
                required
                className="border border-gray-200 px-4 py-3 text-sm text-gray-700 w-full focus:border-brand-orange focus:outline-none"
              />
              <input
                type="email"
                placeholder="Email Address *"
                value={form.email}
                onChange={(e) => setForm({ ...form, email: e.target.value })}
                required
                className="border border-gray-200 px-4 py-3 text-sm text-gray-700 w-full focus:border-brand-orange focus:outline-none"
              />
              <input
                type="tel"
                placeholder="Phone Number"
                value={form.phone}
                onChange={(e) => setForm({ ...form, phone: e.target.value })}
                className="border border-gray-200 px-4 py-3 text-sm text-gray-700 w-full focus:border-brand-orange focus:outline-none"
              />
              <input
                type="text"
                placeholder="Subject"
                value={form.subject}
                onChange={(e) => setForm({ ...form, subject: e.target.value })}
                className="border border-gray-200 px-4 py-3 text-sm text-gray-700 w-full focus:border-brand-orange focus:outline-none"
              />
              <textarea
                placeholder="Your Message *"
                rows={5}
                value={form.message}
                onChange={(e) => setForm({ ...form, message: e.target.value })}
                required
                className="border border-gray-200 px-4 py-3 text-sm text-gray-700 w-full md:col-span-2 focus:border-brand-orange focus:outline-none resize-none"
              />
              <div className="md:col-span-2 flex justify-center">
                <button
                  type="submit"
                  className="bg-brand-orange text-white px-10 py-3.5 text-sm font-bold uppercase tracking-widest hover:bg-brand-orange-dark transition-colors flex items-center gap-2"
                >
                  <Send size={16} />
                  {submitted ? "Message Sent Successfully!" : "Send Message"}
                </button>
              </div>
            </form>
          </div>
        </div>
      </section>
    </>
  );
}
