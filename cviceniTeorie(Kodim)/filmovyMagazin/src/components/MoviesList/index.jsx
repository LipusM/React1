const c = console.log.bind(document)

import { NavLink } from "react-router-dom"

import "./style.scss"
import movieDatabase from "../../movieDatabase"

const MoviesList = () => {
    return (
        <div>
            <ul>
                {movieDatabase.map(movie => 
                <li key={movie.id}> 
                    <NavLink to={`/movies/${movie.id}`}>{movie.title}</NavLink> 
                </li>)}
            </ul>
        </div>
    )
}

export default MoviesList