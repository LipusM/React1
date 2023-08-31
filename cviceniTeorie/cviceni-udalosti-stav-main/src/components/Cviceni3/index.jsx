/*
- na 4 tlačítka v komponentě přidej událost click
- po stisknutí každého tlačítka by se do konzole
  mělo vypsat, jaké ovoce uživatel vybral
- abychom v komponentě nemuseli vytvářet 4 různé funkce
  pro reakci na kliknutí každého tlačítka, přidejme
	místo toho k tlačítkům anonymní funkce
*/

function Cviceni3() {
	return (
		<div className="card">
			<h3><span>3</span> Anonymní handlery událostí</h3>

			<button>🍓</button>
			<button>🍏</button>
			<button>🍌</button>
			<button>🥑</button>
		</div>
	);
}

export default Cviceni3;