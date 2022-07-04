import './css/Footer.css';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

import {Col, Container, Row} from 'react-bootstrap';

import React from 'react';

function Footer() {
  return (
    <footer className='footer'>
      <Container>
      <Row>
        <Col md={6}>
          <img src={require('../assets/images/logo-mitienda-300px.png')} className="logoEmpresaFooter" alt="Mi tienda"/>
        </Col>
        <Col md={6} className="copy">
          <p>Mi Tienda - Curso de ReactJs - By Verónica Frías</p>
        </Col>
        
      </Row>
      </Container>  
    </footer>
  );
}

export default Footer;