import Link from 'next/link'
import styles from './Breadcrumb.module.css'

export default function Breadcrumb({ crumbs }) {
  return (
    <div className={styles.breadcrumb}>
      <div className={styles.container}>
        {crumbs.map((crumb, idx) => (
          <span key={idx} className={styles.crumbWrap}>
            {idx < crumbs.length - 1 ? (
              <>
                <Link href={crumb.href} className={styles.link}>{crumb.label}</Link>
                <i className="fas fa-chevron-right" />
              </>
            ) : (
              <span className={styles.current}>{crumb.label}</span>
            )}
          </span>
        ))}
      </div>
    </div>
  )
}
