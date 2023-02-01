import sp1 from '../../public/sp1.png';

import Image from "next/image";

export default function SacosPage() {
    return(
        <div className="containerSpec mt-3">
            <div className="containerImg">
                <div className='unitImageSpecial'>
                    <Image src={sp1} alt="Sacos de Papel Personalizados" width="600" height="600" layout='intrinsic'/>
                </div>
            </div>
            <div className="containerDesc">
                <div>
                    <h1>Sacos de Papel Personalizados</h1>
                    <p>Trabalhamos com diversos tipos de sacos personalizados em diferentes tamanhos.</p>
                </div>
                <div className="justifyButton">
                    <button className="buttonContact"><a className='textDec' href="https://api.whatsapp.com/send?1=pt_BR&phone=5511995249688">Contatar</a></button>
                </div>
            </div>
        </div>
    )
}