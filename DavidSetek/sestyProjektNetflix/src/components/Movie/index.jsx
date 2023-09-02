const c = console.log.bind(document)

import "./style.scss"
import allMovies from "../Data"
import { useState } from "react"

import MovieDeleteButton from "../MovieDeleteButton"

const Movie = () => {

    const [movieList, setMovieList] = useState(allMovies)

    const deleteOneMovie = (idecko) => {
        const filteredMovies = movieList.filter( oneMovie => {
            if(oneMovie.id !== idecko){
                return oneMovie.id
            }
        } )

        setMovieList(filteredMovies)
    }

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
                        <MovieDeleteButton deleteMovie={ () => deleteOneMovie(id)}/>
                    </div>
                    )

                } )
            }
        </div>
    )

}

export default Movie