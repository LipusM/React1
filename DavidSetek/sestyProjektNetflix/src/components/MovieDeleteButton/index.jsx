const c = console.log.bind(document)

import "./style.scss"

const MovieDeleteButton = (prop) => {

    return (
        <button className="movie-delete-button" onClick={prop.deleteMovie}>Vymazat film</button>
    )

}

export default MovieDeleteButton