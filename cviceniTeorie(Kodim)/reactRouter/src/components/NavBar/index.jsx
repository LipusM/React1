const c = console.log.bind(document)

import React from "react"
import { Link, Outlet } from "react-router-dom"

import "./style.scss"

import Footer from "../Footer"

const NavBar = () => {
    return (
        <header className="container">
        <nav>
        <Link to="/">Home</Link>
          <span> | </span>
          <Link to="/invoices">Invoices</Link>
          <span> | </span>
          <Link to="/expenses">Expenses</Link>
        </nav>
        <Outlet />
      </header>
    )
}

export default NavBar