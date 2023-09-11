const c = console.log.bind(document)

import React from 'react';
import './style.scss'

import Icon from "../Icon"

const QuestionBody = ({text, iconType}) => {
    return (
      <div className="question__body">
        <p className="question__text">
          {text}
        </p>
        <Icon type={iconType} />
      </div>
    );
  };
  
  export default QuestionBody;