const c = console.log.bind(document);

import { useState } from "react";

import "./style.scss";

const Registrace = () => {

  //Uživatelské jméno
  const [userName, setUserName] = useState("");

  //Výběr země
  const [country, setCountry] = useState("Česká republika")

  //Chce dostávat novinky či ne
  const [newsletterAccepted, setNewsletterAccepted] = useState()

  //Fce handleSubmit
  const handleSubmit = (e) => {
    e.preventDefault();

    if(newsletterAccepted){
      alert(`Uživatel ${userName} ze země ${country} se chce zaregistrovat a dostávat pravidelně novinky.`)
    } else {
      alert(`Uživatel ${userName} ze země ${country} se chce zaregistrovat a o novinky nemá zájem.`)
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>
        Uživatelské jméno: <input value={userName} onChange={(e) => setUserName(e.target.value)} type="text"/>
      </label>

      <label>
        Země původu:
        <select value={country} onChange={ e => setCountry(e.target.value) }>
          <option value="Chorvatsko">Chorvatsko</option>
          <option value="Česká republika">Česká republika</option>
          <option value="Polsko">Polsko</option>
          <option value="Slovenská republika">Slovenská republika</option>
        </select>
      </label>

      <label><input onChange={ e => setNewsletterAccepted(e.target.checked) } type="checkbox"/>Chci pravidelně dostávat novinky do mé e-mailové schránky.</label>

      <button type="submit" disabled={userName.length === 0}>
        Registrovat
      </button>
    </form>
  );
};

export default Registrace;
