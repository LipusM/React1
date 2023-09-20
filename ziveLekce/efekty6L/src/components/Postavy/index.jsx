const c = console.log.bind(document)

import { useEffect, useState } from "react"
import "./style.scss"
import Postava from "../Postava"


const Postavy = () => {

    const [nacitani, setNacitani] = useState(true)
    const [postavy, setPostavy] = useState([])

    useEffect( () => {

        fetch(`https://swapi.dev/api/people`)
        .then(response => response.json())
        .then(data => {
            setPostavy(data.results)
            setNacitani(false)
        })

    }, [])

    return(
        <>
        <h2>Postavy</h2>

        { nacitani ?
        <p>Načítám data</p> 
        :
        postavy.map(postava => <Postava key={postava.name} name={postava.name} rokNarozeni={postava.birth_year} barvaOci={postava.eye_color}
            vyska={postava.height}
            />)
        }
        </>
    )
}

export default Postavy