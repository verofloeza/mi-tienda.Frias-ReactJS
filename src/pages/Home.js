import './css/Home.css';
import "react-alice-carousel/lib/alice-carousel.css";

import { Col, Container, Row } from 'react-bootstrap';
import React, { useEffect, useState } from 'react';
import { collection, getDocs, getFirestore, query, where } from 'firebase/firestore/lite';

import AliceCarousel from 'react-alice-carousel';
import ItemList from '../components/ItemList';
import Loading from '../components/Loading';

function Home() {
    const [ loading, setLoading ] = useState(true);
    const [ catUno, setCatUno ] = useState([]);
    const [ catDos, setCatDos ] = useState([]);
    const [ catTres, setCatTres ] = useState([]);
    const [ catCuatro, setCatCuatro ] = useState([]);
    const [ catCinco, setCatCinco ] = useState([]);
    const db = getFirestore();

    useEffect( () =>{
    //   setTimeout(
    //       ()=>{
    //           fetch('constantes/productos.json')
    //               .then(resp => resp.json())
    //               .then(data => {
    //                 setCatUno(data.filter( i => i.categoria === "Accesorios" ))
    //                 setCatDos(data.filter( i => i.categoria === "Juguetes" ))
    //                 setCatTres(data.filter( i => i.categoria === "Lámparas" ))
    //                 setCatCuatro(data.filter( i => i.categoria === "Muebles" ))
    //                 })
    //                 setLoading(false)
    //       },3000
    //   )
    const itemsAcc = query(collection( db, "product"), where ( "categoria", "==", "Accesorios") )
        getDocs(itemsAcc).then((snapshot) => {
            setCatUno(snapshot.docs.map((doc) => (doc.data())))
         })
    const itemsJug = query(collection( db, "product"), where ( "categoria", "==", "Juguetes") )
         getDocs(itemsJug).then((snapshot) => {
             setCatDos(snapshot.docs.map((doc) => (doc.data())))
          })
    const itemsLam = query(collection( db, "product"), where ( "categoria", "==", "Lamparas") )
          getDocs(itemsLam).then((snapshot) => {
              setCatTres(snapshot.docs.map((doc) => (doc.data())))
           })
    const itemsMue = query(collection( db, "product"), where ( "categoria", "==", "Muebles") )
           getDocs(itemsMue).then((snapshot) => {
               setCatCuatro(snapshot.docs.map((doc) => (doc.data())))
            })
    const itemsRel = query(collection( db, "product"), where ( "categoria", "==", "Relojes") )
            getDocs(itemsRel).then((snapshot) => {
                setCatCinco(snapshot.docs.map((doc) => (doc.data())))
             })
    setLoading(false)
    }, [] );

  return (
    <div className='body'>
        <AliceCarousel autoPlay autoPlayInterval="3000">
            <img src={require('../assets/images/slide/slider-accesorios.jpg')} className="sliderimg"/>
            <img src={require('../assets/images/slide/slider-juguetes.jpg')} className="sliderimg"/>
            <img src={require('../assets/images/slide/slider-lamparas.jpg')} className="sliderimg"/>
            <img src={require('../assets/images/slide/slider-muebles.jpg')} className="sliderimg"/>
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
                    { loading === true && <Loading />}
                    <ItemList productos={catUno} />
                </Col>
            </Row>
            <Row>
                <Col className="colPadding">
                    <h3 className='pb-4 titulo'>Juguetes</h3>
                    { loading === true && <Loading />}
                    <ItemList productos={catDos} />
                </Col>
            </Row>
            <Row>
                <Col className="colPadding">
                    <h3 className='pb-4 titulo'>Lámparas</h3>
                    { loading === true && <Loading />}
                    <ItemList productos={catTres} />
                </Col>
            </Row>
            <Row>
                <Col className="colPadding">
                    <h3 className='pb-4 titulo'>Muebles</h3>
                    { loading === true && <Loading />}
                    <ItemList productos={catCuatro} />
                </Col>
            </Row>
            <Row>
                <Col className="colPadding">
                    <h3 className='pb-4 titulo'>Relojes</h3>
                    { loading === true && <Loading />}
                    <ItemList productos={catCinco} />
                </Col>
            </Row>
        </Container>
        
    </div>
               
  );
}

export default Home;