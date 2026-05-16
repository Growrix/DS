import Link from "next/link";
import { CheckCircle, Phone, Mail, ArrowRight } from "lucide-react";
import { SITE_NAME, BRAND_PHONE, BRAND_EMAIL } from "@/constants";
import { Button } from "@/components/ui/Button";

export const metadata = {
  title: `Thank You | ${SITE_NAME}`,
  description: "Thank you for contacting EcoHaul. We'll be in touch shortly.",
};

export default function ThankYouPage() {
  return (
    <section className="min-h-screen bg-neutral-50 flex items-center justify-center py-20">
      <div className="container mx-auto px-4 max-w-2xl text-center">
        {/* Icon */}
        <div className="flex justify-center mb-8">
          <div className="w-24 h-24 rounded-full bg-primary-50 flex items-center justify-center">
            <CheckCircle className="w-14 h-14 text-primary-600" strokeWidth={1.5} />
          </div>
        </div>

        {/* Heading */}
        <h1 className="font-display text-4xl md:text-5xl font-bold text-forest-dark mb-4">
          Thank You!
        </h1>
        <p className="text-neutral-600 text-lg leading-relaxed mb-10">
          Your message has been successfully received. A member of our team will review your inquiry
          and get back to you within one business day.
        </p>

        {/* Quick contacts */}
        <div className="grid sm:grid-cols-2 gap-4 mb-10">
          <a
            href={`tel:${BRAND_PHONE}`}
            className="flex items-center gap-3 bg-white rounded-xl p-5 shadow-sm border border-neutral-100 hover:border-primary-300 transition-colors group"
          >
            <div className="w-10 h-10 rounded-full bg-primary-100 flex items-center justify-center shrink-0 group-hover:bg-primary-600 transition-colors">
              <Phone className="w-5 h-5 text-primary-600 group-hover:text-white transition-colors" />
            </div>
            <div className="text-left">
              <p className="text-xs text-neutral-500 mb-0.5">Call us directly</p>
              <p className="font-semibold text-forest-dark text-sm">{BRAND_PHONE}</p>
            </div>
          </a>
          <a
            href={`mailto:${BRAND_EMAIL}`}
            className="flex items-center gap-3 bg-white rounded-xl p-5 shadow-sm border border-neutral-100 hover:border-primary-300 transition-colors group"
          >
            <div className="w-10 h-10 rounded-full bg-primary-100 flex items-center justify-center shrink-0 group-hover:bg-primary-600 transition-colors">
              <Mail className="w-5 h-5 text-primary-600 group-hover:text-white transition-colors" />
            </div>
            <div className="text-left">
              <p className="text-xs text-neutral-500 mb-0.5">Email us</p>
              <p className="font-semibold text-forest-dark text-sm">{BRAND_EMAIL}</p>
            </div>
          </a>
        </div>

        {/* CTA buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button href="/" variant="primary" size="lg">
            Back to Home
          </Button>
          <Button href="/services" variant="outline" size="lg" icon={<ArrowRight className="w-4 h-4" />}>
            Explore Services
          </Button>
        </div>
      </div>
    </section>
  );
}
