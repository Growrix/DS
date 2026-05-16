import Image from "next/image";
import CtaBand from "@/components/common/CtaBand";
import PageHero from "@/components/common/PageHero";
import { BLOG_POSTS } from "@/lib/site";

export default function BlogPage() {
  return (
    <div>
      <PageHero title="Blog" />
      <section className="container py-20">
        <div className="grid gap-8 md:grid-cols-3">
          {BLOG_POSTS.map((post) => (
            <article key={post.slug} className="overflow-hidden rounded-3xl bg-[#d8ecef]">
              <Image src={post.image} alt={post.title} width={500} height={256} className="h-64 w-full object-cover" />
              <div className="px-6 py-6">
                <p className="text-base text-slate-400">{post.date}</p>
                <h3 className="mt-2 text-4xl font-medium">{post.title}</h3>
                <p className="mt-4 text-slate-500">Read More</p>
              </div>
            </article>
          ))}
        </div>
      </section>
      <CtaBand />
    </div>
  );
}
