const c = console.log.bind(document)

import "./style.scss"
import { useState } from "react"

const Pocitadlo = () => {

    const [pocet, setPocet] = useState(0)
    const handleClick = () => {
        setPocet(pocet + 1)
    }

    return (
        <>
        <h2>Počítadlo</h2>
        <p>{pocet}</p>
        <button onClick={handleClick}>Zvětšit</button>
        </>
    )

}

export default Pocitadlo