import Link from 'next/link'
import styles from './not-found.module.css'

export default function NotFound() {
  return (
    <div className={styles.page}>
      <h1 className={styles.code}>404</h1>
      <p className={styles.msg}>Page not found</p>
      <Link href="/" className="btn-yellow">Return Home</Link>
    </div>
  )
}
