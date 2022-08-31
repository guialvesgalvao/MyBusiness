import { UncontrolledCarousel,Button,Row,Col, Container } from "reactstrap";

import Image from "next/image";

export default function Home() {
  
  return (
    <div className="backColor">
      <div>
        <p>lugar da image</p>
        <p>Produzimos as melhores embalagens personalizadas que sua empresa merece, tudo com rapidez e qualidade</p>
        <p><button>Confira nossos produtos!</button></p>
      </div>
      <Container  fluid className="bannerMovie">
      <Row>
        <Col><iframe width="500" height="250" src="https://www.youtube.com/embed/SLXFF8cl6qE" title="Gameplay" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
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
          </Row>
            <Row>
            <Col>
                <p>imagem 1</p>
            </Col>
            <Col>
                <p>imagem 2</p>
            </Col>
            <Col>
                <p>imagem 3</p>
            </Col>
            <Col>
                <p>imagem 4</p>
            </Col>
            </Row>
      </Container>
    </div>
  )
}
