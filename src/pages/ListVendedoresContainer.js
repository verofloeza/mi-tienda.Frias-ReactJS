import './css/ListVendedoresContainer.css';

import {Col, Container, Row} from 'react-bootstrap';
import React, { useEffect, useState } from 'react';

import ListVendedores from '../components/ListVendedores';
import Loading from '../components/Loading';

function ListVendedoresContainer() {
  const [ loading, setLoading ] = useState(true);
  const [ vendedores, setVendedores ] = useState([]);
  

  useEffect( () =>{
    setTimeout(
          ()=>{
              fetch('constantes/vendedores.json')
                  .then(resp => resp.json())
                  .then(data => setVendedores(data))
                  setLoading(false)
          },1000
      )

}, [] );
  return (
    <div className='body'>
        <Container>
            <Row>
                <Col className="colPadding">
                     <h3 className='pb-4 titulo'>Vendedores</h3> 
                     { loading === true && <Loading />}
                    <ListVendedores vendedores={vendedores} />
                </Col>
            </Row>
        </Container>
        
    </div>
               
  );
}

export default ListVendedoresContainer;