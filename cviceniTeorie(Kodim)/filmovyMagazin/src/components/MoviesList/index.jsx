const c = console.log.bind(document)

import { NavLink } from "react-router-dom"

import "./style.scss"
import movies from "../../movieDatabase"

const MoviesList = () => {
    return (
        <div id="moviesList">
            <ul>
                {movies.map(movie => 
                <li key={movie.id}> 
                    <NavLink to={`/movies/${movie.id}`}>{movie.title}</NavLink> 
                </li>)}
            </ul>
        </div>
    )
}

export default MoviesList