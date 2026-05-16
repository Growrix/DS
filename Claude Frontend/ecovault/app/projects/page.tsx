import type { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import { ArrowRight, MapPin, Calendar } from 'lucide-react'
import { PageHero } from '@/components/layout/PageHero'
import { Container, Section, SectionHeader, Badge } from '@/components/ui/index'
import { CTABannerSection } from '@/components/sections/CTABannerSection'
import { PROJECTS } from '@/data/index'
import { formatDate } from '@/lib/utils'

export const metadata: Metadata = {
  title: 'Our Projects',
  description: 'Browse EcoHaul\'s portfolio of successfully completed waste management and recycling projects.',
}

export default function ProjectsPage() {
  return (
    <>
      <PageHero
        title="Our Projects"
        subtitle="A portfolio of successfully completed waste management engagements across sectors and scales."
        breadcrumbs={[{ label: 'Projects' }]}
      />

      <Section className="bg-white">
        <Container>
          <SectionHeader
            eyebrow="Recent Work"
            title="What We've Accomplished"
            subtitle="Every project represents a measurable step toward cleaner communities."
            align="center"
            className="mb-14"
          />

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-7">
            {PROJECTS.map((project) => (
              <article key={project.slug}
                className="group bg-white rounded-2xl overflow-hidden shadow-card
                           hover:shadow-card-hover hover:-translate-y-1 transition-all duration-350 border border-neutral-100">
                <Link href={`/projects/${project.slug}`} className="block">
                  <div className="relative h-52 overflow-hidden">
                    <Image
                      src={project.image}
                      alt={project.title}
                      fill
                      className="object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-forest-dark/70 to-transparent" />
                    <div className="absolute top-4 left-4">
                      <Badge variant="accent" size="sm">{project.category}</Badge>
                    </div>
                  </div>
                </Link>
                <div className="p-6">
                  <Link href={`/projects/${project.slug}`}>
                    <h3 className="font-display font-bold text-forest text-heading-lg mb-3
                                   group-hover:text-primary-600 transition-colors">
                      {project.title}
                    </h3>
                  </Link>
                  <p className="text-neutral-600 text-body-sm leading-relaxed mb-4">
                    {project.description}
                  </p>
                  <div className="flex items-center gap-4 text-neutral-400 text-caption">
                    <span className="flex items-center gap-1.5">
                      <MapPin size={12} /> {project.location}
                    </span>
                    <span className="flex items-center gap-1.5">
                      <Calendar size={12} /> {formatDate(project.date)}
                    </span>
                  </div>
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
