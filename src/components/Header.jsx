import React from 'react';
import Nav from './Nav';

import './Header.scss';


function Header() {
  return (
    <header>
      <Nav />

      <video controls width="250">
        <source
          src="/media/examples/flower.mp4"
          type="video/mp4"
        />
                Désolé, votre fureteur ne supporte pas ce format vidéo.
      </video>
    </header>
  );
}

export default Header;
