import React, { useState } from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faExternalLinkAlt, faArrowCircleLeft, faArrowCircleRight } from '@fortawesome/free-solid-svg-icons';

import img1 from '../media/projet.jpg';
import img2 from '../media/neon.jpg';

import './_Portfolio.scss';

const projets = [
  {
    titre: 'Projet 1',
    sousTitre: "Le premier projet que j'ai réalisé cette année.",
    image: img1,
    url: 'www.proj.com',
  },
  {
    titre: 'Projet 2',
    sousTitre: "Le second projet que j'ai réalisé cette année",
    image: img2,
    url: 'www.proj.com',
  },
  {
    titre: 'Projet 3',
    sousTitre: "Le troisieme projet que j'ai réalisé cette année",
    image: img1,
    url: 'www.proj.com',
  },
  {
    titre: 'Projet 4',
    sousTitre: "Le quatrieme projet que j'ai réalisé cette année",
    image: img2,
    url: 'www.proj.com',
  },
];


function Portfolio() {
  const [numProj, setNumProj] = useState(0);


  const precImg = (e) => {
    e.preventDefault();
    const numProchainProj = (numProj - 1) < 0 ? projets.length - 1 : numProj - 1;
    setNumProj(numProchainProj);
  };
  const nextImg = (e) => {
    e.preventDefault();
    const numProchainProj = (numProj + 1) === projets.length ? 0 : numProj + 1;
    setNumProj(numProchainProj);
  };


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
          {projets.map(({ image, titre }, id) => (
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
            <h2>{projets[numProj].titre}</h2>
            <p>{projets[numProj].sousTitre}</p>
          </Col>

          <Col id="divBouton" xs="2" sm="2">
            <a href={projets[numProj].url} target="_blank" rel="noopener noreferrer" className="button">
              <span className="d-none d-sm-block">Visiter</span>
              <FontAwesomeIcon icon={faExternalLinkAlt} className="marg" />
            </a>
          </Col>
        </Row>
      </Row>
    </Container>


  );
}

export default Portfolio;
