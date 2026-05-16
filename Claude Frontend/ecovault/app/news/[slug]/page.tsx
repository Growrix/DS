import type { Metadata } from 'next'
import { notFound } from 'next/navigation'
import Image from 'next/image'
import Link from 'next/link'
import { ArrowLeft, Calendar, Clock, User, Tag } from 'lucide-react'
import { PageHero } from '@/components/layout/PageHero'
import { Container, Section, Card, Badge } from '@/components/ui/index'
import { CTABannerSection } from '@/components/sections/CTABannerSection'
import { BLOG_POSTS } from '@/data/index'
import { formatDate } from '@/lib/utils'

interface Props { params: { slug: string } }

export async function generateStaticParams() {
  return BLOG_POSTS.map((p) => ({ slug: p.slug }))
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const post = BLOG_POSTS.find((p) => p.slug === params.slug)
  if (!post) return { title: 'Article Not Found' }
  return { title: post.title, description: post.excerpt }
}

const DUMMY_CONTENT = `
Waste management is one of the most tangible ways individuals and organisations can contribute 
to environmental health. Each ton diverted from landfill represents real, measurable impact: 
reduced methane emissions, preserved land, and recoverable materials returned to the supply chain.

Over the past decade, advances in material recovery technology have made recycling more efficient 
and economically viable than ever before. Single-stream collection—where all recyclables are 
placed in one bin—has significantly increased residential participation rates. Combined with 
AI-powered sorting systems at material recovery facilities, contamination rates have dropped 
while throughput has increased substantially.

For businesses, the case is equally compelling. Companies that implement comprehensive waste 
reduction programmes typically see cost savings of 10–30% on disposal fees within the first year, 
as they shift from costly landfill contracts to lower-cost recycling and composting alternatives.

The key is finding a waste management partner that aligns with your operational needs and 
sustainability goals—one that provides transparent reporting, certified handling of regulated 
materials, and genuine commitment to environmental outcomes beyond mere compliance.
`

export default function NewsPostPage({ params }: Props) {
  const post = BLOG_POSTS.find((p) => p.slug === params.slug)
  if (!post) notFound()

  const related = BLOG_POSTS.filter((p) => p.slug !== post.slug).slice(0, 2)

  return (
    <>
      <PageHero
        title={post.title}
        breadcrumbs={[
          { label: 'News', href: '/news' },
          { label: post.title },
        ]}
      />

      <Section className="bg-white">
        <Container size="md">
          {/* Meta */}
          <div className="flex flex-wrap items-center gap-5 text-neutral-500 text-body-sm mb-8 pb-8 border-b border-neutral-100">
            <span className="flex items-center gap-2"><Calendar size={15} /> {formatDate(post.date)}</span>
            <span className="flex items-center gap-2"><Clock size={15} /> {post.readTime}</span>
            <span className="flex items-center gap-2">
              <Image src={post.authorAvatar} alt={post.author} width={22} height={22}
                className="w-5.5 h-5.5 rounded-full object-cover" />
              {post.author}
            </span>
            <Badge variant="primary" size="sm">{post.category}</Badge>
          </div>

          {/* Hero image */}
          <div className="relative h-72 rounded-2xl overflow-hidden shadow-lg mb-10">
            <Image src={post.image} alt={post.title} fill className="object-cover" />
          </div>

          {/* Article body */}
          <div className="prose prose-lg max-w-none text-neutral-700 leading-relaxed space-y-6">
            <p className="text-body-lg font-medium text-neutral-800">{post.excerpt}</p>
            {DUMMY_CONTENT.trim().split('\n\n').map((para, i) => (
              <p key={i} className="text-body-md leading-relaxed text-neutral-700">{para.trim()}</p>
            ))}
          </div>

          {/* Tags */}
          <div className="mt-10 flex flex-wrap items-center gap-2 pt-8 border-t border-neutral-100">
            <Tag size={15} className="text-neutral-400" />
            {post.tags.map((tag) => (
              <Badge key={tag} variant="neutral" size="sm">{tag}</Badge>
            ))}
          </div>

          {/* Back link */}
          <Link href="/news"
            className="inline-flex items-center gap-2 mt-10 text-primary-600 font-semibold font-display text-body-sm
                       hover:gap-3 transition-all">
            <ArrowLeft size={16} /> Back to All Articles
          </Link>
        </Container>
      </Section>

      {/* Related */}
      {related.length > 0 && (
        <Section className="bg-neutral-50">
          <Container>
            <h2 className="font-display font-bold text-forest text-display-sm mb-8">Related Articles</h2>
            <div className="grid sm:grid-cols-2 gap-6">
              {related.map((p) => (
                <Link key={p.slug} href={`/news/${p.slug}`}
                  className="group flex gap-4 bg-white rounded-xl p-4 shadow-card
                             hover:shadow-card-hover transition-all border border-neutral-100">
                  <div className="relative w-20 h-20 rounded-lg overflow-hidden shrink-0">
                    <Image src={p.image} alt={p.title} fill className="object-cover" />
                  </div>
                  <div>
                    <p className="font-display font-bold text-forest text-heading-sm leading-snug
                                  group-hover:text-primary-600 transition-colors line-clamp-2">
                      {p.title}
                    </p>
                    <p className="text-neutral-500 text-caption mt-1">{formatDate(p.date)}</p>
                  </div>
                </Link>
              ))}
            </div>
          </Container>
        </Section>
      )}

      <CTABannerSection />
    </>
  )
}
