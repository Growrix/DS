import Link from "next/link";
import { Search, Home, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/Button";
import { SITE_NAME } from "@/constants";

export default function NotFound() {
  return (
    <section className="min-h-screen bg-forest-dark flex items-center justify-center relative overflow-hidden py-20">
      {/* Background pattern */}
      <div
        className="absolute inset-0 opacity-5"
        style={{
          backgroundImage: `radial-gradient(circle, #ffffff 1px, transparent 1px)`,
          backgroundSize: "30px 30px",
        }}
      />
      {/* Gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-forest-dark via-forest-dark/90 to-primary-900/80" />

      <div className="relative z-10 container mx-auto px-4 text-center max-w-2xl">
        {/* 404 big text */}
        <div className="font-display font-bold text-[160px] leading-none text-primary-600/20 select-none mb-0">
          404
        </div>
        <div className="-mt-10 mb-8">
          <h1 className="font-display text-4xl md:text-5xl font-bold text-white mb-4">
            Page Not Found
          </h1>
          <p className="text-neutral-300 text-lg leading-relaxed">
            The page you're looking for doesn't exist or may have been moved. Let's get you back on
            track.
          </p>
        </div>

        {/* Suggestions */}
        <div className="grid sm:grid-cols-3 gap-3 mb-10 text-left">
          {[
            { href: "/services", label: "Our Services" },
            { href: "/about", label: "About EcoHaul" },
            { href: "/contact", label: "Contact Us" },
          ].map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="flex items-center justify-between bg-white/10 hover:bg-white/20 border border-white/10 hover:border-primary-400 rounded-xl px-4 py-3 text-white text-sm font-medium transition-all group"
            >
              {link.label}
              <ArrowRight className="w-4 h-4 opacity-50 group-hover:opacity-100 group-hover:translate-x-0.5 transition-all" />
            </Link>
          ))}
        </div>

        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button href="/" variant="primary" size="lg">
            <Home className="w-4 h-4 mr-2" /> Back to Home
          </Button>
          <Button href="/contact" variant="outline" size="lg">
            Get Help
          </Button>
        </div>
      </div>
    </section>
  );
}
