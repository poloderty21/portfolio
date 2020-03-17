import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowCircleLeft, faArrowCircleRight } from '@fortawesome/free-solid-svg-icons';
import Projets from '../data/projets';
import Footer from './Footer';


import './_Projet.scss';

function Projet({ numProj, precImg, nextImg }) {
  const projet = Projets[numProj];
  return (
    <>
      <div id="PageProjet">
        <div>
          <img src={projet.image} alt="" />
        </div>

        <Link to="/" className="btnBack top">Retour</Link>

        <div id="detailProjet" className="maxWidth">
          <h3>
            Bonjour, voici le projet
            {numProj + 1}
          </h3>
          <h4>{projet.sousTitre}</h4>
          <p>{projet.desc}</p>
        </div>
        <div id="navProjet">
          <Link to="/" className="btnBack bottom">Retour</Link>
          <a id="divNavPrec" role="button" className="btnBack nav" onClick={precImg}><FontAwesomeIcon icon={faArrowCircleLeft} className="fleche" /></a>
          <a id="divNavNext" role="button" className="btnBack nav" onClick={nextImg}><FontAwesomeIcon icon={faArrowCircleRight} className="fleche" /></a>
        </div>
      </div>
      <Footer />
    </>
  );
}

Projet.propTypes = {
  numProj: PropTypes.number.isRequired,
  precImg: PropTypes.func.isRequired,
  nextImg: PropTypes.func.isRequired,
};

export default Projet;
