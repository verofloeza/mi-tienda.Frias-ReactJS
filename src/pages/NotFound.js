import './css/NotFound.css';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

import {Col, Container, Row} from 'react-bootstrap';

import React from 'react';

function NotFound() {
  return (
    <div className='body'>
      <Container>
        <Row>
            <Col className="colPadding">
                <p>Página 404</p>
                <img src={require('../assets/images/404.png')} alt="404 Página no encontrada" className='image'/>
            </Col>
        </Row>
      </Container>  
    </div>
  );
}

export default NotFound;