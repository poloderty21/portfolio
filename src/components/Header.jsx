import React from 'react';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithubSquare, faFacebookSquare, faLinkedin } from '@fortawesome/free-brands-svg-icons';

import './_Header.scss';

import logo from '../media/logoWeb_blanc.png';

function Header() {
  return (
    <header className="">
      <div id="divBtn">
        <input type="button" value="Contact" />
      </div>
      <div className="">
        <img src={logo} alt="Logo XAintégration" id="logo" className="slide-in-blurred-top" />
        <span><p className="slide">Parce que chaque détail compte</p></span>
      </div>
      <div id="divReseau">
        <a href="#facebook" aria-label="Facebook"><FontAwesomeIcon icon={faFacebookSquare} /></a>
        <a href="#linkedin" aria-label="LinkedIn"><FontAwesomeIcon icon={faLinkedin} /></a>
        <a href="github" aria-label="Github"><FontAwesomeIcon icon={faGithubSquare} /></a>
      </div>
    </header>
  );
}

export default Header;
