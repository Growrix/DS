'use client'
import { useState } from 'react'
import Link from 'next/link'
import PageLayout from '@/components/layout/PageLayout'
import StarRating from '@/components/common/StarRating'
import ProductCard from '@/components/common/ProductCard'
import styles from './page.module.css'

import productsData from '@/data/products.json'

// Get a demo product (in real app this would come from params/DB)
const product = productsData.bestSellers.products['WHEELS & TIRES'][0]
const relatedProducts = productsData.bestSellers.products['WHEELS & TIRES'].slice(1, 5)

const images = [
  product.image,
  'https://images.unsplash.com/photo-1603386329225-868f9b1ee6c9?w=600&q=80',
  'https://images.unsplash.com/photo-1571068316344-75bc76f77890?w=600&q=80',
  'https://images.unsplash.com/photo-1568772585407-9361f9bf3a87?w=600&q=80',
]

export default function ProductPage({ params }) {
  const [selectedImg, setSelectedImg] = useState(0)
  const [quantity, setQuantity] = useState(1)
  const [tab, setTab] = useState('description')
  const [added, setAdded] = useState(false)
  const [wishlisted, setWishlisted] = useState(false)

  const handleAddToCart = () => {
    setAdded(true)
    setTimeout(() => setAdded(false), 2000)
  }

  const discount = Math.round((1 - product.price / product.originalPrice) * 100)

  return (
    <PageLayout
      crumbs={[
        { label: 'Home', href: '/' },
        { label: 'Wheels & Tires', href: '/category/wheels-tires' },
        { label: product.name, href: '#' },
      ]}
    >
      <section className={styles.section}>
        <div className={styles.container}>
          {/* Product Main */}
          <div className={styles.productLayout}>
            {/* Images */}
            <div className={styles.imagesCol}>
              <div className={styles.mainImage}>
                {discount > 0 && (
                  <span className={styles.discountBadge}>-{discount}%</span>
                )}
                <img src={images[selectedImg]} alt={product.name} />
              </div>
              <div className={styles.thumbnails}>
                {images.map((img, idx) => (
                  <button
                    key={idx}
                    className={`${styles.thumb} ${selectedImg === idx ? styles.thumbActive : ''}`}
                    onClick={() => setSelectedImg(idx)}
                  >
                    <img src={img} alt={`View ${idx + 1}`} />
                  </button>
                ))}
              </div>
            </div>

            {/* Info */}
            <div className={styles.infoCol}>
              <h1 className={styles.productName}>{product.name}</h1>

              <div className={styles.metaRow}>
                <StarRating rating={product.rating} size="md" />
                <span className={styles.reviewCount}>({product.reviews || 12} reviews)</span>
                <span className={styles.separator}>|</span>
                <span className={styles.sku}>SKU: <strong>WH-00{product.id}</strong></span>
              </div>

              <div className={styles.priceRow}>
                <span className={styles.price}>${product.price.toFixed(2)}</span>
                {product.originalPrice && (
                  <span className={styles.originalPrice}>${product.originalPrice.toFixed(2)}</span>
                )}
                {discount > 0 && (
                  <span className={styles.saveBadge}>Save {discount}%</span>
                )}
              </div>

              <div className={styles.stockRow}>
                <span className={styles.inStock}>
                  <i className="fas fa-check-circle" /> In Stock
                </span>
              </div>

              <p className={styles.shortDesc}>
                Premium quality automotive wheel designed for maximum performance and durability.
                Compatible with a wide range of vehicles. Engineered to meet OEM specifications
                with enhanced finish for lasting appearance.
              </p>

              <div className={styles.divider} />

              {/* Quantity + Cart */}
              <div className={styles.addRow}>
                <div className={styles.qtyControl}>
                  <button
                    className={styles.qtyBtn}
                    onClick={() => setQuantity(Math.max(1, quantity - 1))}
                  >−</button>
                  <input
                    type="number"
                    value={quantity}
                    min="1"
                    onChange={(e) => setQuantity(Math.max(1, parseInt(e.target.value) || 1))}
                    className={styles.qtyInput}
                  />
                  <button
                    className={styles.qtyBtn}
                    onClick={() => setQuantity(quantity + 1)}
                  >+</button>
                </div>
                <button
                  className={`${styles.addToCartBtn} ${added ? styles.added : ''}`}
                  onClick={handleAddToCart}
                >
                  <i className={`fas ${added ? 'fa-check' : 'fa-shopping-cart'}`} />
                  {added ? 'ADDED TO CART!' : 'ADD TO CART'}
                </button>
              </div>

              {/* Wishlist + Compare */}
              <div className={styles.actionRow}>
                <button
                  className={`${styles.actionBtn} ${wishlisted ? styles.wishlisted : ''}`}
                  onClick={() => setWishlisted(!wishlisted)}
                >
                  <i className={`${wishlisted ? 'fas' : 'far'} fa-heart`} />
                  {wishlisted ? 'WISHLISTED' : 'ADD TO WISHLIST'}
                </button>
                <button className={styles.actionBtn}>
                  <i className="fas fa-exchange-alt" />
                  COMPARE
                </button>
              </div>

              <div className={styles.divider} />

              {/* Meta */}
              <div className={styles.metaInfo}>
                <div className={styles.metaItem}>
                  <span className={styles.metaLabel}>Category:</span>
                  <Link href="/category/wheels-tires" className={styles.metaValue}>Wheels & Tires</Link>
                </div>
                <div className={styles.metaItem}>
                  <span className={styles.metaLabel}>Tags:</span>
                  <span className={styles.metaValue}>wheels, tires, off-road, chevy</span>
                </div>
                <div className={styles.metaItem}>
                  <span className={styles.metaLabel}>Share:</span>
                  <div className={styles.shareIcons}>
                    {['fab fa-facebook-f', 'fab fa-twitter', 'fab fa-pinterest-p', 'fab fa-linkedin-in'].map((ic) => (
                      <a key={ic} href="#" className={styles.shareIcon}>
                        <i className={ic} />
                      </a>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Tabs */}
          <div className={styles.tabs}>
            <div className={styles.tabList}>
              {['description', 'specifications', 'reviews'].map((t) => (
                <button
                  key={t}
                  className={`${styles.tabBtn} ${tab === t ? styles.tabBtnActive : ''}`}
                  onClick={() => setTab(t)}
                >
                  {t.charAt(0).toUpperCase() + t.slice(1)}
                  {t === 'reviews' && ' (12)'}
                </button>
              ))}
            </div>
            <div className={styles.tabContent}>
              {tab === 'description' && (
                <div className={styles.description}>
                  <p>
                    This premium automotive wheel is crafted from high-grade aluminum alloy,
                    providing exceptional strength-to-weight ratio. The precision machining ensures
                    a perfect fit and flawless performance. Designed to handle the toughest driving
                    conditions while maintaining an aggressive, stylish appearance.
                  </p>
                  <ul className={styles.descList}>
                    <li>High-strength aluminum alloy construction</li>
                    <li>Precision-machined for perfect fitment</li>
                    <li>Weather and corrosion resistant finish</li>
                    <li>Compatible with TPMS sensors</li>
                    <li>Includes center cap and hardware</li>
                  </ul>
                </div>
              )}
              {tab === 'specifications' && (
                <table className={styles.specsTable}>
                  <tbody>
                    {[
                      ['Size', '20 x 9 inches'],
                      ['Bolt Pattern', '6x139.7mm'],
                      ['Offset', '+18mm'],
                      ['Center Bore', '78.1mm'],
                      ['Material', 'Aluminum Alloy'],
                      ['Finish', 'Gloss Black Machined'],
                      ['Load Rating', '2500 lbs'],
                      ['Compatible Vehicles', 'GMC, Chevy, Sierra, Silverado'],
                    ].map(([key, val]) => (
                      <tr key={key} className={styles.specRow}>
                        <td className={styles.specKey}>{key}</td>
                        <td className={styles.specVal}>{val}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              )}
              {tab === 'reviews' && (
                <div className={styles.reviews}>
                  <div className={styles.reviewSummary}>
                    <div className={styles.avgScore}>
                      <span className={styles.avgNum}>{product.rating}.0</span>
                      <StarRating rating={product.rating} size="md" />
                      <span className={styles.avgLabel}>12 reviews</span>
                    </div>
                  </div>
                  {[
                    { name: 'John D.', rating: 5, date: 'May 10, 2026', text: 'Excellent quality wheels. Perfect fitment on my Silverado. Very happy with the purchase!' },
                    { name: 'Mike R.', rating: 4, date: 'April 22, 2026', text: 'Great looking wheels. The finish is perfect and they mounted without any issues.' },
                  ].map((review, i) => (
                    <div key={i} className={styles.reviewItem}>
                      <div className={styles.reviewHeader}>
                        <div className={styles.reviewerAvatar}>
                          {review.name.charAt(0)}
                        </div>
                        <div>
                          <strong className={styles.reviewerName}>{review.name}</strong>
                          <div className={styles.reviewMeta}>
                            <StarRating rating={review.rating} />
                            <span className={styles.reviewDate}>{review.date}</span>
                          </div>
                        </div>
                      </div>
                      <p className={styles.reviewText}>{review.text}</p>
                    </div>
                  ))}
                </div>
              )}
            </div>
          </div>

          {/* Related Products */}
          <div className={styles.related}>
            <h2 className={styles.relatedTitle}>
              <span>•</span> RELATED PRODUCTS <span>•</span>
            </h2>
            <div className={styles.relatedGrid}>
              {relatedProducts.map((rp) => (
                <ProductCard key={rp.id} product={rp} />
              ))}
            </div>
          </div>
        </div>
      </section>
    </PageLayout>
  )
}
