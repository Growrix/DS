'use client'
import Link from 'next/link'
import PageLayout from '@/components/layout/PageLayout'
import styles from './page.module.css'

// Static cart demo — wire up CartContext for real persistence
const demoItems = [
  {
    id: 1,
    name: '20X9 WHEELS FIT GMC CHEVY',
    price: 100,
    originalPrice: 135,
    image: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=200&q=80',
    quantity: 2,
  },
  {
    id: 3,
    name: 'BF GOODRICH ALL-TERRAIN K0',
    price: 60,
    originalPrice: 75,
    image: 'https://images.unsplash.com/photo-1571068316344-75bc76f77890?w=200&q=80',
    quantity: 1,
  },
]

export default function CartPage() {
  const subtotal = demoItems.reduce((s, i) => s + i.price * i.quantity, 0)
  const shipping = subtotal > 99 ? 0 : 9.99
  const total = subtotal + shipping

  return (
    <PageLayout crumbs={[{ label: 'Home', href: '/' }, { label: 'My Cart', href: '/cart' }]}>
      <section className={styles.section}>
        <div className={styles.container}>
          <h1 className={styles.title}>MY CART</h1>

          {demoItems.length === 0 ? (
            <div className={styles.empty}>
              <i className="fas fa-shopping-basket" />
              <p>Your cart is empty.</p>
              <Link href="/" className={styles.shopBtn}>CONTINUE SHOPPING</Link>
            </div>
          ) : (
            <div className={styles.layout}>
              {/* Cart Table */}
              <div className={styles.tableWrap}>
                <table className={styles.table}>
                  <thead>
                    <tr>
                      <th className={styles.thProduct}>Product</th>
                      <th className={styles.thPrice}>Unit Price</th>
                      <th className={styles.thQty}>Quantity</th>
                      <th className={styles.thTotal}>Subtotal</th>
                      <th className={styles.thAction}></th>
                    </tr>
                  </thead>
                  <tbody>
                    {demoItems.map((item) => (
                      <tr key={item.id} className={styles.row}>
                        <td className={styles.tdProduct}>
                          <div className={styles.productCell}>
                            <img src={item.image} alt={item.name} className={styles.productImg} />
                            <div>
                              <Link href={`/product/${item.id}`} className={styles.productName}>
                                {item.name}
                              </Link>
                              {item.originalPrice && (
                                <span className={styles.productOriginal}>
                                  Was: <s>${item.originalPrice.toFixed(2)}</s>
                                </span>
                              )}
                            </div>
                          </div>
                        </td>
                        <td className={styles.tdPrice}>
                          <span className={styles.price}>${item.price.toFixed(2)}</span>
                        </td>
                        <td className={styles.tdQty}>
                          <div className={styles.qtyControl}>
                            <button className={styles.qtyBtn}>−</button>
                            <input
                              type="number"
                              value={item.quantity}
                              min="1"
                              readOnly
                              className={styles.qtyInput}
                            />
                            <button className={styles.qtyBtn}>+</button>
                          </div>
                        </td>
                        <td className={styles.tdTotal}>
                          <span className={styles.price}>${(item.price * item.quantity).toFixed(2)}</span>
                        </td>
                        <td className={styles.tdAction}>
                          <button className={styles.removeBtn} title="Remove item">
                            <i className="fas fa-times" />
                          </button>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>

                <div className={styles.tableActions}>
                  <Link href="/" className={styles.continueBtn}>
                    <i className="fas fa-arrow-left" /> CONTINUE SHOPPING
                  </Link>
                  <button className={styles.updateBtn}>
                    <i className="fas fa-sync-alt" /> UPDATE CART
                  </button>
                </div>

                {/* Coupon */}
                <div className={styles.coupon}>
                  <h3 className={styles.couponTitle}>COUPON CODE</h3>
                  <div className={styles.couponRow}>
                    <input
                      type="text"
                      placeholder="Enter coupon code"
                      className={styles.couponInput}
                    />
                    <button className={styles.couponBtn}>APPLY COUPON</button>
                  </div>
                </div>
              </div>

              {/* Summary */}
              <div className={styles.summary}>
                <h3 className={styles.summaryTitle}>ORDER SUMMARY</h3>
                <div className={styles.summaryRow}>
                  <span>Subtotal</span>
                  <span>${subtotal.toFixed(2)}</span>
                </div>
                <div className={styles.summaryRow}>
                  <span>Shipping</span>
                  <span>{shipping === 0 ? <span className={styles.free}>FREE</span> : `$${shipping.toFixed(2)}`}</span>
                </div>
                <div className={styles.summaryRow}>
                  <span>Tax</span>
                  <span>$0.00</span>
                </div>
                <div className={`${styles.summaryRow} ${styles.summaryTotal}`}>
                  <span>Total</span>
                  <span>${total.toFixed(2)}</span>
                </div>
                {shipping === 0 && (
                  <p className={styles.freeShipNote}>
                    <i className="fas fa-truck" /> Free shipping applied!
                  </p>
                )}
                <Link href="/checkout" className={styles.checkoutBtn}>
                  PROCEED TO CHECKOUT <i className="fas fa-arrow-right" />
                </Link>
                <div className={styles.paymentIcons}>
                  <span className={styles.payLabel}>We accept:</span>
                  <div className={styles.payLogos}>
                    <i className="fab fa-cc-visa fa-2x" />
                    <i className="fab fa-cc-mastercard fa-2x" />
                    <i className="fab fa-cc-paypal fa-2x" />
                    <i className="fab fa-cc-amex fa-2x" />
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>
      </section>
    </PageLayout>
  )
}
