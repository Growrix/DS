import TopBar from '@/components/layout/TopBar'
import Header from '@/components/layout/Header'
import Footer from '@/components/layout/Footer'
import BlogSection from '@/components/sections/BlogSection'
import styles from './page.module.css'

import siteData from '@/data/site.json'
import blogs from '@/data/blogs.json'

export const metadata = { title: 'Blog - Mezan', description: 'Latest news and tips from Mezan.' }

export default function BlogPage() {
  return (
    <>
      <TopBar social={siteData.social} addressShort={siteData.company.addressShort} emailHeader={siteData.company.emailHeader} />
      <Header navigation={siteData.navigation} />
      <main>
        <div className={styles.hero}>
          <img src="https://images.unsplash.com/photo-1567538096630-e0c55bd6374c?w=1400&q=80" alt="Blog" className={styles.heroBg} />
          <div className={styles.heroOverlay} />
          <div className="container">
            <div className={styles.heroContent}>
              <h1 className={styles.heroTitle}>Blog & Articles</h1>
              <nav className={styles.breadcrumb}>
                <a href="/">Home</a><span>/</span>
                <span className={styles.breadcrumbActive}>Blog</span>
              </nav>
            </div>
          </div>
        </div>
        <BlogSection blogs={blogs} />
      </main>
      <Footer siteData={siteData} />
    </>
  )
}
