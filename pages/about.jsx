import { Container,Button } from "reactstrap";
import ImageAbout from '../public/12.png';

import Image from "next/image";

export default function About () {

    return(
        <>
        <div className="containerAbout">
            <div className="text-part">
                <h3 className="title-text">Juntos vamos construir algo incrível</h3>
                <p>Somos uma empresa que tem como princípio a satisfação e priorização dos nosso clientes. Sempre com muita responsabilidade nas entregas.</p>
                <p>Desde 2019 atuando com rapidez e qualidade em nossas embalagens personalizadas, adquirindo cerca de mais de 100 clientes da grande São Paulo.</p>
                <p>Nossos produtos são de alta qualidade assim como o seu Negócio!</p>    
                <button className="btn-style">Entre em contato --&gt;</button> 
            </div>
            <div className="image-part">
                <Image src={ImageAbout} alt="Modelo Aba" width="800" height="800"/>
            </div>

        </div>
        </>
    )
}