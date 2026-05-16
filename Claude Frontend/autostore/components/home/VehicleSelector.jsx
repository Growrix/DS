'use client'
import { useState } from 'react'
import styles from './VehicleSelector.module.css'

export default function VehicleSelector({ data }) {
  const [make, setMake] = useState('')
  const [model, setModel] = useState('')
  const [year, setYear] = useState('')

  const models = data.models[make] || ['Select Model']

  const handleSearch = (e) => {
    e.preventDefault()
    if (make && model && year) {
      window.location.href = `/search?make=${make}&model=${model}&year=${year}`
    }
  }

  const handleMakeChange = (e) => {
    setMake(e.target.value)
    setModel('')
  }

  return (
    <section className={styles.section}>
      <div className={styles.container}>
        <div className={styles.inner}>
          <div className={styles.textSide}>
            <h2 className={styles.title}>{data.title}</h2>
            <p className={styles.subtitle}>{data.subtitle}</p>
          </div>
          <form onSubmit={handleSearch} className={styles.form}>
            <div className={styles.selects}>
              <div className={styles.selectWrap}>
                <select
                  value={make}
                  onChange={handleMakeChange}
                  className={styles.select}
                >
                  {data.makes.map((m) => (
                    <option key={m} value={m === 'Select Make' ? '' : m}>
                      {m}
                    </option>
                  ))}
                </select>
                <i className="fas fa-chevron-down" />
              </div>

              <div className={styles.selectWrap}>
                <select
                  value={model}
                  onChange={(e) => setModel(e.target.value)}
                  className={styles.select}
                  disabled={!make}
                >
                  {models.map((m) => (
                    <option key={m} value={m === 'Select Model' ? '' : m}>
                      {m}
                    </option>
                  ))}
                </select>
                <i className="fas fa-chevron-down" />
              </div>

              <div className={styles.selectWrap}>
                <select
                  value={year}
                  onChange={(e) => setYear(e.target.value)}
                  className={styles.select}
                  disabled={!model}
                >
                  {data.years.map((y) => (
                    <option key={y} value={y === 'Select Year' ? '' : y}>
                      {y}
                    </option>
                  ))}
                </select>
                <i className="fas fa-chevron-down" />
              </div>
            </div>

            <button type="submit" className={styles.searchBtn}>
              <i className="fas fa-search" />
              SEARCH
            </button>
          </form>
        </div>
      </div>
    </section>
  )
}
