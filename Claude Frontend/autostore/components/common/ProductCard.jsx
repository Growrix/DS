'use client'
import { useState } from 'react'
import Link from 'next/link'
import StarRating from './StarRating'
import styles from './ProductCard.module.css'

export default function ProductCard({ product }) {
  const [wishlisted, setWishlisted] = useState(false)
  const [addedToCart, setAddedToCart] = useState(false)

  const handleAddToCart = (e) => {
    e.preventDefault()
    setAddedToCart(true)
    setTimeout(() => setAddedToCart(false), 2000)
  }

  const discount = product.discount || (
    product.originalPrice
      ? Math.round((1 - product.price / product.originalPrice) * 100)
      : 0
  )

  return (
    <div className={styles.card}>
      {/* Badge */}
      {discount > 0 && (
        <span className={styles.discountBadge}>-{discount}%</span>
      )}
      {product.badge && (
        <span className={`${styles.badge} ${product.badge === 'NEW' ? styles.badgeNew : styles.badgeHot}`}>
          {product.badge}
        </span>
      )}

      {/* Image */}
      <Link href={`/product/${product.id}`} className={styles.imageWrap}>
        <img
          src={product.image}
          alt={product.name}
          className={styles.image}
          loading="lazy"
        />
        {/* Overlay Actions */}
        <div className={styles.overlay}>
          <button
            className={`${styles.overlayBtn} ${wishlisted ? styles.wishlisted : ''}`}
            onClick={(e) => { e.preventDefault(); setWishlisted(!wishlisted) }}
            title="Add to Wishlist"
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
      <div className={styles.info}>
        <Link href={`/product/${product.id}`} className={styles.name}>
          {product.name}
        </Link>
        <div className={styles.ratingRow}>
          <StarRating rating={product.rating} />
          {product.reviews && (
            <span className={styles.reviews}>({product.reviews})</span>
          )}
        </div>
        <div className={styles.priceRow}>
          <span className={styles.price}>${product.price.toFixed(2)}</span>
          {product.originalPrice && (
            <span className={styles.originalPrice}>${product.originalPrice.toFixed(2)}</span>
          )}
        </div>
        <button
          className={`${styles.addToCart} ${addedToCart ? styles.added : ''}`}
          onClick={handleAddToCart}
        >
          <i className={`fas ${addedToCart ? 'fa-check' : 'fa-shopping-cart'}`} />
          {addedToCart ? 'ADDED!' : 'ADD TO CART'}
        </button>
      </div>
    </div>
  )
}
