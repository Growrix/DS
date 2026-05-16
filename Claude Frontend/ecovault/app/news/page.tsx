import type { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import { ArrowRight, Calendar, Clock } from 'lucide-react'
import { PageHero } from '@/components/layout/PageHero'
import { Container, Section, SectionHeader, Badge } from '@/components/ui/index'
import { CTABannerSection } from '@/components/sections/CTABannerSection'
import { BLOG_POSTS } from '@/data/index'
import { formatDate } from '@/lib/utils'

export const metadata: Metadata = {
  title: 'News & Articles',
  description: 'Expert insights on waste management, recycling, sustainability, and community wellbeing.',
}

export default function NewsPage() {
  const [featured, ...rest] = BLOG_POSTS

  return (
    <>
      <PageHero
        title="Latest News & Articles"
        subtitle="Stay informed with expert insights, industry trends, and sustainability tips from the EcoHaul team."
        breadcrumbs={[{ label: 'News' }]}
      />

      <Section className="bg-white">
        <Container>
          {/* Featured post */}
          <Link href={`/news/${featured.slug}`}
            className="group grid md:grid-cols-2 gap-0 bg-white rounded-2xl shadow-card
                       hover:shadow-card-hover overflow-hidden mb-14 border border-neutral-100 block">
            <div className="relative h-72 md:h-full overflow-hidden">
              <Image src={featured.image} alt={featured.title} fill
                className="object-cover transition-transform duration-500 group-hover:scale-105" />
            </div>
            <div className="p-8 flex flex-col justify-center">
              <Badge variant="accent" size="md" className="mb-4 self-start">{featured.category}</Badge>
              <h2 className="font-display font-bold text-forest text-display-sm leading-tight mb-4
                             group-hover:text-primary-600 transition-colors">
                {featured.title}
              </h2>
              <p className="text-neutral-600 text-body-md leading-relaxed mb-6">{featured.excerpt}</p>
              <div className="flex items-center gap-4 text-neutral-400 text-caption mb-6">
                <span className="flex items-center gap-1.5"><Calendar size={12} /> {formatDate(featured.date)}</span>
                <span className="flex items-center gap-1.5"><Clock size={12} /> {featured.readTime}</span>
              </div>
              <span className="inline-flex items-center gap-2 text-primary-600 font-semibold font-display text-body-sm
                               group-hover:gap-3 transition-all">
                Read Article <ArrowRight size={16} />
              </span>
            </div>
          </Link>

          {/* Grid */}
          <SectionHeader eyebrow="More Articles" title="All Articles" align="left" className="mb-10" />
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {rest.map((post) => (
              <article key={post.slug}
                className="group bg-white rounded-2xl overflow-hidden shadow-card
                           hover:shadow-card-hover hover:-translate-y-1 transition-all duration-350 border border-neutral-100">
                <Link href={`/news/${post.slug}`} className="block">
                  <div className="relative h-44 overflow-hidden">
                    <Image src={post.image} alt={post.title} fill
                      className="object-cover transition-transform duration-500 group-hover:scale-105" />
                    <div className="absolute top-3 left-3">
                      <Badge variant="accent" size="sm">{post.category}</Badge>
                    </div>
                  </div>
                </Link>
                <div className="p-5">
                  <div className="flex items-center gap-3 text-neutral-400 text-caption mb-3">
                    <span className="flex items-center gap-1"><Calendar size={11} /> {formatDate(post.date)}</span>
                    <span className="flex items-center gap-1"><Clock size={11} /> {post.readTime}</span>
                  </div>
                  <Link href={`/news/${post.slug}`}>
                    <h3 className="font-display font-bold text-forest text-heading-sm leading-snug mb-3
                                   group-hover:text-primary-600 transition-colors line-clamp-2">
                      {post.title}
                    </h3>
                  </Link>
                  <p className="text-neutral-600 text-body-sm leading-relaxed line-clamp-3">{post.excerpt}</p>
                </div>
              </article>
            ))}
          </div>
        </Container>
      </Section>

      <CTABannerSection />
    </>
  )
}
