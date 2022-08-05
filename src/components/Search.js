import "./css/Modal.css";

import {Form, Modal} from 'react-bootstrap';
import React, { useEffect, useState } from "react";
import { collection, getDocs, getFirestore } from 'firebase/firestore/lite';

import ItemListSearch from "./ItemListSearch";

function ModalSearch(props){
    const db = getFirestore();
    const [ fullscreen, setFullscreen] = useState(true);
    const [ search, setSearch ] = useState([]);
    const [ productoSearch, setProductoSearch ] = useState([]);

    useEffect( () =>{
        const itemsProductos = collection( db, "product")
        getDocs(itemsProductos).then((snapshot) => {
            setSearch(snapshot.docs.map((doc) => (doc.data())))
        })
        props.showSearch === false && setSearch([]);
    }, [props.showSearch]);
    
    const buscar = (event) => {
            setProductoSearch([]);
            setProductoSearch(search.filter( i => i.title.toLowerCase().includes(event.target.value.toLowerCase())))
            console.log(productoSearch)
    };

    return(
        <Modal show={props.showSearch} onHide={props.handleCloseSearch} fullscreen={fullscreen} >
            <Modal.Header closeButton>
                <Modal.Title>Buscar...</Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <Form onChange={ buscar }>
                    <Form.Group className="mb-3" controlId="Buscar">
                        <Form.Control type="text" placeholder="Buscar..."/>
                    </Form.Group>
                </Form>
                { productoSearch.length !== 0 
                ? <ItemListSearch productosSearch={productoSearch} showSearch={props.showSearch} /> 
                : <p>No se encontraron productos...</p>
                }
            </Modal.Body>
        </Modal>
    );
};
export default ModalSearch;