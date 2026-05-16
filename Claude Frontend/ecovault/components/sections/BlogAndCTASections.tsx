import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { ArrowRight, Calendar, Clock, User } from 'lucide-react'
import { Container, Section, SectionHeader, Card, Badge } from '@/components/ui/index'
import { Button } from '@/components/ui/Button'
import { BLOG_POSTS } from '@/data/index'
import { formatDate } from '@/lib/utils'
import type { BlogPost } from '@/types'

// ─── Blog Card ────────────────────────────────────────────────────────────────

function BlogCard({ post }: { post: BlogPost }) {
  return (
    <article className="group bg-white rounded-2xl shadow-card hover:shadow-card-hover
                         transition-all duration-350 hover:-translate-y-1 overflow-hidden border border-neutral-100">
      <Link href={`/news/${post.slug}`} className="block">
        <div className="relative h-48 overflow-hidden">
          <Image
            src={post.image}
            alt={post.title}
            fill
            className="object-cover transition-transform duration-500 group-hover:scale-105"
          />
          <div className="absolute top-4 left-4">
            <Badge variant="accent" size="sm">{post.category}</Badge>
          </div>
        </div>
      </Link>

      <div className="p-6">
        <div className="flex items-center gap-4 text-neutral-400 text-caption mb-3">
          <span className="flex items-center gap-1.5">
            <Calendar size={12} /> {formatDate(post.date)}
          </span>
          <span className="flex items-center gap-1.5">
            <Clock size={12} /> {post.readTime}
          </span>
        </div>

        <Link href={`/news/${post.slug}`}>
          <h3 className="font-display font-bold text-forest text-heading-sm leading-snug mb-3
                         group-hover:text-primary-600 transition-colors line-clamp-2">
            {post.title}
          </h3>
        </Link>

        <p className="text-neutral-600 text-body-sm leading-relaxed line-clamp-3 mb-5">
          {post.excerpt}
        </p>

        <div className="flex items-center justify-between pt-4 border-t border-neutral-100">
          <div className="flex items-center gap-2">
            <Image
              src={post.authorAvatar}
              alt={post.author}
              width={28}
              height={28}
              className="w-7 h-7 rounded-full object-cover"
            />
            <span className="text-neutral-500 text-caption font-medium">{post.author}</span>
          </div>
          <Link
            href={`/news/${post.slug}`}
            className="inline-flex items-center gap-1 text-primary-600 text-caption font-semibold
                       font-display hover:gap-2 transition-all"
          >
            Read More <ArrowRight size={13} />
          </Link>
        </div>
      </div>
    </article>
  )
}

// ─── Blog Section ────────────────────────────────────────────────────────────

export function BlogSection() {
  const recent = BLOG_POSTS.slice(0, 3)

  return (
    <Section className="bg-neutral-50">
      <Container>
        <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-6 mb-12">
          <SectionHeader
            eyebrow="From Our Blog"
            title="Latest News & Articles"
            subtitle="Stay informed with expert insights on waste management, recycling, and sustainability."
            align="left"
          />
          <Button href="/news" variant="outline" size="md"
            icon={<ArrowRight size={15} />} className="shrink-0">
            All Articles
          </Button>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {recent.map((post) => (
            <BlogCard key={post.slug} post={post} />
          ))}
        </div>
      </Container>
    </Section>
  )
}

// ─── Bottom CTA Section ──────────────────────────────────────────────────────

export function BottomCTASection() {
  return (
    <section className="bg-accent-400 py-10">
      <Container>
        <div className="flex flex-col sm:flex-row items-center justify-between gap-6">
          <div>
            <p className="font-display font-bold text-forest leading-tight"
              style={{ fontSize: 'clamp(1.25rem, 2.5vw, 1.75rem)' }}>
              Do You Have Home or Business Waste?
            </p>
            <p className="text-forest/70 text-body-sm mt-1">
              Request a free pickup estimate and get started today.
            </p>
          </div>
          <Button href="/contact" variant="secondary" size="lg"
            icon={<ArrowRight size={18} />} className="shrink-0">
            Request a Pickup
          </Button>
        </div>
      </Container>
    </section>
  )
}
