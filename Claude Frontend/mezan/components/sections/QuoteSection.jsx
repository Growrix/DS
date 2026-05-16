'use client'
import { useState } from 'react'
import styles from './QuoteSection.module.css'

const WhyIcons = {
  handshake: (
    <svg viewBox="0 0 48 48" fill="none" width="32" height="32">
      <path d="M4 28l8-8h8l6 6 6-6h8l4 4-14 14L24 32l-6 6L4 28z" stroke="currentColor" strokeWidth="2" strokeLinejoin="round"/>
      <path d="M16 20l-4-4 4-4 4 4M32 20l4-4-4-4-4 4" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
    </svg>
  ),
  thumbsup: (
    <svg viewBox="0 0 48 48" fill="none" width="32" height="32">
      <path d="M20 22V12a4 4 0 014-4h0a4 4 0 014 4v10h8a4 4 0 014 4l-2 12a4 4 0 01-4 4H14a4 4 0 01-4-4V26a4 4 0 014-4h6z" stroke="currentColor" strokeWidth="2" strokeLinejoin="round"/>
    </svg>
  ),
  clock: (
    <svg viewBox="0 0 48 48" fill="none" width="32" height="32">
      <circle cx="24" cy="24" r="18" stroke="currentColor" strokeWidth="2"/>
      <path d="M24 14v10l6 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  ),
}

export default function QuoteSection({ whyBest, workTypes }) {
  const [form, setForm] = useState({ name: '', email: '', phone: '', workType: '', date: '' })
  const [submitted, setSubmitted] = useState(false)

  const handleChange = (e) => setForm((p) => ({ ...p, [e.target.name]: e.target.value }))
  const handleSubmit = (e) => {
    e.preventDefault()
    setSubmitted(true)
    setTimeout(() => setSubmitted(false), 3000)
    setForm({ name: '', email: '', phone: '', workType: '', date: '' })
  }

  return (
    <section className={styles.section}>
      <div className="container">
        <div className={styles.layout}>
          {/* Form side */}
          <div className={styles.formSide}>
            <span className="section-badge">{whyBest.badge === 'PEOPLE TRUST' ? 'FOR FREE ESTIMATE!' : 'GET A QUOTE'}</span>
            <h2 className={styles.title}>Request A Quote</h2>

            {submitted ? (
              <div className={styles.success}>
                <i className="fas fa-check-circle" />
                Your request has been submitted! We'll contact you within 24 hours.
              </div>
            ) : (
              <form onSubmit={handleSubmit} className={styles.form} noValidate>
                <div className={styles.row2}>
                  <input
                    name="name"
                    type="text"
                    placeholder="Your Name*"
                    value={form.name}
                    onChange={handleChange}
                    required
                    className={styles.input}
                  />
                  <input
                    name="email"
                    type="email"
                    placeholder="Email ID*"
                    value={form.email}
                    onChange={handleChange}
                    required
                    className={styles.input}
                  />
                </div>
                <input
                  name="phone"
                  type="tel"
                  placeholder="Phone Number"
                  value={form.phone}
                  onChange={handleChange}
                  className={styles.input}
                />
                <div className={styles.row2}>
                  <div className={styles.selectWrap}>
                    <select
                      name="workType"
                      value={form.workType}
                      onChange={handleChange}
                      className={styles.select}
                      required
                    >
                      <option value="">Select Your Work Type</option>
                      {workTypes.map((wt) => (
                        <option key={wt} value={wt}>{wt}</option>
                      ))}
                    </select>
                    <i className="fas fa-chevron-down" />
                  </div>
                  <div className={styles.selectWrap}>
                    <select
                      name="date"
                      value={form.date}
                      onChange={handleChange}
                      className={styles.select}
                    >
                      <option value="">Select Date</option>
                      <option value="asap">As Soon As Possible</option>
                      <option value="week">Within 1 Week</option>
                      <option value="month">Within 1 Month</option>
                    </select>
                    <i className="fas fa-chevron-down" />
                  </div>
                </div>
                <button type="submit" className="btn-yellow" style={{ width: '100%', justifyContent: 'center' }}>
                  Get Estimate Quote
                </button>
              </form>
            )}
          </div>

          {/* Worker image */}
          <div className={styles.imageSide}>
            <img
              src="https://images.unsplash.com/photo-1581244277943-fe4a9c777189?w=500&q=80"
              alt="Worker"
              className={styles.workerImg}
            />
          </div>
        </div>

        {/* Why We Are Best */}
        <div className={styles.whyGrid}>
          <div className={styles.whyLeft}>
            <span className="section-badge">{whyBest.badge}</span>
            <h3 className={styles.whyTitle}>{whyBest.title}</h3>
            <p className={styles.whyDesc}>{whyBest.description}</p>
          </div>
          {whyBest.features.map((f) => (
            <div key={f.title} className={styles.whyCard}>
              <div className={styles.whyIconWrap}>
                {WhyIcons[f.icon]}
              </div>
              <h4 className={styles.whyCardTitle}>{f.title}</h4>
              <p className={styles.whyCardDesc}>{f.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
