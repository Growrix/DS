import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import PageBanner from "@/components/shared/PageBanner";
import { BLOG_POSTS } from "@/lib/content";

interface Props {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return BLOG_POSTS.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const post = BLOG_POSTS.find((p) => p.slug === slug);
  return { title: post?.title ?? "Blog Post" };
}

export default async function BlogPostPage({ params }: Props) {
  const { slug } = await params;
  const post = BLOG_POSTS.find((p) => p.slug === slug);
  if (!post) notFound();

  const related = BLOG_POSTS.filter((p) => p.slug !== slug);

  return (
    <>
      <PageBanner
        title={post.title}
        breadcrumbs={[{ label: "Blog", href: "/blog" }, { label: post.title }]}
      />

      <section className="sp-section">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            {/* Post content */}
            <article className="lg:col-span-2">
              <div className="rounded-xl overflow-hidden mb-8">
                <Image
                  src={post.image}
                  alt={post.title}
                  width={900}
                  height={500}
                  className="w-full object-cover"
                />
              </div>
              <div className="flex items-center gap-4 text-sm mb-6" style={{ color: "var(--sp-muted)" }}>
                <span>{post.date}</span>
                <span className="sp-badge">{post.category}</span>
                <span>by {post.author}</span>
              </div>
              <h2 className="sp-section-title">{post.title}</h2>
              <hr className="sp-divider" />
              <p className="mt-5 text-base leading-relaxed" style={{ color: "var(--sp-muted)" }}>
                {post.excerpt}
              </p>
              <p className="mt-4 text-base leading-relaxed" style={{ color: "var(--sp-muted)" }}>
                All of these factors are important to consider when permitting
                your solar system, and can help streamline your process. Take the
                time to consider whether the factors apply to your project and
                how you will address them in your application.
              </p>
              <p className="mt-4 text-base leading-relaxed" style={{ color: "var(--sp-muted)" }}>
                Batteries are the most expensive part of a solar system. Between
                an appropriately-sized battery bank and a battery-based inverter,
                the right selection ensures long system life and optimal
                performance throughout the seasons.
              </p>
              <p className="mt-4 text-base leading-relaxed" style={{ color: "var(--sp-muted)" }}>
                The commercialization of ready-to-deploy renewable energy
                technologies and professional project development as a strategy
                to access, leverage and manage financing have been key enablers
                of the global energy transition.
              </p>
              <div className="flex gap-4 mt-8">
                <Link href="/blog" className="sp-btn sp-btn-dark">← All Articles</Link>
                <Link href="/contact" className="sp-btn sp-btn-primary">Get In Touch</Link>
              </div>
            </article>

            {/* Sidebar */}
            <aside>
              <div className="rounded-xl p-6 mb-6" style={{ background: "var(--sp-surface)" }}>
                <h3 className="font-bold text-lg mb-4" style={{ color: "var(--sp-text)" }}>Recent Posts</h3>
                <div className="space-y-4">
                  {related.map((p) => (
                    <div key={p.slug} className="flex gap-3">
                      <Image
                        src={p.image}
                        alt={p.title}
                        width={60}
                        height={60}
                        className="rounded-lg object-cover flex-shrink-0"
                      />
                      <div>
                        <p className="text-xs mb-1" style={{ color: "var(--sp-muted)" }}>{p.date}</p>
                        <Link
                          href={`/blog/${p.slug}`}
                          className="text-sm font-semibold leading-snug hover:underline"
                          style={{ color: "var(--sp-text)" }}
                        >
                          {p.title}
                        </Link>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              <div className="rounded-xl p-6" style={{ background: "var(--sp-navy)" }}>
                <h3 className="font-bold text-white text-lg mb-3">Categories</h3>
                <div className="space-y-2">
                  {["Insights", "Technology", "Market", "Oil & Gas"].map((cat) => (
                    <div key={cat} className="flex justify-between items-center text-sm">
                      <span className="text-white/70">{cat}</span>
                      <span className="sp-badge">3</span>
                    </div>
                  ))}
                </div>
              </div>
            </aside>
          </div>
        </div>
      </section>
    </>
  );
}
