const c = console.log.bind(document);

import "./style.scss";

const Kniha = ({nazev, autor, rok}) => {
  return (
    <div className="kniha">
      <h2>{nazev}</h2>
      <p>
        Autor: {autor},<br />
        Rok vydání: {rok}
      </p>
    </div>
  );
};

export default Kniha;
