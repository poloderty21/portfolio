import React from 'react';
import PropTypes from 'prop-types';
import Nav from './Nav';

import './Footer.scss';

import videoIntro from '../media/IntroLogo_1.mp4';


function Footer({ name }) {
  return (
    <header>
      <Nav />
      <h1>{name}</h1>
      <video autoPlay muted loop>
        <source
          src={videoIntro}
          type="video/mp4"
        />
                Désolé, votre fureteur ne supporte pas ce format vidéo.
      </video>
    </header>
  );
}

Footer.propTypes = {
  name: PropTypes.string.isRequired,
};

export default Footer;
