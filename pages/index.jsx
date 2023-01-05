import { UncontrolledCarousel,Button,Row,Col, Container } from "reactstrap";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faWhatsapp} from '@fortawesome/free-brands-svg-icons';
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
                      <img src="/9.png" alt="image1"/>
                  </div>
                  <div>
                      <img src="/10.png" alt="image2" />
                  </div>
                  <div>
                      <img src="/11.png" alt="image3"/>  
                  </div>
                  <div>
                      <img src="/8.png" alt="image4"/>  
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
                <button className="btnVII fundoBtnBanner">Solicite um Orçamento</button>
          </Col>
        </Row>
      </Container>
      <Container className="text-center pt-5 pb-2 fontQuick">
        <Row className="pb-3 pStyle">
            <p>Acreditamos que a primeira impressão é a que fica, então a ABA Embalagens oferece a melhor embalagem para o seu produto, personalizada do seu jeito!</p>
        </Row >
        <Row>
        <iframe className="" width="727" height="409" src="https://www.youtube.com/embed/YTTvB8yQDt8" title="Vídeo Institucional Aba" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
        </Row>
        <Row className="pt-5 pStyle ab">
        <p>Produzimos as melhores embalagens personalizadas que sua empresa merece, tudo com rapidez e qualidade</p>
        </Row>
        <Row className="displayBtn">
        <button className="btnVI widthBtnVI fundoBtnText">Confira nossos produtos!</button>
        </Row>

      </Container>
          <Container >
            <Row xs="6" className="pt-5 justify-content-around text-center fontQuick">
            <Col className="">
                <Image src="/i-pers-r.png" alt="" width="150" height="150" layout="intrinsic"/>
                <p className="descSty">Personalização do seu jeito!</p>
            </Col>
            <Col className="">
            <Image src="/i-caixa-r.png" alt="" width="150" height="150" layout="intrinsic"/>
            <p className="descSty">Resistência e Qualidade</p>
            </Col>
            <Col className="">
            <Image src="/i-entrega-r.png" alt="" width="150" height="150" layout="intrinsic"/>
            <p className="descSty">Entrega Rápida</p>
            </Col>
            <Col className="">
            <Image src="/i-timer-r.png" alt="" width="150" height="150" layout="intrinsic"/>
            <p className="descSty">Produção Rápida</p>
            </Col>
            </Row>
      </Container>
      <div className="popup">
        <a href="https://api.whatsapp.com/send?1=pt_BR&phone=5511995249688" className="whatsapp-link" target="_blank" rel="noreferrer">
        <FontAwesomeIcon icon={faWhatsapp} />
        </a>
      </div>
    </div>
  )
}
