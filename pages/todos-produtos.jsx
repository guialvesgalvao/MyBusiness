import ImageAbout from '../public/12.png';
import i21 from '../public/21.png';
import i22 from '../public/22.png';
import i23 from '../public/23.png';
import i24 from '../public/24.png';
import i25 from '../public/25.png';
import i26 from '../public/26.png';
import i27 from '../public/27.png';
import i28 from '../public/28.png';
import i29 from '../public/29.png';
import Image from 'next/image';

export default function Produto () {

    return (
        <>
        <div className="container1">
        <div className="card">
            <div className="face face1">
                <div className="">
                <Image src={i29} alt="Caixas de Pizza" layout='fill'/>
                </div>
            </div>
            <div className="face face2">
                <div className="content">
                    <p className="desc-card-hover">• Caixas de Pizza oitavadas, fotográficas e conjugadas. Impressão off set fotográfica .
                    Tamanhos: Broto 25, Caixa 30, Caixa 35 e Caixa 40.</p>
                        <a className="card-products-button" href="#">Ver Mais</a>
                </div>
            </div>
        </div>
        <div className="card">
            <div className="face face1">
                <div className="">
                <Image src={i21} alt="Guardanapos Personalizados" layout='fill'/>
                </div>
            </div>
            <div className="face face2">
                <div className="content">
                    <p className="desc-card-hover">Guardanapos personalizados em diferentes tamanhos.</p>
                        <a className="card-products-button" href="#">Ver Mais</a>
                </div>
            </div>
        </div>
        <div className="card">
            <div className="face face1">
                <div className="">
                <Image src={i22} alt="Copos Personalizados" layout='fill'/>
                </div>
            </div>
            <div className="face face2">
                <div className="content">
                    <p className="desc-card-hover">Trabalhamos com diversos tipos de Copos Personalizados em diferentes tamanhos.</p>
                        <a className="card-products-button" href="#">Ver Mais</a>
                </div>
            </div>
        </div>
        <div className="card">
            <div className="face face1">
                <div className="">
                <Image src={i23} alt="Sacos de Papel" layout='fill'/>
                </div>
            </div>
            <div className="face face2">
                <div className="content">
                    <p className="desc-card-hover">Trabalhamos com diversos tipos de sacos personalizados em diferentes tamanhos.</p>
                        <a className="card-products-button" href="#">Ver Mais</a>
                </div>
            </div>
        </div>
        <div className="card">
            <div className="face face1">
                <div className="">
                <Image src={i24} alt="Caixas E-Commerce" layout='fill'/>
                </div>
            </div>
            <div className="face face2">
                <div className="content">
                    <p className="desc-card-hover">Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas cum cumque minus iste veritatis provident at.</p>
                        <a className="card-products-button" href="#">Ver Mais</a>
                </div>
            </div>
        </div>
        <div className="card">
            <div className="face face1">
                <div className="">
                <Image src={i25} alt="Impressos Gráficos" layout='fill'/>
                </div>
            </div>
            <div className="face face2">
                <div className="content">
                    <p className="desc-card-hover">Catálogos, folhetos e papelaria.</p>
                        <a className="card-products-button" href="#">Ver Mais</a>
                </div>
            </div>
        </div>
        <div className="card">
            <div className="face face1">
                <div className="">
                <Image src={i26} alt="Pdv" layout='fill'/>
                </div>
            </div>
            <div className="face face2">
                <div className="content">
                    <p className="desc-card-hover">Sua empresa em destaque nos pontos de venda.</p>
                        <a className="card-products-button" href="#">Ver Mais</a>
                </div>
            </div>
        </div>
        <div className="card">
            <div className="face face1">
                <div className="">
                <Image src={i27} alt="Caixas de Esfiha" layout='fill'/>
                </div>
            </div>
            <div className="face face2">
                <div className="content">
                    <p className="desc-card-hover">• Caixas de Esfiha, Impressão off set fotográfica
                    Tamanhos: P, M, G e GG.</p>
                        <a className="card-products-button" href="#">Ver Mais</a>
                </div>
            </div>
        </div>
        <div className="card">
            <div className="face face1">
                <div className="">
                <Image src={i28} alt="Embalagens para diversos" layout='fill'/>
                </div>
            </div>
            <div className="face face2">
                <div className="content">
                    <p className="desc-card-hover">Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas cum cumque minus iste veritatis provident at.</p>
                        <a className="card-products-button" href="#">Ver Mais</a>
                </div>
            </div>
        </div>
    </div>
        </>
    )
}
