import React from 'react';

import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

import './_Footer.scss';


function Footer() {
  return (
    <footer>
      <Container id="footer">
        <Row>
          <Col xs="12">
            {/* <h1>Footer</h1> */}
            <p className="copyright">&copy; 2020 Xavier Alexandre</p>
            <p className="petitMot">Fait avec ♥ à MTL</p>
          </Col>
        </Row>
      </Container>
    </footer>
  );
}


export default Footer;
