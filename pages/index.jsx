import { UncontrolledCarousel,Button,Row,Col, Container } from "reactstrap";

import React, { Component } from 'react';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from 'react-responsive-carousel';
import test from '../public/faixaBanner.png'

import Image from "next/image";

export default function Home() {
  
  return (
    <div className="backColor">
              <Carousel>
                  <div>
                      <img src="/1.png" alt="image1"/>
                      <button className="legend">Image 1</button>
  
                  </div>
                  <div>
                      <img src="/2.jpg" alt="image2" />
  
                  </div>
                  <div>
                      <img src="/3.jpg" alt="image3"/>
                      <p className="legend">Image 3</p>
  
                  </div>
                  <div>
                      <img src="/4.png" alt="image4"/>
                      <p className="legend">Image 4</p>
  
                  </div>
                  <div>
                      <img src="/5.jpg" alt="image5"/>
                      <p className="legend">Image 5</p>
  
                  </div>
              </Carousel>
      <div>

      </div>
      <Container fluid className="containerBanner pt-3 pb-3 mb-5 ">
      <Row>
        <Col>
        <Image src={test} alt="teste"/>
        </Col>
          <Col>
            <div className="alignBanner">
              <p className="textMovie "> Produzimos as melhores embalagens personalizadas que sua empresa merece, tudo com rapidez e qualidade</p>
              <button className="btnOrc">Solicite um Orçamento</button>
            </div>
          </Col>
      </Row>
      </Container>
      <Container fluid>
          <Row>
            <p>Acreditamos que a primeira impressão é a que fica, então a ABA Embalagens oferece a melhor embalagem para o seu produto, personalizada do seu jeito!</p>
            <p>lugar da image</p>
        <p>Produzimos as melhores embalagens personalizadas que sua empresa merece, tudo com rapidez e qualidade</p>
        <p><button>Confira nossos produtos!</button></p>
          </Row>
            <Row className="pt-5">
            <Col className="testevh">
                <Image src="/i-pers-r.png" alt="" width="50" height="50" layout="responsive"/>
                <p>Personalização do seu jeito!</p>
            </Col>
            <Col className="testevh">
            <Image src="/i-caixa-r.png" alt="" width="12" height="12" layout="responsive"/>
            <p>Resistência e Qualidade</p>
            </Col>
            <Col className="testevh">
            <Image src="/i-entrega-r.png" alt="" width="12" height="12" layout="responsive"/>
            <p>Entrega Rápida</p>
            </Col>
            <Col className="testevh">
            <Image src="/i-timer-r.png" alt="" width="12" height="12"  layout="responsive"/>
            <p>entrega rápida</p>
            </Col>
            </Row>
      </Container>
    </div>
  )
}
