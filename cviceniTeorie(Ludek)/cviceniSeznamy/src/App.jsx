const c = console.log.bind(document)

import './app.scss'

import SeznamMesicu from './components/SeznamMesicu/idnex'
import OblibeneKnihy from './components/OblibeneKnihy'

//Imort pole dat pro komponentu OblibeneKnihy
import knihy from './data/Knihy'

const App = () => {

  return (
    <>
      {/* <SeznamMesicu /> */}

      <OblibeneKnihy knihy={knihy}/>
    </>
  )
}

export default App
