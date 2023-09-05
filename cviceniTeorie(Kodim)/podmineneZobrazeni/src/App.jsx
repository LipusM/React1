const c = console.log.bind(document);
import "./app.scss";

import Bulb from "./components/Bulb";
import Inbox from "./components/Inbox";

/*
Přepište následující úryvky kódu tak, aby místo podmínek používaly operátor pro podmíněný výraz. 
Pracujeme v čistém JavaScriptu, není tedy potřeba zakládat ani React ani Webpack projekt.
const password = prompt('Zadejte heslo:');
let valid = null;
if (password.length > 8) {
  valid = 'Heslo je v pořádku';
} else {
  valid = 'Heslo není bezpečné';
}

{password.length > 8 ? valid = "Heslo je v pořádku" : "Heslo není bezpečné"}


const grade = prompt('Počet bodů z písemky:');
let passed = null;
if (grade >= 50) {
  passed = '<span>prošel</span>';
} else {
  passed = '<span class="red">neprošel</span>';
}

{grade >= 50 ? <span>prošel</span> : <span className="red">neprošel</span>}

*/

const App = () => {

  return (
    <>
      {/* Podmíněné výrazy */}
      <Bulb on={true}/>
      <Bulb on={false}/>

      {/* Podmíněné zobrazení */}
      <Inbox account="james.bond@gmail.com" messages={3}/>
      
      <Inbox account="james.bond@gmail.com" messages={0}/>
    </>
  )
};

export default App;
