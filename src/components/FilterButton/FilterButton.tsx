import { FC } from 'react'
import styles from './styles.module.css'
import filter from '../../assets/filter.svg'

const FilterButton: FC = () => {
  return (
    <button className={styles.button}>
      <img src={filter} alt="" />
      <span className={styles.label}>Filters</span>
      <span className={styles.badge}>2</span>
    </button>
  )
}

export default FilterButton
