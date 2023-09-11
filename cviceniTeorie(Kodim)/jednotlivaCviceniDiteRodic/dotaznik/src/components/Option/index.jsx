const c = console.log.bind(document)

import React from 'react';
import './style.scss';

import Icon from '../Icon';

const Option = ({type, text}) => {
    return (
      <div className="option">
        <Icon type={type} />
        <div>{text}</div>
      </div>
    );
  };
  
  export default Option;