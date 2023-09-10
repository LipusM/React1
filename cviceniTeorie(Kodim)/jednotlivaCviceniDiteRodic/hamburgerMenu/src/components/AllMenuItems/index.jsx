const c = console.log.bind(document)

import React from 'react';
import { createRoot } from 'react-dom/client';
import "./style.scss"

import MenuItem from '../MenuItem';


const AllMenuItems = () => {
    return (
      <>
        <header>
          <div className="menu">
            <button className="menu__btn"></button>
            <div className="menu__items">
              <MenuItem text="Domů" />
              <MenuItem text="Naše nabídka" />
              <MenuItem text="Náš tým" />
              <MenuItem text="Blog" />
              <MenuItem text="Kontakt" />
            </div>
          </div>
        </header>
        <main>
          <h1>Domů</h1>
        </main>
      </>
    );
  };

  export default AllMenuItems