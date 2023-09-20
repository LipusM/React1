const c = console.log.bind(document)

import { useEffect, useState } from "react"
import "./style.scss"
import Postava from "../Postava"


const Postavy = () => {

    const [nacitani, setNacitani] = useState(true)
    const [postavy, setPostavy] = useState([])

    const [oci, setOci] = useState("")

    useEffect( () => {
        setNacitani(true)
        fetch(`https://swapi.dev/api/people`)
        .then(response => response.json())
        .then(data => {
            
            if(oci === ""){
                setPostavy(data.results)
            } else {
                setPostavy(data.results.filter(p => p.eye_color === oci))
            }

            setNacitani(false)
        })

    }, [oci])

    return(
        <>
        <h2>Postavy</h2>

        <hr />
        <select value={oci} onChange={(e) => {setOci(e.target.value)} }>
            <option value=""></option>
            <option value="blue">Modré</option>
            <option value="brown">Hnědé</option>
            <option value="yellow">Žluté</option>
            <option value="red">Červené</option>
        </select>
        <hr />

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