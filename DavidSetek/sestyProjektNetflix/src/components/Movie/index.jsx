const c = console.log.bind(document)

import "./style.scss"
import allMovies from "../Data"
import { useState } from "react"

import MovieDeleteButton from "../MovieDeleteButton"
import AllDeleteButton from "../AllDeleteButton"

const Movie = () => {

    //Vymazání jednoho filmu
    const [movieList, setMovieList] = useState(allMovies)

    const deleteOneMovie = (idecko) => {
        const filteredMovies = movieList.filter( oneMovie => {
            if(oneMovie.id !== idecko){
                return oneMovie.id
            }
        } )

        setMovieList(filteredMovies)
    }

    //Vymazání všech filmů
    const deleteAllMovies = () => {
        setMovieList([])
    }

    //Načtení všech filmů
    return (
        <section>
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
                            <MovieDeleteButton del eteMovie={ () => deleteOneMovie(id)}/>
                        </div>
                        )

                    } )
                }
            </div>
            <div>
                <AllDeleteButton deleteMovies={deleteAllMovies}/>
            </div>
        </section>
    )

}

export default Movie