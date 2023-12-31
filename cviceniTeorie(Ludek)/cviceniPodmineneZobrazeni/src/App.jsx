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
      <ShoppingList item="Boty" amount={1} unit="ks" bought={false}/>
      <ShoppingList item="Boty" amount={1} unit="ks" bought={true}/>
    </>
  ) */

  //Cvičení 2: Nabídka nápojů
/*   return (
    <>
    <Drinks name="Tomáš" age={18}/>
    </>
  ) */


  // Cvičení 3: Hodiny
  return (
    <>
    <Clock hour={12} minute={0} format="12h"/>
    <Clock hour={6} minute={31} format="12h"/>
    <Clock hour={17} minute={27} format="24h"/>
    <Clock hour={4} minute={53} format="24h"/>
    </>
  )
}

export default App
