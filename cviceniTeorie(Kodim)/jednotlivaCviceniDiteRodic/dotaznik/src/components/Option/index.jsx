const c = console.log.bind(document)

import React from 'react';
import './style.css';

import Icon from '../Icon';

const Option = (props) => {
    return (
      <div className="option">
        <Icon type={props.type} />
        <div>{props.text}</div>
      </div>
    );
  };
  
  export default Option;