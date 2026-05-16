import CtaBand from "@/components/common/CtaBand";
import PageHero from "@/components/common/PageHero";

const plans = [
  {
    name: "Basic Eye Exam",
    subtitle: "Routine check-up",
    price: "$49",
    old: "$69",
    points: ["Vision Test", "Refraction Analysis", "Glasses Prescription", "Basic Eye Health Screening"],
  },
  {
    name: "Comprehensive Exam",
    subtitle: "Full diagnostic care",
    price: "$89",
    old: "$120",
    points: ["Basic Exam Included", "Ocular Health Imaging", "Glaucoma Screening", "Contact Lens Fitting"],
  },
  {
    name: "Premium Care",
    subtitle: "Advanced treatments",
    price: "$149",
    old: "$199",
    points: ["Comprehensive Exam Included", "Retinal Imaging", "Dry Eye Treatment", "Custom Vision Therapy"],
  },
];

export default function PricingPage() {
  return (
    <div>
      <PageHero title="Pricing" />
      <section className="container py-20">
        <div className="grid gap-8 md:grid-cols-3">
          {plans.map((plan) => (
            <article key={plan.name} className="overflow-hidden rounded-3xl bg-[#d8ecef]">
              <header className="px-8 py-10 text-center">
                <h3 className="text-5xl font-semibold">{plan.name}</h3>
                <p className="mt-2 text-xl text-slate-500">{plan.subtitle}</p>
              </header>
              <div className="bg-[#a9dedd] px-8 py-8 text-center">
                <p className="text-6xl font-semibold">{plan.price}<span className="text-3xl">/visit</span></p>
                <p className="mt-2 text-lg text-slate-500">Normally {plan.old}</p>
              </div>
              <div className="px-8 py-8">
                <ul className="space-y-3 text-xl">
                  {plan.points.map((point) => (
                    <li key={point}>✓ {point}</li>
                  ))}
                </ul>
                <button className="btn btn-primary mt-8 w-full">Book Appointment</button>
              </div>
            </article>
          ))}
        </div>
      </section>
      <CtaBand />
    </div>
  );
}
