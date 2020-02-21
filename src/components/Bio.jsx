import React from 'react';
import Jumbotron from 'react-bootstrap/Jumbotron';
import Image from 'react-bootstrap/Image';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

import barbueVert from '../media/Barbue-vert.png';

import './_Bio.scss';


function Bio() {
  return (
    <Jumbotron fluid as="section" id="bio" className="text-center">
      <Row>
        <Col id="intro" xs="12">
          <h2>Découvrez le Xavier d'Amérique!</h2>
        </Col>
      </Row>
      <Row>
        <Col id="présentation" xs="12" md="6">
          <Image fluid src={barbueVert} alt="Barbue sur rond au fond vert" />
          <h3>Xavier Alexandre</h3>
          <h4>Intégrateur Web & Développeur Front End</h4>
          <h6>(et magnifique personne)</h6>
        </Col>
        <Col id="skills" xs="12" md="6">
          <Row>
            <h3 className="mx-auto">Habilités</h3>
          </Row>
          <Row>
            <h4 className="mx-auto">Il est habile dans tout ses domaines!</h4>
          </Row>
          <Row>
            <span>Html5</span>
            <span>Css3</span>
            <span>Git</span>
            <span>Sass</span>
            <span>ReactJs</span>
          </Row>
        </Col>
      </Row>
    </Jumbotron>

  );
}

export default Bio;
