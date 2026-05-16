import TopBar from '@/components/layout/TopBar'
import Header from '@/components/layout/Header'
import Footer from '@/components/layout/Footer'
import HeroSection from '@/components/sections/HeroSection'
import AboutSection from '@/components/sections/AboutSection'
import ServicesSection from '@/components/sections/ServicesSection'
import QuoteSection from '@/components/sections/QuoteSection'
import StatsSection from '@/components/sections/StatsSection'
import PortfolioSection from '@/components/sections/PortfolioSection'
import PricingSection from '@/components/sections/PricingSection'
import TeamSection from '@/components/sections/TeamSection'
import BlogSection from '@/components/sections/BlogSection'
import TestimonialSection from '@/components/sections/TestimonialSection'
import BookingSection from '@/components/sections/BookingSection'

import siteData from '@/data/site.json'
import services from '@/data/services.json'
import portfolio from '@/data/portfolio.json'
import pricing from '@/data/pricing.json'
import team from '@/data/team.json'
import blogs from '@/data/blogs.json'
import testimonials from '@/data/testimonials.json'
import workTypes from '@/data/workTypes.json'

const serviceSection = {
  badge: 'OUR SERVICES',
  title: 'Ideal Solution For Time Consuming Problems',
  description: 'Volutpat maecenas volutpat blandit aliquam etiam erat. Enim praesent elementum facilisis leo vel fringilla est. Vel elit scelerisque mauris pellentesque. Id ornare arcu odio ut sem. Dapibus ultrices in iaculis nunc sed augue lacus.',
}

export default function HomePage() {
  return (
    <>
      <TopBar
        social={siteData.social}
        addressShort={siteData.company.addressShort}
        emailHeader={siteData.company.emailHeader}
      />
      <Header navigation={siteData.navigation} />
      <main>
        <HeroSection slides={siteData.heroSlides} />
        <AboutSection data={siteData.about} />
        <ServicesSection services={services} sectionData={serviceSection} />
        <QuoteSection whyBest={siteData.whyBest} workTypes={workTypes} />
        <StatsSection data={siteData.darkSection} />
        <PortfolioSection portfolio={portfolio} />
        <PricingSection plans={pricing} note={siteData.pricingNote} brands={siteData.brands} />
        <TeamSection team={team} ctaBanner={siteData.ctaBanner} />
        <BlogSection blogs={blogs} />
        <TestimonialSection testimonials={testimonials} siteData={siteData} />
        <BookingSection workTypes={workTypes} company={siteData.company} />
      </main>
      <Footer siteData={siteData} />
    </>
  )
}
