const c = console.log.bind(document)

import "./style.scss";

const Example = () => {
  let title = "Můj první title";

  return (
    <section>
      <h2>{title}</h2>
      <button type="button">Změnit title</button>
    </section>
  );
};
export default Example;
