import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

import {Card, Col, Container, Row} from 'react-bootstrap';

import { FaTrashAlt } from "react-icons/fa";
import React from 'react';

function ItemCart(props) {
  return (
                <Col>
                        <Card className='itemCarrito'>
                            <Card.Body>
                                <Container>
                                    <Row>
                                        <Col xs={3}>
                                            <img src={require(`../assets/images/productos/${props.producto[0].imagen}`)} alt={props.producto[0].nombre} className="imageThumb"/>
                                        </Col>
                                        <Col xs={6}>
                                            <h5 className='titulo'><strong>{props.producto[0].nombre}</strong></h5>
                                            <p className='marca'>{props.producto[0].marca}</p>
                                            <div className="mb-3 row">
                                                <label for="staticEmail" className="col-4 col-form-label textUnid">Unidades</label>
                                                <div className="col-2">
                                                    <input type="text" className='form-control inputUnid' value="5" />
                                                </div>
                                            </div>
                                            <p className='precio'>${props.producto[0].precio}</p>
                                        </Col>
                                        <Col xs={3}>
                                            <span className='favorito'>
                                                <FaTrashAlt/> Eliminar
                                            </span>
                                        </Col>
                                    </Row>
                                </Container>
                            </Card.Body>
                        </Card>
                </Col>       
  );
}

export default ItemCart;