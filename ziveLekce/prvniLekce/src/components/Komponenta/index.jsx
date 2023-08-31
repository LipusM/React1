/* const Komponenta = ({nazev, popis}) => { */
const Komponenta = (props) => {
  const { nazev, popis } = props;

  return (
    <>
      <h1>Název: {nazev}</h1>
      <p>Popis: {popis}</p>
    </>
  );
};

export default Komponenta;
