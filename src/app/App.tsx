import { FC } from 'react'
import categories from '../mocks/categories.json'
import Navbar from '../components/Navbar/Navbar'
import ItemsList from '../components/ItemsList/ItemsList'
import SideBar from '../components/SideBar/SideBar'

const App: FC = () => {
  return (
    <>
        {/* <Navbar />
      <main>
        <ItemsList />
      </main> */}
      <SideBar filters={categories[0].sidebar_filters} />
    </>
  )
}

export default App
