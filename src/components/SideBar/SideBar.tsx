import { FormEventHandler } from 'react'
import { Filter, SideBarFilters } from '../../types'
import FilterInputs from './FilterInputs'

const SideBar = ({ filters }: SideBarFilters) => {
  const handleSubmit: FormEventHandler<HTMLFormElement> = e => {
    e.preventDefault()
    console.log('submit')
  }

  return (
    <div>
      <form
        onSubmit={handleSubmit}
        style={{ display: 'flex', flexDirection: 'column' }}
      >
        <div>
          <label htmlFor="priceRange">Price</label>
          <input type="range" name="" id="priceRange" />
        </div>

        {Object.values(filters).map(value => {
          return Object.entries(value).map((entry, index) => {
            const label = entry[0]
            const filterParams: Filter = entry[1]

            return (
              <div key={index}>
                <label htmlFor="">{label}</label>
                <FilterInputs
                  type={filterParams['type']}
                  values={filterParams['values']}
                />
              </div>
            )
          })
        })}
      </form>
    </div>
  )
}

export default SideBar
