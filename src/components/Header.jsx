import React from 'react';
// import PropTypes from 'prop-types';
// import Nav from './Nav';
import Jumbotron from 'react-bootstrap/Jumbotron';


import './_Header.scss';

import logo from '../media/logoWeb_blanc.png';
// import videoIntro from '../media/IntroLogo_1.mp4';

// { name }
function Header() {
  return (
    <Jumbotron fluid as="header">
      <div>
        <img src={logo} alt="Logo XAintégration" id="logo" />
        <span><p>Parce que chaque détail compte</p></span>
      </div>


      {/* <Nav /> */}
      {/* <h1>{name}</h1> */}
      {/* <video autoPlay muted loop>
        <source
          src={videoIntro}
          type="video/mp4"
        />
                Désolé, votre fureteur ne supporte pas ce format vidéo.
      </video> */}
    </Jumbotron>
  );
}

// Header.propTypes = {
//   name: PropTypes.string.isRequired,
// };

export default Header;
