const c = console.log.bind(document)

import React from 'react';
import './style.scss'

import Icon from "../Icon"

const QuestionBody = (props) => {
    return (
      <div className="question__body">
        <p className="question__text">
          {props.text}
        </p>
        <Icon type={props.iconType} />
      </div>
    );
  };
  
  export default QuestionBody;