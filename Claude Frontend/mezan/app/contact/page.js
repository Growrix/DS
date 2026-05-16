import TopBar from '@/components/layout/TopBar'
import Header from '@/components/layout/Header'
import Footer from '@/components/layout/Footer'
import BookingSection from '@/components/sections/BookingSection'
import styles from './page.module.css'

import siteData from '@/data/site.json'
import workTypes from '@/data/workTypes.json'

export const metadata = { title: 'Contact - Mezan', description: 'Book a service or request a quote from Mezan.' }

export default function ContactPage() {
  return (
    <>
      <TopBar social={siteData.social} addressShort={siteData.company.addressShort} emailHeader={siteData.company.emailHeader} />
      <Header navigation={siteData.navigation} />
      <main>
        <div className={styles.hero}>
          <img src="https://images.unsplash.com/photo-1504328345606-18bbc8c9d7d1?w=1400&q=80" alt="Contact" className={styles.heroBg} />
          <div className={styles.heroOverlay} />
          <div className="container">
            <div className={styles.heroContent}>
              <h1 className={styles.heroTitle}>Contact Us</h1>
              <nav className={styles.breadcrumb}>
                <a href="/">Home</a><span>/</span>
                <span className={styles.breadcrumbActive}>Contact Us</span>
              </nav>
            </div>
          </div>
        </div>

        {/* Quick Contact Cards */}
        <div className={styles.contactCards}>
          <div className="container">
            <div className={styles.cardsGrid}>
              {[
                { icon: 'fa-location-dot', title: 'Our Address', value: siteData.company.address },
                { icon: 'fa-phone', title: 'Call Us', value: siteData.company.phone },
                { icon: 'fa-envelope', title: 'Email Us', value: siteData.company.email },
              ].map((c) => (
                <div key={c.title} className={styles.contactCard}>
                  <div className={styles.cardIcon}><i className={`fas ${c.icon}`} /></div>
                  <h4 className={styles.cardTitle}>{c.title}</h4>
                  <p className={styles.cardValue}>{c.value}</p>
                </div>
              ))}
            </div>
          </div>
        </div>

        <BookingSection workTypes={workTypes} company={siteData.company} />
      </main>
      <Footer siteData={siteData} />
    </>
  )
}
