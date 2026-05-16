"use client";
import { useState } from "react";
import { Send } from "lucide-react";

export default function ContactForm() {
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 3000);
    setForm({ name: "", email: "", message: "" });
  };

  return (
    <div className="bg-brand-orange p-8">
      <h3 className="text-white font-display text-xl font-bold mb-6">Get In Touch</h3>
      <form onSubmit={handleSubmit} className="space-y-4">
        <input
          type="text"
          placeholder="Your Name"
          value={form.name}
          onChange={(e) => setForm({ ...form, name: e.target.value })}
          required
          className="w-full bg-transparent border-b border-white/50 text-white placeholder-white/60 py-2.5 text-sm focus:border-white focus:outline-none transition-colors"
        />
        <input
          type="email"
          placeholder="Email Address"
          value={form.email}
          onChange={(e) => setForm({ ...form, email: e.target.value })}
          required
          className="w-full bg-transparent border-b border-white/50 text-white placeholder-white/60 py-2.5 text-sm focus:border-white focus:outline-none transition-colors"
        />
        <textarea
          placeholder="Your Message"
          rows={4}
          value={form.message}
          onChange={(e) => setForm({ ...form, message: e.target.value })}
          required
          className="w-full bg-transparent border-b border-white/50 text-white placeholder-white/60 py-2.5 text-sm focus:border-white focus:outline-none transition-colors resize-none"
        />
        <button
          type="submit"
          className="mt-2 border border-white text-white px-6 py-2.5 text-sm font-semibold uppercase tracking-widest hover:bg-white hover:text-brand-orange transition-all duration-200 flex items-center gap-2"
        >
          <Send size={14} />
          {submitted ? "Message Sent!" : "Submit"}
        </button>
      </form>
    </div>
  );
}
