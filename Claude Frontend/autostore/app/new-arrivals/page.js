import PageLayout from '@/components/layout/PageLayout'
import ProductCard from '@/components/common/ProductCard'
import styles from './page.module.css'

import productsData from '@/data/products.json'

export const metadata = {
  title: 'New Arrivals - AutoStore',
  description: 'Check out the latest automotive parts and accessories just added to AutoStore.',
}

export default function NewArrivalsPage() {
  // Combine and mark all products as new arrivals
  const allProducts = [
    ...productsData.bestSellers.products['WHEELS & TIRES'],
    ...productsData.bestSellers.products['OILS & FLUIDS'],
    ...productsData.bestSellers.products['CAR LIGHTS'],
  ]

  return (
    <PageLayout crumbs={[{ label: 'Home', href: '/' }, { label: 'New Arrivals', href: '/new-arrivals' }]}>
      <section className={styles.section}>
        <div className={styles.container}>
          <div className={styles.header}>
            <h1 className={styles.title}>NEW ARRIVALS</h1>
            <p className={styles.count}>{allProducts.length} products</p>
          </div>

          {/* Toolbar */}
          <div className={styles.toolbar}>
            <div className={styles.sortWrap}>
              <label className={styles.sortLabel}>Sort By:</label>
              <select className={styles.sortSelect} defaultValue="newest">
                <option value="newest">Newest First</option>
                <option value="price-asc">Price: Low to High</option>
                <option value="price-desc">Price: High to Low</option>
                <option value="rating">Best Rating</option>
                <option value="popular">Most Popular</option>
              </select>
            </div>
            <div className={styles.viewToggle}>
              <button className={`${styles.viewBtn} ${styles.viewBtnActive}`} title="Grid view">
                <i className="fas fa-th" />
              </button>
              <button className={styles.viewBtn} title="List view">
                <i className="fas fa-list" />
              </button>
            </div>
          </div>

          {/* Products */}
          <div className={styles.grid}>
            {allProducts.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>

          {/* Pagination */}
          <div className={styles.pagination}>
            <button className={`${styles.pageBtn} ${styles.pageBtnActive}`}>1</button>
            <button className={styles.pageBtn}>2</button>
            <button className={styles.pageBtn}>3</button>
            <button className={styles.pageBtn}>
              <i className="fas fa-chevron-right" />
            </button>
          </div>
        </div>
      </section>
    </PageLayout>
  )
}
