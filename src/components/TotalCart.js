import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

import {Card, Col, Container, Row} from 'react-bootstrap';
import React, { useContext } from 'react';

import CartContext from '../store/cart-context';
import { Link } from "react-router-dom";

function ItemCart() {
    const { itemsCarrito } = useContext(CartContext);
    
    let suma=0;
    itemsCarrito.map( i =>  suma = ( suma + ( parseInt(i.item.precio) * parseInt(i.quality)) )) 

    
  return (
                <Col>
                        <Card className='itemCarrito'>
                            <Card.Body>
                                <Container>
                                    <Row>
                                        <Col className='colTotales'>
                                            <h4>Resumen</h4>
                                        </Col>
                                    </Row>
                                    <Row>
                                        <Col className='colTotales'>
                                            <Container>
                                                <Row>
                                                    <Col className='totalText'>Total:</Col>
                                                    <Col className='totalPrecio'>$ {suma}</Col>
                                                </Row>
                                            </Container>
                                        </Col>
                                    </Row>
                                    <Row>
                                        <Col className='colTotales'>
                                            <Link to="#" className="btn btn-lg buttonAccent float-end"> Finalizar compra</Link>
                                            <Link to="/productos" className="btn btn-lg buttonPrimary float-end mt-3"> Seguir Comprando</Link>
                                        </Col>
                                    </Row>
                                </Container>
                            </Card.Body>
                        </Card>
                </Col>       
  );
}

export default ItemCart;