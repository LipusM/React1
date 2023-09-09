const c = console.log.bind(document);

import { useState, useEffect } from "react";
import "./style.scss";

const PragueTime = () => {

    //Pro vykreslení správného času
  const [datetime, setDatetime] = useState("");

  //Pro výběr časové zóny (ovlivňuje vykres. správného času)
  const [timezone, setTimezone] = useState("Europe/Prague")

  useEffect(() => {
    fetch(`https://worldtimeapi.org/api/timezone/${timezone}`)
      .then((response) => response.json())
      .then((data) => {
        let mainTime = data.datetime.slice(0, 19)

        setDatetime(mainTime);
      });
  }, []);

  return (
    <>
      <h1>Pražský čas</h1>
      <div>Dnešní datum: {datetime}</div>
      <label>
          Vyberte zónu:
        <select value={timezone} onChange={ e => setTimezone(e.target.value) }>
          <option value="America/New_York">New York</option>
          <option value="Europe/London">Londýn</option>
          <option value="Europe/Moscow">Moskva</option>
          <option value="Europe/Prague">Praha</option>
          <option value="Asia/Hong_Kong">Hong Kong</option>
          <option value="Asia/Jerusalem">Jeruzalém</option>
        </select>
      </label>
    </>
  );
};

export default PragueTime;
