import type { Metadata } from 'next'
import Link from 'next/link'
import Image from 'next/image'
import { ArrowRight, CheckCircle } from 'lucide-react'
import { PageHero } from '@/components/layout/PageHero'
import { Container, Section, SectionHeader, Card, Badge } from '@/components/ui/index'
import { Button } from '@/components/ui/Button'
import { CTABannerSection } from '@/components/sections/CTABannerSection'
import { SERVICES } from '@/data/services'
import { SITE_NAME } from '@/constants'

export const metadata: Metadata = {
  title: 'Our Services',
  description: `Explore ${SITE_NAME}'s full range of waste pickup, recycling, and disposal services for homes and businesses.`,
}

export default function ServicesPage() {
  return (
    <>
      <PageHero
        title="Our Services"
        subtitle="From curbside residential pickups to complex commercial waste programmes—we have a solution for every need."
        breadcrumbs={[{ label: 'Services' }]}
      />

      <Section className="bg-white">
        <Container>
          <SectionHeader
            eyebrow="What We Offer"
            title="Comprehensive Waste Management Solutions"
            subtitle="Every service is backed by certified professionals, eco-responsible practices, and transparent pricing."
            align="center"
            className="mb-14"
          />

          <div className="grid gap-8">
            {SERVICES.map((service, i) => (
              <Card key={service.slug} variant="bordered" padding="none"
                className="overflow-hidden hover:border-primary-200 transition-colors">
                <div className={`grid md:grid-cols-2 ${i % 2 !== 0 ? 'md:grid-flow-dense' : ''}`}>
                  <div className={`relative h-56 md:h-auto ${i % 2 !== 0 ? 'md:col-start-2' : ''}`}>
                    <Image
                      src={service.image}
                      alt={service.title}
                      fill
                      className="object-cover"
                    />
                  </div>
                  <div className="p-8 flex flex-col justify-center">
                    <Badge variant="primary" size="sm" className="mb-4 self-start">
                      {service.slug.replace(/-/g, ' ').replace(/\b\w/g, (c) => c.toUpperCase())}
                    </Badge>
                    <h2 className="font-display font-bold text-forest text-display-sm mb-4">
                      {service.title}
                    </h2>
                    <p className="text-neutral-600 text-body-md leading-relaxed mb-6">
                      {service.description}
                    </p>
                    <ul className="grid grid-cols-2 gap-2 mb-8">
                      {service.features.slice(0, 4).map((f) => (
                        <li key={f} className="flex items-start gap-2 text-body-sm text-neutral-700">
                          <CheckCircle size={15} className="text-primary-600 shrink-0 mt-0.5" />
                          {f}
                        </li>
                      ))}
                    </ul>
                    <Button href={`/services/${service.slug}`} variant="primary" size="md"
                      icon={<ArrowRight size={16} />} className="self-start">
                      Learn More
                    </Button>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </Container>
      </Section>

      <CTABannerSection />
    </>
  )
}
