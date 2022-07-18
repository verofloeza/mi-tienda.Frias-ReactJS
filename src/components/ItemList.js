import './css/ItemList.css';

import { Container, Row } from 'react-bootstrap';

import Item from './Item';
import React from 'react';

function ItemList(props) {
  

  return (
    <div>
        <Container>
            <Row>
                {
                    props.productos.map(
                        i => <Item key={i.id} nombre={i.title} precio={i.precio} marca={i.marca} imagen={i.image}/>
                    )
                }
                        
            </Row>
        </Container>
        
    </div>
               
  );
}

export default ItemList;