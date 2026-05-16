import { Header } from '@/components/layout/Header';
import { Footer } from '@/components/layout/Footer';
import { HeroSection } from '@/components/sections/HeroSection';
import { StatsSection } from '@/components/sections/StatsSection';
import { ServicesSection } from '@/components/sections/ServicesSection';
import { WhyUsSection } from '@/components/sections/WhyUsSection';
import { TestimonialsSection } from '@/components/sections/TestimonialsSection';
import { FAQSection } from '@/components/sections/FAQSection';
import { ContactSection } from '@/components/sections/ContactSection';
import { getResolvedSiteShell } from '@/lib/foundation-runtime';

export default async function HomePage() {
  const { companyInfo, navigation, footerAttribution } = await getResolvedSiteShell();

  return (
    <div className='min-h-screen bg-white'>
      <Header companyInfo={companyInfo} navigation={navigation} />
      <main>
        <HeroSection />
        <StatsSection />
        <ServicesSection />
        <WhyUsSection />
        <TestimonialsSection />
        <FAQSection />
        <ContactSection companyInfo={companyInfo} />
      </main>
      <Footer companyInfo={companyInfo} footerAttribution={footerAttribution} />
    </div>
  );
}