/*
- na box v komponentě přidej události:
  onmouseenter - při najetí myší
	onmouseout - při odjetí myši
- v obou funkcích reagujicích na tyto události
  vypiš do konzole relevantní text:
	"Myš přijela nad čtvereček"
	"Myš odjela ze čtverečku"
*/
const c = console.log.bind(document)

import "./style.css"

const Cviceni2 = () => {

	const handleOver = () => {
		c("Myš přijela na čtveřeček.")
	}

	const handleLeave = () => {
		c("Myš odjela ze čtverečku.")
	}

	return (
		<div className="card">
			<h3><span>2</span> Událost mouseover a mouseout</h3>

			<div onMouseEnter={handleOver} onMouseLeave={handleLeave} className="box"></div>

		</div>
	);
}

export default Cviceni2;