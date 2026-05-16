import Image from "next/image";
import PageHero from "@/components/common/PageHero";
import { BLOG_POSTS } from "@/lib/site";

type Props = {
  params: {
    slug: string;
  };
};

export function generateStaticParams() {
  return BLOG_POSTS.map((post) => ({ slug: post.slug }));
}

export default function BlogDetailPage({ params }: Props) {
  const post = BLOG_POSTS.find((entry) => entry.slug === params.slug) ?? BLOG_POSTS[0];

  return (
    <div>
      <PageHero title={post.title} crumb="Blog Details" />
      <section className="container py-20">
        <Image src={post.image} alt={post.title} width={1400} height={520} className="h-[520px] w-full rounded-3xl object-cover" />
        <p className="mt-8 text-lg text-slate-400">{post.date}</p>
        <h1 className="mt-2 text-6xl font-semibold">{post.title}</h1>
        <p className="mt-8 max-w-5xl text-lg leading-9 text-slate-500">
          Your eye health is essential for overall well-being. In this article, our specialists share
          practical strategies to reduce digital strain, keep your eyesight sharp, and build daily habits
          that protect long-term vision quality.
        </p>
      </section>
    </div>
  );
}
