/*
- z proměnné count v komponentě udělej stavovou hodnotu
- tlačítka v komponentě budou reagovat na kliknutí
- každé tlačítko bude adekvátně snižovat nebo zvyšovat
  hodnotu stavové proměnné
- tlačítko Vynulovat nastaví hodnotu na nulu
*/
const c = console.log.bind(document)

import './style.css'
import { useState } from 'react'

function Cviceni5() {
	const count = 0

	const [number, setNumber] = useState(count)

	return (
		<div className="card">
			<h3><span>5</span> Počitadlo</h3>

			<button onClick={ () => {setNumber(number - 1)} }>-1</button>
			<button onClick={ () => {setNumber(number - 1)} }>-1</button>
			<output>{number}</output>
			<button onClick={ () => {setNumber(number + 1)} }>+1</button>
			<button onClick={ () => {setNumber(number + 5)} }>+5</button>
			<button onClick={ () => {setNumber(0)} }>Vynulovat</button>
		</div>
	);
}

export default Cviceni5;