import Link from 'next/link'
import styles from './AboutSection.module.css'

const FeatureIcon = ({ icon }) => {
  const icons = {
    consultation: (
      <svg viewBox="0 0 48 48" fill="none" width="28" height="28">
        <circle cx="24" cy="18" r="10" stroke="currentColor" strokeWidth="2"/>
        <path d="M8 42c0-8.84 7.16-16 16-16s16 7.16 16 16" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
        <path d="M30 12h6M30 16h4" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
      </svg>
    ),
    solution: (
      <svg viewBox="0 0 48 48" fill="none" width="28" height="28">
        <rect x="8" y="8" width="32" height="38" rx="3" stroke="currentColor" strokeWidth="2"/>
        <path d="M16 20h16M16 28h12M16 36h8" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
        <path d="M20 6v6" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
        <path d="M28 6v6" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
      </svg>
    ),
    pricing: (
      <svg viewBox="0 0 48 48" fill="none" width="28" height="28">
        <rect x="4" y="14" width="22" height="28" rx="2" stroke="currentColor" strokeWidth="2"/>
        <rect x="14" y="6" width="30" height="28" rx="2" stroke="currentColor" strokeWidth="2"/>
        <path d="M24 18v2m0 12v2m-4-9h8a2 2 0 000-4h-4a2 2 0 010-4h8" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
      </svg>
    ),
    service: (
      <svg viewBox="0 0 48 48" fill="none" width="28" height="28">
        <path d="M24 4L4 14v6c0 12.5 8.5 24.2 20 27 11.5-2.8 20-14.5 20-27v-6L24 4z" stroke="currentColor" strokeWidth="2" strokeLinejoin="round"/>
        <path d="M16 24l6 6 12-12" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
      </svg>
    ),
  }
  return <div className={styles.featureIcon}>{icons[icon]}</div>
}

export default function AboutSection({ data }) {
  return (
    <section className={styles.section}>
      <div className="container">
        <div className={styles.layout}>
          {/* Left - Images + Stats */}
          <div className={styles.left}>
            {/* Background watermark text */}
            <div className={styles.watermark}>TIPS</div>
            <div className={styles.imageGrid}>
              <div className={styles.img1Wrap}>
                <img src={data.images[0]} alt="Service" className={styles.img1} />
              </div>
              <div className={styles.rightImages}>
                <div className={styles.img2Wrap}>
                  <img src={data.images[1]} alt="Service" className={styles.img2} />
                </div>
                <div className={styles.img3Wrap}>
                  <img src={data.images[2]} alt="Service" className={styles.img3} />
                </div>
              </div>
            </div>
            {/* Stats card */}
            <div className={styles.statsCard}>
              {data.stats.map((stat, idx) => (
                <div key={stat.label} className={styles.statItem}>
                  <span className={styles.statNum}>{stat.number}</span>
                  <span className={styles.statLabel}>{stat.label}</span>
                  {idx < data.stats.length - 1 && <div className={styles.statDivider} />}
                </div>
              ))}
            </div>
          </div>

          {/* Right - Content */}
          <div className={styles.right}>
            <span className="section-badge">{data.badge}</span>
            <h2 className={styles.title}>{data.title}</h2>

            <div className={styles.descBlock}>
              <div className={styles.descBorder} />
              <p className={styles.desc}>{data.description}</p>
            </div>

            <div className={styles.features}>
              {data.features.map((f) => (
                <div key={f.title} className={styles.featureItem}>
                  <FeatureIcon icon={f.icon} />
                  <div className={styles.featureText}>
                    <h4 className={styles.featureTitle}>{f.title}</h4>
                    <p className={styles.featureDesc}>{f.description}</p>
                  </div>
                </div>
              ))}
            </div>

            <div className={styles.ctas}>
              <Link href="/about" className="btn-dark">Read More</Link>
              <div className={styles.phoneWrap}>
                <div className={styles.phoneIcon}>
                  <i className="fas fa-phone" />
                </div>
                <div>
                  <span className={styles.phoneNumber}>000 123 456 789</span>
                  <span className={styles.phoneLabel}>Call For Booking</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
