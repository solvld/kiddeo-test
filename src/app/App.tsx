import { FC } from 'react'
import categories from '../mocks/categories.json'
import Navbar from '../components/Navbar/Navbar'
import ItemsList from '../components/ItemsList/ItemsList'
import SideBar from '../components/SideBar/SideBar'
import { ContextProvider } from './Context'

const App: FC = () => {
  return (
    <ContextProvider>
      <Navbar />
      <main>
        <SideBar filters={categories[0].sidebar_filters} />
        <ItemsList />
      </main>
    </ContextProvider>
  )
}

export default App
