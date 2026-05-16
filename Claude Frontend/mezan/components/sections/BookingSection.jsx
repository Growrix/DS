'use client'
import { useState } from 'react'
import styles from './BookingSection.module.css'

export default function BookingSection({ workTypes, company }) {
  const [form, setForm] = useState({ service: '', name: '', date: '', email: '', phone: '', address: '', message: '' })
  const [submitted, setSubmitted] = useState(false)

  const handleChange = (e) => setForm((p) => ({ ...p, [e.target.name]: e.target.value }))
  const handleSubmit = (e) => {
    e.preventDefault()
    setSubmitted(true)
    setTimeout(() => setSubmitted(false), 3000)
    setForm({ service: '', name: '', date: '', email: '', phone: '', address: '', message: '' })
  }

  return (
    <section className={styles.section} id="booking">
      <div className="container">
        <div className={styles.layout}>
          {/* Image */}
          <div className={styles.imageSide}>
            <div className={styles.imgWrap}>
              <img
                src="https://images.unsplash.com/photo-1504328345606-18bbc8c9d7d1?w=600&q=80"
                alt="Technician"
                className={styles.img}
              />
              <div className={styles.contactBadge}>
                <div className={styles.contactIcon}>
                  <i className="fas fa-envelope" />
                </div>
                <div>
                  <strong className={styles.contactLabel}>24/7 Contact Support</strong>
                  <span className={styles.contactEmail}>{company.email}</span>
                </div>
              </div>
            </div>
          </div>

          {/* Form */}
          <div className={styles.formSide}>
            <span className="section-badge" style={{ color: 'rgba(26,26,26,0.5)' }}>GET IN TOUCH</span>
            <h2 className={styles.title}>Effortless Booking With Us</h2>
            <p className={styles.desc}>Habitasse platea dictumst quisque sagittis purus sit. Scelerisque viverra mauris in aliquam sem fringilla ut morbi. Et leo duis ut diam quam nulla parttitor.</p>

            {submitted ? (
              <div className={styles.success}>
                <i className="fas fa-check-circle" />
                Your booking has been submitted! We'll be in touch soon.
              </div>
            ) : (
              <form onSubmit={handleSubmit} className={styles.form} noValidate>
                <div className={styles.selectWrap}>
                  <select name="service" value={form.service} onChange={handleChange} className={styles.select}>
                    <option value="">Service Options</option>
                    {workTypes.map((wt) => <option key={wt} value={wt}>{wt}</option>)}
                  </select>
                  <i className="fas fa-chevron-down" />
                </div>

                <div className={styles.row2}>
                  <input name="name" type="text" placeholder="Name*" value={form.name} onChange={handleChange} required className={styles.input} />
                  <div className={styles.selectWrap}>
                    <select name="date" value={form.date} onChange={handleChange} className={styles.select}>
                      <option value="">Select Date</option>
                      <option value="asap">ASAP</option>
                      <option value="week">Within 1 Week</option>
                      <option value="month">Within 1 Month</option>
                    </select>
                    <i className="fas fa-chevron-down" />
                  </div>
                </div>

                <div className={styles.row2}>
                  <input name="email" type="email" placeholder="Email*" value={form.email} onChange={handleChange} required className={styles.input} />
                  <input name="phone" type="tel" placeholder="Phone Number*" value={form.phone} onChange={handleChange} className={styles.input} />
                </div>

                <input name="address" type="text" placeholder="Address*" value={form.address} onChange={handleChange} className={styles.input} />
                <textarea name="message" placeholder="Message Here*" value={form.message} onChange={handleChange} className={styles.textarea} rows={4} />

                <button type="submit" className="btn-dark">Submit Now</button>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  )
}
