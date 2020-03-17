import React from 'react';
import PropTypes from 'prop-types';


import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCloudSunRain, faCloudSun } from '@fortawesome/free-solid-svg-icons';
import {
  faGithubSquare, faFacebookSquare, faLinkedin,
} from '@fortawesome/free-brands-svg-icons';

import './_Header.scss';

import logo from '../media/logoWeb_blanc.png';
import ContactModal from './ContactModal';

function Header({ onWeatherChange, isRaining }) {
  return (
    <header id="header">
      <div id="divBtn" className="tilt-in-top-2">
        <span type="button" role="button" tabIndex={0} aria-label="Rainy" onClick={onWeatherChange}>{isRaining === true ? <FontAwesomeIcon icon={faCloudSunRain} /> : <FontAwesomeIcon icon={faCloudSun} />}</span>
        <ContactModal />
        {/* <input type="button" value="Contact" onClick={contactWindow} /> */}
      </div>
      <div className="">
        <img src={logo} alt="Logo XAintégration" id="logo" className="slide-in-blurred-top" />
        <span><p className="slide">Parce que chaque détail compte</p></span>
      </div>
      <div id="divReseau" className="tilt-in-top-1">
        <a href="https://www.facebook.com/xavier.alexandre.1994" aria-label="Facebook" target="_blank" rel="noopener noreferrer"><FontAwesomeIcon icon={faFacebookSquare} /></a>
        <a href="https://www.linkedin.com/in/xavier-alexandre-a735441a3/" aria-label="LinkedIn" target="_blank" rel="noopener noreferrer"><FontAwesomeIcon icon={faLinkedin} /></a>
        <a href="https://github.com/poloderty21" aria-label="Github" target="_blank" rel="noopener noreferrer"><FontAwesomeIcon icon={faGithubSquare} /></a>
      </div>
    </header>
  );
}

Header.propTypes = {
  onWeatherChange: PropTypes.func.isRequired,
  isRaining: PropTypes.bool,
};

Header.defaultProps = {
  isRaining: true,
};

export default Header;
