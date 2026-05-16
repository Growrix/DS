import type { Metadata } from 'next'
import { HeroSection }           from '@/components/sections/HeroSection'
import { WhyChooseSection }      from '@/components/sections/WhyChooseSection'
import { WasteTypesSection }     from '@/components/sections/WasteTypesSection'
import { CTABannerSection }      from '@/components/sections/CTABannerSection'
import { IndustriesSection }     from '@/components/sections/IndustriesSection'
import { WhyChooseAltSection }   from '@/components/sections/WhyChooseAltSection'
import {
  FeaturesStripSection,
  TestimonialsSection,
  ProjectsSection,
} from '@/components/sections/SocialProofSections'
import { ContactSection }        from '@/components/sections/ContactSection'
import { MapSection }            from '@/components/sections/MapSection'
import { BlogSection, BottomCTASection } from '@/components/sections/BlogAndCTASections'
import { SITE_NAME, SITE_DESCRIPTION } from '@/constants'

export const metadata: Metadata = {
  title: `${SITE_NAME} — Home & Business Waste Pickup Solution`,
  description: SITE_DESCRIPTION,
}

export default function HomePage() {
  return (
    <>
      <HeroSection />
      <WhyChooseSection />
      <WasteTypesSection />
      <CTABannerSection />
      <IndustriesSection />
      <WhyChooseAltSection />
      <FeaturesStripSection />
      <TestimonialsSection />
      <ProjectsSection />
      <ContactSection />
      <MapSection />
      <BlogSection />
      <BottomCTASection />
    </>
  )
}
