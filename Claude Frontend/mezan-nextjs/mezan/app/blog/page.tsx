"use client";
import { useState, useMemo } from "react";
import Link from "next/link";
import { Search, Clock, User, Tag, ChevronRight } from "lucide-react";
import PageHero from "@/components/PageHero";
import { blogPosts, blogCategories } from "@/data/site";

const PER_PAGE = 4;

export default function BlogPage() {
  const [search, setSearch] = useState("");
  const [activeCategory, setActiveCategory] = useState<string | null>(null);
  const [page, setPage] = useState(1);

  const filtered = useMemo(() => {
    return blogPosts.filter((post) => {
      const matchSearch =
        search === "" ||
        post.title.toLowerCase().includes(search.toLowerCase()) ||
        post.excerpt.toLowerCase().includes(search.toLowerCase());
      const matchCat = !activeCategory || post.category === activeCategory;
      return matchSearch && matchCat;
    });
  }, [search, activeCategory]);

  const totalPages = Math.max(1, Math.ceil(filtered.length / PER_PAGE));
  const paged = filtered.slice((page - 1) * PER_PAGE, page * PER_PAGE);

  const recentPosts = blogPosts.slice(0, 4);

  const allTags = Array.from(new Set(blogPosts.flatMap((p) => p.tags)));

  return (
    <>
      <PageHero
        title="Mezan Blogs"
        crumbs={[
          { label: "Home", href: "/" },
          { label: "Mezan Blogs" },
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
        {/* ── Main Posts ── */}
        <div>
          {paged.length === 0 ? (
            <div
              style={{
                textAlign: "center",
                padding: "60px 0",
                color: "#999",
                fontSize: 16,
              }}
            >
              No posts found.
            </div>
          ) : (
            <div style={{ display: "flex", flexDirection: "column", gap: 36 }}>
              {paged.map((post) => (
                <article
                  key={post.id}
                  style={{
                    background: "#fff",
                    borderRadius: 10,
                    overflow: "hidden",
                    border: "1px solid #eee",
                    transition: "box-shadow 0.2s",
                  }}
                  onMouseOver={(e) => {
                    (e.currentTarget as HTMLElement).style.boxShadow =
                      "0 8px 28px rgba(0,0,0,0.09)";
                  }}
                  onMouseOut={(e) => {
                    (e.currentTarget as HTMLElement).style.boxShadow = "none";
                  }}
                >
                  {/* Thumbnail */}
                  <Link href={`/blog/${post.slug}`} style={{ display: "block" }}>
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img
                      src={post.image}
                      alt={post.title}
                      style={{
                        width: "100%",
                        height: 260,
                        objectFit: "cover",
                        display: "block",
                      }}
                    />
                  </Link>

                  {/* Content */}
                  <div style={{ padding: "28px 28px 24px" }}>
                    {/* Meta */}
                    <div
                      style={{
                        display: "flex",
                        gap: 20,
                        alignItems: "center",
                        marginBottom: 14,
                        flexWrap: "wrap",
                      }}
                    >
                      <span
                        style={{
                          background: "#f5b800",
                          color: "#111",
                          fontSize: 11,
                          fontWeight: 700,
                          padding: "3px 10px",
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
                        <User size={13} /> {post.author}
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
                      <span style={{ fontSize: 13, color: "#aaa" }}>
                        {post.date}
                      </span>
                    </div>

                    {/* Title */}
                    <Link
                      href={`/blog/${post.slug}`}
                      style={{ textDecoration: "none" }}
                    >
                      <h2
                        style={{
                          fontFamily: "Raleway,sans-serif",
                          fontSize: 22,
                          fontWeight: 800,
                          color: "#1a1a1a",
                          lineHeight: 1.3,
                          marginBottom: 12,
                          transition: "color 0.2s",
                        }}
                        onMouseOver={(e) => {
                          (e.currentTarget as HTMLElement).style.color =
                            "#f5b800";
                        }}
                        onMouseOut={(e) => {
                          (e.currentTarget as HTMLElement).style.color =
                            "#1a1a1a";
                        }}
                      >
                        {post.title}
                      </h2>
                    </Link>

                    {/* Excerpt */}
                    <p
                      style={{
                        fontSize: 14,
                        color: "#666",
                        lineHeight: 1.7,
                        marginBottom: 20,
                      }}
                    >
                      {post.excerpt}
                    </p>

                    {/* Read more */}
                    <Link
                      href={`/blog/${post.slug}`}
                      style={{
                        display: "inline-flex",
                        alignItems: "center",
                        gap: 6,
                        background: "#f5b800",
                        color: "#111",
                        fontWeight: 700,
                        fontSize: 13,
                        padding: "10px 22px",
                        borderRadius: 6,
                        textDecoration: "none",
                        fontFamily: "Raleway,sans-serif",
                        transition: "background 0.2s",
                      }}
                      onMouseOver={(e) => {
                        (e.currentTarget as HTMLElement).style.background =
                          "#e0a800";
                      }}
                      onMouseOut={(e) => {
                        (e.currentTarget as HTMLElement).style.background =
                          "#f5b800";
                      }}
                    >
                      Read More <ChevronRight size={14} />
                    </Link>
                  </div>
                </article>
              ))}
            </div>
          )}

          {/* Pagination */}
          {totalPages > 1 && (
            <div
              style={{
                display: "flex",
                gap: 8,
                justifyContent: "flex-start",
                alignItems: "center",
                marginTop: 40,
              }}
            >
              {Array.from({ length: totalPages }).map((_, i) => (
                <button
                  key={i}
                  onClick={() => setPage(i + 1)}
                  style={{
                    width: 38,
                    height: 38,
                    borderRadius: "50%",
                    border: "1px solid",
                    borderColor: page === i + 1 ? "#f5b800" : "#e5e7eb",
                    background: page === i + 1 ? "#f5b800" : "#fff",
                    color: page === i + 1 ? "#111" : "#555",
                    fontWeight: 700,
                    fontSize: 14,
                    cursor: "pointer",
                    transition: "all 0.2s",
                  }}
                >
                  {i + 1}
                </button>
              ))}
              {page < totalPages && (
                <button
                  onClick={() => setPage((p) => Math.min(p + 1, totalPages))}
                  style={{
                    width: 38,
                    height: 38,
                    borderRadius: "50%",
                    border: "1px solid #e5e7eb",
                    background: "#fff",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    cursor: "pointer",
                  }}
                >
                  <ChevronRight size={16} color="#555" />
                </button>
              )}
            </div>
          )}
        </div>

        {/* ── Sidebar ── */}
        <aside style={{ display: "flex", flexDirection: "column", gap: 28 }}>
          {/* Search */}
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
              Search
            </h3>
            <div
              style={{
                display: "flex",
                gap: 0,
                border: "1px solid #e5e7eb",
                borderRadius: 6,
                overflow: "hidden",
              }}
            >
              <input
                value={search}
                onChange={(e) => {
                  setSearch(e.target.value);
                  setPage(1);
                }}
                placeholder="Search articles..."
                style={{
                  flex: 1,
                  border: "none",
                  outline: "none",
                  padding: "9px 12px",
                  fontSize: 13,
                  color: "#333",
                  background: "#fff",
                }}
              />
              <button
                style={{
                  background: "#f5b800",
                  border: "none",
                  padding: "9px 14px",
                  cursor: "pointer",
                  display: "flex",
                  alignItems: "center",
                }}
              >
                <Search size={15} color="#111" />
              </button>
            </div>
          </div>

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
                marginBottom: 14,
              }}
            >
              Categories
            </h3>
            <ul style={{ listStyle: "none", padding: 0 }}>
              <li style={{ marginBottom: 10 }}>
                <button
                  onClick={() => {
                    setActiveCategory(null);
                    setPage(1);
                  }}
                  style={{
                    background: "none",
                    border: "none",
                    cursor: "pointer",
                    display: "flex",
                    justifyContent: "space-between",
                    width: "100%",
                    fontSize: 14,
                    fontWeight: !activeCategory ? 700 : 400,
                    color: !activeCategory ? "#f5b800" : "#555",
                    padding: "2px 0",
                    textAlign: "left",
                  }}
                >
                  <span>All Posts</span>
                  <span style={{ color: "#aaa", fontWeight: 400 }}>
                    ({blogPosts.length})
                  </span>
                </button>
              </li>
              {blogCategories.map((cat) => (
                <li key={cat.slug} style={{ marginBottom: 10 }}>
                  <button
                    onClick={() => {
                      setActiveCategory(
                        cat.slug === activeCategory ? null : cat.slug
                      );
                      setPage(1);
                    }}
                    style={{
                      background: "none",
                      border: "none",
                      cursor: "pointer",
                      display: "flex",
                      justifyContent: "space-between",
                      width: "100%",
                      fontSize: 14,
                      fontWeight: activeCategory === cat.slug ? 700 : 400,
                      color: activeCategory === cat.slug ? "#f5b800" : "#555",
                      padding: "2px 0",
                      textAlign: "left",
                    }}
                  >
                    <span>{cat.label}</span>
                    <span style={{ color: "#aaa", fontWeight: 400 }}>
                      ({cat.count})
                    </span>
                  </button>
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
              {recentPosts.map((post) => (
                <Link
                  key={post.id}
                  href={`/blog/${post.slug}`}
                  style={{
                    display: "flex",
                    gap: 12,
                    alignItems: "flex-start",
                    textDecoration: "none",
                  }}
                >
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src={post.image}
                    alt={post.title}
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
                        transition: "color 0.2s",
                      }}
                      onMouseOver={(e) => {
                        (e.currentTarget as HTMLElement).style.color =
                          "#f5b800";
                      }}
                      onMouseOut={(e) => {
                        (e.currentTarget as HTMLElement).style.color = "#1a1a1a";
                      }}
                    >
                      {post.title}
                    </p>
                    <span style={{ fontSize: 12, color: "#aaa" }}>
                      {post.date}
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
                    background: "#f5f5f5",
                    border: "1px solid #e5e7eb",
                    borderRadius: 4,
                    padding: "5px 10px",
                    fontSize: 12,
                    fontWeight: 600,
                    color: "#555",
                  }}
                >
                  <Tag size={10} /> {tag}
                </span>
              ))}
            </div>
          </div>
        </aside>
      </div>
    </>
  );
}
