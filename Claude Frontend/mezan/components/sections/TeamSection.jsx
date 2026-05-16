import Link from 'next/link'
import styles from './TeamSection.module.css'

export default function TeamSection({ team, ctaBanner }) {
  return (
    <>
      {/* CTA Banner */}
      <div className={styles.ctaBanner}>
        <div className="container">
          <div className={styles.ctaInner}>
            <div className={styles.ctaLeft}>
              <div className={styles.houseImg}>
                <svg viewBox="0 0 80 80" fill="none" width="80" height="80">
                  <path d="M8 36L40 8L72 36V72H52V50H28V72H8V36Z" fill="rgba(255,255,255,0.15)" stroke="rgba(255,255,255,0.5)" strokeWidth="2" strokeLinejoin="round"/>
                  <rect x="30" y="54" width="20" height="18" rx="2" fill="rgba(255,255,255,0.2)" stroke="rgba(255,255,255,0.5)" strokeWidth="1.5"/>
                  <path d="M20 54h6M54 54h6" stroke="rgba(255,255,255,0.4)" strokeWidth="1.5" strokeLinecap="round"/>
                  <rect x="18" y="44" width="10" height="8" rx="1" fill="rgba(255,255,255,0.2)" stroke="rgba(255,255,255,0.5)" strokeWidth="1.5"/>
                  <rect x="52" y="44" width="10" height="8" rx="1" fill="rgba(255,255,255,0.2)" stroke="rgba(255,255,255,0.5)" strokeWidth="1.5"/>
                </svg>
              </div>
              <div>
                <h3 className={styles.ctaTitle}>{ctaBanner.title}</h3>
                <p className={styles.ctaSubtitle}>{ctaBanner.subtitle}</p>
              </div>
            </div>
            <div className={styles.ctaBtns}>
              <Link href={ctaBanner.cta1.href} className="btn-yellow">{ctaBanner.cta1.label}</Link>
              <Link href={ctaBanner.cta2.href} className={styles.ctaOutline}>{ctaBanner.cta2.label}</Link>
            </div>
          </div>
        </div>
      </div>

      {/* Team Section */}
      <section className={styles.section}>
        <div className="container">
          <div className={styles.header}>
            <span className="section-badge" style={{ color: 'rgba(26,26,26,0.5)' }}>OUR PROFESSIONAL</span>
            <h2 className={styles.title}>Expert Technical Team</h2>
          </div>
          <div className={styles.grid}>
            {team.map((member) => (
              <div key={member.id} className={styles.card}>
                <div className={styles.imgWrap}>
                  <img src={member.image} alt={member.name} className={styles.img} />
                </div>
                <div className={styles.info}>
                  <h4 className={styles.name}>{member.name}</h4>
                  <Link href="#" className={styles.arrow}>
                    <i className="fas fa-arrow-right" />
                  </Link>
                </div>
                <p className={styles.role}>{member.role}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  )
}
