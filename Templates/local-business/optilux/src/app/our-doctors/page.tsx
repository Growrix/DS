import Image from "next/image";
import CtaBand from "@/components/common/CtaBand";
import PageHero from "@/components/common/PageHero";
import { DOCTORS } from "@/lib/site";

export default function OurDoctorsPage() {
  return (
    <div>
      <PageHero title="Our Doctors" />
      <section className="container py-20">
        <div className="grid gap-10 md:grid-cols-3">
          {DOCTORS.map((doctor) => (
            <article key={doctor.name} className="text-center">
              <Image src={doctor.image} alt={doctor.name} width={500} height={320} className="h-80 w-full rounded-2xl object-cover" />
              <h3 className="mt-4 text-4xl font-medium">{doctor.name}</h3>
              <p className="text-lg text-slate-500">{doctor.role}</p>
            </article>
          ))}
        </div>
      </section>
      <CtaBand />
    </div>
  );
}
