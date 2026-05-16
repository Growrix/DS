'use client'
import { useState } from 'react'
import Link from 'next/link'
import styles from './PricingSection.module.css'

export default function PricingSection({ plans, note, brands }) {
  const [yearly, setYearly] = useState(false)

  return (
    <section className={styles.section}>
      <div className="container">
        {/* Toggle */}
        <div className={styles.toggle}>
          <span className={`${styles.toggleLabel} ${!yearly ? styles.toggleLabelActive : ''}`}>Monthly</span>
          <button
            className={`${styles.toggleBtn} ${yearly ? styles.toggleBtnOn : ''}`}
            onClick={() => setYearly(!yearly)}
            aria-label="Toggle billing period"
          >
            <span className={styles.toggleThumb} />
          </button>
          <span className={`${styles.toggleLabel} ${yearly ? styles.toggleLabelActive : ''}`}>Yearly</span>
        </div>

        {/* Plans */}
        <div className={styles.grid}>
          {plans.map((plan) => (
            <div key={plan.id} className={`${styles.card} ${plan.popular ? styles.cardPopular : ''}`}>
              {plan.popular && <span className={styles.popularBadge}>Most Popular</span>}
              <h3 className={styles.planName}>{plan.name}</h3>
              <div className={styles.price}>
                <span className={styles.currency}>$</span>
                <span className={styles.amount}>{yearly ? plan.yearlyPrice / 12 : plan.monthlyPrice}</span>
                <span className={styles.period}>/ Per Month</span>
              </div>
              {plan.popular && <div className={styles.priceDivider} />}
              <ul className={styles.featureList}>
                {plan.features.map((f) => (
                  <li key={f.text} className={`${styles.featureItem} ${!f.included ? styles.featureExcluded : ''}`}>
                    <i className={`fas ${f.included ? 'fa-check' : 'fa-xmark'}`} />
                    <span>{f.text}</span>
                  </li>
                ))}
              </ul>
              <Link
                href="/contact"
                className={plan.popular ? 'btn-dark' : 'btn-yellow'}
                style={{ width: '100%', justifyContent: 'center', marginTop: 'auto' }}
              >
                Get This Package
              </Link>
            </div>
          ))}
        </div>

        {/* Note */}
        <p className={styles.note}>{note}</p>

        {/* Brand logos */}
        <div className={styles.brands}>
          {brands.map((b) => (
            <div key={b} className={styles.brand}>
              <span className={styles.brandName}>{b}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
