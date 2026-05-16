import Image from "next/image";
import PageHero from "@/components/common/PageHero";

const side = [
  "Comprehensive Eye Exams",
  "Pediatric Eye Care",
  "Vision Correction",
  "Cataract Treatment",
  "Glaucoma Management",
  "Contact Lenses",
  "Dry Eye Therapy",
  "Laser Eye Surgery",
];

export default function ServiceSinglePage() {
  return (
    <div>
      <PageHero title="Vision Correction" crumb="Vision Correction" />
      <section className="container py-20">
        <div className="grid gap-10 lg:grid-cols-[240px_1fr]">
          <aside className="space-y-3">
            {side.map((item) => (
              <div key={item} className={`rounded-xl px-6 py-5 text-xl ${item === "Vision Correction" ? "bg-[#17b7b7] text-white" : "bg-[#e4f2f3]"}`}>
                {item}
              </div>
            ))}
          </aside>

          <div className="grid gap-10 xl:grid-cols-2">
            <div>
              <h2 className="heading-lg">Advanced Vision Correction for Clearer Sight</h2>
              <p className="mt-6 text-lg leading-9 text-slate-500">
                Our vision correction services are designed to help patients achieve clearer, sharper
                sight with treatments tailored to individual needs.
              </p>

              <h3 className="mt-12 text-5xl font-semibold">Key Benefits</h3>
              <div className="mt-8 grid gap-6 md:grid-cols-2">
                {[
                  ["Latest Technology", "We use advanced diagnostic tools and treatments for precise results."],
                  ["Personalized Care", "Every treatment plan is customized based on your goals and lifestyle."],
                  ["Experienced Specialists", "Our eye doctors and surgeons bring years of expertise."],
                  ["Safe Procedures", "We follow strict medical standards for safety and comfort."],
                  ["Comprehensive Support", "From consultation to post-treatment care, we stay with you."],
                  ["Improved Quality of Life", "Clearer vision helps you enjoy work and life with confidence."],
                ].map(([title, body]) => (
                  <article key={title} className="rounded-xl border border-slate-200 p-5">
                    <h4 className="text-3xl font-medium">{title}</h4>
                    <p className="mt-2 text-slate-500">{body}</p>
                  </article>
                ))}
              </div>
            </div>

            <div>
              <div className="overflow-hidden rounded-3xl bg-[#dceced]">
                <Image
                  src="https://images.unsplash.com/photo-1622253692010-333f2da6031d?auto=format&fit=crop&w=1000&q=80"
                  alt="Nurse"
                  width={1000}
                  height={580}
                  className="h-[580px] w-full object-cover"
                />
              </div>
              <div className="-mt-28 mx-6 rounded-3xl bg-[#18b7b7] p-8 text-2xl text-white">
                Personalized vision solutions to help you see the world with clarity and confidence.
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
