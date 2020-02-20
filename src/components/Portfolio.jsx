import React, { useState } from 'react';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faExternalLinkAlt } from '@fortawesome/free-solid-svg-icons';

import './_Portfolio.scss';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

import img from '../media/projet.jpg';

const projets = [
  {
    titre: 'Projet 1',
    sousTitre: "Le premier projet que j'ai réalisé cette année",
    url: '../media/projet.jpg',
  },
  {
    titre: 'Projet 2',
    sousTitre: "Le second projet que j'ai réalisé cette année",
    url: '../media/logoWeb_blanc.png',
  },
  {
    titre: 'Projet 3',
    sousTitre: "Le troisieme projet que j'ai réalisé cette année",
    url: '../media/logoWeb_blanc.png',
  },
  {
    titre: 'Projet 4',
    sousTitre: "Le quatrieme projet que j'ai réalisé cette année",
    url: '../media/logoWeb_blanc.png',
  },
];

function Portfolio() {
  const [numProj, setNumProj] = useState(0);


  const nextImg = (e) => {
    e.preventDefault();
    const numProchainProj = (numProj + 1) === projets.length ? 0 : numProj + 1;
    setNumProj(numProchainProj);
  };

  return (
    <Container as="section" id="portfolio">
      <Row>
        <Col id="divTitre" xs="12">
          <h2>Mon portfolio</h2>
          <h4>Quelques projets récemments réalisés par le barbu</h4>
        </Col>
      </Row>
      <Row id="carroussel" noGutters>
        <Row id="imgProjet">
          <Col xs="12">
            <img src={img} alt={img} numProj={(numProj - 1) < 0 ? projets.length - 1 : numProj - 1} />
          </Col>
          <Col xs="12">
            <img src={img} alt={img} numProj={numProj} />
          </Col>
          <Col xs="12">
            <img src={img} alt={img} numProj={(numProj + 1) === projets.length ? 0 : numProj + 1} />
          </Col>
        </Row>


        <Row id="barreInfo">
          <Col id="divTitre" xs="8">
            <h2>{projets[numProj].titre}</h2>
            <h3>{projets[numProj].sousTitre}</h3>
          </Col>

          <Col id="divBouton" xs="2">
            <a href="http://" className="button" onClick={nextImg}>
              Voir
              {' '}
              <FontAwesomeIcon icon={faExternalLinkAlt} className="white" />
            </a>
          </Col>

          <Col id="divNavigation" xs="2">
            <span>Navigation</span>
          </Col>
        </Row>
      </Row>
    </Container>


  );
}


export default Portfolio;
