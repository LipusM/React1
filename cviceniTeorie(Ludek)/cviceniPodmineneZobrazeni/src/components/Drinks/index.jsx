const c = console.log.bind(document);

import "./style.scss";

const Drinks = ({ name, age }) => {
  return (
    <>
      <h2>Nápoje pro {name}</h2>
      {age >= 18 && (
        <p>
          Toto je obsah pouze pro uživatele starší 18 let" a bude zobrazen pouze
          v případě, že je uživateli 18 let nebo víc
        </p>
      )}
      <div>
        {age >= 18 ? (
          <>
            <button>Pivo</button>
            <button>Víno</button>
            <button>Rum</button>
          </>
        ) : (
          <>
            <button>Voda</button>
            <button>Limonáda</button>
            <button>Čaj</button>
          </>
        )}
      </div>
    </>
  );
};

export default Drinks;
