import './css/ItemDetail.css';

import { Col, Container, Row } from 'react-bootstrap';
import React, { useContext, useState } from 'react';

import { AiOutlineHeart } from "react-icons/ai";
import CartContext from '../store/cart-context';
import ItemCount from './ItemCount';
import { Link } from "react-router-dom";

function ItemDetail(props) { 
    const producto = props.productoDetalle[0];
    const [ counter, setCounter] = useState(true);
    const [ compra, setCompra] = useState(false);

    const { onAdd } = useContext(CartContext);

    const agregarCarrito = (cantCart) =>{
        onAdd(producto, cantCart);
        setCounter(!counter);
        setCompra(!compra);
    }

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
                            { counter === true && <ItemCount producto={producto} agregarCarrito={agregarCarrito}/>}
                            { compra === true && 
                                <Col className="mt-5">
                                    <Link to={`/cart`} className="btn btn-lg buttonAccent"> Finalizar compra</Link>
                                </Col> 
                            }
                        </Row> 
                    </Container>
                    
                </Col>

            </Row>
        </Container>
        
    </div>
               
  );
}

export default ItemDetail;