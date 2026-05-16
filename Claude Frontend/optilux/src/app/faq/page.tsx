"use client";
import { useState } from "react";
import Image from "next/image";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import { PageHero } from "@/components/ui/shared";
import { faqCategories } from "@/data/content";
import { ChevronDown } from "lucide-react";

function FAQAccordion({ items }: { items: typeof faqCategories[0]["items"] }) {
  const [open, setOpen] = useState<number | null>(null);
  return (
    <div className="divide-y divide-[#E2EEF2]">
      {items.map((item, i) => (
        <div key={i}>
          <button
            onClick={() => setOpen(open === i ? null : i)}
            className="w-full py-4 flex justify-between items-center text-left group"
          >
            <span className={`text-sm font-medium transition-colors ${open === i ? "text-[#00B5A3]" : "text-[#1B3C4A] group-hover:text-[#00B5A3]"}`}>
              {item.question}
            </span>
            <ChevronDown
              size={16}
              className={`text-[#7A9BAA] flex-shrink-0 ml-4 transition-transform ${open === i ? "rotate-180" : ""}`}
            />
          </button>
          {open === i && (
            <div className="pb-4 text-sm text-[#4A6572] leading-relaxed">
              {item.answer}
            </div>
          )}
        </div>
      ))}
    </div>
  );
}

export default function FAQPage() {
  const [activeTab, setActiveTab] = useState(0);

  return (
    <>
      <Navbar />
      <main className="flex-1">
        <PageHero title="FAQ" breadcrumb={[{ label: "Home", href: "/" }, { label: "FAQs" }]} />

        <section className="py-20 max-w-7xl mx-auto px-4 sm:px-6">
          <div className="grid lg:grid-cols-[1fr_320px] gap-14">
            <div>
              {/* Tabs */}
              <div className="flex flex-wrap gap-2 mb-8">
                {faqCategories.map((cat, i) => (
                  <button
                    key={cat.label}
                    onClick={() => setActiveTab(i)}
                    className={`px-5 py-2.5 rounded-full text-sm font-semibold transition-all ${
                      activeTab === i ? "bg-[#00B5A3] text-white" : "text-[#7A9BAA] hover:text-[#00B5A3]"
                    }`}
                  >
                    {cat.label}
                  </button>
                ))}
              </div>
              <FAQAccordion items={faqCategories[activeTab].items} />
            </div>

            {/* Sidebar image */}
            <div className="hidden lg:block">
              <div className="rounded-2xl overflow-hidden relative h-80">
                <Image
                  src="https://images.unsplash.com/photo-1559839734-2b71ea197ec2?w=500&q=80"
                  alt="Doctor"
                  fill
                  className="object-cover object-top"
                />
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
