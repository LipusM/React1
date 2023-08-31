const c = console.log.bind(document)

import "./style.scss"
import allMovies from "../Data"
import { useState } from "react"

import MovieDeleteButton from "../MovieDeleteButton"

const Movie = () => {

    const [movieList, setMovieList] = useState(allMovies)

    return (
        <div className="all-movies">
            {
                movieList.map( oneMovie => {
                    const {id, image, title, age, tags, description} = oneMovie

                    return (
                    <div className="one-movie" key={id}>
                        <img src={image} alt="" />
                        <h2>{title}</h2>
                        <p>{age}</p>
                        <p>{tags}</p>
                        <p>{description}</p>
                        <MovieDeleteButton deleteMovie={deleteOneMovie}/>
                    </div>
                    )

                } )
            }
        </div>
    )

}

export default Movie