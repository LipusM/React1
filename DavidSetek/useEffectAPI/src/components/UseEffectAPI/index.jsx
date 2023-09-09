const c = console.log.bind(document)

import { useState, useEffect } from 'react'
import "./style.scss"


const UseEffectAPI = () => {

    const [quote, setQuote] = useState("Výchozí text")

    const url = "https://api.kanye.rest/"

    const getQuote = async  () => {
        const response = await fetch(url)
        const data = await response.json()

        const finalQuote = data["quote"]
        setQuote(finalQuote)
    }
    
    useEffect( () => {
        getQuote()
    }, [])

    return (
        <>
            <h1>{quote}</h1>
        </>
    )

}

export default UseEffectAPI