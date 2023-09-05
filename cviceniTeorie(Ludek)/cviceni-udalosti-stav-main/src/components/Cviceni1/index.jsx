/*
- na tlačítko v komponentě přidej událost kliknutí
- ve funkci, která reaguje na událost, použij
  alert() nebo console.log() a vypiš nějaký text,
	např. "Omg, neklikej na mě, ty zvrhlíku"
*/
const c = console.log.bind(document)

const Cviceni1 = () => {

	const handleClick = () => {
		c("Tato událost je spuštěna.")
		/* alert("Dneska je ale hezký den!") */
	}

	return (
		<div className="card">
			<h3><span>1</span> Událost click</h3>

			<button onClick={handleClick}>Klikni na mě</button>

		</div>
	);
}

export default Cviceni1;