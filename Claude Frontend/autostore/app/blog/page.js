import Link from 'next/link'
import PageLayout from '@/components/layout/PageLayout'
import styles from './page.module.css'

import blogs from '@/data/blogs.json'

export const metadata = {
  title: 'Blog - AutoStore',
  description: 'Latest news, tips, and updates from AutoStore.',
}

export default function BlogPage() {
  return (
    <PageLayout crumbs={[{ label: 'Home', href: '/' }, { label: 'Blog', href: '/blog' }]}>
      <section className={styles.section}>
        <div className={styles.container}>
          <h1 className={styles.title}>LATEST BLOGS</h1>
          <div className={styles.grid}>
            {blogs.map((blog) => (
              <article key={blog.id} className={styles.card}>
                <Link href={`/blog/${blog.slug}`} className={styles.imageWrap}>
                  <img src={blog.image} alt={blog.title} className={styles.image} />
                  <span className={styles.category}>{blog.category}</span>
                </Link>
                <div className={styles.content}>
                  <span className={styles.date}><i className="fas fa-calendar-alt" /> {blog.date}</span>
                  <Link href={`/blog/${blog.slug}`} className={styles.blogTitle}>
                    {blog.title}
                  </Link>
                  <p className={styles.excerpt}>{blog.excerpt}</p>
                  <Link href={`/blog/${blog.slug}`} className={styles.readMore}>
                    READ MORE <i className="fas fa-arrow-right" />
                  </Link>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>
    </PageLayout>
  )
}
