import cop1 from '../../public/cop1.png';

import Image from "next/image";

export default function CoposPage() {
    return(
        <div className="containerSpec mt-3">
            <div className="containerImg">
                <div className='unitImageSpecial'>
                    <Image src={cop1} alt="Copos Personalizados" width="600" height="600" layout='intrinsic'/>
                </div>
            </div>
            <div className="containerDesc">
                <div>
                    <h1>Copos de Papel Personalizados</h1>
                    <p>Trabalhamos com diversos tipos de Copos Personalizados em diferentes tamanhos.</p>
                </div>
                <div className="justifyButton">
                    <button className="buttonContact"><a className='textDec' href="https://api.whatsapp.com/send?1=pt_BR&phone=5511995249688">Contatar</a></button>
                </div>
            </div>
        </div>
    )
}