import TopBar from '@/components/layout/TopBar'
import Header from '@/components/layout/Header'
import Footer from '@/components/layout/Footer'
import AboutSection from '@/components/sections/AboutSection'
import QuoteSection from '@/components/sections/QuoteSection'
import TeamSection from '@/components/sections/TeamSection'
import TestimonialSection from '@/components/sections/TestimonialSection'
import styles from './page.module.css'

import siteData from '@/data/site.json'
import team from '@/data/team.json'
import testimonials from '@/data/testimonials.json'
import workTypes from '@/data/workTypes.json'

export const metadata = {
  title: 'About Us - Mezan',
  description: 'Learn about Mezan professional home and business services.',
}

export default function AboutPage() {
  return (
    <>
      <TopBar social={siteData.social} addressShort={siteData.company.addressShort} emailHeader={siteData.company.emailHeader} />
      <Header navigation={siteData.navigation} />
      <main>
        {/* Page Hero */}
        <div className={styles.hero}>
          <img src="https://images.unsplash.com/photo-1621905251189-08b45d6a269e?w=1400&q=80" alt="About Us" className={styles.heroBg} />
          <div className={styles.heroOverlay} />
          <div className="container">
            <div className={styles.heroContent}>
              <h1 className={styles.heroTitle}>About Us</h1>
              <nav className={styles.breadcrumb}>
                <a href="/">Home</a>
                <span>/</span>
                <span className={styles.breadcrumbActive}>About Us</span>
              </nav>
            </div>
          </div>
        </div>
        <AboutSection data={siteData.about} />
        <QuoteSection whyBest={siteData.whyBest} workTypes={workTypes} />
        <TeamSection team={team} ctaBanner={siteData.ctaBanner} />
        <TestimonialSection testimonials={testimonials} siteData={siteData} />
      </main>
      <Footer siteData={siteData} />
    </>
  )
}
