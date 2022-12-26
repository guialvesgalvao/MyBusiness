import ce1 from '../../public/ce1.jpg';
import ce2 from '../../public/ce2.jpg';
import ce3 from '../../public/ce3.jpg';
import ce4 from '../../public/ce4.jpg';

import Image from "next/image";

export default function CaixaEsfihaPage() {
    return(
        <div className="containerSpec mt-3">
            <div className="containerImg">
                <div className='unitImage'>
                    <Image src={ce1} alt="Caixa de Esfiha Personalizada" width="400" height="400" layout='intrinsic'/>
                </div>
                <div className='unitImage'>
                    <Image src={ce2} alt="Caixa de Esfiha Personalizada" width="400" height="400" layout='intrinsic'/>
                </div>
                <div className='unitImage'>
                    <Image src={ce3} alt="Caixa de Esfiha Personalizada" width="400" height="400" layout='intrinsic'/>
                </div>
                <div className='unitImage'>
                    <Image src={ce4} alt="Caixa de Esfiha Personalizada" width="400" height="400" layout='intrinsic'/>
                </div>
            </div>
            <div className="containerDesc">
                <div>
                    <h1>Caixas de Esfiha</h1>
                    <p>Impressão Off Set fotográfica
                    <br/>
                    <strong>Tamanhos</strong>: P, M, G e GG.</p>
                </div>
                <div className="justifyButton">
                    <button className="buttonContact">Contatar</button>
                </div>
            </div>
        </div>
    )
}
