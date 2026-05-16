import Link from 'next/link'
import PageLayout from '@/components/layout/PageLayout'
import styles from './not-found.module.css'

export default function NotFound() {
  return (
    <PageLayout>
      <div className={styles.container}>
        <div className={styles.content}>
          <h1 className={styles.code}>404</h1>
          <h2 className={styles.title}>Page Not Found</h2>
          <p className={styles.desc}>
            Sorry, the page you are looking for doesn&apos;t exist or has been moved.
          </p>
          <div className={styles.actions}>
            <Link href="/" className={styles.homeBtn}>
              <i className="fas fa-home" /> GO HOME
            </Link>
            <Link href="/contact" className={styles.contactBtn}>
              CONTACT US
            </Link>
          </div>
        </div>
      </div>
    </PageLayout>
  )
}
