import cpe1 from '../../public/cpe1.jpg';
import cpe2 from '../../public/cpe2.jpg';


import Image from "next/image";

export default function CaixaecommercePage() {
    return(
        <div className="containerSpec mt-3">
            <div className="containerImg">
                <div className='unitImage'>
                    <Image src={cpe1} alt="Caixa de E-Commerce" width="400" height="400" layout='intrinsic'/>
                </div>
                <div className='unitImage'>
                    <Image src={cpe2} alt="Tabela de Medidas" width="400" height="400" layout='intrinsic'/>
                </div>
            </div>
            <div className="containerDesc">
                <div>
                    <h1>Caixas de Papelão Pardo para E-commerce </h1>
                    <p>Confira a metragem ideal para você na imagem.</p>
                </div>
                <div className="justifyButton">
                    <button className="buttonContact">Contatar</button>
                </div>
            </div>
        </div>
    )
}
