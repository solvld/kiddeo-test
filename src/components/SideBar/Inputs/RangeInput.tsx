import { RangeValues } from '../../../types'

const Range = ({ values }: RangeValues) => {
  const minValue = values[0]['min']
  const maxValue = values[0]['max']
  const step = values[0]['step']

  return (
    <div>
      <input
        type="number"
        name=""
        id=""
        min={minValue}
        max={maxValue}
        placeholder={`${minValue} кв.м`}
        step={step}
      />

      <input
        type="number"
        name=""
        id=""
        min={minValue}
        max={maxValue}
        placeholder={`${maxValue} кв.м`}
        step={step}
      />
    </div>
  )
}

export default Range
