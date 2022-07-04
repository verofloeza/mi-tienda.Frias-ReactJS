import './css/ItemDetailContainer.css';

import {Col, Container, Row} from 'react-bootstrap';
import React, { useEffect, useState } from 'react';

import ItemDetail from '../components/ItemDetail';
import { useParams } from 'react-router-dom';

function ItemDetailContainer() {
  const [ producto, setProducto ] = useState([]);
  const params = useParams();
  
  useEffect( () =>{
    setTimeout(
        ()=>{
            fetch('../constantes/productos.json')
                .then(resp => resp.json())
                .then(data => setProducto(data.filter( i => i.nombre === params.productName.replace("-", " ")) ))
        },2000
    )
  }, [] );

  return (
    <div className='body'>
        <Container>
            <Row>
                <Col className="colPadding">
                    
                     { producto.length !== 0 && <ItemDetail productoDetalle={producto} /> }  
                    
                </Col>
            </Row>
        </Container>
        
    </div>
               
  );
}

export default ItemDetailContainer;