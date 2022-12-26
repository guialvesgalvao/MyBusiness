import em1 from '../../public/em1.jpg';
import em2 from '../../public/em2.jpg';
import em3 from '../../public/em3.jpg';
import em4 from '../../public/em4.jpg';
import em5 from '../../public/em5.jpg';
import em6 from '../../public/em6.jpg';
import em7 from '../../public/em7.jpg';
import em8 from '../../public/em8.jpg';
import em9 from '../../public/em9.jpg';
import em10 from '../../public/em10.jpg';
import em11 from '../../public/em11.jpg';
import em12 from '../../public/em12.jpg';

import Image from "next/image";


export default function EmbalagensPage() {
    return(
        <div className="containerSpec mt-3">
            <div className="containerImg">
                <div className='unitImage'>
                    <Image src={em1} alt="Embalagens" width="400" height="400" layout='intrinsic'/>
                </div>
                <div className='unitImage'>
                    <Image src={em2} alt="Embalagens" width="400" height="400" layout='intrinsic'/>
                </div>
                <div className='unitImage'>
                    <Image src={em3} alt="Embalagens" width="400" height="400" layout='intrinsic'/>
                </div>
                <div className='unitImage'>
                    <Image src={em4} alt="Embalagens" width="400" height="400" layout='intrinsic'/>
                </div>
                <div className='unitImage'>
                    <Image src={em5} alt="Embalagens" width="400" height="400" layout='intrinsic'/>
                </div>
                <div className='unitImage'>
                    <Image src={em6} alt="Embalagens" width="400" height="400" layout='intrinsic'/>
                </div>
                <div className='unitImage'>
                    <Image src={em7} alt="Embalagens" width="400" height="400" layout='intrinsic'/>
                </div>
                <div className='unitImage'>
                    <Image src={em8} alt="Embalagens" width="400" height="400" layout='intrinsic'/>
                </div>
                <div className='unitImage'>
                    <Image src={em9} alt="Embalagens" width="400" height="400" layout='intrinsic'/>
                </div>
                <div className='unitImage'>
                    <Image src={em10} alt="Embalagens" width="400" height="400" layout='intrinsic'/>
                </div>
                <div className='unitImage'>
                    <Image src={em11} alt="Embalagens" width="400" height="400" layout='intrinsic'/>
                </div>
                <div className='unitImage'>
                    <Image src={em12} alt="Embalagens" width="400" height="400" layout='intrinsic'/>
                </div>
            </div>
            <div className="containerDesc">
                <div>
                    <h1>Embalagens para Padaria, Cafeteria e Delivery</h1>
                    <p>Diversas opções de embalagens especialmente para sua empresa.</p>
                </div>
                <div className="justifyButton">
                    <button className="buttonContact">Contatar</button>
                </div>
            </div>
        </div>
    )
}