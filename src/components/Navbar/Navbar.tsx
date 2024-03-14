import { FC } from 'react'
import { activities } from './data'
import arrow from '../../assets/arrow.svg'
import NavTab from '../NavTab/NavTab'

import styles from './styles.module.css'

const Navbar: FC = () => {
  return (
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
  )
}

export default Navbar
