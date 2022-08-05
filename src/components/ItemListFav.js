import './css/ItemList.css';

import { Container, Row } from 'react-bootstrap';

import Item from './Item';
import React from 'react';

function ItemListFav(props) {
  

  return (
    <div>
        <Container>
            <Row>
                {
                    props.productos.map(
                        i => <Item key={i.producto.title} nombre={i.producto.title} precio={i.producto.precio} marca={i.producto.marca} imagen={i.producto.image} producto={i.producto}/>
                    )
                }
                        
            </Row>
        </Container>
        
    </div>
               
  );
}

export default ItemListFav;