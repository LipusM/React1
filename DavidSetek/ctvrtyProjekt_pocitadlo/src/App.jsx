import { useState } from 'react'
import './app.scss'

import DecreaseButton from './components/DecreaseButton'
import IncreaseButton from './components/IncreaseButton'
import ResetButton from './components/ResetButton'

const App = () => {

  const [myNumber, setMyNumber] = useState(0)

  const decreaseByOne = () => {
    /* let result = myNumber - 1 */
    setMyNumber(myNumber - 1)
  }

  const increaseByOne = () => {
    setMyNumber(myNumber + 1)
  }

  const resetNumber = () => {
    setMyNumber(0)
  }

  return (
    <>
      <h1>Počítadlo</h1>
      <h2>{myNumber}</h2>
      <DecreaseButton decreaseOne={decreaseByOne} />
      <IncreaseButton increaseOne={increaseByOne}/>
      <ResetButton resetValue={resetNumber}/>
    </>
  )
}

export default App
