import './css/ItemListContainer.css';

import {Button, Card, Col, Container, Row} from 'react-bootstrap';
import React, { useEffect, useState } from 'react';

import ItemList from './ItemList';

function ItemListContainer(props) {
  const [ cant, setCant] = useState(0);
  const [ productos, setProductos ] = useState([]);

  useEffect( () =>{
    setTimeout(
        ()=>{
            fetch('constantes/productos.json')
                .then(resp => resp.json())
                .then(data => setProductos(data))
        },3000
    )
  }, [] );

  const sumar = () => 
  {
    if( cant < props.stock ){
      setCant(cant+1);
    }
  }

  const quitar = () => 
  {
    if( cant > props.inicial ){
      setCant(cant-1);
    }
  }
  

  return (
    <div className='body'>
        <Container>
            <Row>
                <Col className="colPadding">
                    <h3 className='pb-4 titulo'>Listado de productos</h3>
                    
                    <ItemList productos={productos} />
                    {/* <Card className='card'>
                      <Card.Body>
                        <div class="input-group mb-3">
                          <button onClick={quitar} className="input-group-text">-</button>
                          <input type="text" class="form-control" value={cant} />
                          <button onClick={sumar} className="input-group-text">+</button>
                        </div>
                        <Button className="buttonAccent">Agregar al carrito</Button>
                      </Card.Body>
                    </Card> */}
                    
                    
                </Col>
            </Row>
        </Container>
        
    </div>
               
  );
}

export default ItemListContainer;