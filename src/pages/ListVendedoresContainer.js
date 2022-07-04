import './css/ListVendedoresContainer.css';

import {Col, Container, Row} from 'react-bootstrap';
import React, { useEffect, useState } from 'react';

import ListVendedores from '../components/ListVendedores';

function ListVendedoresContainer() {
  const [ vendedores, setVendedores ] = useState([]);
  

  useEffect( () =>{
    setTimeout(
          ()=>{
              fetch('constantes/vendedores.json')
                  .then(resp => resp.json())
                  .then(data => setVendedores(data))
                  console.log(vendedores)
          },1000
      )

}, [] );
  return (
    <div className='body'>
        <Container>
            <Row>
                <Col className="colPadding">
                     <h3 className='pb-4 titulo'>Vendedores</h3> 
                    <ListVendedores vendedores={vendedores} />
                </Col>
            </Row>
        </Container>
        
    </div>
               
  );
}

export default ListVendedoresContainer;