'use client'
import { useEffect, useState, useRef } from 'react'
import styles from './StatsSection.module.css'

function AnimatedNumber({ target, duration = 2000 }) {
  const [val, setVal] = useState(0)
  const ref = useRef(null)
  const animated = useRef(false)

  const num = parseInt(target.replace(/\D/g, ''))
  const suffix = target.replace(/[\d]/g, '')

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !animated.current) {
          animated.current = true
          const start = Date.now()
          const tick = () => {
            const elapsed = Date.now() - start
            const progress = Math.min(elapsed / duration, 1)
            const eased = 1 - Math.pow(1 - progress, 3)
            setVal(Math.floor(eased * num))
            if (progress < 1) requestAnimationFrame(tick)
          }
          requestAnimationFrame(tick)
        }
      },
      { threshold: 0.3 }
    )
    if (ref.current) observer.observe(ref.current)
    return () => observer.disconnect()
  }, [num, duration])

  return <span ref={ref}>{val}{suffix}</span>
}

export default function StatsSection({ data }) {
  return (
    <section className={styles.section}>
      <div className="container">
        {/* Top content */}
        <div className={styles.topGrid}>
          <div className={styles.topLeft}>
            <span className="section-badge" style={{ color: 'rgba(255,255,255,0.5)' }}>{data.badge}</span>
            <h2 className={styles.title}>{data.title}</h2>
          </div>
          <div className={styles.topRight}>
            <div className={styles.reviewBlock}>
              <div className={styles.descBorder} />
              <div>
                <p className={styles.reviewText}>{data.reviewText}</p>
                <div className={styles.reviewInfo}>
                  <div className={styles.reviewAvatars}>
                    {[
                      'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=60&q=80',
                      'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=60&q=80',
                      'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=60&q=80',
                    ].map((src, i) => (
                      <img key={i} src={src} alt="reviewer" className={styles.avatar} style={{ marginLeft: i > 0 ? -10 : 0 }} />
                    ))}
                  </div>
                  <div>
                    <div className={styles.stars}>
                      {[1,2,3,4,5].map((i) => <i key={i} className="fas fa-star" />)}
                    </div>
                    <span className={styles.reviewCount}>{data.reviewCount}</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Stats row */}
        <div className={styles.statsRow}>
          {data.stats.map((stat) => (
            <div key={stat.label} className={styles.statItem}>
              <span className={styles.statNum}><AnimatedNumber target={stat.number} /></span>
              <span className={styles.statLabel}>{stat.label}</span>
            </div>
          ))}
        </div>

        {/* Images */}
        <div className={styles.imagesRow}>
          {data.images.map((img, i) => (
            <div key={i} className={styles.imgWrap}>
              <img src={img} alt="Service work" />
              <div className={styles.imgOverlay} />
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
