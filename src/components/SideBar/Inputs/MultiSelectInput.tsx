import React from 'react'
import { SelectValues, SelectOption } from '../../../types'
import styles from './styles.module.css'

const MultiSelectInput = ({ values }: SelectValues) => {
  return (
    <div className={styles.container}>
      {values.map((value: SelectOption) => (
        <div className={styles.selectWrapper}>
          <label htmlFor={value.name}>{value.name}</label>
          <input
            type="checkbox"
            name="one_select"
            id={value.name}
            value={value.state}
          />
        </div>
      ))}
    </div>
  )
}

export default MultiSelectInput
