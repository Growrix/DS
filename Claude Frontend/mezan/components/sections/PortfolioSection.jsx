'use client'
import { useState } from 'react'
import Link from 'next/link'
import styles from './PortfolioSection.module.css'

export default function PortfolioSection({ portfolio }) {
  const [hovered, setHovered] = useState(null)

  return (
    <section className={styles.section} id="portfolio">
      <div className={styles.grid}>
        {portfolio.map((item) => (
          <div
            key={item.id}
            className={styles.item}
            onMouseEnter={() => setHovered(item.id)}
            onMouseLeave={() => setHovered(null)}
          >
            <img src={item.image} alt={item.title} />
            <div className={`${styles.overlay} ${hovered === item.id ? styles.overlayActive : ''}`}>
              <span className={styles.category}>{item.category}</span>
              <h3 className={styles.itemTitle}>{item.title}</h3>
              <Link href="/#portfolio" className={styles.viewLink}>
                <i className="fas fa-eye" /> View
              </Link>
            </div>
          </div>
        ))}
      </div>
      <div className={styles.cta}>
        <Link href="/#portfolio" className="btn-yellow">View All Portfolio</Link>
      </div>
    </section>
  )
}
