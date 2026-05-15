"use client";
import { useState } from "react";
import PageBanner from "@/components/shared/PageBanner";
import { CONTACT } from "@/lib/config";

const INITIAL = {
  name: "",
  email: "",
  phone: "",
  subject: "",
  message: "",
};

export default function ContactPage() {
  const [form, setForm] = useState(INITIAL);
  const [sent, setSent] = useState(false);

  function handleChange(
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  }

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setSent(true);
  }

  return (
    <>
      <PageBanner
        title="Contact Us"
        breadcrumbs={[{ label: "Contact" }]}
      />

      <section className="sp-section">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            {/* Info */}
            <div>
              <p className="sp-kicker">Get In Touch</p>
              <h2 className="sp-section-title mt-2">We&apos;d Love To Hear From You!</h2>
              <hr className="sp-divider mt-4" />
              <p className="text-base mt-4" style={{ color: "var(--sp-muted)" }}>
                If you have any questions or need help, feel free to contact
                with our team. Our experts are available Mon–Fri, 8am–6pm.
              </p>

              <div className="mt-8 space-y-5">
                {[
                  { icon: "📞", label: "Phone", value: CONTACT.phone, href: `tel:${CONTACT.phone.replace(/[^+\d]/g, "")}` },
                  { icon: "📧", label: "Email", value: CONTACT.email, href: `mailto:${CONTACT.email}` },
                  { icon: "📍", label: "Address", value: CONTACT.address, href: CONTACT.mapsUrl },
                ].map((item) => (
                  <div key={item.label} className="flex items-start gap-4 p-4 rounded-xl" style={{ background: "var(--sp-surface)" }}>
                    <span className="text-2xl flex-shrink-0 mt-0.5">{item.icon}</span>
                    <div>
                      <p className="text-xs font-bold uppercase tracking-wider mb-1" style={{ color: "var(--sp-muted)" }}>
                        {item.label}
                      </p>
                      <a
                        href={item.href}
                        target={item.label === "Address" ? "_blank" : undefined}
                        rel="noopener noreferrer"
                        className="text-sm font-semibold hover:underline"
                        style={{ color: "var(--sp-text)" }}
                      >
                        {item.value}
                      </a>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Form */}
            <div className="lg:col-span-2">
              <div className="rounded-xl p-8" style={{ background: "var(--sp-surface)" }}>
                {sent ? (
                  <div className="text-center py-12">
                    <span className="text-5xl">✅</span>
                    <h3 className="font-bold text-xl mt-4" style={{ color: "var(--sp-text)" }}>
                      Message Sent!
                    </h3>
                    <p className="mt-2" style={{ color: "var(--sp-muted)" }}>
                      We&apos;ll get back to you within 24 hours.
                    </p>
                    <button
                      type="button"
                      onClick={() => setSent(false)}
                      className="sp-btn sp-btn-primary mt-6"
                    >
                      Send Another
                    </button>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} noValidate>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                      <div>
                        <label className="block text-sm font-semibold mb-1.5" style={{ color: "var(--sp-text)" }} htmlFor="name">
                          Full Name *
                        </label>
                        <input
                          type="text"
                          id="name"
                          name="name"
                          required
                          value={form.name}
                          onChange={handleChange}
                          placeholder="John Morrison"
                          className="w-full px-4 py-3 rounded-lg text-sm outline-none transition-all"
                          style={{
                            background: "var(--sp-bg)",
                            border: "1px solid var(--sp-border)",
                            color: "var(--sp-text)",
                          }}
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-semibold mb-1.5" style={{ color: "var(--sp-text)" }} htmlFor="email">
                          Email Address *
                        </label>
                        <input
                          type="email"
                          id="email"
                          name="email"
                          required
                          value={form.email}
                          onChange={handleChange}
                          placeholder="john@example.com"
                          className="w-full px-4 py-3 rounded-lg text-sm outline-none transition-all"
                          style={{
                            background: "var(--sp-bg)",
                            border: "1px solid var(--sp-border)",
                            color: "var(--sp-text)",
                          }}
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-semibold mb-1.5" style={{ color: "var(--sp-text)" }} htmlFor="phone">
                          Phone Number
                        </label>
                        <input
                          type="tel"
                          id="phone"
                          name="phone"
                          value={form.phone}
                          onChange={handleChange}
                          placeholder="+1 (555) 000-0000"
                          className="w-full px-4 py-3 rounded-lg text-sm outline-none transition-all"
                          style={{
                            background: "var(--sp-bg)",
                            border: "1px solid var(--sp-border)",
                            color: "var(--sp-text)",
                          }}
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-semibold mb-1.5" style={{ color: "var(--sp-text)" }} htmlFor="subject">
                          Subject *
                        </label>
                        <input
                          type="text"
                          id="subject"
                          name="subject"
                          required
                          value={form.subject}
                          onChange={handleChange}
                          placeholder="Solar installation enquiry"
                          className="w-full px-4 py-3 rounded-lg text-sm outline-none transition-all"
                          style={{
                            background: "var(--sp-bg)",
                            border: "1px solid var(--sp-border)",
                            color: "var(--sp-text)",
                          }}
                        />
                      </div>
                      <div className="sm:col-span-2">
                        <label className="block text-sm font-semibold mb-1.5" style={{ color: "var(--sp-text)" }} htmlFor="message">
                          Message *
                        </label>
                        <textarea
                          id="message"
                          name="message"
                          required
                          rows={5}
                          value={form.message}
                          onChange={handleChange}
                          placeholder="Tell us about your project..."
                          className="w-full px-4 py-3 rounded-lg text-sm outline-none transition-all resize-none"
                          style={{
                            background: "var(--sp-bg)",
                            border: "1px solid var(--sp-border)",
                            color: "var(--sp-text)",
                          }}
                        />
                      </div>
                    </div>
                    <button type="submit" className="sp-btn sp-btn-primary mt-6 w-full justify-center">
                      Send Message
                    </button>
                  </form>
                )}
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
