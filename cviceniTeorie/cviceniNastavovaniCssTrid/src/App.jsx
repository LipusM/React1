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
    <Food name="Rajčata" calories={250} protein={0.9} carbohydrates={3.9} fats={0.2} fiber={1} category="zelenina"/>
    <Food name="Ananas" calories={499} protein={1.7} carbohydrates={18.6} fats={0.1} fiber={1.4} category="ovoce"/>
    <Food name="Kobliha" calories={537} protein={5.5} carbohydrates={48.5} fats={35} fiber={0} category="pečivo"/>
    <Food name="Cola sirup" calories={271} protein={5.5} carbohydrates={48.5} fats={35} fiber={0} category="pečivo"/>
    </>
  )
}

export default App
