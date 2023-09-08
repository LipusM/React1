const c = console.log.bind(document);

import "./style.scss";
import "./mobileStyle.scss"

import Kniha from "./Kniha";

const OblibeneKnihy = ({knihy}) => {
    return (
      <section id="allBooks">
        {knihy.map(kniha => <Kniha key={kniha.nazev} nazev={kniha.nazev} autor={kniha.autor} rok={kniha.rok}/>)}
      </section>
    )
  }
  
  export default OblibeneKnihy