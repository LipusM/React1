const c = console.log.bind(document)

import React from 'react';
import './style.scss';

import SmileyContent from '../SmileyContent';
import SymbolContent from '../SymbolContent';


const Icon = ({ type }) => {
  let content = null;

  if (type.startsWith('smiley')) {
    content = <SmileyContent type={type} />;
  } else if (type.startsWith('symbol')) {
    content = <SymbolContent type={type} />;
  }

  return (
    <svg className="icon" viewBox="0 0 200 200">
      <circle className="icon__circle" cx="100" cy="100" r="85" />
      { content }
    </svg>
  );
};

export default Icon;