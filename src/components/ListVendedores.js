import './css/ItemList.css';

import { Container, Row } from 'react-bootstrap';

import React from 'react';
import Vendedores from './Vendedores';

function ListVendedores(props) {
  

  return (
    <div>
        <Container>
            <Row>
                {
                    props.vendedores.map(
                        i => <Vendedores key={i.id} id={i.id} nombre={i.empresa} email={i.email} imagen={i.image} direccion={i.direccion} tel={i.whastapp}/>
                    )
                }
                        
            </Row>
        </Container>
        
    </div>
               
  );
}

export default ListVendedores;