import React from 'react'
import { Filter } from '../../types'
import OneSelectInput from './Inputs/OneSelectInput'
import Range from './Inputs/RangeInput'
import MultiSelectInput from './Inputs/MultiSelectInput'

const InputFilters = ({ type, values }: Filter) => {

  switch (type) {
    case 'one_select':
      return <OneSelectInput values={values} />
    case 'multi_select':
      return <MultiSelectInput values={values} />
    case 'range':
      return <Range values={values} />
    default:
      return null
  }
}

export default InputFilters
