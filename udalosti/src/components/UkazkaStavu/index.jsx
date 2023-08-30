const c = console.log.bind(document)

import { useState } from "react"
import "./style.scss"

const UkazkaStavu = () => {

    const [jmeno, setJmeno] = useState("Nenámá osoba")

    const handleClick = () => {
        setJmeno("Jarda Vomáčka")
    }
    
    return (
        <>
        <h2>Ukázka stavu</h2>
        <p>{jmeno}</p>
        <button onClick={handleClick}>Tlačítko</button>
        </>
    )

}

export default UkazkaStavu