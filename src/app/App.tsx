import { FC } from 'react'
import Navbar from '../components/Navbar/Navbar'
import ItemsList from '../components/ItemsList/ItemsList'

const App: FC = () => {
  return (
    <>
        <Navbar />
      <main>
        <ItemsList />
      </main>
    </>
  )
}

export default App
