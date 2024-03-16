import { SelectValues, SelectOption } from '../../../types'

const OneSelectInput = ({ values }: SelectValues) => {
  return values.map((value: SelectOption) => (
    <div>
      <label htmlFor={value.name}>{value.name}</label>
      <input
        type="radio"
        name="one_select"
        id={value.name}
        value={value.state}
      />
    </div>
  ))
}

export default OneSelectInput
