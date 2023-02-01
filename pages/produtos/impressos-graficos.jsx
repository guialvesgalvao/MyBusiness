import ig1 from '../../public/ig1.png';

import Image from "next/image";

export default function impressosGraficosPage() {
    return(
        <div className="containerSpec mt-3">
            <div className="containerImg">
                <div className='unitImageSpecial'>
                    <Image src={ig1} alt="Impressos Gráficos" width="600" height="600" layout='intrinsic'/>
                </div>
            </div>
            <div className="containerDesc">
                <div>
                    <h1>Impressos Gráficos </h1>
                    <p>Catálogos, folhetos e papelaria.</p>
                </div>
                <div className="justifyButton">
                    <button className="buttonContact"><a className='textDec' href="https://api.whatsapp.com/send?1=pt_BR&phone=5511995249688">Contatar</a></button>
                </div>
            </div>
        </div>
    )
}