import './css/Vendedores.css';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

import { Card, Col } from 'react-bootstrap';

import { Link } from "react-router-dom";
import React from 'react';

function Vendedores(props) {
  return (
                <Col className="col-3 pb-3">
                    <Link to={`/tienda/${props.nombre.replace(" ", "-")}`}>
                        <Card className="text-truncate cardVendedor">
                            <Card.Body>
                                <img src={require(`../assets/vendedores/${props.imagen}`)} alt={props.nombre} style={{width: '100%'}}/>  
                                <h5 className='titulo mt-3'><strong>{props.nombre}</strong></h5>
                                <p className='marca'>{props.email}</p> 
                                <p className='precio'>{props.direccion}</p>
                                <p className='precio'>{props.tel}</p>
                            </Card.Body>
                        </Card>
                    </Link>
                </Col>       
  );
}

export default Vendedores;