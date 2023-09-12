const c = console.log.bind(document)

import React from 'react';
import { Link } from 'react-router-dom';
import './app.scss'


const App = () => {


  return (
    <div className="container">
      <h1>Bookkeeper!</h1>
      <nav>
        <Link to="/invoices">Invoices</Link>
        <span> | </span>
        <Link to="/expenses">Expenses</Link>
      </nav>
    </div>
  )
}

export default App
