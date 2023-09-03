const c = console.log.bind(document)

import "./style.scss"

const ReloadMoviesButton = ({reloadMovies}) => {

    return (
        <button className="main-reload-button" onClick={reloadMovies}>Načíst filmy</button>
    )

}

export default ReloadMoviesButton