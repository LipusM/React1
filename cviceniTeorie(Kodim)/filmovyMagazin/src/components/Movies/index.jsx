const c = console.log.bind(document)

import { Outlet } from 'react-router-dom'

import './style.scss'
import MoviesList from '../MoviesList'

const Movies = () => {
    return (
        <main>
            <h2>Movies page</h2>
            <div id="movies">
            <MoviesList />
                <Outlet />
            </div>
        </main>
    )
}

export default Movies