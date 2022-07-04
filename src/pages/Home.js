import './css/Home.css';
import "react-alice-carousel/lib/alice-carousel.css";

import { Col, Container, Row } from 'react-bootstrap';
import React, { useEffect, useState } from 'react';

import AliceCarousel from 'react-alice-carousel';
import ItemList from '../components/ItemList';

function Home() {
    const [ catUno, setCatUno ] = useState([]);
    const [ catDos, setCatDos ] = useState([]);
    const [ catTres, setCatTres ] = useState([]);
    const [ catCuatro, setCatCuatro ] = useState([]);

    useEffect( () =>{
      setTimeout(
          ()=>{
              fetch('constantes/productos.json')
                  .then(resp => resp.json())
                  .then(data => {
                    setCatUno(data.filter( i => i.categoria === "Accesorios" ))
                    setCatDos(data.filter( i => i.categoria === "Juguetes" ))
                    setCatTres(data.filter( i => i.categoria === "Lámparas" ))
                    setCatCuatro(data.filter( i => i.categoria === "Muebles" ))
                    })
          },3000
      )
    }, [] );

  return (
    <div className='body'>
        <AliceCarousel autoPlay autoPlayInterval="3000">
            <img src={require('../assets/images/sin-imagen.jpg')} className="sliderimg"/>
            <img src={require('../assets/images/sin-imagen.jpg')} className="sliderimg"/>
            <img src={require('../assets/images/sin-imagen.jpg')} className="sliderimg"/>
            <img src={require('../assets/images/sin-imagen.jpg')} className="sliderimg"/>
        </AliceCarousel>
        <Container>
            <Row>
                <Col>
                </Col>
            </Row>
        </Container>
        <Container>
            <Row>
                <Col className="colPadding">
                    <h3 className='pb-4 titulo'>Accesorios</h3>
                    <ItemList productos={catUno} />
                </Col>
            </Row>
            <Row>
                <Col className="colPadding">
                    <h3 className='pb-4 titulo'>Juguetes</h3>
                    <ItemList productos={catDos} />
                </Col>
            </Row>
            <Row>
                <Col className="colPadding">
                    <h3 className='pb-4 titulo'>Lámparas</h3>
                    <ItemList productos={catTres} />
                </Col>
            </Row>
            <Row>
                <Col className="colPadding">
                    <h3 className='pb-4 titulo'>Muebles</h3>
                    <ItemList productos={catCuatro} />
                </Col>
            </Row>
        </Container>
        
    </div>
               
  );
}

export default Home;