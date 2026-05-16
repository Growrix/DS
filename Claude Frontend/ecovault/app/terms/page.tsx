import { PageHero } from "@/components/layout/PageHero";
import { SITE_NAME } from "@/constants";

const sections = [
  {
    title: "1. Acceptance of Terms",
    content:
      `By accessing or using the ${SITE_NAME} website and services, you agree to be bound by these Terms of Use and all applicable laws and regulations. If you do not agree with any of these terms, you are prohibited from using or accessing this site.`,
  },
  {
    title: "2. Use of Services",
    content:
      `You may use our services only for lawful purposes and in accordance with these Terms. You agree not to use our services in any way that violates any applicable federal, state, local, or international law or regulation, or to transmit any material that is unlawful, harmful, or otherwise objectionable.`,
  },
  {
    title: "3. Service Agreements",
    content:
      `All waste management services provided by ${SITE_NAME} are subject to separate service agreements. Scheduling, pricing, and scope of services will be outlined in those agreements. We reserve the right to refuse service to anyone for any reason at any time.`,
  },
  {
    title: "4. Prohibited Waste Materials",
    content:
      `Customers are prohibited from presenting the following materials for collection without prior written authorization: hazardous waste, medical or biohazardous waste, radioactive materials, explosives, and any other materials prohibited by local, state, or federal law. Violations may result in service termination and applicable fines.`,
  },
  {
    title: "5. Intellectual Property",
    content:
      `The content on this website, including text, graphics, logos, images, and software, is the property of ${SITE_NAME} and is protected by applicable intellectual property laws. You may not reproduce, distribute, or create derivative works without our express written permission.`,
  },
  {
    title: "6. Limitation of Liability",
    content:
      `${SITE_NAME} shall not be liable for any indirect, incidental, special, consequential, or punitive damages arising from your use of our services or website. Our total liability to you for any claims arising from these Terms shall not exceed the amount you paid us in the past three (3) months.`,
  },
  {
    title: "7. Indemnification",
    content:
      `You agree to indemnify, defend, and hold harmless ${SITE_NAME} and its officers, directors, employees, and agents from and against any claims, liabilities, damages, judgments, awards, losses, costs, expenses, or fees (including reasonable attorneys' fees) arising out of your violation of these Terms.`,
  },
  {
    title: "8. Modifications to Terms",
    content:
      `We reserve the right to modify these Terms at any time. Changes will be effective immediately upon posting to the website. Your continued use of our services after any changes constitutes your acceptance of the new Terms. We encourage you to review these Terms periodically.`,
  },
  {
    title: "9. Governing Law",
    content:
      `These Terms shall be governed by and construed in accordance with the laws of the State of New York, without regard to its conflict of law provisions. Any disputes arising under these Terms shall be subject to the exclusive jurisdiction of the courts located in New York County.`,
  },
  {
    title: "10. Contact Us",
    content:
      `If you have questions about these Terms of Use, please contact us at legal@ecohaul.com or write to us at 604 Park Avenue, New York City, NY 10001.`,
  },
];

export const metadata = {
  title: `Terms of Use | ${SITE_NAME}`,
  description: "Read our terms and conditions for using EcoHaul services.",
};

export default function TermsPage() {
  return (
    <>
      <PageHero
        title="Terms of Use"
        breadcrumbs={[{ label: "Home", href: "/" }, { label: "Terms of Use" }]}
      />

      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 max-w-4xl">
          <div className="mb-12">
            <p className="text-neutral-500 text-sm mb-2">Last updated: January 1, 2025</p>
            <p className="text-neutral-700 text-lg leading-relaxed">
              Please read these Terms of Use carefully before using the {SITE_NAME} website and
              services. These terms govern your use of our website and the services we provide.
            </p>
          </div>

          <div className="space-y-10">
            {sections.map((sec) => (
              <div key={sec.title} className="border-b border-neutral-100 pb-10 last:border-0">
                <h2 className="font-display text-xl font-semibold text-forest-dark mb-4">
                  {sec.title}
                </h2>
                <p className="text-neutral-600 leading-relaxed">{sec.content}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
