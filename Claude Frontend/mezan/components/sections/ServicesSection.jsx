import Link from 'next/link'
import styles from './ServicesSection.module.css'

export default function ServicesSection({ services, sectionData }) {
  return (
    <section className={styles.section}>
      {/* Yellow top half */}
      <div className={styles.topHalf}>
        <div className="container">
          <div className={styles.header}>
            <div className={styles.headerLeft}>
              <span className="section-badge" style={{ color: 'rgba(26,26,26,0.5)' }}>{sectionData.badge}</span>
              <h2 className={styles.title}>{sectionData.title}</h2>
            </div>
            <div className={styles.headerRight}>
              <div className={styles.descBorder} />
              <p className={styles.desc}>{sectionData.description}</p>
            </div>
          </div>
        </div>
      </div>

      {/* Cards — overlap the boundary */}
      <div className={styles.cardsWrap}>
        <div className="container">
          <div className={styles.grid}>
            {services.slice(0, 4).map((service) => (
              <div key={service.id} className={styles.card}>
                <div className={styles.cardImage}>
                  <img src={service.image} alt={service.title} />
                  <div className={styles.cardOverlay} />
                </div>
                <div className={styles.cardBody}>
                  <div className={styles.cardTop}>
                    <h3 className={styles.cardTitle}>{service.title}</h3>
                    <Link href={`/services/${service.slug}`} className={styles.arrowLink}>
                      <i className="fas fa-arrow-right" />
                    </Link>
                  </div>
                  <div className={styles.cardDivider} />
                  <p className={styles.cardDesc}>{service.description}</p>
                </div>
              </div>
            ))}
          </div>
          <div className={styles.ctas}>
            <Link href="/contact" className="btn-yellow">Get A Quote</Link>
            <Link href="/services" className="btn-dark">View All Services</Link>
          </div>
        </div>
      </div>
    </section>
  )
}
