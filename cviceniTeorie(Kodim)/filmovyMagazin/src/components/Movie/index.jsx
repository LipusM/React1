const c = console.log.bind(document)

import { useParams } from "react-router-dom"

import "./style.scss"
import movies from "../../movieDatabase"

const Movie = () => {

    const { id } = useParams()
    const selectedMovie = movies.find(chosenMovie=> chosenMovie.id === Number(id))

    return (
        <div id="movie">
            <h2>Movie: {selectedMovie.title}</h2>
            <p>Release date: {selectedMovie.year} </p>
            <p>Genre: {selectedMovie.genre}</p>
            <p>Rating: {selectedMovie.rating}</p>
            <p>Director: {selectedMovie.director}</p>
        </div>
    )
}

export default Movie