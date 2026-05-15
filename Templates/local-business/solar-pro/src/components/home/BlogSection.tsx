import Image from "next/image";
import Link from "next/link";
import { BLOG_POSTS } from "@/lib/content";

export default function BlogSection() {
  return (
    <section className="sp-section sp-section-light-bg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <p className="sp-kicker">News &amp; Announcements</p>
          <h2 className="sp-section-title mt-2">Recent Articles</h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {BLOG_POSTS.map((post) => (
            <article key={post.slug} className="sp-card">
              <Link href={`/blog/${post.slug}`} className="block">
                <div className="relative overflow-hidden" style={{ height: 220 }}>
                  <Image
                    src={post.image}
                    alt={post.title}
                    fill
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                    className="object-cover transition-transform duration-500 hover:scale-105"
                  />
                </div>
              </Link>
              <div className="p-5">
                <div
                  className="flex items-center gap-3 text-xs mb-3"
                  style={{ color: "var(--sp-muted)" }}
                >
                  <span>{post.date}</span>
                  <span className="sp-badge">{post.category}</span>
                  <span>{post.author}</span>
                </div>
                <Link href={`/blog/${post.slug}`}>
                  <h3
                    className="font-bold text-base leading-snug hover:text-sp-primary transition-colors line-clamp-2"
                    style={{ color: "var(--sp-text)" }}
                  >
                    {post.title}
                  </h3>
                </Link>
                <p
                  className="text-sm mt-2 line-clamp-2"
                  style={{ color: "var(--sp-muted)" }}
                >
                  {post.excerpt}
                </p>
                <Link
                  href={`/blog/${post.slug}`}
                  className="inline-flex items-center gap-1 mt-4 text-sm font-bold transition-colors"
                  style={{ color: "var(--sp-primary)" }}
                >
                  Read More →
                </Link>
              </div>
            </article>
          ))}
        </div>

        <div className="text-center mt-10">
          <Link href="/blog" className="sp-btn sp-btn-dark">
            View All Articles
          </Link>
        </div>
      </div>
    </section>
  );
}
