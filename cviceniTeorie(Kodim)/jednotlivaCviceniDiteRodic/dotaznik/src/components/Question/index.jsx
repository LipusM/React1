const c = console.log.bind(document);

import React from "react";
import { useState, useEffect } from "react";

import QuestionBody from "../QuestionBody";
import Option from "../Option";

const Question = ({text}) => {

  const [answered, setAnswered] = useState(false)
  const handleSelect = () => {
    setAnswered(!answered)
  }

  return (
    <div className="container">
      <div className="question">
        <QuestionBody iconType={!answered ? "symbolQuestion" : "symbolTick"} text={text}/>
        <div className="question__options">
          <Option type="smileyStrongYes" text="Souhlasím" onSelected={handleSelect}/>
          <Option type="smileyYes" text="Spíše souhlasím" onSelected={handleSelect}/>
          <Option type="smileyNeutral" text="Nevím" onSelected={handleSelect}/>
          <Option type="smileyNo" text="Spíše nesouhlasím" onSelected={handleSelect}/>
          <Option type="smileyStrongNo" text="Nesouhlasím" onSelected={handleSelect}/>
        </div>
      </div>
    </div>
  );
};

export default Question;
