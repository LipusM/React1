const c = console.log.bind(document);

import React from "react";

import QuestionBody from "../QuestionBody";
import Option from "../Option";

const Question = (props) => {
  return (
    <div className="container">
      <div className="question">
        <QuestionBody iconType="symbolQuestion" text={props.text} />
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
