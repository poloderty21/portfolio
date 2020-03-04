import React from 'react';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Skills from './Skills';


import barbueVert from '../media/Barbue-vert-chapeau.png';
import fedora from '../media/chapeau/chapeau-fedora.png';
import cigar from '../media/chapeau/chapeau-cigar.png';
import incognito from '../media/chapeau/chapeau-incognito.png';

import './_Bio.scss';


function Bio() {
  return (
    <section id="bio" className="text-center">
      <div id="containerBio" className="maxWidth">
        <div id="intro">
          <h2>Découvrez le Xavier d&apos;Amérique!</h2>
          <p>Une créature appréciée de tous</p>
        </div>
        <div id="presentation">
          <div id="div-chapeau">
            <img src={barbueVert} alt="Barbue sur rond au fond vert" />
            <img src={fedora} alt="fedora" className="chapeau" />
            <img src={cigar} alt="cigar" className="chapeau" />
            <img src={incognito} alt="incognito" className="chapeau" />
          </div>
          <h3>Xavier Alexandre</h3>
          <h4>Intégrateur Web / Développeur Front End</h4>
          <h6>(et magnifique personne)</h6>
        </div>
      </div>
      <Row id="skills" className="maxWidth">
        <Col>
          <h3 className="">Compétences</h3>
          <h4 className="">Il est habile dans tous ces domaines, certains plus que d&apos;autres :</h4>
          <h6>(Observez les contours)</h6>
        </Col>
        <Skills />
      </Row>
    </section>
  );
}

export default Bio;
