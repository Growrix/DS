import Link from 'next/link'
import styles from './CategoryIcons.module.css'

const CategorySVG = ({ icon }) => {
  const icons = {
    wheels: (
      <svg viewBox="0 0 50 50" fill="none" xmlns="http://www.w3.org/2000/svg">
        <circle cx="25" cy="25" r="22" stroke="currentColor" strokeWidth="2.5"/>
        <circle cx="25" cy="25" r="8" stroke="currentColor" strokeWidth="2"/>
        <line x1="25" y1="3" x2="25" y2="17" stroke="currentColor" strokeWidth="2"/>
        <line x1="25" y1="33" x2="25" y2="47" stroke="currentColor" strokeWidth="2"/>
        <line x1="3" y1="25" x2="17" y2="25" stroke="currentColor" strokeWidth="2"/>
        <line x1="33" y1="25" x2="47" y2="25" stroke="currentColor" strokeWidth="2"/>
        <line x1="8.4" y1="8.4" x2="18.1" y2="18.1" stroke="currentColor" strokeWidth="2"/>
        <line x1="31.9" y1="31.9" x2="41.6" y2="41.6" stroke="currentColor" strokeWidth="2"/>
        <line x1="41.6" y1="8.4" x2="31.9" y2="18.1" stroke="currentColor" strokeWidth="2"/>
        <line x1="18.1" y1="31.9" x2="8.4" y2="41.6" stroke="currentColor" strokeWidth="2"/>
      </svg>
    ),
    smart: (
      <svg viewBox="0 0 50 50" fill="none" xmlns="http://www.w3.org/2000/svg">
        <rect x="8" y="12" width="34" height="26" rx="3" stroke="currentColor" strokeWidth="2.5"/>
        <line x1="8" y1="34" x2="42" y2="34" stroke="currentColor" strokeWidth="2"/>
        <circle cx="25" cy="42" r="2" fill="currentColor"/>
        <rect x="18" y="18" width="14" height="10" rx="1" stroke="currentColor" strokeWidth="1.5"/>
      </svg>
    ),
    oils: (
      <svg viewBox="0 0 50 50" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M16 8h18l4 8v26H12V16z" stroke="currentColor" strokeWidth="2.5" strokeLinejoin="round"/>
        <path d="M34 8l8 8" stroke="currentColor" strokeWidth="2"/>
        <path d="M20 24c0-3 4-6 5-9 1 3 5 6 5 9a5 5 0 01-10 0z" stroke="currentColor" strokeWidth="1.8"/>
        <line x1="12" y1="16" x2="38" y2="16" stroke="currentColor" strokeWidth="2"/>
      </svg>
    ),
    lights: (
      <svg viewBox="0 0 50 50" fill="none" xmlns="http://www.w3.org/2000/svg">
        <circle cx="25" cy="22" r="10" stroke="currentColor" strokeWidth="2.5"/>
        <line x1="25" y1="6" x2="25" y2="2" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round"/>
        <line x1="39" y1="11" x2="42" y2="8" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round"/>
        <line x1="44" y1="22" x2="48" y2="22" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round"/>
        <line x1="11" y1="11" x2="8" y2="8" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round"/>
        <line x1="6" y1="22" x2="2" y2="22" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round"/>
        <line x1="20" y1="34" x2="30" y2="34" stroke="currentColor" strokeWidth="2.5"/>
        <line x1="21" y1="39" x2="29" y2="39" stroke="currentColor" strokeWidth="2"/>
        <line x1="23" y1="43" x2="27" y2="43" stroke="currentColor" strokeWidth="2"/>
      </svg>
    ),
    parts: (
      <svg viewBox="0 0 50 50" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M10 20 L20 10 L30 20 L20 30 Z" stroke="currentColor" strokeWidth="2.5" strokeLinejoin="round"/>
        <path d="M25 25 L35 15 L45 25 L35 35 Z" stroke="currentColor" strokeWidth="2.5" strokeLinejoin="round"/>
        <circle cx="15" cy="38" r="7" stroke="currentColor" strokeWidth="2.5"/>
        <line x1="15" y1="34" x2="15" y2="42" stroke="currentColor" strokeWidth="2"/>
        <line x1="11" y1="38" x2="19" y2="38" stroke="currentColor" strokeWidth="2"/>
      </svg>
    ),
    tools: (
      <svg viewBox="0 0 50 50" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M12 38L30 20" stroke="currentColor" strokeWidth="3" strokeLinecap="round"/>
        <path d="M22 10 C22 10 16 10 14 16 C12 22 16 26 16 26 L24 18 L22 10Z" stroke="currentColor" strokeWidth="2" strokeLinejoin="round"/>
        <rect x="28" y="24" width="14" height="8" rx="1" transform="rotate(45 28 24)" stroke="currentColor" strokeWidth="2"/>
        <circle cx="38" cy="38" r="5" stroke="currentColor" strokeWidth="2"/>
        <line x1="38" y1="35" x2="38" y2="41" stroke="currentColor" strokeWidth="1.5"/>
        <line x1="35" y1="38" x2="41" y2="38" stroke="currentColor" strokeWidth="1.5"/>
      </svg>
    ),
  }
  return icons[icon] || null
}

export default function CategoryIcons({ categories }) {
  return (
    <section className={styles.section}>
      <div className={styles.container}>
        <div className={styles.grid}>
          {categories.map((cat) => (
            <Link key={cat.id} href={`/category/${cat.slug}`} className={styles.item}>
              <div className={styles.iconWrap}>
                <CategorySVG icon={cat.icon} />
              </div>
              <span className={styles.name}>{cat.name}</span>
            </Link>
          ))}
        </div>
      </div>
    </section>
  )
}
