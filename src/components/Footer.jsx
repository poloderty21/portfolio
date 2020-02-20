import React from 'react';

import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

import './_Footer.scss';


function Footer() {
  return (
    <footer>
      <Container>
        <Row>
          <Col>
            <h1>Footer</h1>
          </Col>
        </Row>
      </Container>
    </footer>
  );
}


export default Footer;
