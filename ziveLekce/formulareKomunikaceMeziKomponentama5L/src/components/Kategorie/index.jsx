const c = console.log.bind(document)

import { useState } from "react"
import "./style.scss"

import Zbozi from "../Zbozi"

const seznamZbozi = [
    {id: 1, nazev: "Pračka", cena: 111},
    {id: 2, nazev: "PC", cena: 1011}
]

const Kategorie = () => {

    const [kosik, setKosik] = useState([])

    const pridatDoKosiku = (nazev) => {
        setKosik([...kosik, nazev])
    }

    return (
        <div className="kategorie">

            <ul>
                {kosik.map(polozka => <li key={polozka}>{polozka}, počet: {pocet}</li>)}
            </ul>

            {
                seznamZbozi.map(zbozi => <Zbozi key={zbozi.id} 
                koupit={pridatDoKosiku} 
                nazev={zbozi.nazev} cena={zbozi.cena}/>)
            }
        </div>
    )
}

export default Kategorie