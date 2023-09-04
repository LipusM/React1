const c = console.log.bind(document)

import {useState, useEffect} from "react"
import './app.scss'

const App = () => {

  /* Přes useState */
/*   const [number, setNumber] = useState(0)
  const [click, setClick] = useState(0)
  const handleClick = () => {
    setNumber(number + 1)
    setClick(click + 1)
  } */





  /* Přes useEffect */
  const [value, setNumber] = useState(0)
  const [test, setTest] = useState(0)

  useEffect( () => {
    /* const button = document.querySelector(".btn") */
    /* button.textContent = `Klikni: ${click}` */

    const button = document.querySelector(".btn")

    if(value >= 1){
      button.textContent = `Počet kliknutí: ${value}`
    }
    
  }, [value])

  useEffect( () => {
    document.title = `Nový titulek ${test}`
  }, [test])

  return (
    <>
      <h1>Já jsem return</h1>
      <p>{value}</p>

      {/* Přes useState */}
      {/*  <button onClick={ handleClick }>Počet kliknutí: {click}</button> */} 

      {/* Přes useEffect */}
      <button className="btn" onClick={ () => setNumber(value + 1) }>Klikni na tlačítko!</button>

      <button className="btn-test" onClick={ () => setTest(test + 1) }>Test</button>
    </>
  )
}

export default App
