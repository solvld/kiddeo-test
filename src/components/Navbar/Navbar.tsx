import { FC } from 'react'
import { activities } from './data'
import arrow from '../../assets/arrow.svg'
import NavTab from '../NavTab/NavTab'

import styles from './styles.module.css'
import FilterButton from '../FilterButton/FilterButton'

const Navbar: FC = () => {
  return (
    <div className={styles.container}>
      <nav className={styles.wrapper}>
        <ul className={styles.tabs_box}>
          {activities.map(activity => (
            <NavTab
              key={activity.label}
              icon={activity.icon}
              label={activity.label}
            />
          ))}
          <div className={styles.gradient}></div>
        </ul>
        <button className={styles.arrow}>
          <img src={arrow} alt=">" />
        </button>
      </nav>
      <FilterButton />
    </div>
  )
}

export default Navbar
