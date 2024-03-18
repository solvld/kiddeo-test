import { RangeValues } from '../../../types'
import styles from './styles.module.css'
import { useDispatch, useSelector } from 'react-redux'
import { setRange } from '../../../features/filtersSlice'
import { useEffect, useState } from 'react'

const Range = ({ values }: RangeValues) => {
  const minValue = values[0]['min']
  const maxValue = values[0]['max']
  const step = values[0]['step']

  const dispatch = useDispatch()
  const [rangeValues, setRangeValues] = useState({
    min: minValue,
    max: maxValue,
  })

  useEffect(() => {
    dispatch(setRange(rangeValues))
  }, [rangeValues, dispatch])

  const handleChange = e => {
    const { name, value } = e.target
    setRangeValues(prev => ({ ...prev, [name]: value }))
  }

  return (
    <div className={styles.container}>
      <div className={styles.rangeBox}>
        <input
          type="number"
          name="min"
          id=""
          min={minValue}
          max={maxValue}
          placeholder={`${minValue} кв.м`}
          step={step}
          className={styles.rangeInput}
          onChange={handleChange}
        />

        <input
          type="number"
          name="max"
          id=""
          min={minValue}
          max={maxValue}
          placeholder={`${maxValue} кв.м`}
          step={step}
          className={styles.rangeInput}
          onChange={handleChange}
        />
      </div>
    </div>
  )
}

export default Range
