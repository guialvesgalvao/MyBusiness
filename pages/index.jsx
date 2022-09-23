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
                      <img src="/1.png" alt="image2" />
  
                  </div>
                  <div>
                      <img src="/1.png" alt="image3"/>
                      <p className="legend">Image 3</p>
  
                  </div>
                  <div>
                      <img src="/1.png" alt="image4"/>
                      <p className="legend">Image 4</p>
  
                  </div>
                  <div>
                      <img src="/1.png" alt="image5"/>
                      <p className="legend">Image 5</p>
  
                  </div>
              </Carousel>
      <div>

      </div>
      <Container className="containerBanner" fluid>
        <Row>
          <Col>
            <Image src={test} alt="teste"/>
          </Col>
          <Col className="pt-5">
                <p className="textMovie "> Produzimos as melhores embalagens personalizadas que sua empresa merece, tudo com rapidez e qualidade</p>
                <button className="btnVI fundoBtnBanner">Solicite um Orçamento</button>
          </Col>
        </Row>
      </Container>
      <Container className="text-center pt-5 pb-2">
        <Row className="pb-3">
            <p>Acreditamos que a primeira impressão é a que fica, então a ABA Embalagens oferece a melhor embalagem para o seu produto, personalizada do seu jeito!</p>
        </Row >
        <Row>
        <iframe className="" width="727" height="409" src="https://www.youtube.com/embed/YTTvB8yQDt8" title="Vídeo Institucional Aba" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
        </Row>
        <Row className="pt-5">
        <p>Produzimos as melhores embalagens personalizadas que sua empresa merece, tudo com rapidez e qualidade</p>
        </Row>
        <Row className="displayBtn">
        <button className="btnVI widthBtnVI fundoBtnText">Confira nossos produtos!</button>
        </Row>

      </Container>
          <Container >
            <Row xs="6" className="pt-5 justify-content-around text-center">
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
            <Image src="/i-timer-r.png" alt="" width="150" height="150" layout="intrinsic"/>
            <p>Produção Rápida</p>
            </Col>
            </Row>
      </Container>
    </div>
  )
}
