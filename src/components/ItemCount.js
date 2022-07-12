import { Button, Card, Col } from 'react-bootstrap';
import React, { useContext } from 'react';

import CartContext from '../store/cart-context';

function ItemCount(props){
    const { quitar, sumar, guardar, onAdd, cantCart } = useContext(CartContext);

    const agregarCarrito = () =>{
        onAdd(props.producto)
    }

    return(
        <>
            <Col xs={7}>
                <Card>
                    <Card.Body>
                        <div class="input-group mb-3">
                            <button onClick={quitar} className="input-group-text">-</button>
                            <input type="text" class="form-control" value={cantCart} onChange={guardar}/>
                            <button onClick={sumar} className="input-group-text">+</button>
                        </div>
                        <Button className="buttonAccent" onClick={agregarCarrito}>Agregar al carrito</Button>
                    </Card.Body>
                </Card>
            </Col>
        </>
    )
}

export default ItemCount;