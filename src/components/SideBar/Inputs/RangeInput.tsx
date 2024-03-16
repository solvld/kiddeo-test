import { RangeValues } from '../../../types'
import styles from './styles.module.css'

const Range = ({ values }: RangeValues) => {
  const minValue = values[0]['min']
  const maxValue = values[0]['max']
  const step = values[0]['step']

  return (
    <div className={styles.container}>
      <div className={styles.rangeBox}>
        <input
          type="number"
          name=""
          id=""
          min={minValue}
          max={maxValue}
          placeholder={`${minValue} кв.м`}
          step={step}
          className={styles.rangeInput}
        />

        <input
          type="number"
          name=""
          id=""
          min={minValue}
          max={maxValue}
          placeholder={`${maxValue} кв.м`}
          step={step}
          className={styles.rangeInput}
        />
      </div>
    </div>
  )
}

export default Range
