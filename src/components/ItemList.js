import './css/ItemList.css';

import { Container, Row } from 'react-bootstrap';
import React, { useEffect, useState } from 'react';

import Item from './Item';

function ItemList(props) {
  

  return (
    <div>
        <Container>
            <Row>
                {
                    props.productos.map(
                        i => <Item nombre={i.nombre} precio={i.precio} marca={i.marca} imagen={i.imagen} />
                    )
                }
                        
            </Row>
        </Container>
        
    </div>
               
  );
}

export default ItemList;