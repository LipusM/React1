const c = console.log.bind(document);

import React from "react";
import { useState, useEffect } from "react";
import "./style.scss";

const currencies = {
  USD: { CZK: 23.823 },
  EUR: { CZK: 24.74 },
  GBP: { CZK: 29.067 },
};





const Rate = ({from}) => {

  const [rate, setRate] = useState(currencies.USD.CZK)

  useEffect( () => {
    let fromCurrency = document.querySelector(".rate__currency").textContent.slice(-3)
    
    if(fromCurrency === "EUR"){
      setRate(currencies.EUR.CZK)
    } else if(fromCurrency === "GBP") {
      setRate(currencies.GBP.CZK)
    } else {
      setRate(currencies.USD.CZK)
    }
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
