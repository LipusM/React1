import './app.scss'

import ShoppingList from './components/ShoppingItem'
import Drinks from './components/Drinks'

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

  return (
    <>
    <Drinks name="Tomáš" age={3}/>
    </>
  )
}

export default App
