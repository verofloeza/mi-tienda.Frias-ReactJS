import {Col, Container, Row} from 'react-bootstrap';
import React, { useContext, useState } from 'react';

import CartContext from '../store/cart-context';
import ItemListFav from '../components/ItemListFav';

function FavoritosPage() {
const { favoritos } = useContext(CartContext);
const [ productos, setProductos ] = useState(favoritos);

  return (
    <div className='body'>
        <Container>
            <Row>
                <Col className="colPadding">
                    <h3 className='pb-4 titulo'>Favoritos</h3> 
                    { productos.length !== 0
                    ? 
                    <ItemListFav productos={productos} />
                    : <p>No hay favoritos cargados...</p>
                    }
                     
                </Col>
            </Row>
        </Container>
        
    </div>
               
  );
}

export default FavoritosPage;