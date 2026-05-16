'use client'
import { useState } from 'react'
import TopBar from '@/components/layout/TopBar'
import Header from '@/components/layout/Header'
import Footer from '@/components/layout/Footer'
import styles from './page.module.css'

import siteData from '@/data/site.json'
import navigation from '@/data/navigation.json'

export default function ContactPage() {
  const [form, setForm] = useState({ name: '', email: '', phone: '', message: '' })
  const [submitted, setSubmitted] = useState(false)
  const [errors, setErrors] = useState({})

  const validate = () => {
    const errs = {}
    if (!form.name.trim()) errs.name = 'Name is required'
    if (!form.email.trim()) errs.email = 'Email is required'
    else if (!/\S+@\S+\.\S+/.test(form.email)) errs.email = 'Invalid email address'
    if (!form.message.trim()) errs.message = 'Message is required'
    return errs
  }

  const handleChange = (e) => {
    const { name, value } = e.target
    setForm((prev) => ({ ...prev, [name]: value }))
    if (errors[name]) setErrors((prev) => ({ ...prev, [name]: '' }))
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    const errs = validate()
    if (Object.keys(errs).length > 0) {
      setErrors(errs)
      return
    }
    setSubmitted(true)
    setForm({ name: '', email: '', phone: '', message: '' })
  }

  return (
    <>
      <TopBar hotline={siteData.hotline} />
      <Header navigation={navigation} cartCount={0} />

      <main>
        {/* Breadcrumb */}
        <div className={styles.breadcrumb}>
          <div className={styles.container}>
            <span>Home</span>
            <i className="fas fa-chevron-right" />
            <span className={styles.current}>Contact Us</span>
          </div>
        </div>

        {/* Contact Section */}
        <section className={styles.contactSection}>
          <div className={styles.container}>
            <div className={styles.contactGrid}>
              {/* Image */}
              <div className={styles.imageCol}>
                <img
                  src="https://images.unsplash.com/photo-1619642751034-765dfdf7c58e?w=600&q=80"
                  alt="Auto mechanic"
                  className={styles.contactImage}
                />
              </div>

              {/* Form */}
              <div className={styles.formCol}>
                <h1 className={styles.title}>CONTACT US</h1>
                <p className={styles.desc}>
                  We love to hear from you! Please let us know if you have any questions
                  or concerns and we will get back to you within 2 business days. Thanks!
                </p>

                {submitted && (
                  <div className={styles.successMsg}>
                    <i className="fas fa-check-circle" />
                    Your message has been sent successfully. We&apos;ll get back to you soon!
                  </div>
                )}

                {!submitted && (
                  <form onSubmit={handleSubmit} className={styles.form} noValidate>
                    <div className={styles.row}>
                      <div className={styles.field}>
                        <input
                          type="text"
                          name="name"
                          placeholder="Name"
                          value={form.name}
                          onChange={handleChange}
                          className={`${styles.input} ${errors.name ? styles.inputError : ''}`}
                        />
                        {errors.name && <span className={styles.error}>{errors.name}</span>}
                      </div>
                      <div className={styles.field}>
                        <input
                          type="email"
                          name="email"
                          placeholder="Email"
                          value={form.email}
                          onChange={handleChange}
                          className={`${styles.input} ${errors.email ? styles.inputError : ''}`}
                        />
                        {errors.email && <span className={styles.error}>{errors.email}</span>}
                      </div>
                    </div>

                    <div className={styles.field}>
                      <input
                        type="tel"
                        name="phone"
                        placeholder="Phone Number"
                        value={form.phone}
                        onChange={handleChange}
                        className={styles.input}
                      />
                    </div>

                    <div className={styles.field}>
                      <textarea
                        name="message"
                        placeholder="Leave A Comment"
                        value={form.message}
                        onChange={handleChange}
                        className={`${styles.textarea} ${errors.message ? styles.inputError : ''}`}
                        rows={5}
                      />
                      {errors.message && <span className={styles.error}>{errors.message}</span>}
                    </div>

                    <button type="submit" className={styles.submitBtn}>
                      SUBMIT
                    </button>
                  </form>
                )}
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer siteData={siteData} />
    </>
  )
}
