import './css/Item.css';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

import {Button, Card, Col} from 'react-bootstrap';
import React, { useContext, useEffect, useState } from 'react';

import { AiOutlineHeart } from "react-icons/ai";
import { BsHeartFill } from "react-icons/bs";
import CartContext from '../store/cart-context';
import { Link } from "react-router-dom";

function Item(props) {
    const { addFavoritos, favoritos, deleteFavoritos } = useContext(CartContext);
    const [ fav, setFav ] = useState(false)

    useEffect(
        () => {
            favoritos.lenght !== 0 &&
                favoritos.filter( i => i.producto.title === props.nombre && setFav(!fav))
        }, []
    )

    const agregarFavoritos = () => {
        addFavoritos(props.producto)
        setFav(true)
    }
    const quitarFavoritos = () => {
        deleteFavoritos(props.nombre)
        setFav(false)
    }
  return (
                <Col className="col-3 pb-4">
                    
                        <Card>
                            <Card.Body>
                                <Link to={`/producto/${props.nombre.replace(" ", "-")}`}>
                                    <img src={props.imagen} alt={props.nombre} style={{width: '100%'}}/> 
                                </Link>  
                                {
                                    fav === false ?
                                    <span className='favorito'><AiOutlineHeart onClick={agregarFavoritos}/></span>
                                    :
                                    <span className='favoritoActivo'><BsHeartFill onClick={quitarFavoritos}/></span>
                                }

                                    <h5 className='titulo' style={{width: "100%"}}><strong>{props.nombre}</strong></h5>
                                    <p className='marca'>{props.marca}</p>
                                    <p className='precio'>${props.precio}</p>
                                <Link to={`/producto/${props.nombre.replace(" ", "-")}`} style={{width: "100%"}}>
                                    <Button className="buttonAccent mb-3">Ver producto</Button>
                                 </Link>   
                            </Card.Body>
                        </Card>
                    
                </Col>       
  );
}

export default Item;