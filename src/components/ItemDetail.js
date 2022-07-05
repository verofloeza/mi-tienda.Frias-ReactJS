import './css/ItemDetail.css';

import { Button, Card, Col, Container, Row } from 'react-bootstrap';
import React, { useState } from 'react';

import { AiOutlineHeart } from "react-icons/ai";

function ItemDetail(props) { 
    const [ cant, setCant] = useState(0);
    const producto = props.productoDetalle[0];
    
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
    const guardar = (event) => setCant(event.target.value);

  return (
    <div>
        <Container>
            <Row>
                <Col md={2}>
                    <ul>
                        <li className='imagenThumbail'>
                            <img src={require(`../assets/images/productos/${producto.imagen}`)} alt={producto.nombre} style={{width: '100%'}}/> 
                        </li>
                    </ul>
                </Col>
                <Col md={6}>
                    <div className='imagenPrincipal'>
                       <img src={require(`../assets/images/productos/${producto.imagen}`)} alt={producto.nombre} style={{width: '100%'}}/> 
                    </div>
                </Col>
                <Col className='productoDescripcion'>
                    <Container>
                        <Row>
                            <Col xs={10}>
                                <h2 className='marca'>{producto.marca}</h2>
                            </Col>
                            <Col xs={2}>
                                <AiOutlineHeart/>
                            </Col>
                        </Row>
                        <Row>
                            <Col>
                                <h1>{producto.nombre}</h1>
                            </Col>
                        </Row>
                        <Row>
                            <Col>
                                <p>{producto.descripcion}</p>
                            </Col>
                        </Row>
                        <Row>
                            <Col>
                                <div className='precio'>${producto.precio}</div>
                            </Col>
                        </Row>
                        <Row className="justify-content-md-center">
                            <Col xs={7}>
                                <Card>
                                    <Card.Body>
                                        <div class="input-group mb-3">
                                        <button onClick={quitar} className="input-group-text">-</button>
                                        <input type="text" class="form-control" value={cant} onChange={guardar}/>
                                        <button onClick={sumar} className="input-group-text">+</button>
                                        </div>
                                        <Button className="buttonAccent">Agregar al carrito</Button>
                                    </Card.Body>
                                </Card>
                            </Col>
                        </Row>
                    </Container>
                    
                </Col>

            </Row>
        </Container>
        
    </div>
               
  );
}

export default ItemDetail;