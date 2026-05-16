'use client'
import { useState, useEffect } from 'react'
import styles from './CountdownTimer.module.css'

function useCountdown(endDate) {
  const calculateTime = () => {
    const diff = Math.max(0, new Date(endDate) - new Date())
    return {
      days: Math.floor(diff / (1000 * 60 * 60 * 24)),
      hours: Math.floor((diff / (1000 * 60 * 60)) % 24),
      mins: Math.floor((diff / 1000 / 60) % 60),
      secs: Math.floor((diff / 1000) % 60),
    }
  }

  const [time, setTime] = useState(calculateTime())

  useEffect(() => {
    const tick = setInterval(() => {
      setTime(calculateTime())
    }, 1000)
    return () => clearInterval(tick)
  }, [endDate])

  return time
}

export default function CountdownTimer({ endDate }) {
  const { days, hours, mins, secs } = useCountdown(endDate)

  const units = [
    { value: days, label: 'DAYS' },
    { value: hours, label: 'HOURS' },
    { value: mins, label: 'MINS' },
    { value: secs, label: 'SECS' },
  ]

  return (
    <div className={styles.timer}>
      {units.map(({ value, label }) => (
        <div key={label} className={styles.unit}>
          <span className={styles.value}>{String(value).padStart(2, '0')}</span>
          <span className={styles.label}>{label}</span>
        </div>
      ))}
    </div>
  )
}
