const c = console.log.bind(document)

import React from 'react';
import { createRoot } from 'react-dom/client';
import './app.scss'

import Question from './components/Question';

const App = () => {

  return (
    <>
      <Question text="Kdo jinému jámu kopá, sám do ní padá."/>
    </>
  )
}

export default App
