'use client'
import { useState } from 'react'
import Link from 'next/link'
import ProductCard from '../common/ProductCard'
import styles from './BestSellers.module.css'

export default function BestSellers({ data }) {
  const [activeTab, setActiveTab] = useState(data.tabs[0])

  const products = data.products[activeTab] || []

  return (
    <section className={styles.section}>
      <div className={styles.container}>
        {/* Header */}
        <div className={styles.header}>
          <div className={styles.titleWrap}>
            <span className={styles.titleDot}>•</span>
            <h2 className={styles.title}>BEST SELLERS</h2>
            <span className={styles.titleDot}>•</span>
          </div>
          <div className={styles.subtitle}>TOP SALE ON THIS WEEK</div>
        </div>

        {/* Tabs */}
        <div className={styles.tabs}>
          {data.tabs.map((tab) => (
            <button
              key={tab}
              className={`${styles.tab} ${activeTab === tab ? styles.tabActive : ''}`}
              onClick={() => setActiveTab(tab)}
            >
              {tab}
            </button>
          ))}
        </div>

        {/* Products Grid */}
        <div className={styles.grid}>
          {products.slice(0, 8).map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>

        {/* Load More */}
        <div className={styles.loadMore}>
          <Link href="/best-sellers" className={styles.loadMoreBtn}>
            LOAD MORE
          </Link>
        </div>
      </div>
    </section>
  )
}
