import ImageAbout from '../public/12.png';
import Image from 'next/image';

export default function Produto () {

    return (
        <>
        <div className="container">
        <div className="card">
            <div className="face face1">
                <div className="">
                <Image src={ImageAbout} alt="Modelo Aba" layout='fill'/>
                </div>
            </div>
            <div className="face face2">
                <div className="content">
                    <p className="desc-card-hover">Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas cum cumque minus iste veritatis provident at.</p>
                        <a className="card-products-button" href="#">Read More</a>
                </div>
            </div>
        </div>
        <div className="card">
            <div className="face face1">
                <div className="">
                <Image src={ImageAbout} alt="Modelo Aba" layout='fill'/>
                </div>
            </div>
            <div className="face face2">
                <div className="content">
                    <p className="desc-card-hover">Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas cum cumque minus iste veritatis provident at.</p>
                        <a className="card-products-button" href="#">Read More</a>
                </div>
            </div>
        </div>
        <div className="card">
            <div className="face face1">
                <div className="">
                <Image src={ImageAbout} alt="Modelo Aba" layout='fill'/>
                </div>
            </div>
            <div className="face face2">
                <div className="content">
                    <p className="desc-card-hover">Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas cum cumque minus iste veritatis provident at.</p>
                        <a className="card-products-button" href="#">Read More</a>
                </div>
            </div>
        </div>
    </div>
        </>
    )
}
