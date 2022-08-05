import './css/Item.css';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

import { Card, Col } from 'react-bootstrap';

import { Link } from "react-router-dom";
import React from 'react';

function ItemSearch(props) {

  return (
                <Col className="col-3 pb-4">
                    <Link to={`/producto/${props.nombre.replace(" ", "-")}`} onClick={()=>{props.showSearch(false)}}>
                        <Card>
                            <Card.Body>
                                    <img src={props.imagen} alt={props.nombre} style={{width: '100%'}}/> 
                                    <h5 className='titulo' style={{width: "100%"}}><strong>{props.nombre}</strong></h5>
                                    <p className='precio'>${props.precio}</p>
                            </Card.Body>
                        </Card>
                    </Link>  
                </Col>       
  );
}

export default ItemSearch;