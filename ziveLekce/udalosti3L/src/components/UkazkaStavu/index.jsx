const c = console.log.bind(document)

import "./style.scss"

import { useState } from "react"

const UkazkaStavu = () => {

    const [name, setName] = useState("Neznámá osoba.")

    const handleClick = () => {
        setName("Jarda Jágr is 68!")
    }

    return (
        <>
            <h2>Ukázka stavu</h2>
            <p>{name}</p>
            <button onClick={handleClick}>Tlačítko</button>
        </>
    )

}

export default UkazkaStavu