import './app.scss'

import Product from './components/Product'

const App = () => {

  return (
    <>
      <Product name="iPhone 14 Pro" description="Chcete mít dokonalé fotky? Kupte si tento telefon!" price={25000}/>
      <Product name="Samsung Galaxy Note" description="Chcete-li mít domácí kino neustále v kapse? Tohle je správná volba!" price={40000}/>
      <Product name="Brambory" description="Máme ty nejlepší brambory s cenou pro 1 kg." price={15}/>
      <Product name="Rajčata" description="Nabízíme jen ty nejlepší! S cenou pro 250 g." price={25}/>
    </>
  )
}

export default App
