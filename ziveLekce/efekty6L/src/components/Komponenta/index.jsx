const c = console.log.bind(document)

import { useState, useEffect } from "react"


const Komponenta = () => {

    const [pocet, setPocet] = useState(0)
    const [jinyPocet, setJinyPocet] = useState(999)

    useEffect( () => {
        c("Pozdrav při prvním spuštění.")
    }, [])

    useEffect( () => {
        c("Pozdrav.")
    })

    useEffect( () => {
        c("Změna počtu")
    }, [pocet, jinyPocet])

    return(
        <>
        <h2>Počet: {pocet}</h2>
        <button onClick={ () => setPocet(pocet + 1) }>+</button>

        <h2>Počet: {jinyPocet}</h2>
        <button onClick={ () => setJinyPocet(jinyPocet + 1) }>+</button>
        </>
    )
}

export default Komponenta