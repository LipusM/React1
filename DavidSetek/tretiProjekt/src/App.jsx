const c = console.log.bind(document)

import { useState } from 'react'
import './app.scss'

import AllTasks from './components/AllTasks'

const App = () => {

  return (
      <AllTasks />
  )
}

export default App
