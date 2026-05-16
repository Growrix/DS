import TopBar from '@/components/layout/TopBar'
import Header from '@/components/layout/Header'
import Footer from '@/components/layout/Footer'
import styles from './page.module.css'
import Link from 'next/link'

import siteData from '@/data/site.json'
import services from '@/data/services.json'

export const metadata = { title: 'Services - Mezan', description: 'All professional services offered by Mezan.' }

export default function ServicesPage() {
  return (
    <>
      <TopBar social={siteData.social} addressShort={siteData.company.addressShort} emailHeader={siteData.company.emailHeader} />
      <Header navigation={siteData.navigation} />
      <main>
        <div className={styles.hero}>
          <img src="https://images.unsplash.com/photo-1581578731548-c64695cc6952?w=1400&q=80" alt="Services" className={styles.heroBg} />
          <div className={styles.heroOverlay} />
          <div className="container">
            <div className={styles.heroContent}>
              <h1 className={styles.heroTitle}>Our Services</h1>
              <nav className={styles.breadcrumb}>
                <a href="/">Home</a><span>/</span>
                <span className={styles.breadcrumbActive}>Services</span>
              </nav>
            </div>
          </div>
        </div>
        <section className={styles.section}>
          <div className="container">
            <div className={styles.header}>
              <span className="section-badge">WHAT WE DO</span>
              <h2 className={styles.title}>Professional Services For Every Need</h2>
            </div>
            <div className={styles.grid}>
              {services.map((s) => (
                <div key={s.id} className={styles.card}>
                  <div className={styles.imgWrap}>
                    <img src={s.image} alt={s.title} />
                    <div className={styles.imgOverlay} />
                  </div>
                  <div className={styles.body}>
                    <div className={styles.top}>
                      <h3 className={styles.cardTitle}>{s.title}</h3>
                      <Link href={`/services/${s.slug}`} className={styles.arrow}><i className="fas fa-arrow-right" /></Link>
                    </div>
                    <div className={styles.divider} />
                    <p className={styles.desc}>{s.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      </main>
      <Footer siteData={siteData} />
    </>
  )
}
