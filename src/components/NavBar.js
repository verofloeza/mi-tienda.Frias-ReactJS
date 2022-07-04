import './css/NavBar.css';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

import {Col, Container, Row} from 'react-bootstrap';
import { faSearch, faStore } from "@fortawesome/free-solid-svg-icons";

import CartWidget from './CartWidget';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { NavLink } from 'react-router-dom';
import React from 'react';

function NavBar() {
  return (
    <header className='header'>
      <Container>
      <Row>
        <Col>
          <img src={require('../assets/images/logo-mitienda-300px.png')} className="logoEmpresa" alt="Mi tienda"/>
        </Col>
        <Col xs={6} className='menu'>
          <ul class="nav nav-pills">
            <li class="nav-item"><NavLink activeClassName='active' to='/inicio'>Inicio</NavLink></li>
            <li class="nav-item">
              <NavLink activeClassName='active' to='#' className='dropdown-toggle' data-bs-toggle="dropdown" role="button" aria-expanded="false">
                Productos</NavLink>
                <ul class="dropdown-menu">
                  <li><a class="dropdown-item" href="/productos">Todos</a></li>
                  <li><a class="dropdown-item" href="/categoria/Accesorios">Accesorios</a></li>
                  <li><a class="dropdown-item" href="/categoria/Juguetes">Juguetes</a></li>
                  <li><a class="dropdown-item" href="/categoria/Lámparas">Lámparas</a></li>
                  <li><a class="dropdown-item" href="/categoria/Muebles">Muebles</a></li>
                </ul>
            </li>
            <li class="nav-item"><NavLink activeClassName='active' to='/nosotros'>Nosotros</NavLink></li>
            <li class="nav-item"><NavLink activeClassName='active' to='/contacto'>Contacto</NavLink></li>
          </ul>
        </Col>
        <Col>
          <a src="#" className='icons'>
            <FontAwesomeIcon icon={faSearch} />
          </a>
          <a href="/vendedores" className='icons'>
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
