import Image from "next/image";
import Link from "next/link";
import CtaBand from "@/components/common/CtaBand";
import { SERVICES } from "@/lib/site";

export default function HomePage() {
  return (
    <div>
      <section className="home-hero">
        <div className="container py-24 md:py-32">
          <div className="max-w-3xl text-white">
            <h1 className="text-6xl font-semibold leading-tight md:text-8xl">
              Expert Vision Care and Trusted Eye Specialists
            </h1>
            <p className="mt-8 max-w-xl text-lg text-cyan-50 md:text-xl">
              Comprehensive eye exams with modern tools that provide accurate results while ensuring
              comfort and clarity for every patient.
            </p>
            <Link href="/contact" className="btn btn-primary mt-10">
              Book Now
            </Link>
          </div>
        </div>
      </section>

      <section className="bg-[#1db6b6] py-6 text-white">
        <div className="container grid gap-6 text-center md:grid-cols-4">
          <div><p className="text-5xl font-semibold">65250+</p><p>Eye Exams Performed</p></div>
          <div><p className="text-5xl font-semibold">23160+</p><p>Satisfied Patients</p></div>
          <div><p className="text-5xl font-semibold">150+</p><p>Licensed Optometrists</p></div>
          <div><p className="text-5xl font-semibold">20+</p><p>Years of Expertise</p></div>
        </div>
      </section>

      <section className="container py-20">
        <div className="grid items-center gap-10 md:grid-cols-2">
          <div>
            <p className="kicker">About Us</p>
            <h2 className="heading-lg">Professional and Personalized Eye Care Services</h2>
            <p className="mt-5 text-slate-500">
              We provide complete vision care designed for all ages. From routine eye exams to
              advanced treatments, our dedicated team ensures your eyes remain healthy and your
              vision clear.
            </p>
            <Link href="/about" className="btn btn-primary mt-8">Book Your Visit</Link>
          </div>
          <Image
            src="https://images.unsplash.com/photo-1622253692010-333f2da6031d?auto=format&fit=crop&w=1000&q=80"
            alt="Doctor team"
            width={1000}
            height={420}
            className="h-[420px] w-full rounded-3xl object-cover"
          />
        </div>
      </section>

      <section className="bg-[#eef5f5] py-20">
        <div className="container">
          <p className="kicker text-center">Our Services</p>
          <h2 className="heading-lg text-center">Comprehensive Eye Care &amp; Optometry</h2>
          <div className="mt-12 grid gap-8 md:grid-cols-3">
            {SERVICES.map((service) => (
              <Link key={service.slug} href="/services-2" className="service-card">
                <Image src={service.image} alt={service.title} width={600} height={255} className="service-image" />
                <div className="service-overlay" />
                <span className="service-title">{service.title}</span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-[#89dcdc] py-20">
        <div className="container">
          <p className="kicker text-white">Testimonials</p>
          <h2 className="text-6xl font-semibold text-white">What Our Patients Are Saying</h2>
          <div className="mt-10 grid gap-8 md:grid-cols-2">
            <article className="rounded-3xl bg-white p-8">
              <p className="text-lg text-slate-500">
                The optometrist was very patient and explained my results in detail. I finally found
                the right prescription and my vision has completely improved.
              </p>
              <p className="mt-6 font-semibold text-slate-800">Emily Johnson</p>
            </article>
            <article className="rounded-3xl bg-white p-8">
              <p className="text-lg text-slate-500">
                I brought my son for an eye exam and the staff made him feel so relaxed. The doctor
                was gentle and gave us a clear care plan to support his vision.
              </p>
              <p className="mt-6 font-semibold text-slate-800">Michael Lee</p>
            </article>
          </div>
        </div>
      </section>

      <section className="process-band">
        <div className="container py-20 text-center text-white">
          <p className="kicker text-white">Our Process</p>
          <h2 className="text-6xl font-semibold">Clear Steps to Better Vision</h2>
          <div className="mt-10 grid gap-6 md:grid-cols-4">
            <div><p className="text-2xl font-semibold">01</p><p>Book Appointment</p></div>
            <div><p className="text-2xl font-semibold">02</p><p>Eye Examination</p></div>
            <div><p className="text-2xl font-semibold">03</p><p>Personalized Solutions</p></div>
            <div><p className="text-2xl font-semibold">04</p><p>Ongoing Care</p></div>
          </div>
        </div>
      </section>

      <section className="container py-20">
        <div className="grid gap-10 md:grid-cols-2">
          <div>
            <p className="kicker">FAQ</p>
            <h2 className="heading-lg">Everything You Should Know About Eye Care</h2>
          </div>
          <div className="space-y-4">
            {[
              "How do I book an appointment?",
              "Do I need a referral to see an optometrist?",
              "How often should I have my eyes checked?",
              "How long does an eye exam take?",
              "What should I bring to my appointment?",
            ].map((item) => (
              <details key={item} className="faq-row">
                <summary>{item}</summary>
                <p>
                  Please contact our clinic and our team will guide you through the process.
                </p>
              </details>
            ))}
          </div>
        </div>
      </section>

      <CtaBand />
    </div>
  );
}

