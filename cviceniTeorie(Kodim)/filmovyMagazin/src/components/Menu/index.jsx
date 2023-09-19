const c = console.log.bind(document)

import { NavLink } from 'react-router-dom'

import './style.scss'
import Home from '../Home'

const Menu = () => {
    return(
        <>
        <nav>
            <NavLink className="menuLink" to="/">Home</NavLink>
            <NavLink className="menuLink" to="/reviews">Reviews</NavLink>
            <NavLink className="menuLink" to="/articles">Articles</NavLink>
            <NavLink className="menuLink" to="/movies">Movies</NavLink>
        </nav>
        </>
    )
}

export default Menu