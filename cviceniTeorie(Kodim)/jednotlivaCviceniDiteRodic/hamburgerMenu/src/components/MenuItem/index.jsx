const c = console.log.bind(document)

import React from 'react';
import { createRoot } from 'react-dom/client';
import './style.scss';

const MenuItem = ({text, onSelect}) => {
    return (
      <a href="#" className="menu-item" onClick={onSelect}>
        {text}
      </a>
    );
  };

  export default MenuItem