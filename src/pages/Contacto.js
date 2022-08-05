import './css/Contacto.css';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

import {Col, Container, Row} from 'react-bootstrap';
import React, { useState } from 'react';

import {Form} from 'react-bootstrap';
import { Link } from "react-router-dom";

function Contacto() {
  const [ enviado, setEnviado ] = useState(false);
  const [ nombre, setNombre ] = useState("");
  const [ email, setEmail ] = useState("");
  const [ telefono, setTelefono ] = useState("");
  return (
    <div className='body'>
      <Container>
        <Row>
            <Col className="colPadding">
                <h3 className='pb-4 titulo'>Contacto</h3>
                <p>
                    
                What is Lorem Ipsum? <br></br>
                    Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
                    
                </p>
            </Col>
            <Col>
            {
              enviado === false 
              ?
              <Form onSubmit={()=>{setEnviado(true)}} style={{marginTop: 70}}>
                    <Form.Group className="mb-3" controlId="Nombre">
                        <Form.Label>Nombre y apellido</Form.Label>
                        <Form.Control type="text" placeholder="Coloque su nombre y apellido" onChange={ (event) => setNombre(event.target.value) }/>
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="Email">
                        <Form.Label>Email</Form.Label>
                        <Form.Control type="email" placeholder="Coloque su email" onChange={ (event) => setEmail(event.target.value) } />
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="Telefono">
                        <Form.Label>Teléfono</Form.Label>
                        <Form.Control type="text" placeholder="Coloque su teléfono" onChange={ (event) => setTelefono(event.target.value) } />
                    </Form.Group>
                    <Link to="#" className="btn btn-lg buttonAccent float-end"> Enviar</Link>
                </Form>
                :
                <p>En la brevedad estaremos respondiendo su consulta. Muchas gracias!!</p>
                }
            </Col>
        </Row>
      </Container>  
    </div>
  );
}

export default Contacto;