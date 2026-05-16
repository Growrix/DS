import Image from "next/image";
import Link from "next/link";
import PageHero from "@/components/PageHero";

const projects = [
  {
    title: "Grand Tower Complex",
    category: "Commercial Construction",
    imageUrl: "https://images.unsplash.com/photo-1486325212027-8081e485255e?w=800&q=80",
    year: "2024",
  },
  {
    title: "Harbor Bridge Renovation",
    category: "Infrastructure",
    imageUrl: "https://images.unsplash.com/photo-1477959858617-67f85cf4f1df?w=800&q=80",
    year: "2024",
  },
  {
    title: "Eco Industrial Park",
    category: "Industrial",
    imageUrl: "https://images.unsplash.com/photo-1504307651254-35680f356dfd?w=800&q=80",
    year: "2023",
  },
  {
    title: "Luxury Residential Estate",
    category: "Residential",
    imageUrl: "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?w=800&q=80",
    year: "2023",
  },
  {
    title: "Metro Rail Station",
    category: "Public Infrastructure",
    imageUrl: "https://images.unsplash.com/photo-1541888946425-d81bb19240f5?w=800&q=80",
    year: "2023",
  },
  {
    title: "Corporate HQ Campus",
    category: "Commercial Construction",
    imageUrl: "https://images.unsplash.com/photo-1541888946425-d81bb19240f5?w=800&q=80",
    year: "2022",
  },
];

const categories = ["All", "Commercial", "Residential", "Industrial", "Infrastructure"];

export default function ProjectsPage() {
  return (
    <>
      <PageHero
        title="Our Projects"
        breadcrumbs={[
          { label: "Apex", href: "/" },
          { label: "Projects" },
        ]}
        imageUrl="https://images.unsplash.com/photo-1486325212027-8081e485255e?w=1920&q=80"
      />

      {/* Filter Tabs */}
      <section className="py-10 bg-white border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex flex-wrap justify-center gap-3">
            {categories.map((cat, i) => (
              <button
                key={cat}
                className={`px-5 py-2 text-xs font-bold uppercase tracking-widest transition-all ${
                  i === 0
                    ? "bg-brand-orange text-white"
                    : "border border-gray-200 text-brand-navy hover:bg-brand-orange hover:text-white hover:border-brand-orange"
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Projects Grid */}
      <section className="py-16 bg-brand-light-bg">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {projects.map((project) => (
              <div key={project.title} className="service-card group relative overflow-hidden">
                <div className="relative h-64">
                  <Image
                    src={project.imageUrl}
                    alt={project.title}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-brand-navy-dark/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                    <Link
                      href="/projects"
                      className="border-2 border-white text-white px-5 py-2 text-xs font-bold uppercase tracking-widest hover:bg-white hover:text-brand-navy transition-all"
                    >
                      View Project
                    </Link>
                  </div>
                  <div className="absolute top-3 right-3 bg-brand-orange text-white text-xs px-3 py-1 font-semibold">
                    {project.year}
                  </div>
                </div>
                <div className="bg-white p-5">
                  <p className="text-brand-orange text-xs font-semibold uppercase tracking-widest mb-1">
                    {project.category}
                  </p>
                  <h3 className="font-display text-brand-navy text-lg font-bold group-hover:text-brand-orange transition-colors">
                    {project.title}
                  </h3>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
