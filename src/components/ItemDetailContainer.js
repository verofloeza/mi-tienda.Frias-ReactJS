import './css/ItemDetailContainer.css';

import {Col, Container, Row} from 'react-bootstrap';
import React, { useEffect, useState } from 'react';

import ItemDetail from './ItemDetail';

function ItemDetailContainer() {
  const [ producto, setProducto ] = useState([]);

  useEffect( () =>{
    setTimeout(
        ()=>{
            fetch('constantes/productos.json')
                .then(resp => resp.json())
                .then(data => setProducto(data.filter( i => i.id === 1 )))
        },2000
    )
  }, [] );

  return (
    <div className='body'>
        <Container>
            <Row>
                <Col className="colPadding">
                    
                    <ItemDetail productoDetalle={producto} />
                    
                </Col>
            </Row>
        </Container>
        
    </div>
               
  );
}

export default ItemDetailContainer;