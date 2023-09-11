const c = console.log.bind(document)

import React from 'react';
import './style.scss';

import Icon from '../Icon';

const Option = ({type, text, onSelected}) => {
    return (
      <div className="option" onClick={ () => onSelected(type)}>
        <Icon type={type} />
        <div>{text}</div>
      </div>
    );
  };
  
  export default Option;