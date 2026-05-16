import Link from "next/link";
import { Button } from "@/components/ui/Button";
import { Home, ArrowLeft } from "lucide-react";

export default function NotFound() {
  return (
    <section className="min-h-[80vh] flex items-center justify-center bg-[#F7F8FC]">
      <div className="text-center px-6 max-w-lg">
        {/* 404 graphic */}
        <div
          className="text-[12rem] font-bold leading-none text-primary/8 select-none mb-0 -mb-10"
          style={{ fontFamily: "'Barlow Condensed', sans-serif" }}
        >
          404
        </div>
        <div className="w-16 h-1 bg-accent mx-auto mb-6" />

        <h1
          className="text-3xl md:text-4xl font-bold text-primary mb-4"
          style={{ fontFamily: "'Barlow Condensed', sans-serif" }}
        >
          Page Not Found
        </h1>
        <p className="text-neutral-500 mb-10 font-body leading-relaxed">
          The page you&apos;re looking for has been moved, removed, or doesn&apos;t exist.
          Let&apos;s get you back on track.
        </p>
        <div className="flex flex-wrap justify-center gap-4">
          <Button href="/" variant="primary" size="lg">
            <Home className="w-5 h-5" />
            Back to Home
          </Button>
          <Button href="/contact" variant="outline" size="lg">
            <ArrowLeft className="w-5 h-5" />
            Contact Us
          </Button>
        </div>
      </div>
    </section>
  );
}
