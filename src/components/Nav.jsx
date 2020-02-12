import React, { useState } from 'react';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTimes } from '@fortawesome/free-solid-svg-icons';

import './_Nav.scss';


function Nav() {
  const [isMenuVisible, setIsMenuVisible] = useState(false);

  const closeNav = (e) => {
    e.preventDefault();
    setIsMenuVisible(!isMenuVisible);
  };

  return (
    <nav>
      <span />
      {isMenuVisible && <span id="close" onClick={closeNav}><FontAwesomeIcon icon={faTimes} className="white" /></span>}
      <ul>
        <li><a href="#">Accueil</a></li>
        <li><a href="#">Bio/Skills</a></li>
        <li><a href="#">Réalisations</a></li>
        <li><a href="#">Contact</a></li>
      </ul>
    </nav>
  );
}


export default Nav;
