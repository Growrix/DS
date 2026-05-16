import TopBar from '@/components/layout/TopBar'
import Header from '@/components/layout/Header'
import Footer from '@/components/layout/Footer'
import PricingSection from '@/components/sections/PricingSection'
import styles from './page.module.css'

import siteData from '@/data/site.json'
import pricing from '@/data/pricing.json'

export const metadata = { title: 'Pricing - Mezan', description: 'Mezan service plans and pricing.' }

export default function PricingPage() {
  return (
    <>
      <TopBar social={siteData.social} addressShort={siteData.company.addressShort} emailHeader={siteData.company.emailHeader} />
      <Header navigation={siteData.navigation} />
      <main>
        <div className={styles.hero}>
          <div className="container">
            <div className={styles.heroContent}>
              <span className="section-badge">PRICING PLANS</span>
              <h1 className={styles.heroTitle}>Simple, Transparent Pricing</h1>
              <p className={styles.heroDesc}>Choose the plan that fits your needs. No hidden fees.</p>
            </div>
          </div>
        </div>
        <PricingSection plans={pricing} note={siteData.pricingNote} brands={siteData.brands} />
      </main>
      <Footer siteData={siteData} />
    </>
  )
}
