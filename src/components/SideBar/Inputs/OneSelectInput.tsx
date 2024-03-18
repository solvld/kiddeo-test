import { SelectValues, SelectOption } from '../../../types'
import styles from './styles.module.css'
import { useDispatch } from 'react-redux'
import { setOneSelect } from '../../../features/filtersSlice'


const OneSelectInput = ({ values }: SelectValues) => {
  const dispatch = useDispatch()

  const handleChange = e => {
    const value = e.target.value
    dispatch(setOneSelect(value))
  }

  return (
    <div className={styles.container}>
      {values.map((value: SelectOption, index: string) => (
        <div className={styles.selectWrapper} key={index}>
          <label htmlFor={value.name}>{value.name}</label>
          <input
            type="radio"
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

export default OneSelectInput
