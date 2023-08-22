const c = console.log.bind(document)

import { useState } from 'react'
import './app.scss'

import AllTasks from './components/AllTasks'

const App = () => {

  return (
    <section className='all-tasks'>
      <AllTasks />
    </section>
  )
}

export default App
