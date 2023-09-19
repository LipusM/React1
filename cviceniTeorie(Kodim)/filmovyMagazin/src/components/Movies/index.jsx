const c = console.log.bind(document)

import './style.scss'
import MoviesList from '../MoviesList'

const Movies = () => {
    return (
        <main>
            <h2>Movies page</h2>
            <MoviesList />
        </main>
    )
}

export default Movies