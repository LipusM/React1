const c = console.log.bind(document)

import "./style.scss"
import { useState } from "react"

const Podminka = () => {

    const [vek, setVek] = useState(107)

    return (
        <>
        <h2>Podmínka</h2>
        <p>Tvůj věk je {vek}</p>
        {vek < 18 ? <p>Jsi dítě.</p> : <p>Nazdraví!</p>}
        <button onClick={ () => {setVek(15)} }>Dítě</button>
        <button onClick={() => {setVek(31)} }>Dospělý</button>
        </>
    )

}

export default  Podminka