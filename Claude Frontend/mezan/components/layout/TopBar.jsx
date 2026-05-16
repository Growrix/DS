import Link from 'next/link'
import styles from './TopBar.module.css'

export default function TopBar({ social, addressShort, emailHeader }) {
  return (
    <div className={styles.topbar}>
      <div className={`container ${styles.inner}`}>
        <div className={styles.left}>
          {social.map((s) => (
            <Link key={s.name} href={s.url} className={styles.socialLink} aria-label={s.name}>
              <i className={`fab ${s.icon}`} />
            </Link>
          ))}
        </div>
        <div className={styles.right}>
          <span className={styles.info}>
            <i className="fas fa-location-dot" />
            {addressShort}
          </span>
          <span className={styles.divider} />
          <span className={styles.info}>
            <i className="fas fa-envelope" />
            {emailHeader}
          </span>
        </div>
      </div>
    </div>
  )
}
