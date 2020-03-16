import React from 'react';
import PropTypes from 'prop-types';

import Projets from '../data/projets';
import Footer from './Footer';

import './_Projet.scss';

function Projet({ numProj, precImg, nextImg }) {
  const projet = Projets[numProj];
  return (
    <>
      <div id="PageProjet">
        <img src={projet.image} alt="" />
        <div className="maxWidth">
          <h1>
                Bonjour, voici le projet
            {numProj + 1}
          </h1>
          <h3>{projet.sousTitre}</h3>
          {console.log(projet)}
          <p>{projet.desc}</p>
        </div>
      </div>
      <Footer />
    </>
  );
}

Projet.propTypes = {
  numProj: PropTypes.number,
};

Projet.defaultProps = {
  numProj: 0,
};

export default Projet;
