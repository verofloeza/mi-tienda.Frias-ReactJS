import './css/ItemListContainer.css';

import {Col, Container, Row} from 'react-bootstrap';

function ItemListContainer() {
  return (
    <div className='body'>
        <Container>
            <Row>
                <Col className="colPadding">
                    <h2>Listado de productos</h2> 
                </Col>
            </Row>
        </Container>
        
    </div>
               
  );
}

export default ItemListContainer;