import type { Metadata } from "next";
import { PageHero }    from "@/components/layout/PageHero";
import { Container, SectionLabel, Heading } from "@/components/ui/primitives";
import { BlogCard }    from "@/components/ui/Cards";
import { BLOG_POSTS }  from "@/data";

export const metadata: Metadata = {
  title:       "News & Insights",
  description: "Industry news, project updates, and construction insights from the NexBuild team.",
};

const BLOG_CATEGORIES = ["All", "Industry Events", "Compliance", "Legal", "Technology", "Sustainability"];

export default function NewsPage() {
  return (
    <>
      <PageHero
        title="News & Insights"
        breadcrumbs={[
          { label: "NexBuild", href: "/" },
          { label: "News" },
        ]}
      />

      <section className="py-20 md:py-28 bg-white">
        <Container>
          <div className="text-center mb-14">
            <SectionLabel className="justify-center">Latest Articles</SectionLabel>
            <Heading size="lg" className="mt-2">
              From the <span className="text-accent">Blog</span>
            </Heading>
          </div>

          {/* Category tabs */}
          <div className="flex flex-wrap justify-center gap-3 mb-12">
            {BLOG_CATEGORIES.map((cat) => (
              <button
                key={cat}
                className="px-5 py-2 rounded-full text-sm font-accent font-semibold border border-neutral-200 hover:bg-accent hover:text-white hover:border-accent transition-all first:bg-accent first:text-white first:border-accent"
              >
                {cat}
              </button>
            ))}
          </div>

          {/* Posts Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-7">
            {BLOG_POSTS.map((post) => (
              <BlogCard key={post.id} post={post} />
            ))}
          </div>

          {/* Pagination */}
          <div className="flex justify-center gap-2 mt-14">
            {[1, 2, 3].map((page) => (
              <button
                key={page}
                className={`w-10 h-10 rounded-ds-sm font-accent font-semibold text-sm transition-colors ${
                  page === 1
                    ? "bg-accent text-white"
                    : "bg-neutral-100 text-neutral-600 hover:bg-accent hover:text-white"
                }`}
              >
                {page}
              </button>
            ))}
          </div>
        </Container>
      </section>
    </>
  );
}
