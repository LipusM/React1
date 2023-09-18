const c = console.log.bind(document);

import { Link, Outlet, NavLink } from "react-router-dom";
import "./style.scss";

const NavBar = () => {
  return (
    <>
      <header>
        <nav>
          <NavLink to="/" className={ ({isActive, isPending}) => isActive ? "activeLink": isPending ? "pending" : ""}>Home</NavLink>
          <NavLink to="/about" className={ ({isActive, isPending}) => isActive ? "activeLink": isPending ? "pending" : ""}>About</NavLink>
          <NavLink to="/contact" className={ ({isActive, isPending}) => isActive ? "activeLink": isPending ? "pending" : ""}>Contact</NavLink>
          <NavLink to="/pobocky" className={ ({isActive, isPending}) => isActive ? "activeLink": isPending ? "pending" : ""}>Pobočky</NavLink>
        </nav>
      </header>
      <Outlet />
    </>
  );
};

export default NavBar;
