import { FC, useContext } from 'react'
import styles from './styles.module.css'
import filter from '../../assets/img/filter.svg'
import { Context } from '../../app/Context'

const FilterButton: FC = () => {
  const { setIsActive } = useContext(Context)

  return (
    <button
      className={styles.button}
      onClick={() => setIsActive(prev => !prev)}
    >
      <img src={filter} alt="" />
      <span className={styles.label}>Filters</span>
      <span className={styles.badge}>2</span>
    </button>
  )
}

export default FilterButton
