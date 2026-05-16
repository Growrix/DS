'use client'
import { useState } from 'react'
import TopBar from '@/components/layout/TopBar'
import Header from '@/components/layout/Header'
import Footer from '@/components/layout/Footer'
import CountdownTimer from '@/components/common/CountdownTimer'
import StarRating from '@/components/common/StarRating'
import styles from './page.module.css'
import Link from 'next/link'

import siteData from '@/data/site.json'
import navigation from '@/data/navigation.json'
import productsData from '@/data/products.json'

function DealProductCard({ product, endDate }) {
  const [wishlisted, setWishlisted] = useState(false)
  const [added, setAdded] = useState(false)

  const handleAdd = () => {
    setAdded(true)
    setTimeout(() => setAdded(false), 2000)
  }

  return (
    <div className={styles.dealCard}>
      {/* Discount Badge */}
      <span className={styles.discountBadge}>-{product.discount}%</span>

      {/* Image */}
      <Link href={`/product/${product.id}`} className={styles.cardImage}>
        <img src={product.image} alt={product.name} />
        <div className={styles.cardOverlay}>
          <button
            className={`${styles.overlayBtn} ${wishlisted ? styles.wishlisted : ''}`}
            onClick={(e) => { e.preventDefault(); setWishlisted(!wishlisted) }}
            title="Wishlist"
          >
            <i className={`${wishlisted ? 'fas' : 'far'} fa-heart`} />
          </button>
          <button className={styles.overlayBtn} title="Quick View">
            <i className="fas fa-eye" />
          </button>
          <button className={styles.overlayBtn} title="Compare">
            <i className="fas fa-exchange-alt" />
          </button>
        </div>
      </Link>

      {/* Info */}
      <div className={styles.cardInfo}>
        <Link href={`/product/${product.id}`} className={styles.cardName}>
          {product.name}
        </Link>
        <div className={styles.ratingRow}>
          <StarRating rating={product.rating} />
          <span className={styles.reviews}>({product.reviews})</span>
        </div>
        <div className={styles.priceRow}>
          <span className={styles.price}>${product.price.toFixed(2)}</span>
          <span className={styles.original}>${product.originalPrice.toFixed(2)}</span>
        </div>

        {/* Countdown */}
        <CountdownTimer endDate={endDate} />

        {/* Add to Cart */}
        <button
          className={`${styles.addBtn} ${added ? styles.added : ''}`}
          onClick={handleAdd}
        >
          <i className={`fas ${added ? 'fa-check' : 'fa-shopping-cart'}`} />
          {added ? 'ADDED!' : 'ADD TO CART'}
        </button>
      </div>
    </div>
  )
}

export default function DailyDealsPage() {
  const { tabs, products, endDate } = productsData.dailyDeals
  const [activeTab, setActiveTab] = useState(tabs[0])

  const currentProducts = products[activeTab] || []

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
            <span className={styles.current}>Daily Deals</span>
          </div>
        </div>

        <section className={styles.section}>
          <div className={styles.container}>
            <h1 className={styles.pageTitle}>DAILY DEALS</h1>

            {/* Tabs */}
            <div className={styles.tabs}>
              {tabs.map((tab) => (
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
            {currentProducts.length > 0 ? (
              <div className={styles.grid}>
                {currentProducts.map((product) => (
                  <DealProductCard key={product.id} product={product} endDate={endDate} />
                ))}
              </div>
            ) : (
              <div className={styles.empty}>
                <i className="fas fa-box-open" />
                <p>No deals available in this category right now. Check back soon!</p>
              </div>
            )}

            {/* Load More */}
            {currentProducts.length > 0 && (
              <div className={styles.loadMore}>
                <button className={styles.loadMoreBtn}>LOAD MORE</button>
              </div>
            )}
          </div>
        </section>
      </main>

      <Footer siteData={siteData} />
    </>
  )
}
