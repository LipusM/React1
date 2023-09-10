const c = console.log.bind(document)

import React from 'react';
import { createRoot } from 'react-dom/client';
import './style.scss';

const MenuItem = (props) => {
    return (
      <a href="#" className="menu-item">
        {props.text}
      </a>
    );
  };

  export default MenuItem