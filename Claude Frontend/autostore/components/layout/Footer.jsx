'use client'
import { useState } from 'react'
import Link from 'next/link'
import styles from './Footer.module.css'

const SocialIcon = ({ icon }) => {
  const icons = {
    fb: 'fab fa-facebook-f',
    tw: 'fab fa-twitter',
    gp: 'fab fa-google-plus-g',
    in: 'fab fa-linkedin-in',
    pi: 'fab fa-pinterest-p',
    yt: 'fab fa-youtube',
  }
  return <i className={icons[icon] || 'fab fa-circle'} />
}

export default function Footer({ siteData }) {
  const [email, setEmail] = useState('')
  const [subscribed, setSubscribed] = useState(false)

  const handleSubscribe = (e) => {
    e.preventDefault()
    if (email.trim()) {
      setSubscribed(true)
      setEmail('')
      setTimeout(() => setSubscribed(false), 3000)
    }
  }

  return (
    <footer className={styles.footer}>
      {/* Top Footer */}
      <div className={styles.footerTop}>
        <div className={styles.container}>
          <div className={styles.grid}>
            {/* Contact */}
            <div className={styles.col}>
              <h4 className={styles.colTitle}>CONTACT US</h4>
              <ul className={styles.contactList}>
                <li>
                  <i className="fas fa-map-marker-alt" />
                  <span>{siteData.address}</span>
                </li>
                <li>
                  <i className="fas fa-phone-alt" />
                  <span>{siteData.phone}</span>
                </li>
                <li>
                  <i className="fas fa-envelope" />
                  <span>{siteData.email}</span>
                </li>
                <li>
                  <i className="fas fa-clock" />
                  <span>{siteData.hours}</span>
                </li>
              </ul>
            </div>

            {/* Store Location */}
            <div className={styles.col}>
              <h4 className={styles.colTitle}>STORE LOCATION</h4>
              <ul className={styles.linkList}>
                {siteData.storeLocations.map((loc) => (
                  <li key={loc}>
                    <Link href="/about-us">{loc}</Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Customer Service */}
            <div className={styles.col}>
              <h4 className={styles.colTitle}>CUSTOMER SERVICE</h4>
              <ul className={styles.linkList}>
                {siteData.customerService.map((item) => (
                  <li key={item}>
                    <Link href="/contact">{item}</Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Information */}
            <div className={styles.col}>
              <h4 className={styles.colTitle}>INFORMATION</h4>
              <ul className={styles.linkList}>
                {siteData.information.map((item) => (
                  <li key={item}>
                    <Link href="#">{item}</Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>

      {/* Footer Features */}
      <div className={styles.footerFeatures}>
        <div className={styles.container}>
          <div className={styles.featuresGrid}>
            <div className={styles.feature}>
              <i className="fas fa-shipping-fast" />
              <div>
                <strong>FREE SHIPPING</strong>
                <span>Free shipping on all orders over $99</span>
              </div>
            </div>
            <div className={styles.feature}>
              <i className="fas fa-shield-alt" />
              <div>
                <strong>MONEY GUARANTEE</strong>
                <span>Within 30 days for an exchange</span>
              </div>
            </div>
            <div className={styles.feature}>
              <i className="fas fa-lock" />
              <div>
                <strong>SAFE SHOPPING</strong>
                <span>We ensure secure payment</span>
              </div>
            </div>
            <div className={styles.feature}>
              <i className="fas fa-headset" />
              <div>
                <strong>ONLINE SUPPORT</strong>
                <span>24 hours a day, 7 days a week</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Footer Bottom */}
      <div className={styles.footerBottom}>
        <div className={styles.container}>
          <div className={styles.bottomInner}>
            {/* Social */}
            <div className={styles.social}>
              <span className={styles.followLabel}>FOLLOW US</span>
              <div className={styles.socialIcons}>
                {siteData.social.map((s) => (
                  <Link key={s.name} href={s.url} className={styles.socialIcon} aria-label={s.name}>
                    <SocialIcon icon={s.icon} />
                  </Link>
                ))}
              </div>
            </div>

            {/* Newsletter */}
            <div className={styles.newsletter}>
              <span className={styles.newsletterLabel}>SIGN UP FOR NEWSLETTER</span>
              <form onSubmit={handleSubscribe} className={styles.newsletterForm}>
                <input
                  type="email"
                  placeholder="Your email address"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className={styles.newsletterInput}
                  required
                />
                <button type="submit" className={styles.subscribeBtn}>
                  {subscribed ? 'SUBSCRIBED!' : 'SUBSCRIBE'}
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>

      {/* Copyright */}
      <div className={styles.copyright}>
        <div className={styles.container}>
          <div className={styles.copyrightInner}>
            <p>SM AutoStore © 2024 Demo Store. All Rights Reserved. Designed by MagenTech.Com</p>
            <div className={styles.payments}>
              <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/1/16/Former_Maestro_logo.svg/120px-Former_Maestro_logo.svg.png" alt="Maestro" height="22" />
              <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/b/b5/PayPal.svg/124px-PayPal.svg.png" alt="PayPal" height="22" />
              <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/2/2a/Mastercard-logo.svg/120px-Mastercard-logo.svg.png" alt="Mastercard" height="22" />
              <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/5/5e/Visa_Inc._logo.svg/120px-Visa_Inc._logo.svg.png" alt="Visa" height="22" />
              <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/e/e1/EB_Logo_2012.svg/120px-EB_Logo_2012.svg.png" alt="eBay" height="22" />
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
