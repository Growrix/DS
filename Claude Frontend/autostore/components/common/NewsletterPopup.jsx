'use client'
import { useState, useEffect } from 'react'
import styles from './NewsletterPopup.module.css'

export default function NewsletterPopup() {
  const [visible, setVisible] = useState(false)
  const [email, setEmail] = useState('')
  const [dontShow, setDontShow] = useState(false)
  const [submitted, setSubmitted] = useState(false)

  useEffect(() => {
    // Show popup after 3 seconds if not dismissed
    const dismissed = localStorage.getItem('newsletter_dismissed')
    if (!dismissed) {
      const timer = setTimeout(() => setVisible(true), 3000)
      return () => clearTimeout(timer)
    }
  }, [])

  const handleClose = () => {
    setVisible(false)
    if (dontShow) {
      localStorage.setItem('newsletter_dismissed', 'true')
    }
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    if (email.trim()) {
      setSubmitted(true)
      setTimeout(() => {
        setVisible(false)
        localStorage.setItem('newsletter_dismissed', 'true')
      }, 1500)
    }
  }

  if (!visible) return null

  return (
    <div className={styles.backdrop} onClick={(e) => e.target === e.currentTarget && handleClose()}>
      <div className={styles.modal}>
        <button className={styles.closeBtn} onClick={handleClose} aria-label="Close popup">
          <i className="fas fa-times" />
        </button>

        <div className={styles.inner}>
          <div className={styles.left}>
            <h2 className={styles.title}>NEWSLETTER SUBSCRIBE</h2>
            <p className={styles.desc}>
              Subscribe to the mailing list to receive updates on new arrivals,
              special offers and other discount information.
            </p>

            {submitted ? (
              <div className={styles.success}>
                <i className="fas fa-check-circle" />
                Thank you for subscribing!
              </div>
            ) : (
              <form onSubmit={handleSubmit} className={styles.form}>
                <div className={styles.inputRow}>
                  <input
                    type="email"
                    placeholder="Your email address"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className={styles.input}
                    required
                  />
                  <button type="submit" className={styles.submitBtn}>SUBSCRIBE</button>
                </div>
              </form>
            )}

            <label className={styles.dontShow}>
              <input
                type="checkbox"
                checked={dontShow}
                onChange={(e) => setDontShow(e.target.checked)}
              />
              <span>Don&apos;t show this popup again</span>
            </label>

            <div className={styles.social}>
              {['fab fa-facebook-f', 'fab fa-twitter', 'fab fa-google-plus-g', 'fab fa-linkedin-in', 'fab fa-pinterest-p', 'fab fa-youtube'].map((icon) => (
                <a key={icon} href="#" className={styles.socialBtn} onClick={(e) => e.preventDefault()}>
                  <i className={icon} />
                </a>
              ))}
            </div>
          </div>

          <div className={styles.right}>
            <img
              src="https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=400&q=80"
              alt="Auto Parts"
              className={styles.img}
            />
          </div>
        </div>
      </div>
    </div>
  )
}
