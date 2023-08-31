/*
- v komponentě Zarovka vytvořte stavovou proměnnou
  a jako výchozí hodnotu do ní dejte hodnotu false
- nezapomněli jste importovat useState, že ne?
- podle toho, zda je hodnota true nebo false, tak
  nastavte zdroj obrázku na bulbOn nebo bulbOff
- vyzkoušejte, zda to funguje, když změníte výchozí
  hodnotu stavu
- na obrázek přidejte událost click a měňte v ní
  hodnotu stavové proměnné na opačnou hodnotu true/false
- všimněte si, že každá instance komponenty má svůj
  vlastní stav a každou žárovku můžete rozsvěcet nezávisle
	na ostatních
*/

import bulbOff from './assets/off.svg'
import bulbOn from './assets/on.svg'
import './style.css'

function Zarovka() {
	return (
		<img src={bulbOff} className="bulb" />
	)
}


function Cviceni4() {
	return (
		<div className="card">
			<h3><span>4</span> Žárovka</h3>

			<Zarovka />
			<Zarovka />
			<Zarovka />

		</div>
	);
}

export default Cviceni4;