import './css/ItemList.css';

import { Container, Row } from 'react-bootstrap';
import React, { useEffect, useState } from 'react';

import Item from './Item';

function ItemList() {
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

  return (
    <div>
        <Container>
            <Row>
                {
                    productos.map(
                        i => <Item nombre={i.nombre} precio={i.precio} marca={i.marca} />
                    )
                }
                        
            </Row>
        </Container>
        
    </div>
               
  );
}

export default ItemList;