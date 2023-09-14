const c = console.log.bind(document);

import { Link, Outlet } from "react-router-dom";
import "./style.scss";

const NavBar = () => {
  return (
    <>
      <header>
        <nav>
          <Link to="/">Home</Link>
          <Link to="/about">About</Link>
          <Link to="/contact">Contact</Link>
          <Link to="/pobocky">Pobočky</Link>
        </nav>
      </header>
      <Outlet />
    </>
  );
};

export default NavBar;
