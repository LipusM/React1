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

  const deleteAll = () => {
      setTitle("")
  }

  const [buttonTxt, setButtonTxt] = useState("Původní text tlačítka")

  const changeButtonTxt = () => {
      setButtonTxt("Změněný text tlačítka.")
  }

  return (
    <section>
      <h2>{title}</h2>
      <button type="button" onClick={buttonHandler1}>Změnit title</button>
      <button type="button" onClick={buttonHandler2}>Opět změnit title</button>
      <button type="button" onClick={deleteAll}>Vymazat titulek</button>
      <button type="button" onClick={changeButtonTxt}>{buttonTxt}</button>
    </section>
  );
};
export default Example;
