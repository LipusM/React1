/*
- na 4 tlačítka v komponentě přidej událost click
- po stisknutí každého tlačítka by se do konzole
  mělo vypsat, jaké ovoce uživatel vybral
- abychom v komponentě nemuseli vytvářet 4 různé funkce
  pro reakci na kliknutí každého tlačítka, přidejme
	místo toho k tlačítkům anonymní funkce
*/
const c = console.log.bind(document)

const Cviceni3 = () => {
	return (
		<div className="card">
			<h3><span>3</span> Anonymní handlery událostí</h3>

			<button onClick={ () => {c(event.target.textContent)} }>🍓</button>
			<button onClick={ () => {c(event.target.textContent)} }>🍏</button>
			<button onClick={ () => {c(event.target.textContent)} }>🍌</button>
			<button onClick={ () => {c(event.target.textContent)} }>🥑</button>

			<button onClick={ (event) => {c(event.target.textContent)} }>🍓</button>
			<button onClick={ (event) => {c(event.target.textContent)} }>🍏</button>
			<button onClick={ (event) => {c(event.target.textContent)} }>🍌</button>
			<button onClick={ (event) => {c(event.target.textContent)} }>🥑</button>

		</div>
	);
}

export default Cviceni3;