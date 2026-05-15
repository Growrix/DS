import Image from "next/image";
import Link from "next/link";
import { HOME_STATS } from "@/lib/content";

export default function AboutSection() {
  return (
    <section className="sp-section">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Stats row */}
        <div
          className="grid grid-cols-1 sm:grid-cols-3 gap-8 mb-16 p-8 rounded-xl"
          style={{ background: "var(--sp-surface)" }}
        >
          {HOME_STATS.map((stat) => (
            <div key={stat.label} className="text-center">
              <p className="sp-stat-value">{stat.value}</p>
              <p
                className="text-sm font-semibold mt-2"
                style={{ color: "var(--sp-muted)" }}
              >
                {stat.label}
              </p>
            </div>
          ))}
        </div>

        {/* About content */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-14 items-center">
          {/* Image */}
          <div className="relative">
            <div className="rounded-xl overflow-hidden aspect-video">
              <Image
                src="https://images.unsplash.com/photo-1508514177221-188b1cf16e9d?auto=format&fit=crop&w=800&q=80"
                alt="Solar installation team at work"
                width={800}
                height={450}
                className="w-full h-full object-cover"
              />
            </div>
            {/* Play button overlay */}
            <a
              href="https://www.youtube.com/watch?v=nrJtHemSPW4"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Watch our intro video"
              className="absolute bottom-4 right-4 flex items-center gap-2 px-4 py-2 rounded-full text-sm font-bold text-white"
              style={{ background: "var(--sp-primary)", color: "var(--sp-navy)" }}
            >
              <span className="text-lg">▶</span> Watch Our Intro!
            </a>
          </div>

          {/* Text */}
          <div>
            <p className="sp-kicker">About Us</p>
            <h2 className="sp-section-title mt-2">
              Leading The Way In Building And Civil Construction
            </h2>
            <hr className="sp-divider mt-4" />
            <h3
              className="text-lg font-semibold mt-4"
              style={{ color: "var(--sp-text)" }}
            >
              We Are Ready For Solar Energy, All We Need Is To Use It Well!
            </h3>
            <p className="mt-4 text-base" style={{ color: "var(--sp-muted)" }}>
              We drive the transition to more sustainable, reliable, and
              affordable energy systems. With our innovative technologies, we
              energize society — that&apos;s our aim!
            </p>
            <p className="mt-3 text-base" style={{ color: "var(--sp-muted)" }}>
              How can we meet the growing demand for electricity while protecting
              our climate and making the planet a better place? We have the
              answer through proven solar solutions deployed in over 60 countries.
            </p>
            <ul className="mt-5 space-y-2 text-sm font-medium" style={{ color: "var(--sp-text)" }}>
              {[
                "Professional on-site service and support for certification",
                "Regular light source testing for stable conversion efficiency",
                "Lowest degradation through periodic monitoring and superior wafer quality",
              ].map((item) => (
                <li key={item} className="flex items-start gap-2">
                  <span style={{ color: "var(--sp-primary)" }}>✓</span>
                  {item}
                </li>
              ))}
            </ul>
            <div className="flex gap-4 mt-8">
              <Link href="/services" className="sp-btn sp-btn-primary">
                Learn More
              </Link>
              <Link href="/contact" className="sp-btn sp-btn-dark">
                Get A Quote
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
