import Image from "next/image";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import { CTABanner, PageHero, StarRating } from "@/components/ui/shared";
import { testimonials } from "@/data/content";

function GoogleIcon() {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
      <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" fill="#4285F4"/>
      <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853"/>
      <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l3.66-2.84z" fill="#FBBC05"/>
      <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335"/>
    </svg>
  );
}

export default function TestimonialsPage() {
  return (
    <>
      <Navbar />
      <main className="flex-1">
        <PageHero title="Testimonials" breadcrumb={[{ label: "Home", href: "/" }, { label: "Testimonials" }]} />

        <section className="py-20 max-w-7xl mx-auto px-4 sm:px-6">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {testimonials.map((t) => (
              <div key={t.name} className="border border-[#E2EEF2] rounded-2xl p-6">
                <div className="flex items-center justify-between mb-3">
                  <div className="flex items-center gap-3">
                    <Image src={t.avatar} alt={t.name} width={40} height={40} className="rounded-full" />
                    <div>
                      <p className="text-sm font-semibold text-[#1B3C4A]">{t.name}</p>
                      <p className="text-xs text-[#7A9BAA]">{t.date}</p>
                    </div>
                  </div>
                  <GoogleIcon />
                </div>
                <StarRating rating={t.rating} />
                <p className="text-sm text-[#4A6572] leading-relaxed mt-3">{t.text}</p>
              </div>
            ))}
          </div>
        </section>

        <CTABanner />
      </main>
      <Footer />
    </>
  );
}
