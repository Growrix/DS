import Image from "next/image";
import CtaBand from "@/components/common/CtaBand";
import PageHero from "@/components/common/PageHero";
import { DOCTORS } from "@/lib/site";

export default function AboutPage() {
  return (
    <div>
      <PageHero title="About Us" />
      <section className="container py-20">
        <div className="grid gap-10 md:grid-cols-2">
          <Image
            src="https://images.unsplash.com/photo-1484863137850-59afcfe05386?auto=format&fit=crop&w=1200&q=80"
            alt="Optometry"
            width={1200}
            height={420}
            className="h-[420px] w-full rounded-3xl object-cover"
          />
          <div>
            <p className="kicker">About Us</p>
            <h2 className="heading-lg">Caring for Eyes, Enhancing Your Vision</h2>
            <p className="mt-6 text-lg leading-9 text-slate-500">
              We are a trusted optometry and eye health provider dedicated to keeping your vision
              clear and protected. From routine checkups to specialized treatments, our mission is
              simple: better vision that helps you see life&apos;s moments more vividly every day.
            </p>
          </div>
        </div>

        <h3 className="mt-16 text-5xl font-semibold">Our Expertise</h3>
        <div className="mt-8 grid gap-6 text-lg md:grid-cols-3">
          {[
            ["Comprehensive Eye Exams", "95%"],
            ["Vision Correction & Glasses", "90%"],
            ["Contact Lens Fitting", "85%"],
            ["Pediatric Eye Care", "80%"],
            ["Dry Eye Treatment", "75%"],
            ["Advanced Diagnostic Technology", "92%"],
          ].map(([label, pct]) => (
            <div key={label}>
              <div className="mb-2 flex items-center justify-between"><span>{label}</span><span>{pct}</span></div>
              <div className="h-2 rounded-full bg-slate-200"><div className="h-2 rounded-full bg-[#19b8b8]" style={{ width: pct }} /></div>
            </div>
          ))}
        </div>
      </section>

      <section className="hero-shell py-20">
        <div className="container">
          <p className="kicker text-center">Our Doctors</p>
          <h3 className="text-center text-6xl font-semibold">Excellence in Optometry and Quality Care</h3>
          <div className="mt-12 grid gap-8 md:grid-cols-4">
            {DOCTORS.slice(0, 4).map((doctor) => (
              <article key={doctor.name} className="text-center">
                <Image src={doctor.image} alt={doctor.name} width={500} height={288} className="h-72 w-full rounded-2xl object-cover" />
                <h4 className="mt-4 text-3xl font-medium">{doctor.name}</h4>
                <p className="text-slate-500">{doctor.role}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="container grid gap-8 py-20 text-center md:grid-cols-4">
        <div><p className="text-6xl font-semibold">65250+</p><p className="text-slate-500">Eye Exams Performed</p></div>
        <div><p className="text-6xl font-semibold">23160+</p><p className="text-slate-500">Satisfied Patients</p></div>
        <div><p className="text-6xl font-semibold">150+</p><p className="text-slate-500">Licensed Optometrists</p></div>
        <div><p className="text-6xl font-semibold">20+</p><p className="text-slate-500">Years of Expertise</p></div>
      </section>

      <CtaBand />
    </div>
  );
}
