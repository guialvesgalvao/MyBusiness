import pdv1 from '../../public/pdv1.jpg';

import Image from "next/image";

export default function pdvPage() {
    return(
        <div className="containerSpec mt-3">
            <div className="containerImg">
                <div className='unitImageSpecial'>
                    <Image src={pdv1} alt="pdv" width="600" height="600" layout='intrinsic'/>
                </div>
            </div>
            <div className="containerDesc">
                <div>
                    <h1>PDV Material de Ponto de Venda</h1>
                    <p>Sua empresa em destaque nos pontos de venda.</p>
                </div>
                <div className="justifyButton">
                    <button className="buttonContact">Contatar</button>
                </div>
            </div>
        </div>
    )
}