const c = console.log.bind(document)

import React from 'react';
import { createRoot } from 'react-dom/client';
import { useState, useEffect } from 'react';
import classnames from 'classnames';
import "./style.scss"

import MenuItem from '../MenuItem';


const AllMenuItems = () => {

    const [menuOpened, setMenuOpened] = useState(false)


    //Fce na otevírání/zavírání menu
    const handleMenu = () => {
        setMenuOpened(!menuOpened)
    }

    //Stav určující název stránky
    const [pageTitle, setPageTitle] = useState("Domů")

    //Fce na otevírání/zavírání menu po kliknutí na odkaz v menu
    const handleSelectItem = (pageTitle) => {
        setMenuOpened(false)
        setPageTitle(pageTitle)
    }


    return (
      <>
        <header>
          <div className={classnames("menu", {
              "menu--closed": !menuOpened,
          })}>
            <button className="menu__btn" onClick={handleMenu}></button>
            <div className="menu__items">
              <MenuItem text="Domů" onSelect={handleSelectItem} />
              <MenuItem text="Naše nabídka" onSelect={handleSelectItem} />
              <MenuItem text="Náš tým" onSelect={handleSelectItem} />
              <MenuItem text="Blog" onSelect={handleSelectItem} />
              <MenuItem text="Kontakt" onSelect={handleSelectItem} />
            </div>
          </div>
        </header>
        <main>
          <h1>{pageTitle}</h1>
        </main>
      </>
    );
  };

  export default AllMenuItems