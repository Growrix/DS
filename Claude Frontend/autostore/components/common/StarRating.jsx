import styles from './StarRating.module.css'

export default function StarRating({ rating, max = 5, size = 'sm' }) {
  return (
    <div className={`${styles.stars} ${styles[size]}`}>
      {Array.from({ length: max }).map((_, i) => (
        <i
          key={i}
          className={`fas fa-star ${i < rating ? styles.filled : styles.empty}`}
        />
      ))}
    </div>
  )
}
