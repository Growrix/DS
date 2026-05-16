import type { Metadata } from "next";
import { HeroSection }           from "@/components/sections/HeroSection";
import { ServicesGrid }           from "@/components/sections/ServicesGrid";
import { AboutSection }           from "@/components/sections/AboutSection";
import { FullWidthBanner }        from "@/components/sections/FullWidthBanner";
import { DesignServicesSection }  from "@/components/sections/DesignServicesSection";
import { ServiceAreasSection }    from "@/components/sections/ServiceAreasSection";
import {
  TeamSection,
  TestimonialsSection,
  StatsSection,
  PartnersSection,
  BlogSection,
  CTABannerSection,
} from "@/components/sections/HomeSections";
import { SITE_CONFIG } from "@/constants";

export const metadata: Metadata = {
  title:       `${SITE_CONFIG.name} — ${SITE_CONFIG.tagline}`,
  description: SITE_CONFIG.description,
};

export default function HomePage() {
  return (
    <>
      <HeroSection />
      <ServicesGrid />
      <AboutSection />
      <FullWidthBanner />
      <DesignServicesSection />
      <ServiceAreasSection />
      <TeamSection />
      <TestimonialsSection />
      <StatsSection />
      <PartnersSection />
      <BlogSection />
      <CTABannerSection />
    </>
  );
}
