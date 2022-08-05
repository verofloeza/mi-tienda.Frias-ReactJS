import './css/ItemList.css';

import { Container, Row } from 'react-bootstrap';

import ItemSearch from './ItemSearch';
import React from 'react';

function ItemListSearch(props) {
  

  return (
    <div>
        <Container>
            <Row>
                {
                    props.productosSearch.map(
                        i => <ItemSearch key={i.title} nombre={i.title} precio={i.precio} marca={i.marca} imagen={i.image} producto={i} showSearch={props.showSearch}/>
                    )
                }
                        
            </Row>
        </Container>
        
    </div>
               
  );
}

export default ItemListSearch;