const c = console.log.bind(document);

import "./style.scss";
import { useState } from "react";

const Example = () => {

  const [title, setTitle] = useState("Můj první title");

  const buttonHandler1 = () => {
    setTitle("Nový text titulku.")
  };

  const buttonHandler2 = () => {
    setTitle("Opět změněný text!")
  }
  

  return (
    <section>
      <h2>{title}</h2>
      <button type="button" onClick={buttonHandler1}>Změnit title</button>
      <button type="button" onClick={buttonHandler2}>Opět změnit title</button>
    </section>
  );
};
export default Example;
