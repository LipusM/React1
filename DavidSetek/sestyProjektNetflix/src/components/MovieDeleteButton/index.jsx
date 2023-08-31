const c = console.log.bind(document)

import "./style.scss"

const MovieDeleteButton = (prop) => {

    return (
        <button onClick={prop.deleteMovie}>Vymazat film</button>
    )

}

export default MovieDeleteButton