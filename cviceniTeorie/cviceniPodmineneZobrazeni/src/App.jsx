import './app.scss'

import ShoppingList from './components/ShoppingItem'
import Drinks from './components/Drinks'
import Clock from './components/Clock'

const App = () => {

  //Cvičení 1: Položka nákupního seznamu
/*   const toShop = [
    {
      item: "Brambory",
      amount: 3,
      unit: "kg",
      bought: true,
      id: 1,
    },
    {
      item: "Rajčata",
      amount: 0.5,
      unit: "kg",
      bought: false,
      id: 2,
    },
  ]

  return (
    <>
      {toShop.map( oneItem => < ShoppingList item={oneItem.item} amount={oneItem.amount} unit={oneItem.unit} key={oneItem.id} bought={oneItem.bought}/> )}
    </>
  ) */

  //Cvičení 2: Nabídka nápojů
/*   return (
    <>
    <Drinks name="Tomáš" age={3}/>
    </>
  ) */

  return (
    <>
    <Clock hour={7} minute={41} format="12h"/>
    <Clock hour={16} minute={8} format="12h"/>
    <Clock hour={17} minute={27} format="24h"/>
    <Clock hour={4} minute={53} format="24h"/>
    </>
  )
}

export default App
