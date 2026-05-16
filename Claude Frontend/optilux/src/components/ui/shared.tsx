import Link from "next/link";

export function CTABanner() {
  return (
    <section className="bg-[#00B5A3] py-10 px-4">
      <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-6">
        <h2 className="text-white text-2xl md:text-3xl font-bold">
          Clear Vision Starts Here. Schedule Your Eye Exam Today
        </h2>
        <Link
          href="/contact"
          className="flex-shrink-0 inline-flex items-center justify-center px-6 py-3 border-2 border-white text-white font-semibold rounded-full text-sm hover:bg-white hover:text-[#00B5A3] transition-all duration-200"
        >
          Book Your Visit
        </Link>
      </div>
    </section>
  );
}

export function PageHero({
  title,
  breadcrumb,
}: {
  title: string;
  breadcrumb: { label: string; href?: string }[];
}) {
  return (
    <section className="bg-[#EAF8F6] py-14 text-center">
      <div className="max-w-7xl mx-auto px-4">
        <h1 className="text-[#1B3C4A] text-4xl md:text-5xl font-bold mb-3">{title}</h1>
        <nav className="flex items-center justify-center gap-2 text-sm text-[#7A9BAA]">
          {breadcrumb.map((item, i) => (
            <span key={i} className="flex items-center gap-2">
              {i > 0 && <span className="text-[#B0CDD8]">›</span>}
              {item.href ? (
                <Link href={item.href} className="text-[#00B5A3] hover:underline">
                  {item.label}
                </Link>
              ) : (
                <span>{item.label}</span>
              )}
            </span>
          ))}
        </nav>
      </div>
    </section>
  );
}

export function StarRating({ rating, max = 5 }: { rating: number; max?: number }) {
  return (
    <div className="flex gap-0.5">
      {Array.from({ length: max }).map((_, i) => (
        <svg
          key={i}
          className={i < Math.round(rating) ? "text-[#FFC107]" : "text-[#E0E0E0]"}
          width="14"
          height="14"
          viewBox="0 0 20 20"
          fill="currentColor"
        >
          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
        </svg>
      ))}
    </div>
  );
}
