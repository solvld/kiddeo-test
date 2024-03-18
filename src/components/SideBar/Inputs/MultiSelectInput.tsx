import React, { useState } from 'react'
import { SelectValues, SelectOption } from '../../../types'
import styles from './styles.module.css'
import { useDispatch } from 'react-redux'
import { setMultiSelect } from '../../../features/filtersSlice'

const MultiSelectInput = ({ values }: SelectValues) => {
  const dispatch = useDispatch()

  const handleChange = e => {
    const value = e.target.value
    const isChecked = e.target.checked

    dispatch(setMultiSelect({value, isChecked}))
  }
  return (
    <div className={styles.container}>
      {values.map((value: SelectOption) => (
        <div className={styles.selectWrapper}>
          <label htmlFor={value.name}>{value.name}</label>
          <input
            type="checkbox"
            name="one_select"
            id={value.name}
            value={value.name}
            onChange={handleChange}
          />
        </div>
      ))}
    </div>
  )
}

export default MultiSelectInput
