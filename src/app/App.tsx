import { FC } from 'react'
import Navbar from '../components/Navbar/Navbar'

const App: FC = () => {
  return (
    <>
      <header>
        <div className="container">
          <Navbar />
        </div>
        <hr />
      </header>
    </>
  )
}

export default App
