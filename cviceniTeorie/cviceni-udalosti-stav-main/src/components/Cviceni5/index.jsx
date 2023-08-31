/*
- z proměnné count v komponentě udělej stavovou hodnotu
- tlačítka v komponentě budou reagovat na kliknutí
- každé tlačítko bude adekvátně snižovat nebo zvyšovat
  hodnotu stavové proměnné
- tlačítko Vynulovat nastaví hodnotu na nulu
*/

import './style.css'

function Cviceni5() {
	const count = 0

	return (
		<div className="card">
			<h3><span>5</span> Počitadlo</h3>

			<button>-1</button>
			<button>-1</button>
			<output>{count}</output>
			<button>+1</button>
			<button>+5</button>
			<button>Vynulovat</button>
		</div>
	);
}

export default Cviceni5;