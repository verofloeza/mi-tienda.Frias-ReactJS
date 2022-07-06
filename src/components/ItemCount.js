import { Button, Card, Col } from 'react-bootstrap';
import React, { useState } from 'react';

function ItemCount(props){
    const [ cant, setCant] = useState(1);
    const { onAdd } = props;

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

    const agregarCarrito = () =>{
        onAdd(cant)
    }

    return(
        <>
            <Col xs={7}>
                <Card>
                    <Card.Body>
                        <div class="input-group mb-3">
                            <button onClick={quitar} className="input-group-text">-</button>
                            <input type="text" class="form-control" value={cant} onChange={guardar}/>
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