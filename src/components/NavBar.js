import './css/NavBar.css';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

import {Col, Container, Row} from 'react-bootstrap';
import React, {useState} from 'react';
import { faHeart, faSearch, faStore } from "@fortawesome/free-solid-svg-icons";

import CartWidget from './CartWidget';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import ModalSearch from './Search';
import { NavLink } from 'react-router-dom';

function NavBar() {
  const [showSearch, setShowSearch] = useState(false);

    const handleCloseSearch = () => setShowSearch(false);
    const handleShowSearch = () => setShowSearch(true);
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
                  <li><NavLink className='dropdown-item' to='/productos'>Todos</NavLink></li>
                  <li><NavLink className='dropdown-item' to='/categoria/Accesorios'>Accesorios</NavLink></li>
                  <li><NavLink className='dropdown-item' to='/categoria/Juguetes'>Juguetes</NavLink></li>
                  <li><NavLink className='dropdown-item' to='/categoria/Lamparas'>Lámparas</NavLink></li>
                  <li><NavLink className='dropdown-item' to='/categoria/Muebles'>Muebles</NavLink></li>
                  <li><NavLink className='dropdown-item' to='/categoria/Relojes'>Relojes</NavLink></li>
                </ul>
            </li>
            <li class="nav-item"><NavLink activeClassName='active' to='/nosotros'>Nosotros</NavLink></li>
            <li class="nav-item"><NavLink activeClassName='active' to='/contacto'>Contacto</NavLink></li>
          </ul>
        </Col>
        <Col>
          <NavLink className='icons' to='#' onClick={handleShowSearch}>
            <FontAwesomeIcon icon={faSearch} />
          </NavLink>
          <NavLink className='icons' to='vendedores'>
            <FontAwesomeIcon icon={faStore} />
          </NavLink>
          <NavLink className='icons' to='favoritos'>
            <FontAwesomeIcon icon={faHeart} />
          </NavLink>
          <CartWidget />
        </Col>
      </Row>
      </Container>  
      <ModalSearch showSearch={showSearch} handleCloseSearch={handleCloseSearch}/>
    </header>
  );
}

export default NavBar;
