'use client'
import { useState, useEffect, useCallback } from 'react'
import Link from 'next/link'
import styles from './HeroSlider.module.css'

export default function HeroSlider({ slides }) {
  const [current, setCurrent] = useState(0)
  const [animating, setAnimating] = useState(false)

  const goTo = useCallback((idx) => {
    if (animating) return
    setAnimating(true)
    setCurrent(idx)
    setTimeout(() => setAnimating(false), 700)
  }, [animating])

  const prev = () => goTo((current - 1 + slides.length) % slides.length)
  const next = useCallback(() => goTo((current + 1) % slides.length), [current, goTo, slides.length])

  useEffect(() => {
    const timer = setInterval(next, 5000)
    return () => clearInterval(timer)
  }, [next])

  return (
    <div className={styles.slider}>
      {slides.map((slide, idx) => (
        <div
          key={slide.id}
          className={`${styles.slide} ${idx === current ? styles.active : ''}`}
          style={{ backgroundImage: `url(${slide.image})` }}
        >
          <div className={styles.overlay} />
          <div className={styles.content}>
            <p className={styles.welcomeText}>{slide.title}</p>
            <h1 className={styles.title}>{slide.subtitle}</h1>
            <p className={styles.description}>{slide.description}</p>
            <Link href="/daily-deals" className={styles.cta}>
              {slide.cta}
            </Link>
          </div>
        </div>
      ))}

      {/* Arrows */}
      <button className={`${styles.arrow} ${styles.arrowLeft}`} onClick={prev} aria-label="Previous slide">
        <i className="fas fa-chevron-left" />
      </button>
      <button className={`${styles.arrow} ${styles.arrowRight}`} onClick={next} aria-label="Next slide">
        <i className="fas fa-chevron-right" />
      </button>

      {/* Dots */}
      <div className={styles.dots}>
        {slides.map((_, idx) => (
          <button
            key={idx}
            className={`${styles.dot} ${idx === current ? styles.dotActive : ''}`}
            onClick={() => goTo(idx)}
            aria-label={`Go to slide ${idx + 1}`}
          />
        ))}
      </div>
    </div>
  )
}
