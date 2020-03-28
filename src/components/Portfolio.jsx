import React from 'react';
import PropTypes from 'prop-types';

import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import ScrollAnimation from 'react-animate-on-scroll';

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
          <ScrollAnimation animateIn="fade-in-top" animateOnce>
            <h2>Portfolio</h2>
          </ScrollAnimation>

          <ScrollAnimation animateIn="fade-in-top" animateOnce delay={350}>
            <h4>Quelques projets récemments réalisés par le barbu</h4>
          </ScrollAnimation>

          <ScrollAnimation animateIn="fade-in-top" animateOnce delay={500}>
            <p>(Cliquer sur l&apos;image pour naviguer)</p>
          </ScrollAnimation>

        </Col>
      </Row>
      <ScrollAnimation animateIn="fade-in-bottom" animateOnce delay={700} offset={200}>
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
            <Col id="divTitreInfo" xs="10" sm="10">
              <h2>{Projets[numProj].titre}</h2>
              <p>{Projets[numProj].sousTitre}</p>
            </Col>

            <Col id="divBouton" xs="2" sm="2">
              <Link to="/projet" className="button" aria-label="Visiter la page projet">
                <span className="d-none d-sm-block">Visiter</span>
                <FontAwesomeIcon icon={faExternalLinkAlt} className="marg" />
              </Link>
            </Col>
          </Row>
        </Row>
      </ScrollAnimation>
    </Container>


  );
}

Portfolio.propTypes = {
  numProj: PropTypes.number.isRequired,
  precImg: PropTypes.func.isRequired,
  nextImg: PropTypes.func.isRequired,
};

export default Portfolio;
