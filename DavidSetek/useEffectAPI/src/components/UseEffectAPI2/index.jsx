const c = console.log.bind(document)

import { useState, useEffect } from 'react'
import "./style.scss"

const UseEffectAPI2 = () => {

    const [quote, setQuote] = useState("")

    useEffect( () => {

        fetch("https://api.kanye.rest/")
        .then(response => response.json())
        .then(data => setQuote(data.quote) )

    }, [])

    return (
        <>
            <h1>{quote}</h1>
        </>
    )

}

export default UseEffectAPI2