import PageHero from "@/components/PageHero";
import BlogCard from "@/components/BlogCard";

const allPosts = [
  {
    imageUrl: "https://images.unsplash.com/photo-1504307651254-35680f356dfd?w=800&q=80",
    date: "March 15, 2025",
    category: "Industry",
    title: "Veterans in Business Network National Conference",
    excerpt: "Apex Construction has made workflow so much easier for teams across the board. We continue to grow thanks to innovative tools and technology.",
  },
  {
    imageUrl: "https://images.unsplash.com/photo-1581094794329-c8112a89af12?w=800&q=80",
    date: "February 28, 2025",
    category: "News",
    title: "Although Many People May Overlook This Need",
    excerpt: "At the thought leadership conference, construction leaders discussed the future of sustainable building practices and material innovation.",
  },
  {
    imageUrl: "https://images.unsplash.com/photo-1590644365607-62e62c5f1e93?w=800&q=80",
    date: "January 10, 2025",
    category: "Law",
    title: "Top Saas Construction Law On The Construction",
    excerpt: "Although many people may overlook this need for legal clarity, construction law continues to reshape the industry landscape nationwide.",
  },
  {
    imageUrl: "https://images.unsplash.com/photo-1541888946425-d81bb19240f5?w=800&q=80",
    date: "December 5, 2024",
    category: "Technology",
    title: "Smart Sensors Revolutionizing Construction Safety",
    excerpt: "Modern IoT sensors are transforming how we monitor construction sites, enabling real-time safety alerts and reducing workplace accidents.",
  },
  {
    imageUrl: "https://images.unsplash.com/photo-1486325212027-8081e485255e?w=800&q=80",
    date: "November 20, 2024",
    category: "Design",
    title: "Sustainable Architecture Trends for 2025",
    excerpt: "Green building practices are no longer optional. Discover the top sustainable architecture trends shaping the construction industry.",
  },
  {
    imageUrl: "https://images.unsplash.com/photo-1477959858617-67f85cf4f1df?w=800&q=80",
    date: "October 8, 2024",
    category: "Projects",
    title: "The Future of Urban Infrastructure Development",
    excerpt: "Cities are rapidly evolving. Here's how modern construction companies are adapting to meet the demands of urban infrastructure growth.",
  },
];

export default function NewsPage() {
  return (
    <>
      <PageHero
        title="Latest News"
        breadcrumbs={[
          { label: "Apex", href: "/" },
          { label: "News" },
        ]}
        imageUrl="https://images.unsplash.com/photo-1504307651254-35680f356dfd?w=1920&q=80"
      />

      <section className="py-20 bg-brand-light-bg">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-12">
            <div className="flex items-center justify-center gap-2 mb-3">
              <span className="w-8 h-0.5 bg-brand-orange" />
              <span className="text-brand-orange text-xs font-semibold uppercase tracking-widest">
                Latest Updates
              </span>
              <span className="w-8 h-0.5 bg-brand-orange" />
            </div>
            <h2 className="font-display text-brand-navy text-3xl font-bold">From the Blog</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {allPosts.map((post) => (
              <BlogCard key={post.title} {...post} />
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
