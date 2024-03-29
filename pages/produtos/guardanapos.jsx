import gp1 from '../../public/gp1.png';

import Image from "next/image";

export default function GuardanaposPage() {
    return(
        <div className="containerSpec mt-3">
            <div className="containerImg">
                <div className='unitImageSpecial'>
                    <Image src={gp1} alt="Guardanapos" width="600" height="600" layout='intrinsic'/>
                </div>
            </div>
            <div className="containerDesc">
                <div>
                    <h1>
                        Guardanapos de Papel Personalizados
                    </h1>
                    <p>
                        Guardanapos personalizados em diferentes tamanhos.
                    </p>
                </div>
                <div className="justifyButton">
                    <button className="buttonContact">
                        <a className='textDec' href="https://api.whatsapp.com/send?1=pt_BR&phone=5511995249688">
                            Contatar
                        </a>
                    </button>
                </div>
            </div>
        </div>
    )
}