import {Container,Row,Col} from 'reactstrap';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faInstagram,faFacebook} from '@fortawesome/free-brands-svg-icons';

export default function Contato () {

    return(
        <>
        <Container>
            <Row><h1>Entre em Contato</h1></Row>
            <Row className='pt-4'>
                <div className='orgMapCtt'>
                    <div className='socialOrg'>
                        <div className='pb-3'>
                            <h5 className='titleCtt pb-2'>Telefone</h5>
                            <span>11933995588</span>
                        </div>
                        <div>
                            <h5 className='titleCtt pb-2'>Nossas Redes Sociais</h5>
                            <div className='iconOrg pb-1'>
                            <a href="https://www.instagram.com/aba_embalagens/">
                                <FontAwesomeIcon icon={faInstagram} className='iconCtt' />
                            </a>
                            <span className='mlIcon'>Instagram</span>
                            </div>
                            <div className='iconOrg'>
                            <a href="https://www.facebook.com/abaembalagens.com.br">
                                <FontAwesomeIcon icon={faFacebook}className='iconCtt' />
                            </a>
                            <span className='mlIcon'>Facebook</span>
                    
                            </div>
                        </div>
                    </div>
                    <div><iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3657.5463255802924!2d-46.64016318554349!3d-23.548814367013012!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94ce585337f91a9d%3A0x58a6d564c6f3b5ee!2zUi4gSm9zw6kgQm9uaWbDoWNpbywgMzg3IC0gU8OpLCBTw6NvIFBhdWxvIC0gU1AsIDAxMDA3LTA0MA!5e0!3m2!1spt-BR!2sbr!4v1666103821944!5m2!1spt-BR!2sbr" width="450" height="450"  allowFullScreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe></div>
                </div>

            </Row>
        </Container>
        </>
    )
}