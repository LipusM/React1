/*
- na box v komponentě přidej události:
  onmouseenter - při najetí myší
	onmouseout - při odjetí myši
- v obou funkcích reagujicích na tyto události
  vypiš do konzole relevantní text:
	"Myš přijela nad čtvereček"
	"Myš odjela ze čtverečku"
*/

import "./style.css"

function Cviceni2() {
	return (
		<div className="card">
			<h3><span>2</span> Událost mouseover a mouseout</h3>

			<div className="box"></div>

		</div>
	);
}

export default Cviceni2;