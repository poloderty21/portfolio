import React from 'react';
import Image from 'react-bootstrap/Image';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Skills from './Skills';


import barbueVert from '../media/Barbue-vert.png';

import './_Bio.scss';


function Bio() {
  return (
    <section id="bio" className="text-center">
      <Row>
        <Col id="intro" xs="12">
          <h2>Découvrez le Xavier d&apos;Amérique!</h2>
          <p>Une créature appréciée de tous</p>
        </Col>
      </Row>
      <Row className="maxWidth maxHeight">
        <Col id="presentation" xs="12" lg="6">
          <Image fluid src={barbueVert} alt="Barbue sur rond au fond vert" />
          <h3>Xavier Alexandre</h3>
          <h4>Intégrateur Web / Développeur Front End</h4>
          <h6>(et magnifique personne)</h6>
        </Col>
        <Col id="skills" xs="12" lg="6">
          <Row>
            <h3 className="mx-auto">Capacitiés</h3>
          </Row>
          <Skills />
          <Row>
            <h4 className="mx-auto">Il est habile dans tous ces domaines!</h4>
          </Row>
        </Col>
      </Row>
    </section>

  );
}

export default Bio;
