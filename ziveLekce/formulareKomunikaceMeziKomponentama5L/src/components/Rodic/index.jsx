const c = console.log.bind(document)

import "./style.scss"

import Potomek from "../Potomek"
import { useState } from "react"

const Rodic = () => {


    const [jmeno, setJmeno] = useState("Alena")
    const [vek, setVek] = useState(7)

    const zvysitVek = (kolik) => {
        setVek(vek + kolik)
    }

    return (
        <div className="rodic">
            <h2>Rodič</h2>
            <p>Moje {jmeno} má {vek} let</p>
            <Potomek jmeno={jmeno} vek={vek} zmenaVeku={zvysitVek}/>
        </div>
    )
}

export default Rodic