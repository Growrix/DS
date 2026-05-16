'use client'
import { useState } from 'react'
import styles from './TestimonialSection.module.css'

export default function TestimonialSection({ testimonials, siteData }) {
  const [active, setActive] = useState(0)
  const t = testimonials[active]

  return (
    <section className={styles.section} id="testimonials">
      <div className="container">
        <div className={styles.card}>
          {/* Line Art Illustration */}
          <div className={styles.illustration}>
            <svg viewBox="0 0 300 360" fill="none" xmlns="http://www.w3.org/2000/svg">
              {/* Worker line art */}
              <circle cx="150" cy="60" r="35" stroke="#1A1A1A" strokeWidth="1.5"/>
              <path d="M115 95 C100 110 88 130 90 160 L120 165 L120 200" stroke="#1A1A1A" strokeWidth="1.5" strokeLinecap="round"/>
              <path d="M185 95 C200 110 212 130 210 160 L180 165 L180 200" stroke="#1A1A1A" strokeWidth="1.5" strokeLinecap="round"/>
              <path d="M120 160 L180 160" stroke="#1A1A1A" strokeWidth="1.5"/>
              <path d="M120 200 L120 280 L140 280" stroke="#1A1A1A" strokeWidth="1.5" strokeLinecap="round"/>
              <path d="M180 200 L180 280 L160 280" stroke="#1A1A1A" strokeWidth="1.5" strokeLinecap="round"/>
              <path d="M90 240 L120 230" stroke="#1A1A1A" strokeWidth="1.5" strokeLinecap="round"/>
              <path d="M90 240 L70 260 L60 310" stroke="#1A1A1A" strokeWidth="1.5" strokeLinecap="round"/>
              {/* Drill tool */}
              <path d="M210 240 L240 200 L260 215 L230 255Z" stroke="#1A1A1A" strokeWidth="1.5" strokeLinejoin="round"/>
              <path d="M260 215 L290 180" stroke="#1A1A1A" strokeWidth="1.5" strokeLinecap="round"/>
              <rect x="85" y="140" width="16" height="24" rx="3" stroke="#1A1A1A" strokeWidth="1.5"/>
              <rect x="199" y="140" width="16" height="24" rx="3" stroke="#1A1A1A" strokeWidth="1.5"/>
              {/* Hat */}
              <path d="M100 60 Q150 20 200 60" stroke="#1A1A1A" strokeWidth="1.5" fill="none"/>
              <path d="M95 65 L205 65" stroke="#1A1A1A" strokeWidth="1.5" strokeLinecap="round"/>
              {/* Belt/tools */}
              <rect x="110" y="195" width="80" height="12" rx="4" stroke="#1A1A1A" strokeWidth="1.5"/>
              <rect x="125" y="207" width="12" height="18" rx="2" stroke="#1A1A1A" strokeWidth="1.2"/>
              <rect x="155" y="207" width="12" height="18" rx="2" stroke="#1A1A1A" strokeWidth="1.2"/>
            </svg>
          </div>

          {/* Content */}
          <div className={styles.content}>
            <span className="section-badge">CLIENT SAYS</span>
            <div className={styles.titleRow}>
              <h2 className={styles.title}>Happy Customers</h2>
              <div className={styles.descBlock}>
                <div className={styles.descBorder} />
                <p className={styles.desc}>Sem viverra aliquet eget sit amet tellus cras. Scelerisque felis imperdiet proin fermentum leo vel arc. Tortor at auctor urna nunc id. Sit amet facilisis magna etiam odio mollis.</p>
              </div>
            </div>

            {/* Stars */}
            <div className={styles.stars}>
              {[1,2,3,4,5].map((i) => (
                <i key={i} className="fas fa-star" style={{ color: i <= t.rating ? '#F5B800' : '#E0E0E0' }} />
              ))}
            </div>

            <blockquote className={styles.quote}>{t.text}</blockquote>

            <div className={styles.divider} />

            <div className={styles.reviewer}>
              <img src={t.avatar} alt={t.name} className={styles.avatar} />
              <div>
                <strong className={styles.reviewerName}>{t.name}</strong>
                <span className={styles.reviewerRole}>{t.role}</span>
              </div>
            </div>
          </div>

          {/* Dots */}
          <div className={styles.dots}>
            {testimonials.map((_, i) => (
              <button
                key={i}
                className={`${styles.dot} ${i === active ? styles.dotActive : ''}`}
                onClick={() => setActive(i)}
                aria-label={`Testimonial ${i + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
