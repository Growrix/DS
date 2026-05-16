import TopBar from '@/components/layout/TopBar'
import Header from '@/components/layout/Header'
import Footer from '@/components/layout/Footer'
import styles from './page.module.css'

import siteData from '@/data/site.json'
import navigation from '@/data/navigation.json'
import team from '@/data/team.json'

export const metadata = {
  title: 'About Us - AutoStore',
  description: 'Learn about AutoStore, the best automotive parts shop with over 120,000 products.',
}

export default function AboutPage() {
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
            <span className={styles.current}>About Us</span>
          </div>
        </div>

        {/* Hero Image */}
        <div className={styles.heroImage}>
          <img
            src="https://images.unsplash.com/photo-1619642751034-765dfdf7c58e?w=1200&q=80"
            alt="Auto mechanic working"
          />
        </div>

        {/* About Content */}
        <section className={styles.aboutSection}>
          <div className={styles.container}>
            <h1 className={styles.aboutTitle}>ABOUT US</h1>
            <div className={styles.aboutText}>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
                incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud
                exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure
                dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
                Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt
                mollit anim id est laborum.
              </p>
              <p>
                Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque
                laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi
                architecto beatae vitae dicta sunt explicabo Nemo enim ipsam voluptatem quia voluptas
                sit aspernatur aut odit aut fugit.
              </p>
            </div>
          </div>
        </section>

        <hr className={styles.divider} />

        {/* Team Section */}
        <section className={styles.teamSection}>
          <div className={styles.container}>
            <h2 className={styles.sectionTitle}>OUR TEAM WORK</h2>
            <div className={styles.teamGrid}>
              {team.map((member) => (
                <div key={member.id} className={styles.teamCard}>
                  <div className={styles.memberImage}>
                    <img src={member.image} alt={member.name} />
                    <div className={styles.memberOverlay}>
                      <div className={styles.memberSocial}>
                        <a href="#"><i className="fab fa-facebook-f" /></a>
                        <a href="#"><i className="fab fa-twitter" /></a>
                        <a href="#"><i className="fab fa-linkedin-in" /></a>
                      </div>
                    </div>
                  </div>
                  <h3 className={styles.memberName}>{member.name}</h3>
                  <p className={styles.memberRole}>{member.role}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Shop Location */}
        <section className={styles.locationSection}>
          <div className={styles.container}>
            <h2 className={styles.sectionTitle}>SHOP LOCATION</h2>
            <div className={styles.mapWrap}>
              <iframe
                title="Shop Location"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3151.8354345314907!2d144.9537363153192!3d-37.81627897975143!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6ad65d4c2b349649%3A0xb6899234e561db11!2sEnvato!5e0!3m2!1sen!2s!4v1234567890"
                width="100%"
                height="400"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
          </div>
        </section>
      </main>

      <Footer siteData={siteData} />
    </>
  )
}
