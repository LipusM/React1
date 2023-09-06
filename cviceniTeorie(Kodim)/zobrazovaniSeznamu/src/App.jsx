
import './app.scss'

import OpakovaniMap from './components/OpakovaniMap'
import SeznamyJSX from './components/SeznamyJSX'
import SlozitejsiKomponenty from './components/SlozitejsiKomponenty'
import CviceniSeznamy from './components/CviceniSeznamy'
import Episode from './components/Episode'

import BarevnePalety from './components/barevnePalety'
import palettes from './components/barevnePalety/data'
import mimosaRetreat from "../src/components/BarevnePalety/img/mimosa-retreat.jpg"
import nightSky from "../src/components/BarevnePalety/img/night-sky.jpg"
import oceanWaves from "../src/components/BarevnePalety/img/ocean-waves.jpg"
import santorini from "../src/components/BarevnePalety/img/santorini.jpg"



const App = () => {

  return(
    <>
      {palettes.map(palette => < BarevnePalety name={palette.name} attributionName={palette.attribution.name} 
      attributionURL={palette.attribution.url} id={palette.colors[0]} img={palette.image} 
      color1={palette.colors[0]}
      color2={palette.colors[1]}
      color3={palette.colors[2]}
      color4={palette.colors[3]}
      color5={palette.colors[4]}
      /> )}
    </>
  )

}


export default App
