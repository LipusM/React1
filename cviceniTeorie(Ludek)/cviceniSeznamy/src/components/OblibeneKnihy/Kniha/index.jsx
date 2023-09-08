const c = console.log.bind(document);

import "./style.scss";

const Kniha = ({nazev, autor, rok}) => {
  return (
    <div className="kniha">
      <h2>{nazev}</h2>
      <ul>
        <li>Autor: {autor}</li>
        <li>Rok vydání: {rok}</li>
      </ul>
    </div>
  );
};

export default Kniha;
