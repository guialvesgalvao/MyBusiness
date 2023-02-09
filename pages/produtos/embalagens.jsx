import em1 from '../../public/em1.png';
import em2 from '../../public/em2.png';
import em3 from '../../public/em3.png';
import em4 from '../../public/em4.png';
import em5 from '../../public/em5.png';
import em6 from '../../public/em6.png';
import em7 from '../../public/em7.png';
import em8 from '../../public/em8.png';
import em9 from '../../public/em9.png';
import em10 from '../../public/em10.png';
import em11 from '../../public/em11.png';
import em12 from '../../public/em12.png';

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