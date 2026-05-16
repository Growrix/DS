import CtaBand from "@/components/common/CtaBand";
import PageHero from "@/components/common/PageHero";

const items = [
  "The doctors were so attentive during my eye exam. They explained everything clearly and made me feel at ease.",
  "I had cataract surgery here, and the whole process was smooth and stress-free. My vision improved so much.",
  "My son had his first pediatric eye checkup here, and the staff made him feel very comfortable.",
  "I got new glasses and contact lenses from here. The opticians were patient and helpful.",
  "The glaucoma treatment plan was explained in detail. I feel much more confident managing my condition.",
  "Professional staff and excellent facilities. From waiting area to consultation, everything was smooth.",
];

export default function TestimonialsPage() {
  return (
    <div>
      <PageHero title="Testimonials" />
      <section className="container py-20">
        <div className="grid gap-8 md:grid-cols-3">
          {items.map((content, index) => (
            <article key={content} className="rounded-3xl border border-slate-300 p-8">
              <h3 className="text-3xl font-medium">Patient {index + 1}</h3>
              <p className="mt-2 text-slate-400">2025</p>
              <p className="mt-6 text-lg leading-9 text-slate-500">{content}</p>
            </article>
          ))}
        </div>
      </section>
      <CtaBand />
    </div>
  );
}
