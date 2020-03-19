import React from 'react';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import ScrollAnimation from 'react-animate-on-scroll';

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
          <ScrollAnimation animateIn="fade-in-top" animateOnce>
            <h2>Découvrez le Xavier d&apos;Amérique!</h2>
          </ScrollAnimation>
          <ScrollAnimation animateIn="fade-in-top" animateOnce delay={350}>
            <p>Une créature appréciée de tous</p>
          </ScrollAnimation>
        </div>
        <div id="presentation">
          <ScrollAnimation animateIn="fade-in-top" animateOnce delay={500} offset={200}>
            <div id="div-chapeau">
              <img src={barbueVert} alt="Barbue sur rond au fond vert" />
              {/* <img src={fedora} alt="fedora" className="chapeau" />
              <img src={cigar} alt="cigar" className="chapeau" />
              <img src={incognito} alt="incognito" className="chapeau" /> */}
            </div>
          </ScrollAnimation>
          <ScrollAnimation animateIn="fade-in-top" animateOnce>
            <h3>Xavier Alexandre</h3>
          </ScrollAnimation>

          <ScrollAnimation animateIn="fade-in-top" animateOnce delay={350} offset={50}>
            <h4>Intégrateur Web / Développeur Front End</h4>
          </ScrollAnimation>

          <ScrollAnimation animateIn="fade-in-top" animateOnce delay={700} offset={50}>
            <h6>(et magnifique personne)</h6>
          </ScrollAnimation>

        </div>
      </div>
      <Row id="skills" className="maxWidth">
        <Col>
          <ScrollAnimation animateIn="fade-in-top" animateOnce>
            <h3 className="">Compétences</h3>
          </ScrollAnimation>

          <ScrollAnimation animateIn="fade-in-top" animateOnce delay={300}>
            <h4 className="">Il est habile dans tous ces domaines, certains plus que d&apos;autres :</h4>
          </ScrollAnimation>

          <ScrollAnimation animateIn="fade-in-top" animateOnce delay={500}>
            <h6>(Observez les contours)</h6>
          </ScrollAnimation>
        </Col>
        <Skills />
      </Row>
    </section>
  );
}

export default Bio;
