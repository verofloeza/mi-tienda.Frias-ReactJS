import './css/ItemListContainer.css';

import {Col, Container, Row} from 'react-bootstrap';
import React, { useEffect, useState } from 'react';

import ItemList from '../components/ItemList';
import Loading from '../components/Loading';
import { useParams } from 'react-router-dom';

function ItemListContainer() {
    const [ loading, setLoading ] = useState(true);
  const [ productos, setProductos ] = useState([]);
  const params = useParams();
  let categoria = params.category;

  useEffect( () =>{
  if(categoria === undefined ) {
    
      setTimeout(
          ()=>{
              fetch('constantes/productos.json')
                  .then(resp => resp.json())
                  .then(data => setProductos(data))
                  setLoading(false)
          },3000
      )
    
  }else{
      setTimeout(
          ()=>{
            fetch('../constantes/productos.json')
            .then(resp => resp.json())
            .then(data => setProductos(data.filter( i => i.categoria === categoria)))
            setLoading(false)
          },3000
      )
    
  }
}, [] );
  return (
    <div className='body'>
        <Container>
            <Row>
                <Col className="colPadding">
                     <h3 className='pb-4 titulo'>Productos</h3> 
                     { categoria !== undefined && 
                      <h4 className="pb-4 categoria ">{categoria}</h4>
                     }
                     { loading === true && <Loading />}
                    <ItemList productos={productos} />
                </Col>
            </Row>
        </Container>
        
    </div>
               
  );
}

export default ItemListContainer;