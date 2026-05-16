import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { Star, ArrowRight, Zap, FileCheck, Users } from 'lucide-react'
import { Container, Section, SectionHeader, Card, Badge } from '@/components/ui/index'
import { Button } from '@/components/ui/Button'
import { FEATURE_STRIPS, TESTIMONIALS, PROJECTS } from '@/data/index'
import type { Testimonial, Project } from '@/types'

// ─── Icon map ────────────────────────────────────────────────────────────────

const ICON_MAP: Record<string, React.ElementType> = { Zap, FileCheck, Users }

// ─── Feature Strip ───────────────────────────────────────────────────────────

export function FeaturesStripSection() {
  return (
    <section className="bg-neutral-50 border-y border-neutral-200 py-14">
      <Container>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {FEATURE_STRIPS.map((feature, i) => {
            const Icon = ICON_MAP[feature.icon] ?? Zap
            return (
              <div key={feature.id}
                className={`flex flex-col items-center text-center p-6
                            ${i < FEATURE_STRIPS.length - 1
                              ? 'md:border-r md:border-neutral-200'
                              : ''}`}>
                <div className="w-14 h-14 bg-primary-600 rounded-2xl flex items-center justify-center
                                mb-5 shadow-green">
                  <Icon size={26} className="text-white" />
                </div>
                <h3 className="font-display font-bold text-forest text-heading-lg mb-3">
                  {feature.title}
                </h3>
                <p className="text-neutral-600 text-body-sm leading-relaxed">
                  {feature.description}
                </p>
              </div>
            )
          })}
        </div>
      </Container>
    </section>
  )
}

// ─── Star Rating ─────────────────────────────────────────────────────────────

function StarRating({ rating }: { rating: number }) {
  return (
    <div className="flex items-center gap-0.5">
      {Array.from({ length: 5 }).map((_, i) => (
        <Star
          key={i}
          size={14}
          className={i < rating ? 'text-accent-400 fill-accent-400' : 'text-neutral-300'}
        />
      ))}
    </div>
  )
}

// ─── Testimonial Card ────────────────────────────────────────────────────────

function TestimonialCard({ testimonial }: { testimonial: Testimonial }) {
  return (
    <Card variant="default" padding="lg" hover
      className="flex flex-col h-full border border-neutral-100">
      <StarRating rating={testimonial.rating} />
      <p className="mt-4 text-neutral-700 text-body-sm leading-relaxed flex-1 italic">
        &ldquo;{testimonial.content}&rdquo;
      </p>
      <div className="mt-6 flex items-center gap-3 pt-5 border-t border-neutral-100">
        <Image
          src={testimonial.avatar}
          alt={testimonial.name}
          width={44}
          height={44}
          className="w-11 h-11 rounded-full object-cover ring-2 ring-primary-100"
        />
        <div>
          <p className="font-display font-bold text-forest text-body-sm">{testimonial.name}</p>
          <p className="text-neutral-500 text-caption">{testimonial.role} — {testimonial.company}</p>
        </div>
      </div>
    </Card>
  )
}

// ─── Testimonials Section ────────────────────────────────────────────────────

export function TestimonialsSection() {
  return (
    <Section className="bg-white">
      <Container>
        <div className="grid lg:grid-cols-3 gap-14 items-start">
          <div className="lg:col-span-1 lg:sticky lg:top-24">
            <SectionHeader
              eyebrow="Client Reviews"
              title="What Our Customers Say About Our Services"
              subtitle="Real feedback from real clients—shared because they chose to."
              align="left"
            />
            <Button href="/projects" variant="outline" size="md" className="mt-8">
              View All Reviews
            </Button>
          </div>

          <div className="lg:col-span-2 grid sm:grid-cols-2 gap-6">
            {TESTIMONIALS.map((t) => (
              <TestimonialCard key={t.id} testimonial={t} />
            ))}
            {/* CTA card */}
            <div className="bg-primary-600 rounded-xl p-6 flex flex-col justify-between text-white
                            shadow-green hidden sm:flex">
              <p className="font-display font-bold text-heading-lg leading-snug mb-4">
                Join 4,800+ satisfied clients today
              </p>
              <Button href="/contact" variant="accent" size="md">
                Get a Free Quote
              </Button>
            </div>
          </div>
        </div>
      </Container>
    </Section>
  )
}

// ─── Project Card ────────────────────────────────────────────────────────────

function ProjectCard({ project }: { project: Project }) {
  return (
    <Link href={`/projects/${project.slug}`}
      className="group relative overflow-hidden rounded-2xl shadow-card hover:shadow-card-hover
                 transition-all duration-350 hover:-translate-y-1 block bg-white">
      <div className="relative h-52 overflow-hidden">
        <Image
          src={project.image}
          alt={project.title}
          fill
          className="object-cover transition-transform duration-500 group-hover:scale-110"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-forest-dark/80 to-transparent" />
        <div className="absolute bottom-4 left-4 right-4">
          <Badge variant="accent" size="sm" className="mb-2">{project.category}</Badge>
          <h3 className="font-display font-bold text-white text-heading-sm leading-snug">
            {project.title}
          </h3>
        </div>
      </div>
    </Link>
  )
}

// ─── Projects Section ────────────────────────────────────────────────────────

export function ProjectsSection() {
  const featured = PROJECTS.slice(0, 4)

  return (
    <Section className="bg-neutral-50">
      <Container>
        <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-6 mb-12">
          <SectionHeader
            eyebrow="Recent Work"
            title="Recently Completed Waste Projects"
            subtitle="A sample of our successfully delivered engagements across sectors."
            align="left"
          />
          <Button href="/projects" variant="outline" size="md"
            icon={<ArrowRight size={15} />} className="shrink-0">
            All Projects
          </Button>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {featured.map((project) => (
            <ProjectCard key={project.slug} project={project} />
          ))}
        </div>
      </Container>
    </Section>
  )
}
