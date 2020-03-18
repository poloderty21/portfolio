import React, { useState, useEffect } from 'react';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import VisibilitySensor from 'react-visibility-sensor';

import Skills from './Skills';

import barbueVert from '../media/Barbue-vert-chapeau.png';
import fedora from '../media/chapeau/chapeau-fedora.png';
import cigar from '../media/chapeau/chapeau-cigar.png';
import incognito from '../media/chapeau/chapeau-incognito.png';

import './_Bio.scss';


function Bio() {
  const [isVisible, setIsVisible] = useState(false);

  const [pClassName, setPClassName] = useState('none');

  useEffect(() => {
    if (isVisible) {
      setTimeout(() => setPClassName('fade-in-top'), 200);
    } else {
      setPClassName('none');
    }
  }, [isVisible]);


  const onchangeHandle = (visible) => {
    setIsVisible(visible);
  };

  return (
    <section id="bio" className="text-center">
      <div id="containerBio" className={`maxWidth ${pClassName}`}>
        <VisibilitySensor onChange={onchangeHandle} offset={{ top: 200 }} active={pClassName !== 'fade-in-top'}>
          <div id="intro">
            <h2 className={pClassName}>Découvrez le Xavier d&apos;Amérique!</h2>
            <p className={pClassName}>Une créature appréciée de tous</p>
          </div>
        </VisibilitySensor>
        <div id="presentation">
          <div className={pClassName} id="div-chapeau">
            <img src={barbueVert} alt="Barbue sur rond au fond vert" />
            <img src={fedora} alt="fedora" className="chapeau" />
            <img src={cigar} alt="cigar" className="chapeau" />
            <img src={incognito} alt="incognito" className="chapeau" />
          </div>
          <h3 className={pClassName}>Xavier Alexandre</h3>
          <h4 className={pClassName}>Intégrateur Web / Développeur Front End</h4>
          <h6 className={pClassName}>(et magnifique personne)</h6>
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
