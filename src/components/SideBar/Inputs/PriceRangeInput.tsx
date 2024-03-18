import React, { useState } from 'react'
import styles from './styles.module.css'

const PriceRangeInput = () => {
  const [priceValue, setPriceValue] = useState(0)

  const handleMouseMove = e => {
    setPriceValue(e.target.value)
  }

  return (
    <div className={styles.container}>
      <h3>Price range</h3>
      <div className={styles.priceRange}>
        <div className={styles.sliderValue}>
          <span>From ${priceValue}</span>
        </div>
        <div className={styles.field}>
          <div className={styles.valueLeft}>$ 0</div>
          <input
            type="range"
            min="0"
            max="750"
            step="5"
            style={{
              background: `linear-gradient(90deg, #426AE5 ${(100 / 750) * priceValue}%, #ddd ${(100 / 750) * priceValue}%)`,
            }}
            onMouseMove={handleMouseMove}
          />
          <div className={styles.valueRight}>$ 750</div>
        </div>
      </div>
    </div>
  )
}

export default PriceRangeInput
