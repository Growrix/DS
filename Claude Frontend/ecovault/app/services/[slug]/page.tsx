import type { Metadata } from 'next'
import { notFound } from 'next/navigation'
import Image from 'next/image'
import { CheckCircle, ArrowRight, Phone } from 'lucide-react'
import { PageHero } from '@/components/layout/PageHero'
import { Container, Section, Card } from '@/components/ui/index'
import { Button } from '@/components/ui/Button'
import { CTABannerSection } from '@/components/sections/CTABannerSection'
import { SERVICES } from '@/data/services'

interface Props {
  params: { slug: string }
}

export async function generateStaticParams() {
  return SERVICES.map((s) => ({ slug: s.slug }))
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const service = SERVICES.find((s) => s.slug === params.slug)
  if (!service) return { title: 'Service Not Found' }
  return {
    title: service.title,
    description: service.shortDesc,
  }
}

export default function ServiceDetailPage({ params }: Props) {
  const service = SERVICES.find((s) => s.slug === params.slug)
  if (!service) notFound()

  const others = SERVICES.filter((s) => s.slug !== service.slug).slice(0, 3)

  return (
    <>
      <PageHero
        title={service.title}
        subtitle={service.shortDesc}
        breadcrumbs={[
          { label: 'Services', href: '/services' },
          { label: service.title },
        ]}
      />

      <Section className="bg-white">
        <Container>
          <div className="grid lg:grid-cols-3 gap-12">
            {/* Main content */}
            <div className="lg:col-span-2">
              <div className="relative h-72 rounded-2xl overflow-hidden shadow-lg mb-10">
                <Image src={service.image} alt={service.title} fill className="object-cover" />
              </div>

              <h2 className="font-display font-bold text-forest text-display-sm mb-5">
                About This Service
              </h2>
              <p className="text-neutral-600 text-body-lg leading-relaxed mb-8">
                {service.description}
              </p>

              <h3 className="font-display font-bold text-forest text-heading-lg mb-5">
                What's Included
              </h3>
              <div className="grid sm:grid-cols-2 gap-4">
                {service.features.map((f) => (
                  <div key={f}
                    className="flex items-start gap-3 p-4 bg-primary-50 rounded-xl border border-primary-100">
                    <CheckCircle size={18} className="text-primary-600 shrink-0 mt-0.5" />
                    <span className="text-forest font-medium text-body-sm">{f}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Sidebar */}
            <div className="space-y-5">
              {/* CTA Card */}
              <Card variant="default" padding="lg" className="bg-primary-600 text-white border-0">
                <h3 className="font-display font-bold text-white text-heading-lg mb-3">
                  Ready to Get Started?
                </h3>
                <p className="text-white/70 text-body-sm mb-6">
                  Request a free estimate and we'll have your service up and running within 24 hours.
                </p>
                <Button href="/contact" variant="accent" size="md" fullWidth
                  icon={<ArrowRight size={16} />}>
                  Request a Pickup
                </Button>
                <div className="mt-4 flex items-center gap-3">
                  <Phone size={15} className="text-accent-400 shrink-0" />
                  <a href="tel:+18003264285" className="text-white/80 text-body-sm hover:text-white">
                    +1 (800) 326-4285
                  </a>
                </div>
              </Card>

              {/* Other services */}
              <Card variant="bordered" padding="md">
                <h4 className="font-display font-bold text-forest text-heading-sm mb-4">
                  Other Services
                </h4>
                <ul className="space-y-2">
                  {others.map((s) => (
                    <li key={s.slug}>
                      <a href={`/services/${s.slug}`}
                        className="flex items-center justify-between py-2 px-3 rounded-lg
                                   text-neutral-700 hover:bg-primary-50 hover:text-primary-700
                                   transition-colors text-body-sm font-medium group">
                        {s.title}
                        <ArrowRight size={14} className="text-neutral-400 group-hover:text-primary-600" />
                      </a>
                    </li>
                  ))}
                </ul>
              </Card>
            </div>
          </div>
        </Container>
      </Section>

      <CTABannerSection />
    </>
  )
}
