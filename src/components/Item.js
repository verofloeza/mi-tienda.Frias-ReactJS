import './css/Item.css';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

import {Button, Card, Col} from 'react-bootstrap';

import { AiOutlineHeart } from "react-icons/ai";
import React from 'react';

function Item(props) {
  return (
                <Col className="col-3 pb-4">
                    <Card className='card'>
                        <Card.Body>
                            <img src={require('../assets/images/sin-imagen.jpg')} alt={props.nombre} style={{width: '100%'}}/>   
                            <span className='favorito'><AiOutlineHeart/></span>
                            <h5 className='titulo'><strong>{props.nombre}</strong></h5>
                            <p className='marca'>{props.marca}</p>
                            <p className='precio'>${props.precio}</p>
                            
                            <Button className="buttonAccent">Agregar al carrito</Button>
                        </Card.Body>
                    </Card>
                </Col>       
  );
}

export default Item;