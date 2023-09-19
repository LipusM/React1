const c = console.log.bind(document)

import { Outlet, NavLink } from 'react-router-dom'

import './app.scss'
import Menu from './components/Menu'

const App = () => {


  return (
    <>
      <Menu />
        <Outlet />
    </>
  )
}

export default App
