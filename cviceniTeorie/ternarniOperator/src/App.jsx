import { useState } from 'react'
import './app.scss'
import IncreaseOne from './components/IncreaseOne'
import DecreaseOne from './components/DecreaseOne'

const App = () => {

  const [myNumber, setMyNumber] = useState(0)

  const increaseOne = () => {
    setMyNumber(myNumber + 1)
  }

  const decreaseOne = () => {
    setMyNumber(myNumber - 1)
  }

  let evaulation = ""

  if(myNumber%2 !== 0){
    evaulation = false
  } else {
    evaulation = true
  }

  return (
    <>
      <h1>Sudá a lichá čísla při počítání</h1>
      <p><strong>Hodnota čísla: </strong>{myNumber}</p>
      <p> <strong>Toto číslo je</strong> {evaulation ? "sudé" : "liché"} </p>
      <IncreaseOne increase={increaseOne}/>
      <DecreaseOne decrease={decreaseOne}/>
    </>
  )
}

export default App
