import { FC } from 'react'
import Navbar from '../components/Navbar/Navbar'
import ItemsList from '../components/ItemsList/ItemsList'

const App: FC = () => {
  return (
    <>
      <header>
        <div className="container">
          <Navbar />
        </div>
        <hr />
      </header>
      <main>
        <div className="container">
          <ItemsList />
        </div>
      </main>
    </>
  )
}

export default App
