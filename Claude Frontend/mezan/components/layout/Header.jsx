'use client'
import { useState, useEffect } from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import styles from './Header.module.css'

export default function Header({ navigation }) {
  const [scrolled, setScrolled] = useState(false)
  const [mobileOpen, setMobileOpen] = useState(false)
  const pathname = usePathname()

  useEffect(() => {
    const fn = () => setScrolled(window.scrollY > 60)
    window.addEventListener('scroll', fn)
    return () => window.removeEventListener('scroll', fn)
  }, [])

  useEffect(() => { setMobileOpen(false) }, [pathname])

  return (
    <header className={`${styles.header} ${scrolled ? styles.scrolled : ''}`}>
      <div className={`container ${styles.inner}`}>
        {/* Logo */}
        <Link href="/" className={styles.logo}>
          <span className={styles.logoIcon}>
            <svg width="36" height="36" viewBox="0 0 36 36" fill="none">
              <path d="M4 16L18 4L32 16V32H24V22H12V32H4V16Z" fill="currentColor" opacity="0.15"/>
              <path d="M4 16L18 4L32 16V32H24V22H12V32H4V16Z" stroke="currentColor" strokeWidth="2" strokeLinejoin="round"/>
              <rect x="14" y="26" width="8" height="6" rx="1" fill="currentColor" opacity="0.4"/>
              <circle cx="18" cy="14" r="3" fill="var(--yellow)"/>
            </svg>
          </span>
          <span className={styles.logoText}>Mezan</span>
        </Link>

        {/* Nav */}
        <nav className={`${styles.nav} ${mobileOpen ? styles.navOpen : ''}`}>
          <ul className={styles.navList}>
            {navigation.map((item) => (
              <li key={item.label} className={`${styles.navItem} ${item.hasDropdown ? styles.hasDropdown : ''}`}>
                <Link
                  href={item.href}
                  className={`${styles.navLink} ${pathname === item.href ? styles.active : ''}`}
                >
                  {item.label}
                  {item.hasDropdown && <i className="fas fa-chevron-down" style={{ fontSize: 9, marginLeft: 4 }} />}
                </Link>
                {item.hasDropdown && (
                  <div className={styles.dropdown}>
                    <Link href={item.href} className={styles.dropItem}>Overview</Link>
                    <Link href={item.href} className={styles.dropItem}>All Items</Link>
                  </div>
                )}
              </li>
            ))}
          </ul>
        </nav>

        {/* Actions */}
        <div className={styles.actions}>
          <button className={styles.iconBtn} aria-label="Account">
            <i className="fas fa-user" />
          </button>
          <button className={styles.iconBtn} aria-label="Cart">
            <i className="fas fa-shopping-bag" />
            <span className={styles.cartBadge}>0</span>
          </button>
          <Link href="/contact" className="btn-yellow">Get A Quote</Link>
          <button
            className={styles.mobileToggle}
            onClick={() => setMobileOpen(!mobileOpen)}
            aria-label="Menu"
          >
            <i className={`fas ${mobileOpen ? 'fa-times' : 'fa-bars'}`} />
          </button>
        </div>
      </div>
    </header>
  )
}
