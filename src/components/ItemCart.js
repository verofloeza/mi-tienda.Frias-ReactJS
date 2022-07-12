import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

import {Card, Col, Container, Row} from 'react-bootstrap';
import React, { useContext } from 'react';

import CartContext from '../store/cart-context';
import { FaTrashAlt } from "react-icons/fa";

function ItemCart() {
    const { itemsCarrito } = useContext(CartContext);

  return (
    <Col>
      <Card className='itemCarrito'>
        <Container>
          <Row>
            <Col> </Col>
          </Row>
          {itemsCarrito.map( i => 
          <Row>
            <Col xs={3}>
              <img src={require(`../assets/images/productos/${i.item.imagen}`)} alt={i.item.nombre} className="imageThumb"/>
            </Col>
            <Col xs={6}>
              <h5 className='titulo'><strong>{i.item.nombre}</strong></h5>
              <p className='marca'>{i.item.marca}</p>
              <div className="mb-3 row">
                <label for="staticEmail" className="col-4 col-form-label textUnid">Unidades</label>
                <div className="col-2">
                  <input type="text" className='form-control inputUnid' value={i.quality} />
                </div>
              </div>
              <p className='precio'>${(i.item.precio*i.quality)}</p>
            </Col>
            <Col xs={3}>
              <span className='favorito'>
                <FaTrashAlt/> Eliminar
              </span>
            </Col>
          </Row>
          )}
        </Container>
      </Card>
    </Col>
          
  );
}

export default ItemCart;