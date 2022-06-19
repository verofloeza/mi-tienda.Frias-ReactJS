import './css/NavBar.css';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

import {Col, Container, Row} from 'react-bootstrap';
import { faSearch, faStore } from "@fortawesome/free-solid-svg-icons";

import CartWidget from './CartWidget';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react';

function NavBar() {
  return (
    <header className='header'>
      <Container>
      <Row>
        <Col>
          <img src={require('../assets/images/logo-mitienda-300px.png')} className="logoEmpresa" />
        </Col>
        <Col xs={6} className='menu'>
          <ul>
            <li><a src="#">Inicio</a></li>
            <li><a src="#">Productos</a></li>
            <li><a src="#">Nosotros</a></li>
            <li><a src="#">Contacto</a></li>
          </ul>
        </Col>
        <Col>
          <a src="#" className='icons'>
            <FontAwesomeIcon icon={faSearch} />
          </a>
          <a src="#" className='icons'>
            <FontAwesomeIcon icon={faStore} />
          </a>
          <CartWidget />
        </Col>
      </Row>
      </Container>  
    </header>
  );
}

export default NavBar;
