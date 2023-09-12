const c = console.log.bind(document)

import React from 'react';
import { Link, Outlet } from 'react-router-dom';
import './app.scss'


const App = () => {


  return (
    <div className="container">
      <nav>
      <Link to="/">Home</Link>
        <span> | </span>
        <Link to="/invoices">Invoices</Link>
        <span> | </span>
        <Link to="/expenses">Expenses</Link>
      </nav>
      <h1>Bookkeeper!</h1>
      <Outlet />
    </div>
  )
}

export default App
