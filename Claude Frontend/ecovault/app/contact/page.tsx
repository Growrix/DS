import type { Metadata } from 'next'
import { PageHero } from '@/components/layout/PageHero'
import { ContactSection } from '@/components/sections/ContactSection'
import { MapSection } from '@/components/sections/MapSection'
import { BottomCTASection } from '@/components/sections/BlogAndCTASections'

export const metadata: Metadata = {
  title: 'Contact Us',
  description: 'Get in touch with EcoHaul to request a pickup, ask a question, or get a free waste management estimate.',
}

export default function ContactPage() {
  return (
    <>
      <PageHero
        title="Contact Us"
        subtitle="Have questions? Ready to get started? Our team is standing by to help."
        breadcrumbs={[{ label: 'Contact' }]}
      />
      <ContactSection />
      <MapSection />
      <BottomCTASection />
    </>
  )
}
