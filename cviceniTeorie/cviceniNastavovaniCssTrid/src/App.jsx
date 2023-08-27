import './app.scss'

import Product from './components/Product'
import Food from './components/Food'

const App = () => {

  //Cvičení 1: Zboží
/*   return (
    <>
      <Product name="iPhone 14 Pro" description="Chcete mít dokonalé fotky? Kupte si tento telefon!" price={25000} isFavorite={true}/>
      <Product name="Samsung Galaxy Note" description="Chcete-li mít domácí kino neustále v kapse? Tohle je správná volba!" price={40000} isFavorite={false}/>
      <Product name="Brambory" description="Máme ty nejlepší brambory s cenou pro 1 kg." price={15} isFavorite={false}/>
      <Product name="Rajčata" description="Nabízíme jen ty nejlepší! S cenou pro 250 g." price={25} isFavorite={true}/>
    </>
  ) */

  //Cvičení 2: Kalorické tabulky
  return (
    <>
    <Food name="Tvaroh" calories={250} protein={0.9} carbohydrates={3.9} fats={0.2} fiber={1}/>
    <Food name="Brambory" calories={85} protein={1.7} carbohydrates={18.6} fats={0.1} fiber={1.4}/>
    <Food name="Chipsy Lays Chilli & Lime" calories={537} protein={5.5} carbohydrates={48.5} fats={35} fiber={0}/>
    </>
  )
}

export default App
