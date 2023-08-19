import viteLogo from "/vite.svg";
import "./App.css";

import Book from "./components/Book";

const App = () => {
  return (
    <section className="allBooks">
      <Book />
      <Book />
      <Book />
      <Book />
    </section>
  );
};

export default App;
