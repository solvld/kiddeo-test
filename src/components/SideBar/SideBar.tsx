import { FormEventHandler, useContext, useState } from 'react'
import { Filter, SideBarFilters } from '../../types'
import FilterInputs from './FilterInputs'
import styles from './styles.module.css'
import PriceRangeInput from './Inputs/PriceRangeInput'
import { Context } from '../../app/Context'
import useShowFilters from '../../hooks/showFilters'

const SideBar = ({ filters }: SideBarFilters) => {
  const { isActive, setIsActive } = useContext(Context)
  const message = useShowFilters()

  const handleSubmit: FormEventHandler<HTMLFormElement> = e => {
    e.preventDefault()
    setIsActive(false)
    alert(message)
    console.log(message)
  }

  return (
    <div className={`${styles.container} ${isActive ? null : styles.disabled}`}>
      <h2>Filters</h2>
      <div className={styles.exitBtn} onClick={() => setIsActive(false)}>
        <div></div>
        <div></div>
      </div>
      <form onSubmit={handleSubmit} className={styles.form}>
        <PriceRangeInput />

        {Object.values(filters).map(value => {
          return Object.entries(value).map((entry, index) => {
            const label = entry[0]
            const filterParams: Filter = entry[1]

            return (
              <div key={index}>
                <h3 htmlFor="">{label}</h3>
                <FilterInputs
                  type={filterParams['type']}
                  values={filterParams['values']}
                />
              </div>
            )
          })
        })}
        <div className={styles.footer}>
          <button>Clear all</button>
          <button type="submit">Show 256 place</button>
        </div>
      </form>
    </div>
  )
}

export default SideBar
