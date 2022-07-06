import './css/Cart.css';

import {Col, Container, Row} from 'react-bootstrap';
import React, { useEffect, useState } from 'react';

import ItemCart from '../components/ItemCart';
import TotalCart from '../components/TotalCart';

//import { useParams } from 'react-router-dom';

function Cart() {
  const [ producto, setProducto ] = useState([]);
  //const params = useParams();
  
   useEffect( () =>{
     setTimeout(
         ()=>{
             fetch('./constantes/productos.json')
                 .then(resp => resp.json())
                 .then(data => setProducto(data.filter( i => i.id === 1)))
         },2000
     )
   }, [] );

  return (
    <div className='body'>
        <Container>
            <Row>
                <Col className="colPadding">
                    <h3 className='pb-4 titulo'>Tu carrito de compras</h3>
                      
                    <Container>
                      <Row>
                        <Col md={8} className="contenedorDetalles">
                          <ItemCart producto={producto}/>
                        </Col>
                        <Col md={4}>
                          <TotalCart />
                        </Col>
                      </Row>
                    </Container>
                    
                </Col>
            </Row>
        </Container>
        
    </div>
               
  );
}

export default Cart;