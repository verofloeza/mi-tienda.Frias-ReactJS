import './css/ItemDetail.css';

import { Col, Container, Row } from 'react-bootstrap';
import React, { useContext, useEffect, useState } from 'react';

import { AiOutlineHeart } from "react-icons/ai";
import { BsHeartFill } from "react-icons/bs";
import CartContext from '../store/cart-context';
import ItemCount from './ItemCount';
import { Link } from "react-router-dom";

function ItemDetail(props) { 
    const producto = props.productoDetalle[0];
    const [ counter, setCounter] = useState(true);
    const [ compra, setCompra] = useState(false);
    const { addFavoritos, favoritos, deleteFavoritos, onAdd } = useContext(CartContext);
    const [ fav, setFav ] = useState(false)

    useEffect(
        () => {
            favoritos.lenght !== 0 &&
                favoritos.find( i => i.producto.title === producto.title && setFav(!fav))
        }, []
    )

    const agregarFavoritos = () => {
        addFavoritos(producto)
        setFav(true)
    }
    const quitarFavoritos = () => {
        deleteFavoritos(producto.title)
        setFav(false)
    }


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
                            <img src={producto.image} alt={producto.title} style={{width: '100%'}}/> 
                        </li>
                    </ul>
                </Col>
                <Col md={6}>
                    <div className='imagenPrincipal'>
                       <img src={producto.image} alt={producto.title} style={{width: '100%'}}/> 
                    </div>
                </Col>
                <Col className='productoDescripcion'>
                    <Container>
                        <Row>
                            <Col xs={10}>
                                <h2 className='marca'>{producto.marca}</h2>
                            </Col>
                            <Col xs={2}>
                            {
                                    fav === false ?
                                    <span className='favorito'><AiOutlineHeart onClick={agregarFavoritos}/></span>
                                    :
                                    <span className='favoritoActivo'><BsHeartFill onClick={quitarFavoritos}/></span>
                                }
                            </Col>
                        </Row>
                        <Row>
                            <Col>
                                <h1>{producto.title}</h1>
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
                            { counter === true && <ItemCount agregarCarrito={agregarCarrito}/>}
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