const c = console.log.bind(document)

import React from 'react';
import { Link, Outlet } from 'react-router-dom';
import './app.scss'
import NavBar from './components/NavBar';
import Footer from './components/Footer';


const App = () => {


  return (
    <>
    <NavBar />
    <Footer />
    </>
  )
}

export default App
