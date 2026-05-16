import Link from 'next/link'
import styles from './LatestBlogs.module.css'

export default function LatestBlogs({ blogs }) {
  return (
    <section className={styles.section}>
      <div className={styles.container}>
        <div className={styles.header}>
          <p className={styles.headerSub}>OUR RECENT POSTS</p>
          <div className={styles.titleWrap}>
            <span className={styles.titleDot}>•</span>
            <h2 className={styles.title}>LATEST BLOGS</h2>
            <span className={styles.titleDot}>•</span>
          </div>
        </div>

        <div className={styles.grid}>
          {blogs.map((blog) => (
            <article key={blog.id} className={styles.card}>
              <Link href={`/blog/${blog.slug}`} className={styles.imageWrap}>
                <img src={blog.image} alt={blog.title} className={styles.image} />
                <div className={styles.imageOverlay} />
                <span className={styles.category}>{blog.category}</span>
              </Link>
              <div className={styles.content}>
                <span className={styles.date}>{blog.date}</span>
                <Link href={`/blog/${blog.slug}`} className={styles.blogTitle}>
                  {blog.title}
                </Link>
                <p className={styles.excerpt}>{blog.excerpt}</p>
                <Link href={`/blog/${blog.slug}`} className={styles.readMore}>
                  READ MORE
                </Link>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
