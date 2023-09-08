const c = console.log.bind(document);

import "./style.scss";

import Kniha from "./Kniha";

const OblibeneKnihy = ({knihy}) => {
    return (
      <>
        {knihy.map(kniha => <Kniha key={kniha.nazev} nazev={kniha.nazev} autor={kniha.autor} rok={kniha.rok}/>)}
      </>
    )
  }
  
  export default OblibeneKnihy