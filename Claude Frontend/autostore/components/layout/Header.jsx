'use client'
import { useState, useEffect } from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import styles from './Header.module.css'

export default function Header({ navigation, cartCount = 0 }) {
  const [searchOpen, setSearchOpen] = useState(false)
  const [searchQuery, setSearchQuery] = useState('')
  const [mobileOpen, setMobileOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const pathname = usePathname()

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50)
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  useEffect(() => {
    setMobileOpen(false)
  }, [pathname])

  const handleSearch = (e) => {
    e.preventDefault()
    if (searchQuery.trim()) {
      window.location.href = `/search?q=${encodeURIComponent(searchQuery)}`
    }
  }

  return (
    <header className={`${styles.header} ${scrolled ? styles.scrolled : ''}`}>
      <div className={styles.container}>
        {/* Logo */}
        <Link href="/" className={styles.logo}>
          <span className={styles.logoAuto}>Auto</span>
          <span className={styles.logoStore}>Store</span>
        </Link>

        {/* Navigation */}
        <nav className={`${styles.nav} ${mobileOpen ? styles.navOpen : ''}`}>
          <ul className={styles.navList}>
            {navigation.map((item) => (
              <li key={item.label} className={`${styles.navItem} ${item.hasDropdown ? styles.hasDropdown : ''}`}>
                <Link
                  href={item.href}
                  className={`${styles.navLink} ${pathname === item.href ? styles.active : ''}`}
                >
                  {item.label}
                  {item.hasDropdown && (
                    <i className="fas fa-chevron-down" style={{ fontSize: 9, marginLeft: 4 }} />
                  )}
                </Link>
                {item.hasDropdown && item.children && (
                  <ul className={styles.dropdown}>
                    {item.children.map((child) => (
                      <li key={child.label}>
                        <Link href={child.href} className={styles.dropLink}>
                          {child.label}
                        </Link>
                      </li>
                    ))}
                  </ul>
                )}
              </li>
            ))}
          </ul>
        </nav>

        {/* Actions */}
        <div className={styles.actions}>
          {/* Search */}
          <div className={`${styles.searchWrap} ${searchOpen ? styles.searchActive : ''}`}>
            <form onSubmit={handleSearch} className={styles.searchForm}>
              <input
                type="text"
                placeholder="Search products..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className={styles.searchInput}
                autoFocus={searchOpen}
              />
              <button type="submit" className={styles.searchSubmit}>
                <i className="fas fa-search" />
              </button>
            </form>
          </div>
          <button
            className={styles.searchToggle}
            onClick={() => setSearchOpen(!searchOpen)}
            aria-label="Toggle search"
          >
            <i className={`fas ${searchOpen ? 'fa-times' : 'fa-search'}`} />
          </button>

          {/* Cart */}
          <Link href="/cart" className={styles.cart}>
            <div className={styles.cartIcon}>
              <i className="fas fa-shopping-basket" />
              {cartCount > 0 && <span className={styles.cartBadge}>{cartCount}</span>}
            </div>
            <div className={styles.cartText}>
              <span className={styles.cartLabel}>MY CART</span>
              <span className={styles.cartCount}>{cartCount} item{cartCount !== 1 ? 's' : ''}</span>
            </div>
          </Link>

          {/* Mobile Toggle */}
          <button
            className={styles.mobileToggle}
            onClick={() => setMobileOpen(!mobileOpen)}
            aria-label="Toggle mobile menu"
          >
            <i className={`fas ${mobileOpen ? 'fa-times' : 'fa-bars'}`} />
          </button>
        </div>
      </div>
    </header>
  )
}
