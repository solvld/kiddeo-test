import { useEffect } from 'react'
import { useSelector } from 'react-redux'

const useShowFilters = () => {
  const price = useSelector(state => state.filters.price)
  const oneSelect = useSelector(state => state.filters.oneSelect)
  const multiSelect = useSelector(state => state.filters.multiSelect)
  const {min, max} = useSelector(state => state.filters.range)
  const fullStore = useSelector(state => state.filters)

  const showMessage = `Цена от ${price}$ \nВместимость: ${oneSelect} \nПлощадь от ${min} кв.м до ${max} кв.м \nДополнительные параметры: \n${multiSelect.join('\n')} `

  // useEffect(() => {
  //   console.log(fullStore)
  // }, [fullStore])

  return showMessage
}

export default useShowFilters
