import Link from 'next/link'
import styles from './BrandLogos.module.css'

export default function BrandLogos({ brands }) {
  return (
    <section className={styles.section}>
      <div className={styles.container}>
        <div className={styles.track}>
          {/* Double for seamless loop */}
          {[...brands, ...brands].map((brand, idx) => (
            <div key={`${brand.id}-${idx}`} className={styles.item}>
              <Link href={`/brand/${brand.slug}`} className={styles.logoLink}>
                <span className={styles.logoText}>{brand.name}</span>
              </Link>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
