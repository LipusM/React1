import "./App.css";
import Komponenta from "./components/Komponenta";
import Kocicka from "./components/Kocicka";

const App = () => {
  return (
    <>
      <h1>Moje první appka</h1>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Cupiditate
        dignissimos sint dolores tempora facere dolorem, eius adipisci
        consequuntur quos sit.
      </p>

      
      <Komponenta />
      <Kocicka />
    </>
  );
};

export default App;
