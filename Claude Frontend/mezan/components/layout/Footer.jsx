'use client'
import { useState } from 'react'
import Link from 'next/link'
import styles from './Footer.module.css'

export default function Footer({ siteData }) {
  const { company, footer, social } = siteData
  const [email, setEmail] = useState('')
  const [subbed, setSubbed] = useState(false)

  const handleSub = (e) => {
    e.preventDefault()
    if (email.trim()) { setSubbed(true); setEmail('') }
  }

  return (
    <footer className={styles.footer}>
      <div className={styles.topBorder} />
      <div className="container">
        <div className={styles.grid}>
          {/* Brand col */}
          <div className={styles.brandCol}>
            <Link href="/" className={styles.logo}>
              <svg width="32" height="32" viewBox="0 0 36 36" fill="none">
                <path d="M4 16L18 4L32 16V32H24V22H12V32H4V16Z" stroke="var(--yellow)" strokeWidth="2" strokeLinejoin="round"/>
                <circle cx="18" cy="14" r="3" fill="var(--yellow)"/>
              </svg>
              <span className={styles.logoText}>Mezan</span>
            </Link>
            <p className={styles.desc}>{footer.description}</p>
            <div className={styles.appBtns}>
              <a href="#" className={styles.appBtn}>
                <i className="fab fa-google-play" />
                <span><small>GET IT ON</small><br />Google Play</span>
              </a>
              <a href="#" className={styles.appBtn}>
                <i className="fab fa-apple" />
                <span><small>Available on the</small><br />App Store</span>
              </a>
            </div>
          </div>

          {/* Information */}
          <div className={styles.col}>
            <h4 className={styles.colTitle}>Information</h4>
            <ul className={styles.linkList}>
              {footer.informationLinks.map((l) => (
                <li key={l.label}><Link href={l.href}>{l.label}</Link></li>
              ))}
            </ul>
          </div>

          {/* Support */}
          <div className={styles.col}>
            <h4 className={styles.colTitle}>Support</h4>
            <ul className={styles.linkList}>
              {footer.supportLinks.map((l) => (
                <li key={l.label}><Link href={l.href}>{l.label}</Link></li>
              ))}
            </ul>
          </div>

          {/* Quick Contact */}
          <div className={styles.col}>
            <h4 className={styles.colTitle}>Quick Contact</h4>
            <ul className={styles.contactList}>
              <li>
                <i className="fas fa-location-dot" />
                <span>{company.address}</span>
              </li>
              <li>
                <i className="fas fa-phone" />
                <span>{company.phone}</span>
              </li>
              <li>
                <i className="fas fa-envelope" />
                <span>{company.email}</span>
              </li>
            </ul>
            <div className={styles.followRow}>
              <span className={styles.followLabel}>Follow Us –</span>
              {footer.followLinks.map((l) => (
                <a key={l.label} href={l.href} className={styles.followLink}>{l.label}</a>
              ))}
            </div>
          </div>

          {/* Newsletter */}
          <div className={styles.col}>
            <h4 className={styles.colTitle}>Newsletter</h4>
            <p className={styles.newsletterDesc}>Sunc tincidunt mollis dui in tempor. Duis ultricies libero sit amet.</p>
            {subbed ? (
              <p className={styles.subSuccess}>✓ Thank you for subscribing!</p>
            ) : (
              <form onSubmit={handleSub} className={styles.newsletterForm}>
                <input
                  type="email"
                  placeholder="Your email..."
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className={styles.newsletterInput}
                  required
                />
                <button type="submit" className={styles.newsletterBtn}>
                  <i className="fas fa-arrow-right" />
                </button>
              </form>
            )}
            <p className={styles.noSpam}>{footer.newsletterNote}</p>
          </div>
        </div>

        {/* Bottom bar */}
        <div className={styles.bottomBar}>
          <p className={styles.copyright}>© {footer.copyright}</p>
          <div className={styles.legalLinks}>
            {footer.legalLinks.map((l, i) => (
              <span key={l.label}>
                <Link href={l.href}>{l.label}</Link>
                {i < footer.legalLinks.length - 1 && <span className={styles.dot}> - </span>}
              </span>
            ))}
          </div>
        </div>
      </div>
    </footer>
  )
}
