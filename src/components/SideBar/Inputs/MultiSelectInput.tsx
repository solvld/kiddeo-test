import React from 'react'
import { SelectValues, SelectOption } from '../../../types'

const MultiSelectInput = ({ values }: SelectValues) => {
  return values.map((value: SelectOption) => (
    <div>
      <label htmlFor={value.name}>{value.name}</label>
      <input
        type="checkbox"
        name="one_select"
        id={value.name}
        value={value.state}
      />
    </div>
  ))
}

export default MultiSelectInput
