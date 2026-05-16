import PageHero from "@/components/PageHero";
import Link from "next/link";

const pages = [
  { title: "Home", href: "/", desc: "Our main landing page with full site overview." },
  { title: "Our Services", href: "/services", desc: "Explore all our construction and design services." },
  { title: "Projects", href: "/projects", desc: "Browse our portfolio of completed and ongoing projects." },
  { title: "News", href: "/news", desc: "Latest news and blog posts from Apex Construction." },
  { title: "Contact", href: "/contact", desc: "Get in touch with our team today." },
];

export default function PagesPage() {
  return (
    <>
      <PageHero
        title="Site Pages"
        breadcrumbs={[
          { label: "Apex", href: "/" },
          { label: "Pages" },
        ]}
        imageUrl="https://images.unsplash.com/photo-1486325212027-8081e485255e?w=1920&q=80"
      />
      <section className="py-20 bg-brand-light-bg">
        <div className="max-w-4xl mx-auto px-4">
          <div className="grid gap-4">
            {pages.map((page) => (
              <Link
                key={page.href}
                href={page.href}
                className="service-card bg-white p-6 border border-gray-100 flex items-center justify-between group"
              >
                <div>
                  <h3 className="font-display text-brand-navy font-bold text-lg group-hover:text-brand-orange transition-colors">
                    {page.title}
                  </h3>
                  <p className="text-gray-500 text-sm mt-1">{page.desc}</p>
                </div>
                <span className="text-brand-orange text-xl group-hover:translate-x-2 transition-transform">→</span>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
