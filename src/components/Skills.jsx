import React from 'react';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

import html from '../media/skill-logo/HTML5.png';
import css from '../media/skill-logo/CSS3.png';
import git from '../media/skill-logo/Git.png';
import sass from '../media/skill-logo/Sass.png';
import react from '../media/skill-logo/React.png';
import unity from '../media/skill-logo/Unity.png';


import './_Skills.scss';

const skills = [
  {
    name: 'Html5',
    url: html,
  },
  {
    name: 'Css3',
    url: css,
  },
  {
    name: 'Git',
    url: git,
  },
  {
    name: 'Sass',
    url: sass,
  },
  {
    name: 'ReactJs',
    url: react,
  },
  {
    name: 'Unity',
    url: unity,
  },
  {
    name: 'Maya',
    url: '',
  },

];


function Skills() {
  return (
    <Row id="skill-tree">
      {skills.map(({ name, url }, id) => (
        <Col key={name} xs="12" className="skill">
          <span id={id} className="skill-title">{name}</span>
          <div className="ligne-centre" />
          <div className="skill-div-logo">
            <div className="skill-logo">
              <img src={url} alt="" />
            </div>
          </div>
        </Col>
      ))}
    </Row>
  );
}

export default Skills;
