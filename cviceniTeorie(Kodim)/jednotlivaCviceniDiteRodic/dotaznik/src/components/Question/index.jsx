const c = console.log.bind(document);

import React from "react";

import QuestionBody from "../QuestionBody";
import Option from "../Option";

const Question = ({text}) => {
  return (
    <div className="container">
      <div className="question">
        <QuestionBody iconType="symbolQuestion" text={text} />
        <div className="question__options">
          <Option type="smileyStrongYes" text="Souhlasím" />
          <Option type="smileyYes" text="Spíše souhlasím" />
          <Option type="smileyNeutral" text="Nevím" />
          <Option type="smileyNo" text="Spíše nesouhlasím" />
          <Option type="smileyStrongNo" text="Nesouhlasím" />
        </div>
      </div>
    </div>
  );
};

export default Question;
