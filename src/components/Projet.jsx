import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import ImageGallery from 'react-image-gallery';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowCircleLeft, faArrowCircleRight } from '@fortawesome/free-solid-svg-icons';
import Footer from './Footer';

import Projets from '../data/projets';

import './_Projet.scss';

function Projet({ numProj, precImg, nextImg }) {
  const projet = Projets[numProj];
  return (
    <>
      <div id="PageProjet">
        <div className="divImgPrin">
          {'image' in projet && !('video' in projet) && <img src={projet.image} alt="" />}
          {'video' in projet && (
          <video autoPlay controls muted>
            <source src={projet.video} type="video/mp4" />
            Your browser does not support the video tag.
          </video>
          )}
        </div>

        {/* <Link to="/" className="btnBack top">Retour</Link> */}
        <div id="navProjet">
          <Link to="/" className="btnBack bottom">Retour</Link>
          <button type="button" id="divNavPrec" className="btnBack nav" aria-label="Projet précédent" onClick={precImg}>
            <FontAwesomeIcon icon={faArrowCircleLeft} className="fleche" />
          </button>
          <button type="button" id="divNavNext" className="btnBack nav" aria-label="Projet suivant" onClick={nextImg}><FontAwesomeIcon icon={faArrowCircleRight} className="fleche" /></button>
        </div>
        <div id="detailProjet" className="maxWidth">
          <h3>
            {projet.titre}
          </h3>
          <h4>{projet.sousTitre}</h4>
          <p>{projet.desc}</p>
          { 'autresImage' in projet
          && (
          <div className="divGalerie">
            <ImageGallery
              items={projet.autresImage}
              lazySLoad
              autoPlay
              slideInterval={5000}
              showIndex
              slideOnThumbnailOver
            />
          </div>
          )}
        </div>

      </div>
      <Footer />
    </>
  );
}

Projet.propTypes = {
  numProj: PropTypes.number,
  precImg: PropTypes.func.isRequired,
  nextImg: PropTypes.func.isRequired,
};

Projet.defaultProps = {
  numProj: 1,
};

export default Projet;
