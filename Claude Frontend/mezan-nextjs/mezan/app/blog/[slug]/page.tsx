"use client";
import Link from "next/link";
import { notFound } from "next/navigation";
import { Clock, User, Tag, ChevronRight, ArrowLeft } from "lucide-react";
import PageHero from "@/components/PageHero";
import { blogPosts, blogCategories } from "@/data/site";

export default function BlogPostPage({
  params,
}: {
  params: { slug: string };
}) {
  const post = blogPosts.find((p) => p.slug === params.slug);
  if (!post) notFound();

  const recentPosts = blogPosts.filter((p) => p.id !== post.id).slice(0, 4);
  const relatedPosts = blogPosts
    .filter((p) => p.category === post.category && p.id !== post.id)
    .slice(0, 3);
  const allTags = Array.from(new Set(blogPosts.flatMap((p) => p.tags)));

  const paragraphs = post.content.split("\n\n").filter(Boolean);

  return (
    <>
      <PageHero
        title={post.title}
        crumbs={[
          { label: "Home", href: "/" },
          { label: "Mezan Blogs", href: "/blog" },
          { label: post.title },
        ]}
      />

      <div
        style={{
          maxWidth: 1200,
          margin: "0 auto",
          padding: "56px 20px",
          display: "grid",
          gridTemplateColumns: "1fr 300px",
          gap: 48,
          alignItems: "start",
        }}
      >
        {/* ── Post Content ── */}
        <article>
          {/* Cover image */}
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src={post.image}
            alt={post.title}
            style={{
              width: "100%",
              height: 380,
              objectFit: "cover",
              borderRadius: 12,
              display: "block",
              marginBottom: 28,
            }}
          />

          {/* Meta row */}
          <div
            style={{
              display: "flex",
              gap: 20,
              alignItems: "center",
              marginBottom: 20,
              flexWrap: "wrap",
            }}
          >
            <span
              style={{
                background: "#f5b800",
                color: "#111",
                fontSize: 11,
                fontWeight: 700,
                padding: "4px 12px",
                borderRadius: 4,
                textTransform: "capitalize",
                letterSpacing: 0.5,
              }}
            >
              {post.category.replace(/-/g, " ")}
            </span>
            <span
              style={{
                display: "flex",
                alignItems: "center",
                gap: 5,
                fontSize: 13,
                color: "#888",
              }}
            >
              <User size={13} /> {post.author} &mdash; {post.authorRole}
            </span>
            <span
              style={{
                display: "flex",
                alignItems: "center",
                gap: 5,
                fontSize: 13,
                color: "#888",
              }}
            >
              <Clock size={13} /> {post.readTime} min read
            </span>
            <span style={{ fontSize: 13, color: "#aaa" }}>{post.date}</span>
          </div>

          {/* Title */}
          <h1
            style={{
              fontFamily: "Raleway,sans-serif",
              fontSize: "clamp(22px,3vw,34px)",
              fontWeight: 800,
              color: "#1a1a1a",
              lineHeight: 1.25,
              marginBottom: 24,
            }}
          >
            {post.title}
          </h1>

          {/* Excerpt highlight */}
          <div
            style={{
              borderLeft: "4px solid #f5b800",
              paddingLeft: 20,
              marginBottom: 28,
              background: "#fffdf0",
              borderRadius: "0 6px 6px 0",
              padding: "16px 20px",
            }}
          >
            <p
              style={{
                fontSize: 15,
                color: "#555",
                lineHeight: 1.7,
                fontStyle: "italic",
              }}
            >
              {post.excerpt}
            </p>
          </div>

          {/* Body paragraphs */}
          <div style={{ display: "flex", flexDirection: "column", gap: 20, marginBottom: 32 }}>
            {paragraphs.map((para, i) => (
              <p
                key={i}
                style={{ fontSize: 15, color: "#555", lineHeight: 1.8 }}
              >
                {para}
              </p>
            ))}
          </div>

          {/* Tags */}
          <div
            style={{
              display: "flex",
              gap: 8,
              flexWrap: "wrap",
              alignItems: "center",
              paddingTop: 20,
              borderTop: "1px solid #eee",
              marginBottom: 40,
            }}
          >
            <span
              style={{ fontSize: 13, fontWeight: 700, color: "#444", marginRight: 4 }}
            >
              Tags:
            </span>
            {post.tags.map((tag) => (
              <span
                key={tag}
                style={{
                  display: "inline-flex",
                  alignItems: "center",
                  gap: 4,
                  background: "#f0f0f0",
                  border: "1px solid #e5e7eb",
                  borderRadius: 4,
                  padding: "4px 12px",
                  fontSize: 12,
                  fontWeight: 600,
                  color: "#555",
                }}
              >
                <Tag size={10} /> {tag}
              </span>
            ))}
          </div>

          {/* Author card */}
          <div
            style={{
              background: "#f9f9f9",
              borderRadius: 10,
              padding: "24px 24px",
              display: "flex",
              gap: 20,
              alignItems: "center",
              marginBottom: 48,
            }}
          >
            <div
              style={{
                width: 64,
                height: 64,
                background: "#f5b800",
                borderRadius: "50%",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                flexShrink: 0,
                fontSize: 28,
              }}
            >
              👷
            </div>
            <div>
              <div
                style={{
                  fontFamily: "Raleway,sans-serif",
                  fontSize: 16,
                  fontWeight: 700,
                  color: "#1a1a1a",
                  marginBottom: 3,
                }}
              >
                {post.author}
              </div>
              <div style={{ fontSize: 13, color: "#888", marginBottom: 6 }}>
                {post.authorRole}
              </div>
              <p style={{ fontSize: 13, color: "#666", lineHeight: 1.6 }}>
                Certified professional at Mezan with extensive field
                experience. Committed to delivering quality home and commercial
                services.
              </p>
            </div>
          </div>

          {/* Back to blog */}
          <Link
            href="/blog"
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: 6,
              color: "#f5b800",
              fontWeight: 700,
              fontSize: 14,
              textDecoration: "none",
              fontFamily: "Raleway,sans-serif",
              marginBottom: 40,
            }}
          >
            <ArrowLeft size={16} /> Back To Blog
          </Link>

          {/* Related Posts */}
          {relatedPosts.length > 0 && (
            <div>
              <h2
                style={{
                  fontFamily: "Raleway,sans-serif",
                  fontSize: 22,
                  fontWeight: 800,
                  color: "#1a1a1a",
                  marginBottom: 24,
                  paddingBottom: 12,
                  borderBottom: "2px solid #f5b800",
                  display: "inline-block",
                }}
              >
                Related Posts
              </h2>
              <div
                style={{
                  display: "grid",
                  gridTemplateColumns: "repeat(3,1fr)",
                  gap: 20,
                  marginTop: 20,
                }}
              >
                {relatedPosts.map((rp) => (
                  <Link
                    key={rp.id}
                    href={`/blog/${rp.slug}`}
                    style={{ textDecoration: "none" }}
                  >
                    <div
                      style={{
                        borderRadius: 8,
                        overflow: "hidden",
                        border: "1px solid #eee",
                        transition: "box-shadow 0.2s",
                      }}
                      onMouseOver={(e) => {
                        (e.currentTarget as HTMLElement).style.boxShadow =
                          "0 6px 20px rgba(0,0,0,0.09)";
                      }}
                      onMouseOut={(e) => {
                        (e.currentTarget as HTMLElement).style.boxShadow =
                          "none";
                      }}
                    >
                      {/* eslint-disable-next-line @next/next/no-img-element */}
                      <img
                        src={rp.image}
                        alt={rp.title}
                        style={{
                          width: "100%",
                          height: 130,
                          objectFit: "cover",
                          display: "block",
                        }}
                      />
                      <div style={{ padding: "12px 14px" }}>
                        <p
                          style={{
                            fontSize: 13,
                            fontWeight: 700,
                            color: "#1a1a1a",
                            lineHeight: 1.4,
                            marginBottom: 6,
                          }}
                        >
                          {rp.title}
                        </p>
                        <span style={{ fontSize: 12, color: "#aaa" }}>
                          {rp.date}
                        </span>
                      </div>
                    </div>
                  </Link>
                ))}
              </div>
            </div>
          )}
        </article>

        {/* ── Sidebar ── */}
        <aside style={{ display: "flex", flexDirection: "column", gap: 28 }}>
          {/* Categories */}
          <div
            style={{
              border: "1px solid #e5e7eb",
              borderRadius: 10,
              padding: "20px 18px",
            }}
          >
            <h3
              style={{
                fontFamily: "Raleway,sans-serif",
                fontSize: 16,
                fontWeight: 700,
                color: "#1a1a1a",
                marginBottom: 16,
              }}
            >
              Categories
            </h3>
            <ul style={{ listStyle: "none", padding: 0 }}>
              {blogCategories.map((cat) => (
                <li key={cat.slug} style={{ marginBottom: 10 }}>
                  <Link
                    href={`/blog?category=${cat.slug}`}
                    style={{
                      display: "flex",
                      justifyContent: "space-between",
                      fontSize: 14,
                      color:
                        post.category === cat.slug ? "#f5b800" : "#555",
                      fontWeight: post.category === cat.slug ? 700 : 400,
                      textDecoration: "none",
                      padding: "2px 0",
                      alignItems: "center",
                    }}
                  >
                    <span
                      style={{ display: "flex", alignItems: "center", gap: 5 }}
                    >
                      <ChevronRight size={13} /> {cat.label}
                    </span>
                    <span style={{ color: "#aaa", fontWeight: 400, fontSize: 13 }}>
                      ({cat.count})
                    </span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Recent Posts */}
          <div
            style={{
              border: "1px solid #e5e7eb",
              borderRadius: 10,
              padding: "20px 18px",
            }}
          >
            <h3
              style={{
                fontFamily: "Raleway,sans-serif",
                fontSize: 16,
                fontWeight: 700,
                color: "#1a1a1a",
                marginBottom: 16,
              }}
            >
              Recent Posts
            </h3>
            <div style={{ display: "flex", flexDirection: "column", gap: 16 }}>
              {recentPosts.map((rp) => (
                <Link
                  key={rp.id}
                  href={`/blog/${rp.slug}`}
                  style={{
                    display: "flex",
                    gap: 12,
                    alignItems: "flex-start",
                    textDecoration: "none",
                  }}
                >
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src={rp.image}
                    alt={rp.title}
                    style={{
                      width: 60,
                      height: 56,
                      objectFit: "cover",
                      borderRadius: 6,
                      flexShrink: 0,
                    }}
                  />
                  <div>
                    <p
                      style={{
                        fontSize: 13,
                        fontWeight: 600,
                        color: "#1a1a1a",
                        lineHeight: 1.4,
                        marginBottom: 4,
                      }}
                    >
                      {rp.title}
                    </p>
                    <span style={{ fontSize: 12, color: "#aaa" }}>
                      {rp.date}
                    </span>
                  </div>
                </Link>
              ))}
            </div>
          </div>

          {/* Tags */}
          <div
            style={{
              border: "1px solid #e5e7eb",
              borderRadius: 10,
              padding: "20px 18px",
            }}
          >
            <h3
              style={{
                fontFamily: "Raleway,sans-serif",
                fontSize: 16,
                fontWeight: 700,
                color: "#1a1a1a",
                marginBottom: 14,
              }}
            >
              Tags
            </h3>
            <div style={{ display: "flex", flexWrap: "wrap", gap: 8 }}>
              {allTags.map((tag) => (
                <span
                  key={tag}
                  style={{
                    display: "inline-flex",
                    alignItems: "center",
                    gap: 4,
                    background: post.tags.includes(tag) ? "#f5b800" : "#f5f5f5",
                    border: "1px solid",
                    borderColor: post.tags.includes(tag) ? "#f5b800" : "#e5e7eb",
                    borderRadius: 4,
                    padding: "5px 10px",
                    fontSize: 12,
                    fontWeight: 600,
                    color: post.tags.includes(tag) ? "#111" : "#555",
                  }}
                >
                  <Tag size={10} /> {tag}
                </span>
              ))}
            </div>
          </div>

          {/* CTA */}
          <div
            style={{
              background: "#f5b800",
              borderRadius: 10,
              padding: "28px 20px",
              textAlign: "center",
            }}
          >
            <div style={{ fontSize: 36, marginBottom: 12 }}>🔧</div>
            <h3
              style={{
                fontFamily: "Raleway,sans-serif",
                fontSize: 18,
                fontWeight: 800,
                color: "#1a1a1a",
                marginBottom: 10,
                lineHeight: 1.25,
              }}
            >
              Need A Service?
            </h3>
            <p
              style={{
                fontSize: 13,
                color: "#333",
                lineHeight: 1.6,
                marginBottom: 16,
              }}
            >
              Book a certified professional for any home or commercial service
              today.
            </p>
            <Link
              href="/contact"
              style={{
                display: "inline-block",
                background: "#1a1a1a",
                color: "#fff",
                fontWeight: 700,
                fontSize: 13,
                padding: "11px 22px",
                borderRadius: 6,
                textDecoration: "none",
                fontFamily: "Raleway,sans-serif",
              }}
            >
              Get In Touch
            </Link>
          </div>
        </aside>
      </div>
    </>
  );
}
