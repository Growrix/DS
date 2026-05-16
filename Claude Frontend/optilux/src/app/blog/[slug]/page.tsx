import { notFound } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import { PageHero } from "@/components/ui/shared";
import { blogPosts } from "@/data/shop";

export function generateStaticParams() {
  return blogPosts.map((p) => ({ slug: p.slug }));
}

export default async function BlogSinglePage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const post = blogPosts.find((p) => p.slug === slug);
  if (!post) notFound();

  const related = blogPosts.filter((p) => p.slug !== slug).slice(0, 3);

  return (
    <>
      <Navbar />
      <main className="flex-1">
        <PageHero title={post.title} breadcrumb={[{ label: "Home", href: "/" }, { label: "Blog", href: "/blog" }, { label: post.title }]} />

        <section className="py-20 max-w-4xl mx-auto px-4 sm:px-6">
          {/* Meta */}
          <div className="flex items-center gap-4 text-sm text-[#7A9BAA] mb-8">
            <Image src={post.authorAvatar} alt={post.author} width={32} height={32} className="rounded-full" />
            <span>{post.author}</span>
            <span>•</span>
            <span>{post.date}</span>
            <span>•</span>
            <span>{post.readTime}</span>
          </div>

          {/* Featured image */}
          <div className="rounded-2xl overflow-hidden relative h-72 mb-10">
            <Image src={post.image} alt={post.title} fill className="object-cover" />
          </div>

          {/* Content */}
          <div
            className="prose prose-sm max-w-none text-[#4A6572] [&_h2]:text-[#1B3C4A] [&_h2]:font-bold [&_h2]:text-xl [&_h2]:mt-8 [&_h2]:mb-4 [&_p]:leading-relaxed [&_p]:mb-4"
            dangerouslySetInnerHTML={{ __html: post.content }}
          />

          {/* Tags */}
          <div className="flex flex-wrap gap-2 mt-10">
            {post.tags.map((tag) => (
              <span key={tag} className="bg-[#EAF8F6] text-[#00B5A3] text-xs font-semibold px-3 py-1 rounded-full">
                {tag}
              </span>
            ))}
          </div>
        </section>

        {/* Related */}
        <section className="pb-20 max-w-7xl mx-auto px-4 sm:px-6">
          <h2 className="text-[#1B3C4A] text-2xl font-bold mb-8">Related Articles</h2>
          <div className="grid md:grid-cols-3 gap-6">
            {related.map((p) => (
              <Link key={p.slug} href={`/blog/${p.slug}`} className="group">
                <div className="rounded-2xl overflow-hidden relative h-44 mb-4">
                  <Image src={p.image} alt={p.title} fill className="object-cover group-hover:scale-105 transition-transform duration-500" />
                </div>
                <p className="text-xs text-[#7A9BAA] mb-1">{p.date}</p>
                <h3 className="text-sm font-bold text-[#1B3C4A] group-hover:text-[#00B5A3] transition-colors leading-snug">{p.title}</h3>
              </Link>
            ))}
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
