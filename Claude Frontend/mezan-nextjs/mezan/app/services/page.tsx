"use client";
import Link from "next/link";
import { Check, Phone, ArrowRight } from "lucide-react";
import PageHero from "@/components/PageHero";
import { servicesContent, ctaBanner, siteConfig } from "@/data/site";

export default function ServicesPage() {
  return (
    <>
      <PageHero
        title="Our Services"
        crumbs={[
          { label: "Home", href: "/" },
          { label: "Our Services" },
        ]}
      />

      {/* ── Intro ── */}
      <section style={{ maxWidth: 1200, margin: "0 auto", padding: "64px 20px 48px", textAlign: "center" }}>
        <p
          style={{
            color: "#f5b800",
            fontFamily: "Raleway,sans-serif",
            fontSize: 12,
            fontWeight: 700,
            letterSpacing: 2,
            textTransform: "uppercase",
            marginBottom: 12,
          }}
        >
          {servicesContent.subtitle}
        </p>
        <h1
          style={{
            fontFamily: "Raleway,sans-serif",
            fontSize: "clamp(26px,3.5vw,40px)",
            fontWeight: 800,
            color: "#1a1a1a",
            whiteSpace: "pre-line",
            lineHeight: 1.2,
            marginBottom: 18,
          }}
        >
          {servicesContent.title}
        </h1>
        <p
          style={{
            fontSize: 15,
            color: "#777",
            lineHeight: 1.7,
            maxWidth: 640,
            margin: "0 auto",
          }}
        >
          {servicesContent.description}
        </p>
      </section>

      {/* ── Services Grid ── */}
      <section style={{ maxWidth: 1200, margin: "0 auto", padding: "0 20px 64px" }}>
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(3,1fr)",
            gap: 28,
          }}
        >
          {servicesContent.services.map((service) => (
            <div
              key={service.id}
              style={{
                background: "#fff",
                border: "1px solid #eee",
                borderRadius: 12,
                padding: "32px 28px",
                transition: "all 0.25s",
                cursor: "default",
              }}
              onMouseOver={(e) => {
                const el = e.currentTarget as HTMLElement;
                el.style.boxShadow = "0 8px 32px rgba(0,0,0,0.1)";
                el.style.borderColor = "#f5b800";
                el.style.transform = "translateY(-4px)";
              }}
              onMouseOut={(e) => {
                const el = e.currentTarget as HTMLElement;
                el.style.boxShadow = "none";
                el.style.borderColor = "#eee";
                el.style.transform = "translateY(0)";
              }}
            >
              {/* Icon */}
              <div
                style={{
                  width: 64,
                  height: 64,
                  background: "#fff8e1",
                  borderRadius: 12,
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  fontSize: 30,
                  marginBottom: 20,
                }}
              >
                {service.emoji}
              </div>

              {/* Title */}
              <h2
                style={{
                  fontFamily: "Raleway,sans-serif",
                  fontSize: 20,
                  fontWeight: 800,
                  color: "#1a1a1a",
                  marginBottom: 10,
                }}
              >
                {service.title}
              </h2>

              {/* Description */}
              <p
                style={{
                  fontSize: 14,
                  color: "#666",
                  lineHeight: 1.7,
                  marginBottom: 20,
                }}
              >
                {service.description}
              </p>

              {/* Features */}
              <ul
                style={{
                  listStyle: "none",
                  padding: 0,
                  marginBottom: 24,
                  display: "flex",
                  flexDirection: "column",
                  gap: 8,
                }}
              >
                {service.features.map((feat) => (
                  <li
                    key={feat}
                    style={{
                      display: "flex",
                      alignItems: "center",
                      gap: 8,
                      fontSize: 13,
                      color: "#555",
                    }}
                  >
                    <Check size={13} color="#f5b800" style={{ flexShrink: 0 }} />
                    {feat}
                  </li>
                ))}
              </ul>

              {/* Price & CTA */}
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "space-between",
                  paddingTop: 16,
                  borderTop: "1px solid #eee",
                }}
              >
                <div>
                  <span style={{ fontSize: 12, color: "#aaa" }}>Starting from</span>
                  <div
                    style={{
                      fontFamily: "Raleway,sans-serif",
                      fontSize: 22,
                      fontWeight: 800,
                      color: "#f5b800",
                    }}
                  >
                    ${service.priceFrom}
                  </div>
                </div>
                <Link
                  href="/contact"
                  style={{
                    display: "inline-flex",
                    alignItems: "center",
                    gap: 5,
                    background: "#1a1a1a",
                    color: "#fff",
                    fontWeight: 700,
                    fontSize: 13,
                    padding: "10px 18px",
                    borderRadius: 6,
                    textDecoration: "none",
                    fontFamily: "Raleway,sans-serif",
                    transition: "background 0.2s",
                  }}
                  onMouseOver={(e) => {
                    (e.currentTarget as HTMLElement).style.background = "#f5b800";
                    (e.currentTarget as HTMLElement).style.color = "#111";
                  }}
                  onMouseOut={(e) => {
                    (e.currentTarget as HTMLElement).style.background = "#1a1a1a";
                    (e.currentTarget as HTMLElement).style.color = "#fff";
                  }}
                >
                  Book Now <ArrowRight size={13} />
                </Link>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ── How It Works ── */}
      <section style={{ background: "#f9f9f9", padding: "64px 20px" }}>
        <div style={{ maxWidth: 1200, margin: "0 auto" }}>
          <div style={{ textAlign: "center", marginBottom: 48 }}>
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
              OUR PROCESS
            </p>
            <h2
              style={{
                fontFamily: "Raleway,sans-serif",
                fontSize: 32,
                fontWeight: 800,
                color: "#1a1a1a",
              }}
            >
              {servicesContent.process.title}
            </h2>
          </div>

          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(4,1fr)",
              gap: 32,
              position: "relative",
            }}
          >
            {servicesContent.process.steps.map((step, i) => (
              <div
                key={step.step}
                style={{
                  textAlign: "center",
                  padding: "32px 20px",
                  background: "#fff",
                  borderRadius: 12,
                  border: "1px solid #eee",
                  position: "relative",
                }}
              >
                {/* Connector line */}
                {i < servicesContent.process.steps.length - 1 && (
                  <div
                    style={{
                      position: "absolute",
                      top: "50px",
                      right: "-16px",
                      width: 32,
                      height: 2,
                      background: "#f5b800",
                      zIndex: 1,
                    }}
                  />
                )}

                {/* Step number */}
                <div
                  style={{
                    width: 64,
                    height: 64,
                    background: "#f5b800",
                    borderRadius: "50%",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    margin: "0 auto 20px",
                    fontFamily: "Raleway,sans-serif",
                    fontSize: 22,
                    fontWeight: 800,
                    color: "#111",
                  }}
                >
                  {step.step}
                </div>

                <h3
                  style={{
                    fontFamily: "Raleway,sans-serif",
                    fontSize: 17,
                    fontWeight: 700,
                    color: "#1a1a1a",
                    marginBottom: 10,
                  }}
                >
                  {step.title}
                </h3>
                <p
                  style={{
                    fontSize: 13,
                    color: "#777",
                    lineHeight: 1.6,
                  }}
                >
                  {step.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA Banner ── */}
      <section style={{ background: "#f5b800", padding: "40px 20px" }}>
        <div
          style={{
            maxWidth: 1200,
            margin: "0 auto",
            display: "grid",
            gridTemplateColumns: "64px 1fr auto",
            gap: 24,
            alignItems: "center",
          }}
        >
          <div
            style={{
              width: 64,
              height: 64,
              background: "rgba(0,0,0,0.12)",
              borderRadius: "50%",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              fontSize: 28,
            }}
          >
            🔧
          </div>
          <div>
            <p
              style={{
                fontSize: 14,
                color: "#333",
                lineHeight: 1.7,
                marginBottom: 8,
              }}
            >
              {ctaBanner.text}
            </p>
            <div style={{ display: "flex", gap: 16, flexWrap: "wrap" }}>
              {ctaBanner.phones.map((ph) => (
                <a
                  key={ph}
                  href={`tel:${ph}`}
                  style={{
                    color: "#111",
                    fontWeight: 700,
                    fontSize: 13,
                    textDecoration: "underline",
                    display: "flex",
                    alignItems: "center",
                    gap: 4,
                  }}
                >
                  <Phone size={13} /> {ph}
                </a>
              ))}
            </div>
          </div>
          <Link
            href="/contact"
            style={{
              background: "#1a1a1a",
              color: "#fff",
              fontWeight: 700,
              fontSize: 14,
              padding: "13px 26px",
              borderRadius: 6,
              textDecoration: "none",
              whiteSpace: "nowrap",
              fontFamily: "Raleway,sans-serif",
              transition: "background 0.2s",
            }}
            onMouseOver={(e) => {
              (e.currentTarget as HTMLElement).style.background = "#333";
            }}
            onMouseOut={(e) => {
              (e.currentTarget as HTMLElement).style.background = "#1a1a1a";
            }}
          >
            {ctaBanner.cta}
          </Link>
        </div>
      </section>

      {/* ── Why Choose Us ── */}
      <section style={{ maxWidth: 1200, margin: "0 auto", padding: "64px 20px" }}>
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "1fr 1fr",
            gap: 60,
            alignItems: "center",
          }}
        >
          {/* Left - image */}
          <div style={{ borderRadius: 12, overflow: "hidden" }}>
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src="https://images.unsplash.com/photo-1504307651254-35680f356dfd?w=700&q=80"
              alt="Professional services"
              style={{
                width: "100%",
                height: 420,
                objectFit: "cover",
                display: "block",
              }}
            />
          </div>

          {/* Right - content */}
          <div>
            <p
              style={{
                color: "#f5b800",
                fontFamily: "Raleway,sans-serif",
                fontSize: 12,
                fontWeight: 700,
                letterSpacing: 2,
                textTransform: "uppercase",
                marginBottom: 12,
              }}
            >
              WHY CHOOSE US
            </p>
            <h2
              style={{
                fontFamily: "Raleway,sans-serif",
                fontSize: 30,
                fontWeight: 800,
                color: "#1a1a1a",
                lineHeight: 1.2,
                marginBottom: 18,
              }}
            >
              Trusted By Thousands Of Happy Customers
            </h2>
            <p
              style={{
                fontSize: 14,
                color: "#777",
                lineHeight: 1.7,
                marginBottom: 28,
              }}
            >
              {siteConfig.description}
            </p>

            <div
              style={{ display: "flex", flexDirection: "column", gap: 16 }}
            >
              {[
                {
                  title: "Certified Professionals",
                  desc: "All our technicians are certified and background-checked.",
                },
                {
                  title: "Transparent Pricing",
                  desc: "No hidden charges. You get a clear quote before we start.",
                },
                {
                  title: "Same-Day Service",
                  desc: "Quick response and same-day booking available for urgent needs.",
                },
                {
                  title: "Satisfaction Guaranteed",
                  desc: "We don't stop until you're completely satisfied with the result.",
                },
              ].map((item) => (
                <div
                  key={item.title}
                  style={{ display: "flex", gap: 14, alignItems: "flex-start" }}
                >
                  <div
                    style={{
                      width: 36,
                      height: 36,
                      background: "#f5b800",
                      borderRadius: "50%",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      flexShrink: 0,
                      marginTop: 2,
                    }}
                  >
                    <Check size={16} color="#111" />
                  </div>
                  <div>
                    <h4
                      style={{
                        fontFamily: "Raleway,sans-serif",
                        fontSize: 15,
                        fontWeight: 700,
                        color: "#1a1a1a",
                        marginBottom: 3,
                      }}
                    >
                      {item.title}
                    </h4>
                    <p style={{ fontSize: 13, color: "#777", lineHeight: 1.5 }}>
                      {item.desc}
                    </p>
                  </div>
                </div>
              ))}
            </div>

            <div style={{ marginTop: 32, display: "flex", gap: 14 }}>
              <Link
                href="/contact"
                style={{
                  background: "#f5b800",
                  color: "#111",
                  fontWeight: 700,
                  fontSize: 14,
                  padding: "12px 28px",
                  borderRadius: 6,
                  textDecoration: "none",
                  fontFamily: "Raleway,sans-serif",
                  transition: "background 0.2s",
                }}
                onMouseOver={(e) => {
                  (e.currentTarget as HTMLElement).style.background = "#e0a800";
                }}
                onMouseOut={(e) => {
                  (e.currentTarget as HTMLElement).style.background = "#f5b800";
                }}
              >
                Get A Quote
              </Link>
              <a
                href={`tel:${siteConfig.phone}`}
                style={{
                  display: "inline-flex",
                  alignItems: "center",
                  gap: 8,
                  color: "#1a1a1a",
                  fontWeight: 700,
                  fontSize: 14,
                  padding: "12px 24px",
                  borderRadius: 6,
                  border: "2px solid #1a1a1a",
                  textDecoration: "none",
                  fontFamily: "Raleway,sans-serif",
                  transition: "all 0.2s",
                }}
                onMouseOver={(e) => {
                  (e.currentTarget as HTMLElement).style.background = "#1a1a1a";
                  (e.currentTarget as HTMLElement).style.color = "#fff";
                }}
                onMouseOut={(e) => {
                  (e.currentTarget as HTMLElement).style.background = "transparent";
                  (e.currentTarget as HTMLElement).style.color = "#1a1a1a";
                }}
              >
                <Phone size={15} /> Call Us
              </a>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
