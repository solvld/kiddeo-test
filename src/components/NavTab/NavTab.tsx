import { useState } from 'react'
import { Activity } from '../../types'

import styles from './styles.module.css'

const NavTab = ({ icon, label }: Activity) => {
  const [isActive, setIsActive] = useState(false)
  const handleClick = () => {
    setIsActive(prev => !prev)
  }
  return (
    <li
      className={`${styles.tab} ${isActive ? styles.active : null}`}
      onClick={handleClick}
    >
      <img src={icon} />
      <span>{label}</span>
    </li>
  )
}

export default NavTab
