import { Carousel } from 'react-responsive-carousel';

import cp0 from '../../public/29.png';
import cp1 from '../../public/cp1.jpg';
import cp2 from '../../public/cp2.jpg';
import cp3 from '../../public/cp3.jpg';
import cp4 from '../../public/cp4.jpg';
import cp5 from '../../public/cp5.jpg';
import cp6 from '../../public/cp6.jpg';
import cp7 from '../../public/cp7.jpg';

import Image from "next/image";


export default function CaixaPizzaPage() {
    return(
        <div className="containerSpec">
            <div className="containerImg">
                <div className='unitImage'>
                    <Image src={cp0} alt="Caixa de Pizza Personalizada" width="400" height="400" layout='intrinsic'/>
                </div>
                <div className='unitImage'>
                    <Image src={cp1} alt="Caixa de Pizza Personalizada" width="400" height="400" layout='intrinsic'/>
                </div>
                <div className='unitImage'>
                    <Image src={cp1} alt="Caixa de Pizza Personalizada" width="400" height="400" layout='intrinsic'/>
                </div>
                <div className='unitImage'>
                    <Image src={cp2} alt="Caixa de Pizza Personalizada" width="400" height="400" layout='intrinsic'/>
                </div>
                <div className='unitImage'>
                    <Image src={cp3} alt="Caixa de Pizza Personalizada" width="400" height="400" layout='intrinsic'/>
                </div>
                <div className='unitImage'>
                    <Image src={cp4} alt="Caixa de Pizza Personalizada" width="400" height="400" layout='intrinsic'/>
                </div>
                <div className='unitImage'>
                    <Image src={cp5} alt="Caixa de Pizza Personalizada" width="400" height="400" layout='intrinsic'/>
                </div>
                <div className='unitImage'>
                    <Image src={cp6} alt="Caixa de Pizza Personalizada" width="400" height="400" layout='intrinsic'/>
                </div>
                <div className='unitImage'>
                    <Image src={cp7} alt="Caixa de Pizza Personalizada" width="400" height="400" layout='intrinsic'/>
                </div>
            </div>
            <div className="containerDesc">
                <div>
                    <h1>Caixas de Pizza</h1>
                    <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Odit facilis mollitia similique velit id, impedit exercitationem recusandae dolorem asperiores natus totam delectus possimus officiis laborum ducimus consequatur. Error, facilis autem!</p>
                </div>
                <div className="justifyButton">
                    <button className="buttonContact">Contatar</button>
                </div>
            </div>
        </div>
    )
}