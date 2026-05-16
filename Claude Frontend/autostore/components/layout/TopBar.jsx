'use client'
import { useState } from 'react'
import Link from 'next/link'
import styles from './TopBar.module.css'

export default function TopBar({ hotline }) {
  const [language, setLanguage] = useState('ENGLISH')
  const [currency, setCurrency] = useState('USD')

  return (
    <div className={styles.topbar}>
      <div className={styles.container}>
        <div className={styles.left}>
          <i className="fas fa-phone-alt" />
          <span>Hotline: <strong>{hotline}</strong></span>
        </div>
        <div className={styles.right}>
          <Link href="/login" className={styles.authLink}>
            <i className="fas fa-lock" />
            Login / Register
          </Link>
          <div className={styles.divider} />
          <div className={styles.dropdown}>
            <button className={styles.dropBtn}>
              <img
                src="https://flagcdn.com/w20/gb.png"
                alt="English"
                width={20}
                height={13}
                style={{ display: 'inline', borderRadius: '1px' }}
              />
              {' '}{language} <i className="fas fa-chevron-down" style={{ fontSize: 9, marginLeft: 3 }} />
            </button>
            <div className={styles.dropMenu}>
              <button onClick={() => setLanguage('ENGLISH')}>🇬🇧 English</button>
              <button onClick={() => setLanguage('FRENCH')}>🇫🇷 French</button>
              <button onClick={() => setLanguage('GERMAN')}>🇩🇪 German</button>
            </div>
          </div>
          <div className={styles.divider} />
          <div className={styles.dropdown}>
            <button className={styles.dropBtn}>
              {currency} <i className="fas fa-chevron-down" style={{ fontSize: 9, marginLeft: 3 }} />
            </button>
            <div className={styles.dropMenu}>
              <button onClick={() => setCurrency('USD')}>USD - US Dollar</button>
              <button onClick={() => setCurrency('EUR')}>EUR - Euro</button>
              <button onClick={() => setCurrency('GBP')}>GBP - British Pound</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
