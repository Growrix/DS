import Image from "next/image";
import Link from "next/link";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import { PageHero } from "@/components/ui/shared";
import { blogPosts } from "@/data/shop";

export default function BlogPage() {
  return (
    <>
      <Navbar />
      <main className="flex-1">
        <PageHero title="Blog" breadcrumb={[{ label: "Home", href: "/" }, { label: "Blog" }]} />

        <section className="py-20 max-w-7xl mx-auto px-4 sm:px-6">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {blogPosts.map((post) => (
              <article key={post.slug} className="group">
                <Link href={`/blog/${post.slug}`}>
                  <div className="rounded-2xl overflow-hidden relative h-52 mb-5">
                    <Image
                      src={post.image}
                      alt={post.title}
                      fill
                      className="object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                    <div className="absolute top-3 left-3">
                      <span className="bg-[#00B5A3] text-white text-xs font-semibold px-3 py-1 rounded-full">
                        {post.category}
                      </span>
                    </div>
                  </div>
                  <div className="flex items-center gap-3 text-xs text-[#7A9BAA] mb-3">
                    <span>{post.date}</span>
                    <span>•</span>
                    <span>{post.readTime}</span>
                    <span>•</span>
                    <span>{post.author}</span>
                  </div>
                  <h2 className="text-[#1B3C4A] font-bold text-base leading-snug mb-3 group-hover:text-[#00B5A3] transition-colors">
                    {post.title}
                  </h2>
                  <p className="text-sm text-[#4A6572] leading-relaxed line-clamp-2">{post.excerpt}</p>
                </Link>
              </article>
            ))}
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
