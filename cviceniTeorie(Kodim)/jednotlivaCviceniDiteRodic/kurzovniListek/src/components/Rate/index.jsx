const c = console.log.bind(document);

import React from "react";
import { useState, useEffect } from "react";
import "./style.scss";

//Cvičná data před použitím API
/* const currencies = {
  USD: { CZK: 23.823 },
  EUR: { CZK: 24.74 },
  GBP: { CZK: 29.067 },
}; */


const Rate = ({from}) => {

  //Pro stanovení konverzního kurzu
  const [rate, setRate] = useState("")

  useEffect( () => {
    const fromCurrency = document.querySelector(".rate__currency").textContent.slice(-3)
    
    fetch(`https://api.frankfurter.app/latest?from=${fromCurrency}&to=CZK`)
    .then(response => response.json())
    .then(data => {
      const currentRate = data.rates.CZK
      setRate(currentRate)
    })
  }, [from])



  return (
    <div className="rate">
      <div className="rate__currency">1 {from}</div>
      <div>=</div>
      <div className="rate__value">{rate * 1} CZK</div>
    </div>
  );
};

export default Rate;
