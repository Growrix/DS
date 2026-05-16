import Link from 'next/link'
import styles from './PromoBanners.module.css'

export default function PromoBanners({ banners }) {
  return (
    <section className={styles.section}>
      <div className={styles.container}>
        <div className={styles.grid}>
          {banners.map((banner, idx) => (
            <div
              key={banner.id}
              className={`${styles.banner} ${idx === 2 ? styles.bannerRed : ''}`}
              style={{ backgroundImage: `url(${banner.image})` }}
            >
              <div className={styles.overlay} />
              <div className={styles.content}>
                <p className={styles.sub}>{banner.subtitle}</p>
                <h3 className={styles.title}>{banner.title}</h3>
                <Link href="/daily-deals" className={styles.cta}>
                  {banner.cta}
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
