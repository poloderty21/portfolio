import React from 'react';

import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithubSquare, faFacebookSquare, faLinkedin } from '@fortawesome/free-brands-svg-icons';

import './_Footer.scss';


function Footer() {
  return (
    <footer>
      <Container id="footer">
        <Row>
          <Col xs="12">
            <div id="divReseau">
              <a href="github" aria-label="Github"><FontAwesomeIcon icon={faGithubSquare} /></a>
              <a href="#facebook" aria-label="Facebook"><FontAwesomeIcon icon={faFacebookSquare} /></a>
              <a href="#linkedin" aria-label="LinkedIn"><FontAwesomeIcon icon={faLinkedin} /></a>
            </div>
            <p className="copyright">&copy; 2020 Xavier Alexandre</p>
            <p className="petitMot">Fait avec ♥ à MTL</p>
          </Col>
        </Row>
      </Container>
    </footer>
  );
}


export default Footer;
