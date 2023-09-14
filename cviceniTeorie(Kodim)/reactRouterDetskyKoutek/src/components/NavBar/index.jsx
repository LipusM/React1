const c = console.log.bind(document)

import { Link } from "react-router-dom"
import "./style.scss"

const NavBar = () => {
    return (
        <header>
            <nav>
                <Link to="/">Home</Link>
                <Link to="/about">About</Link>
                <Link to="/contact">Contact</Link>
            </nav>
        </header>
    )
}

export default NavBar