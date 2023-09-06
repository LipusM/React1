const c = console.log.bind(document)

import "./style.scss"
import palettes from "./data"

import mimosaRetreat from "./img/mimosa-retreat.jpg"
import nightSky from "./img/night-sky.jpg"
import oceanWaves from "./img/ocean-waves.jpg"
import santorini from "./img/santorini.jpg"

const BarevnePalety = ({name, attributionName, attributionURL, img, color1, color2, color3, color4, color5, direction, description, id}) => {

    return (
        <>
    <div className="container">
      <header>
        <h1>Barevné palety</h1>
      </header>
      <main>
        <div key={id} className="palette">
          <div className="palette-scheme palette-scheme--vertical">
            <img className="scheme-image" src={img} alt={name} />
            <div className="scheme-colors">
              <div className="scheme-color" style={{ backgroundColor: color1 }} >{color1}</div>
              <div className="scheme-color" style={{ backgroundColor: color2 }} >{color2}</div>
              <div className="scheme-color" style={{ backgroundColor: color3 }} >{color3}</div>
              <div className="scheme-color" style={{ backgroundColor: color4 }} >{color4}</div>
              <div className="scheme-color" style={{ backgroundColor: color5 }} >{color5}</div>
            </div>
          </div>
          <div className="palette-info">
            <h2>{name}</h2>
            <p>{description}</p>

            <p>Photo by <a href={attributionURL} target="_blank">{attributionName}</a>.</p>
          </div>
        </div>
        
      </main>
      <footer>
        <p>Czechitas, Digitální akademie: Web</p>
      </footer>
    </div>
        </>
    )

}

export default BarevnePalety