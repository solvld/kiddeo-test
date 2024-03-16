import React from 'react'
import styles from './styles.module.css'

const PriceRangeInput = () => {
  return (
    <div className={styles.container}>
      <h3>Price range</h3>
      <div className={styles.priceRange}>
        <div className={styles.sliderValue}>
          <span>From $100</span>
        </div>
        <div className={styles.field}>
          <div className={styles.valueLeft}>0</div>
          <input type="range" min="0" max="750" step="5" name="" id="" />
          <div className={styles.valueRight}>750</div>
        </div>
      </div>
    </div>
  )
}

export default PriceRangeInput