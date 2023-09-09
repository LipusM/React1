const c = console.log.bind(document);

import { useState, useEffect } from "react";
import "./style.scss";

const Efekty = () => {
    
  const [name, setName] = useState("");

  useEffect(() => {
    fetch("https://svatky.adresa.info/json")
      .then((response) => response.json())
      .then( data => setName(data[0].name) );
  }, []);

  return (
    <>
      <h1>Svátky</h1>
      <div className="nameday">Svátek má {name}</div>
    </>
  );
};

export default Efekty;
