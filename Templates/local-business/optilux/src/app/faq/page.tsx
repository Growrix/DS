import Image from "next/image";
import PageHero from "@/components/common/PageHero";

const tabs = ["Appointments & Exams", "Treatments & Procedures", "Insurance & Payments"];

const faqs = [
  "How do I book an appointment?",
  "Do I need a referral to see an optometrist?",
  "How often should I have my eyes checked?",
  "How long does an eye exam take?",
  "What should I bring to my appointment?",
];

export default function FaqPage() {
  return (
    <div>
      <PageHero title="FAQ" crumb="FAQs" />
      <section className="container py-20">
        <div className="grid gap-10 lg:grid-cols-[1fr_360px]">
          <div>
            <div className="mb-10 flex flex-wrap gap-4">
              {tabs.map((tab, index) => (
                <button
                  key={tab}
                  className={`btn ${index === 0 ? "btn-primary" : "bg-transparent text-slate-400"}`}
                >
                  {tab}
                </button>
              ))}
            </div>
            <div>
              {faqs.map((faq) => (
                <details key={faq} className="faq-row">
                  <summary>{faq}</summary>
                  <p>
                    Our reception team can guide your booking, exam details, and preparation steps.
                  </p>
                </details>
              ))}
            </div>
          </div>
          <Image
            src="https://images.unsplash.com/photo-1622253692010-333f2da6031d?auto=format&fit=crop&w=1000&q=80"
            alt="Nurse"
            width={1000}
            height={520}
            className="h-[520px] w-full rounded-3xl object-cover"
          />
        </div>
      </section>
    </div>
  );
}
