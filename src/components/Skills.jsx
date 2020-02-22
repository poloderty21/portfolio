import React from 'react';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';


import './_Skills.scss';


function Skills() {
  return (
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
  );
}

export default Skills;
