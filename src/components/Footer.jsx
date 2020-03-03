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
              <a href="https://www.facebook.com/xavier.alexandre.1994" aria-label="Facebook" target="_blank" rel="noopener noreferrer"><FontAwesomeIcon icon={faFacebookSquare} /></a>
              <a href="https://www.linkedin.com/in/xavier-alexandre-a735441a3/" aria-label="LinkedIn" target="_blank" rel="noopener noreferrer"><FontAwesomeIcon icon={faLinkedin} /></a>
              <a href="https://github.com/poloderty21" aria-label="Github" target="_blank" rel="noopener noreferrer"><FontAwesomeIcon icon={faGithubSquare} /></a>
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
