import Link from 'next/link'
import styles from './BlogSection.module.css'

export default function BlogSection({ blogs }) {
  return (
    <section className={styles.section}>
      <div className="container">
        <div className={styles.header}>
          <span className="section-badge">BLOGS & ARTICLES</span>
          <h2 className={styles.title}>Read Our Latest Blogs</h2>
        </div>
        <div className={styles.grid}>
          {blogs.map((blog) => (
            <article key={blog.id} className={styles.card}>
              <Link href={`/blog/${blog.slug}`} className={styles.imgWrap}>
                <img src={blog.image} alt={blog.title} />
                <div className={styles.imgOverlay} />
              </Link>
              <div className={styles.body}>
                <span className={styles.date}>{blog.date}</span>
                <Link href={`/blog/${blog.slug}`} className={styles.blogTitle}>
                  {blog.title}
                </Link>
                <p className={styles.excerpt}>{blog.excerpt}</p>
                <Link href={`/blog/${blog.slug}`} className="btn-yellow" style={{ fontSize: 13, padding: '9px 20px' }}>
                  Read More
                </Link>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
