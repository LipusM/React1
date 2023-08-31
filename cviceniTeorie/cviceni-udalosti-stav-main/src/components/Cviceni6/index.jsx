/*
- v komponentě vytvořte stavovou proměnnou s výchozí
  hodnotou false
- když bude stavová hodnota false, odstavec textu se nebude zobrazovat a na tlačítku bude napsáno "Zobraz text"
- když bude stavová hodnota true, odstavec textu bude vidět a na tlačítku bude text "Schovat text"
- na tlačítko přidejte událost reagující na kliknutí, která bude přepínat hodnotu stavu true/false
*/

function Cviceni6() {
	return (
		<div className="card">
			<h3><span>6</span> Rozbalovací nabídka</h3>

			<button>Schovej/zobraz text</button>
			<p>Tento ostavec textu se po kliknutí na tlačítko bude buď zobrazovat nebo schovávat. Lorem ipsum, dolor sit amet consectetur adipisicing elit. Corrupti illo explicabo quasi placeat deserunt impedit quas nisi sed exercitationem saepe?</p>
		</div>
	);
}

export default Cviceni6;