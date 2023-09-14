const c = console.log.bind(document)

import { Outlet } from 'react-router-dom'
import './app.scss'
import NavBar from './components/NavBar'

const App = () => {
  

  return (
    <>
      <NavBar />
      <Outlet />
    </>
  )
}

export default App
