const c = console.log.bind(document)

import './app.scss'

import logo from "./assets/react.svg"

import Udalost from './components/Udalost'
import UkazkaStavu from './components/UkazkaStavu'

const App = () => {

  return (
    <>
      <h1>Události</h1>
      {/* <img src={logo} alt='React logo'/> */}
      {/* <Udalost /> */}

      <UkazkaStavu />
    </>
  )
}

export default App
