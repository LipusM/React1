const c = console.log.bind(document)

import { useState, useEffect } from "react"

import "./style.scss"

const Formular = () => {

    const [jmeno, setJmeno] = useState("Honza")
    const [mesto, setMesto] = useState("Ostrava")
    const [souhlas, setSouhlas] = useState(false)

    const handleChange = (e) => {
        setJmeno(e.target.value)
    }

    return (
        <>
            <h2>Formular</h2>

            <label>
                Jméno: <input type="text" value={jmeno} onChange={handleChange}/>
            </label>

            <label>
                Město: 
                <select value={mesto} onChange={(e) => { setMesto(e.target.value) }}>
                    <option value=""></option>
                    <option>Praha</option>
                    <option>Brno</option>
                    <option>Ostrava</option>
                </select>
            </label>

            <label>
                <input type="checkbox" checked={souhlas} onChange={ e => setSouhlas(e.target.checked) }/>
                Souhlasím s obchodními podmínkami
            </label>

            <p>Jméno je <strong>{jmeno}</strong> a bydlí ve městě <strong>{mesto}</strong>
            a <strong> {souhlas ? "souhlasi" : "nesouhlasí"} s obchodními podmínkami. </strong>
            </p>

            <button disabled={!souhlas} onClick={ () => {} }>
                Odeslat formulář
            </button>
        </>
    )
}

export default Formular