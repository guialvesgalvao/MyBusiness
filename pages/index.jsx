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
      <Container className="">
        <Row>
          <Col>
            <Image src={test} alt="teste"/>
          </Col>
          <Col >
                <p className="textMovie "> Produzimos as melhores embalagens personalizadas que sua empresa merece, tudo com rapidez e qualidade</p>
                <Button className="">Solicite um Orçamento</Button>
          </Col>
        </Row>
      </Container>
      <Container >
          <Row>
            <p>Acreditamos que a primeira impressão é a que fica, então a ABA Embalagens oferece a melhor embalagem para o seu produto, personalizada do seu jeito!</p>
            <p>lugar da image</p>
        <p>Produzimos as melhores embalagens personalizadas que sua empresa merece, tudo com rapidez e qualidade</p>
        <p><button>Confira nossos produtos!</button></p>
          </Row >
          </Container>
          <Container >
            <Row xs="6" className="pt-5 justify-content-around">
            <Col className="">
                <Image src="/i-pers-r.png" alt="" width="150" height="150" layout="intrinsic"/>
                <p>Personalização do seu jeito!</p>
            </Col>
            <Col className="pl-3">
            <Image src="/i-caixa-r.png" alt="" width="150" height="150" layout="intrinsic"/>
            <p>Resistência e Qualidade</p>
            </Col>
            <Col className="testevh">
            <Image src="/i-entrega-r.png" alt="" width="150" height="150" layout="intrinsic"/>
            <p>Entrega Rápida</p>
            </Col>
            <Col className="testevh">
            <Image src="/i-entrega-r.png" alt="" width="150" height="150" layout="intrinsic"/>
            <p>Entrega Rápida</p>
            </Col>
            </Row>
      </Container>
    </div>
  )
}
