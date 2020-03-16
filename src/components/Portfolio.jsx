import React from 'react';
import PropTypes from 'prop-types';

import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faExternalLinkAlt, faArrowCircleLeft, faArrowCircleRight } from '@fortawesome/free-solid-svg-icons';

import { Link } from 'react-router-dom';

import './_Portfolio.scss';

import Projets from '../data/projets';


function Portfolio({ numProj, precImg, nextImg }) {
  // const { image, titre } = projets[numProj];

  return (
    <Container fluid id="portfolio">
      <Row>
        <Col id="divTitre" xs="12">
          <h2>Portfolio</h2>
          <h4>Quelques projets récemments réalisés par le barbu</h4>
          <p>(Cliquer sur l&apos;image pour naviguer)</p>
        </Col>
      </Row>
      <Row id="carroussel" noGutters>
        <Row id="imgProjet">
          <div id="divNavPrec" className="btnNavSlider" onClick={precImg}><FontAwesomeIcon icon={faArrowCircleLeft} className="fleche" /></div>
          <div id="divNavNext" className="btnNavSlider" onClick={nextImg}><FontAwesomeIcon icon={faArrowCircleRight} className="fleche" /></div>
          {Projets.map(({ image, titre }, id) => (
            <Col
              xs="12"
              order={id}
              key={`projet-${titre}`}
              className={id === numProj ? 'slide-in' : ''}
              style={{ transform: `translateX(${-100 * (numProj)}%)` }}
            >
              <img src={image} alt={titre} />
            </Col>
          ))}
        </Row>

        <Row id="barreInfo">
          <Col id="divTitre" xs="10" sm="10">
            <h2>{Projets[numProj].titre}</h2>
            <p>{Projets[numProj].sousTitre}</p>
          </Col>

          <Col id="divBouton" xs="2" sm="2">
            <Link to="/projet" className="button">
              <span className="d-none d-sm-block">Visiter</span>
              <FontAwesomeIcon icon={faExternalLinkAlt} className="marg" />
            </Link>
          </Col>
        </Row>
      </Row>
    </Container>


  );
}

Portfolio.propTypes = {
  numProj: PropTypes.number.isRequired,
  precImg: PropTypes.func.isRequired,
  nextImg: PropTypes.func.isRequired,
};

export default Portfolio;
