'use client'
import { useState, useEffect, useCallback } from 'react'
import Link from 'next/link'
import styles from './HeroSection.module.css'

export default function HeroSection({ slides }) {
  const safeSlides = Array.isArray(slides) ? slides : []
  const [current, setCurrent] = useState(0)
  const next = useCallback(() => {
    if (safeSlides.length === 0) return
    setCurrent((c) => (c + 1) % safeSlides.length)
  }, [safeSlides.length])

  useEffect(() => {
    if (safeSlides.length === 0) return
    const t = setInterval(next, 5500)
    return () => clearInterval(t)
  }, [next, safeSlides.length])

  if (safeSlides.length === 0) {
    return null
  }

  return (
    <section className={styles.hero}>
      {safeSlides.map((slide, idx) => (
        <div
          key={slide.id}
          className={`${styles.slide} ${idx === current ? styles.active : ''}`}
          style={{ backgroundImage: `url(${slide.image})` }}
        >
          <div className={styles.overlay} />
          <div className="container">
            <div className={styles.content}>
              <span className={styles.badge}>{slide.badge}</span>
              <h1 className={styles.title}>{slide.title}</h1>
              <p className={styles.subtitle}>{slide.subtitle}</p>
              <div className={styles.ctas}>
                <Link href={slide.cta1.href} className="btn-yellow">{slide.cta1.label}</Link>
                <Link href={slide.cta2.href} className={styles.ctaOutline}>{slide.cta2.label}</Link>
              </div>
            </div>
          </div>
        </div>
      ))}
      {/* Dots */}
      <div className={styles.dots}>
        {safeSlides.map((_, idx) => (
          <button
            key={idx}
            className={`${styles.dot} ${idx === current ? styles.dotActive : ''}`}
            onClick={() => setCurrent(idx)}
            aria-label={`Slide ${idx + 1}`}
          />
        ))}
      </div>
      {/* Arrows */}
      <button className={`${styles.arrow} ${styles.arrowLeft}`} onClick={() => setCurrent((c) => (c - 1 + safeSlides.length) % safeSlides.length)}>
        <i className="fas fa-chevron-left" />
      </button>
      <button className={`${styles.arrow} ${styles.arrowRight}`} onClick={next}>
        <i className="fas fa-chevron-right" />
      </button>
    </section>
  )
}
