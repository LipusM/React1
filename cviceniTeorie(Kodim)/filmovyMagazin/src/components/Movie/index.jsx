const c = console.log.bind(document)

import { useParams } from "react-router-dom"

import "./style.scss"
import movies from "../../movieDatabase"

const Movie = () => {

    const { id } = useParams()
    const selectedMovie = movies.find(chosenMovie=> chosenMovie.id === Number(id))

    return (
        <>
            <h2>Vybraný film: {selectedMovie.title}</h2>
            {
                c(typeof(id))
            }
        </>
    )
}

export default Movie