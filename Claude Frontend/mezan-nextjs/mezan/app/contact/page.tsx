"use client";
import { useState } from "react";
import { MapPin, Phone, Mail, Clock, Send, CheckCircle } from "lucide-react";
import PageHero from "@/components/PageHero";
import { siteConfig, contactContent } from "@/data/site";

export default function ContactPage() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    service: "",
    message: "",
  });
  const [submitted, setSubmitted] = useState(false);

  function handleChange(
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >
  ) {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  }

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setSubmitted(true);
  }

  const inputStyle: React.CSSProperties = {
    width: "100%",
    padding: "12px 14px",
    border: "1px solid #e5e7eb",
    borderRadius: 6,
    fontSize: 14,
    color: "#333",
    background: "#fff",
    outline: "none",
    fontFamily: "Open Sans, sans-serif",
  };

  const labelStyle: React.CSSProperties = {
    display: "block",
    fontSize: 13,
    fontWeight: 600,
    color: "#444",
    marginBottom: 6,
  };

  return (
    <>
      <PageHero
        title="Contact Us"
        crumbs={[
          { label: "Home", href: "/" },
          { label: "Contact Us" },
        ]}
      />

      {/* ── Main Contact Section ── */}
      <section
        style={{ maxWidth: 1200, margin: "0 auto", padding: "64px 20px" }}
      >
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "1fr 1fr",
            gap: 60,
            alignItems: "start",
          }}
        >
          {/* Left – Contact Form */}
          <div>
            <p
              style={{
                color: "#f5b800",
                fontFamily: "Raleway,sans-serif",
                fontSize: 12,
                fontWeight: 700,
                letterSpacing: 2,
                textTransform: "uppercase",
                marginBottom: 10,
              }}
            >
              {contactContent.subtitle}
            </p>
            <h2
              style={{
                fontFamily: "Raleway,sans-serif",
                fontSize: 30,
                fontWeight: 800,
                color: "#1a1a1a",
                whiteSpace: "pre-line",
                lineHeight: 1.2,
                marginBottom: 14,
              }}
            >
              {contactContent.title}
            </h2>
            <p
              style={{
                fontSize: 14,
                color: "#777",
                lineHeight: 1.7,
                marginBottom: 32,
              }}
            >
              {contactContent.description}
            </p>

            {submitted ? (
              <div
                style={{
                  background: "#f0fdf4",
                  border: "1px solid #86efac",
                  borderRadius: 10,
                  padding: "32px 24px",
                  textAlign: "center",
                }}
              >
                <CheckCircle
                  size={48}
                  color="#16a34a"
                  style={{ margin: "0 auto 16px" }}
                />
                <h3
                  style={{
                    fontFamily: "Raleway,sans-serif",
                    fontSize: 20,
                    fontWeight: 700,
                    color: "#16a34a",
                    marginBottom: 8,
                  }}
                >
                  Message Sent!
                </h3>
                <p style={{ fontSize: 14, color: "#555" }}>
                  Thank you for reaching out. Our team will get back to you
                  within 24 hours.
                </p>
                <button
                  onClick={() => {
                    setSubmitted(false);
                    setForm({
                      name: "",
                      email: "",
                      phone: "",
                      service: "",
                      message: "",
                    });
                  }}
                  style={{
                    marginTop: 20,
                    background: "#f5b800",
                    color: "#111",
                    fontWeight: 700,
                    fontSize: 14,
                    padding: "10px 24px",
                    borderRadius: 6,
                    border: "none",
                    cursor: "pointer",
                    fontFamily: "Raleway,sans-serif",
                  }}
                >
                  Send Another Message
                </button>
              </div>
            ) : (
              <form
                onSubmit={handleSubmit}
                style={{ display: "flex", flexDirection: "column", gap: 18 }}
              >
                <h3
                  style={{
                    fontFamily: "Raleway,sans-serif",
                    fontSize: 18,
                    fontWeight: 700,
                    color: "#1a1a1a",
                    marginBottom: 4,
                  }}
                >
                  {contactContent.formTitle}
                </h3>

                <div
                  style={{
                    display: "grid",
                    gridTemplateColumns: "1fr 1fr",
                    gap: 16,
                  }}
                >
                  <div>
                    <label style={labelStyle} htmlFor="name">
                      Full Name *
                    </label>
                    <input
                      id="name"
                      name="name"
                      type="text"
                      required
                      value={form.name}
                      onChange={handleChange}
                      placeholder="Your full name"
                      style={inputStyle}
                    />
                  </div>
                  <div>
                    <label style={labelStyle} htmlFor="email">
                      Email Address *
                    </label>
                    <input
                      id="email"
                      name="email"
                      type="email"
                      required
                      value={form.email}
                      onChange={handleChange}
                      placeholder="your@email.com"
                      style={inputStyle}
                    />
                  </div>
                </div>

                <div
                  style={{
                    display: "grid",
                    gridTemplateColumns: "1fr 1fr",
                    gap: 16,
                  }}
                >
                  <div>
                    <label style={labelStyle} htmlFor="phone">
                      Phone Number
                    </label>
                    <input
                      id="phone"
                      name="phone"
                      type="tel"
                      value={form.phone}
                      onChange={handleChange}
                      placeholder={siteConfig.phone}
                      style={inputStyle}
                    />
                  </div>
                  <div>
                    <label style={labelStyle} htmlFor="service">
                      Service Required
                    </label>
                    <select
                      id="service"
                      name="service"
                      value={form.service}
                      onChange={handleChange}
                      style={{ ...inputStyle, cursor: "pointer" }}
                    >
                      <option value="">Select a service</option>
                      {contactContent.services.map((svc) => (
                        <option key={svc} value={svc}>
                          {svc}
                        </option>
                      ))}
                    </select>
                  </div>
                </div>

                <div>
                  <label style={labelStyle} htmlFor="message">
                    Message *
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    required
                    rows={5}
                    value={form.message}
                    onChange={handleChange}
                    placeholder="Describe your issue or requirements..."
                    style={{ ...inputStyle, resize: "vertical" }}
                  />
                </div>

                <button
                  type="submit"
                  style={{
                    background: "#f5b800",
                    color: "#111",
                    fontWeight: 700,
                    fontSize: 15,
                    padding: "14px 32px",
                    borderRadius: 6,
                    border: "none",
                    cursor: "pointer",
                    fontFamily: "Raleway,sans-serif",
                    display: "flex",
                    alignItems: "center",
                    gap: 8,
                    width: "fit-content",
                    transition: "background 0.2s",
                  }}
                  onMouseOver={(e) => {
                    (e.currentTarget as HTMLElement).style.background =
                      "#e0a800";
                  }}
                  onMouseOut={(e) => {
                    (e.currentTarget as HTMLElement).style.background =
                      "#f5b800";
                  }}
                >
                  <Send size={16} /> Send Message
                </button>
              </form>
            )}
          </div>

          {/* Right – Info & Hours */}
          <div style={{ display: "flex", flexDirection: "column", gap: 32 }}>
            {/* Contact Details */}
            <div
              style={{
                background: "#f9f9f9",
                borderRadius: 12,
                padding: "32px 28px",
              }}
            >
              <h3
                style={{
                  fontFamily: "Raleway,sans-serif",
                  fontSize: 18,
                  fontWeight: 700,
                  color: "#1a1a1a",
                  marginBottom: 24,
                }}
              >
                Contact Information
              </h3>
              <div style={{ display: "flex", flexDirection: "column", gap: 20 }}>
                <div style={{ display: "flex", gap: 14, alignItems: "flex-start" }}>
                  <div
                    style={{
                      width: 44,
                      height: 44,
                      background: "#f5b800",
                      borderRadius: 8,
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      flexShrink: 0,
                    }}
                  >
                    <MapPin size={18} color="#111" />
                  </div>
                  <div>
                    <div
                      style={{
                        fontSize: 13,
                        fontWeight: 700,
                        color: "#1a1a1a",
                        marginBottom: 3,
                      }}
                    >
                      Our Address
                    </div>
                    <div style={{ fontSize: 14, color: "#666", lineHeight: 1.5 }}>
                      {siteConfig.contactAddress}
                    </div>
                  </div>
                </div>

                <div style={{ display: "flex", gap: 14, alignItems: "flex-start" }}>
                  <div
                    style={{
                      width: 44,
                      height: 44,
                      background: "#f5b800",
                      borderRadius: 8,
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      flexShrink: 0,
                    }}
                  >
                    <Phone size={18} color="#111" />
                  </div>
                  <div>
                    <div
                      style={{
                        fontSize: 13,
                        fontWeight: 700,
                        color: "#1a1a1a",
                        marginBottom: 3,
                      }}
                    >
                      Phone Numbers
                    </div>
                    <a
                      href={`tel:${siteConfig.phone}`}
                      style={{
                        fontSize: 14,
                        color: "#666",
                        textDecoration: "none",
                        display: "block",
                      }}
                    >
                      {siteConfig.phone}
                    </a>
                    <a
                      href={`tel:${siteConfig.phone2}`}
                      style={{
                        fontSize: 14,
                        color: "#666",
                        textDecoration: "none",
                        display: "block",
                        marginTop: 2,
                      }}
                    >
                      {siteConfig.phone2}
                    </a>
                  </div>
                </div>

                <div style={{ display: "flex", gap: 14, alignItems: "flex-start" }}>
                  <div
                    style={{
                      width: 44,
                      height: 44,
                      background: "#f5b800",
                      borderRadius: 8,
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      flexShrink: 0,
                    }}
                  >
                    <Mail size={18} color="#111" />
                  </div>
                  <div>
                    <div
                      style={{
                        fontSize: 13,
                        fontWeight: 700,
                        color: "#1a1a1a",
                        marginBottom: 3,
                      }}
                    >
                      Email Address
                    </div>
                    <a
                      href={`mailto:${siteConfig.contactEmail}`}
                      style={{
                        fontSize: 14,
                        color: "#666",
                        textDecoration: "none",
                      }}
                    >
                      {siteConfig.contactEmail}
                    </a>
                  </div>
                </div>
              </div>
            </div>

            {/* Working Hours */}
            <div
              style={{
                background: "#1a1a1a",
                borderRadius: 12,
                padding: "32px 28px",
              }}
            >
              <div style={{ display: "flex", alignItems: "center", gap: 10, marginBottom: 24 }}>
                <Clock size={20} color="#f5b800" />
                <h3
                  style={{
                    fontFamily: "Raleway,sans-serif",
                    fontSize: 18,
                    fontWeight: 700,
                    color: "#fff",
                    margin: 0,
                  }}
                >
                  Working Hours
                </h3>
              </div>
              <div style={{ display: "flex", flexDirection: "column", gap: 14 }}>
                {contactContent.workingHours.map((item) => (
                  <div
                    key={item.day}
                    style={{
                      display: "flex",
                      justifyContent: "space-between",
                      alignItems: "center",
                      borderBottom: "1px solid #2a2a2a",
                      paddingBottom: 14,
                    }}
                  >
                    <span style={{ fontSize: 14, color: "#bbb" }}>{item.day}</span>
                    <span
                      style={{
                        fontSize: 14,
                        fontWeight: 700,
                        color: item.hours === "Emergency Only" ? "#f5b800" : "#fff",
                      }}
                    >
                      {item.hours}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── Map Placeholder ── */}
      <section style={{ height: 380, position: "relative", overflow: "hidden" }}>
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src="https://images.unsplash.com/photo-1524661135-423995f22d0b?w=1400&q=80"
          alt="Map location"
          style={{ width: "100%", height: "100%", objectFit: "cover", display: "block", filter: "grayscale(0.3)" }}
        />
        <div
          style={{
            position: "absolute",
            inset: 0,
            background: "rgba(245,184,0,0.08)",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <div
            style={{
              background: "#fff",
              borderRadius: 12,
              padding: "20px 28px",
              boxShadow: "0 8px 32px rgba(0,0,0,0.18)",
              textAlign: "center",
            }}
          >
            <MapPin size={28} color="#f5b800" style={{ margin: "0 auto 8px" }} />
            <div
              style={{
                fontFamily: "Raleway,sans-serif",
                fontSize: 16,
                fontWeight: 700,
                color: "#1a1a1a",
                marginBottom: 4,
              }}
            >
              {siteConfig.name}
            </div>
            <div style={{ fontSize: 13, color: "#666" }}>{siteConfig.contactAddress}</div>
          </div>
        </div>
      </section>
    </>
  );
}
