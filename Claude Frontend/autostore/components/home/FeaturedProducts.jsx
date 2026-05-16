import Link from 'next/link'
import StarRating from '../common/StarRating'
import styles from './FeaturedProducts.module.css'

function SideProductItem({ product }) {
  return (
    <div className={styles.item}>
      <Link href={`/product/${product.id}`} className={styles.itemImage}>
        <img src={product.image} alt={product.name} />
      </Link>
      <div className={styles.itemInfo}>
        <Link href={`/product/${product.id}`} className={styles.itemName}>
          {product.name}
        </Link>
        <StarRating rating={product.rating} />
        <div className={styles.itemPrice}>
          <span className={styles.price}>${product.price.toFixed(2)}</span>
          {product.originalPrice && (
            <span className={styles.original}>${product.originalPrice.toFixed(2)}</span>
          )}
        </div>
      </div>
    </div>
  )
}

export default function FeaturedProducts({ newArrivals, bestSellers, saleOff }) {
  const sections = [
    { title: 'NEW ARRIVALS', data: newArrivals, href: '/new-arrivals' },
    { title: 'BEST SELLERS', data: bestSellers, href: '/best-sellers' },
    { title: 'SALE OFF', data: saleOff, href: '/sale' },
  ]

  return (
    <section className={styles.section}>
      <div className={styles.container}>
        <div className={styles.grid}>
          {sections.map((section) => (
            <div key={section.title} className={styles.col}>
              <h3 className={styles.colTitle}>{section.title}</h3>
              <div className={styles.list}>
                {section.data.map((product) => (
                  <SideProductItem key={product.id} product={product} />
                ))}
              </div>
              <Link href={section.href} className={styles.viewAll}>
                VIEW ALL <i className="fas fa-arrow-right" />
              </Link>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
