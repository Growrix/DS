"use client";
import { useState } from "react";
import Link from "next/link";
import { CONTACT } from "@/lib/config";

const INITIAL = {
  installer: "",
  usage: "",
  systemType: "",
  panelPlace: "",
  roofMaterial: "",
  contactMethod: "all",
};

export default function QuoteSection() {
  const [form, setForm] = useState(INITIAL);
  const [sent, setSent] = useState(false);

  function handleChange(
    e: React.ChangeEvent<HTMLSelectElement | HTMLInputElement>
  ) {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  }

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setSent(true);
  }

  return (
    <section className="sp-section">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-14 items-start">
          {/* Left: value prop */}
          <div>
            <p className="sp-kicker">Save Money</p>
            <h2 className="sp-section-title mt-2">
              Save Money, Save The Environment!
            </h2>
            <p className="sp-section-sub">
              Providing Value To Our Clients Through Ongoing Product &amp;
              Innovation.
            </p>
            <hr className="sp-divider mt-4" />
            <p className="text-base mt-4" style={{ color: "var(--sp-muted)" }}>
              Our Solar business now provides the preferred channel to market for
              some of the world&apos;s leading PV manufacturers. Our solar
              professionals work jointly with partners on enhancing product
              features, lowering lead times and improving cash flow.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 mt-8">
              {[
                { icon: "🌿", title: "Environmental Sensitivity" },
                { icon: "🎯", title: "Personalised Solutions" },
                { icon: "📊", title: "Performance Measures" },
              ].map((item) => (
                <div
                  key={item.title}
                  className="text-center p-5 rounded-xl"
                  style={{ background: "var(--sp-surface)" }}
                >
                  <span className="text-3xl block mb-2">{item.icon}</span>
                  <p className="font-bold text-sm" style={{ color: "var(--sp-text)" }}>
                    {item.title}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Right: Quote form */}
          <div
            className="rounded-xl p-8"
            style={{ background: "var(--sp-navy)" }}
          >
            <h3 className="text-xl font-bold text-white mb-6">
              Request A Quote
            </h3>
            {sent ? (
              <div className="text-center py-10">
                <span className="text-5xl">✅</span>
                <p className="text-white font-bold mt-4 text-lg">
                  Request Submitted!
                </p>
                <p className="text-white/60 text-sm mt-2">
                  Receive an accurate quote within 3–5 days. Or call us:{" "}
                  <a
                    href={`tel:${CONTACT.phone.replace(/[^+\d]/g, "")}`}
                    className="font-bold"
                    style={{ color: "var(--sp-primary)" }}
                  >
                    {CONTACT.phone}
                  </a>
                </p>
                <button
                  onClick={() => setSent(false)}
                  className="sp-btn sp-btn-primary mt-5"
                  type="button"
                >
                  Submit Another
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} noValidate>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="sp-form-group">
                    <label className="sp-form-label" htmlFor="installer">
                      System Installer
                    </label>
                    <select
                      id="installer"
                      name="installer"
                      className="sp-form-select"
                      value={form.installer}
                      onChange={handleChange}
                      required
                    >
                      <option value="">Choose installer</option>
                      <option value="self">Self Install</option>
                      <option value="pro">Professional Installer</option>
                    </select>
                  </div>
                  <div className="sp-form-group">
                    <label className="sp-form-label" htmlFor="usage">
                      Monthly Electric Usage
                    </label>
                    <select
                      id="usage"
                      name="usage"
                      className="sp-form-select"
                      value={form.usage}
                      onChange={handleChange}
                      required
                    >
                      <option value="">Choose range</option>
                      <option value="100">Under 100 kWh</option>
                      <option value="200">100–200 kWh</option>
                      <option value="500">200–500 kWh</option>
                      <option value="500+">Over 500 kWh</option>
                    </select>
                  </div>
                  <div className="sp-form-group">
                    <label className="sp-form-label" htmlFor="systemType">
                      Solar System Type
                    </label>
                    <select
                      id="systemType"
                      name="systemType"
                      className="sp-form-select"
                      value={form.systemType}
                      onChange={handleChange}
                      required
                    >
                      <option value="">Choose type</option>
                      <option value="grid-tied">Grid-Tied</option>
                      <option value="off-grid">Off-Grid</option>
                      <option value="hybrid">Hybrid</option>
                    </select>
                  </div>
                  <div className="sp-form-group">
                    <label className="sp-form-label" htmlFor="panelPlace">
                      Solar Panels Placement
                    </label>
                    <select
                      id="panelPlace"
                      name="panelPlace"
                      className="sp-form-select"
                      value={form.panelPlace}
                      onChange={handleChange}
                      required
                    >
                      <option value="">Choose location</option>
                      <option value="roof">Roof-mounted</option>
                      <option value="ground">Ground-mounted</option>
                      <option value="carport">Carport</option>
                    </select>
                  </div>
                  <div className="sp-form-group sm:col-span-2">
                    <label className="sp-form-label" htmlFor="roofMaterial">
                      Materials On Your Roof
                    </label>
                    <select
                      id="roofMaterial"
                      name="roofMaterial"
                      className="sp-form-select"
                      value={form.roofMaterial}
                      onChange={handleChange}
                      required
                    >
                      <option value="">Choose material</option>
                      <option value="asphalt">Asphalt Shingles</option>
                      <option value="metal">Metal</option>
                      <option value="tile">Tile</option>
                      <option value="flat">Flat/TPO</option>
                    </select>
                  </div>

                  {/* Contact method */}
                  <div className="sm:col-span-2">
                    <p className="sp-form-label mb-2">Preferred Contact Method</p>
                    <div className="flex gap-4">
                      {[
                        { value: "all", label: "All" },
                        { value: "email", label: "Email" },
                        { value: "phone", label: "Phone" },
                      ].map((opt) => (
                        <label
                          key={opt.value}
                          className="flex items-center gap-2 cursor-pointer text-sm text-white/70"
                        >
                          <input
                            type="radio"
                            name="contactMethod"
                            value={opt.value}
                            checked={form.contactMethod === opt.value}
                            onChange={handleChange}
                            className="accent-yellow-400"
                          />
                          {opt.label}
                        </label>
                      ))}
                    </div>
                  </div>
                </div>

                <button type="submit" className="sp-btn sp-btn-primary w-full mt-6 justify-center">
                  Submit Request
                </button>
                <p className="text-xs text-white/45 mt-4 text-center">
                  Receive an accurate quote within 3–5 days, or call:{" "}
                  <Link
                    href={`tel:${CONTACT.phone.replace(/[^+\d]/g, "")}`}
                    style={{ color: "var(--sp-primary)" }}
                  >
                    {CONTACT.phone}
                  </Link>
                </p>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
