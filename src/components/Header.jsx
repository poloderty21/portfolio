import React from 'react';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCloudSunRain, faCloudSun } from '@fortawesome/free-solid-svg-icons';
import {
  faGithubSquare, faFacebookSquare, faLinkedin,
} from '@fortawesome/free-brands-svg-icons';

import './_Header.scss';

import logo from '../media/logoWeb_blanc.png';

function Header() {
  const iconeCloud = { faCloudSunRain };

  // if (isRaining) {

  // }

  return (
    <header className="">
      <div id="divBtn">
        <span type="button" aria-label="Rainy"><FontAwesomeIcon icon={faCloudSunRain} /></span>
        <input type="button" value="Contact" />
      </div>
      <div className="">
        <img src={logo} alt="Logo XAintégration" id="logo" className="slide-in-blurred-top" />
        <span><p className="slide">Parce que chaque détail compte</p></span>
      </div>
      <div id="divReseau">
        <a href="https://www.facebook.com/xavier.alexandre.1994" aria-label="Facebook" target="_blank" rel="noopener noreferrer"><FontAwesomeIcon icon={faFacebookSquare} /></a>
        <a href="https://www.linkedin.com/in/xavier-alexandre-a735441a3/" aria-label="LinkedIn" target="_blank" rel="noopener noreferrer"><FontAwesomeIcon icon={faLinkedin} /></a>
        <a href="https://github.com/poloderty21" aria-label="Github" target="_blank" rel="noopener noreferrer"><FontAwesomeIcon icon={faGithubSquare} /></a>
      </div>
    </header>
  );
}

export default Header;
