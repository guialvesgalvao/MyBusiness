import Logo from '../public/aba_logo.png'
import Link from "next/link";
import Image from "next/image";
import React, { useState } from 'react';
import {Row,Col,Container} from "reactstrap";

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faInstagram,faFacebook,faLinkedin,faGithub} from '@fortawesome/free-brands-svg-icons';


export default function Footer () {

    return(
    <div className="backColor footerOrg pt-4 pb-2">
        <div>
        <a href="https://www.instagram.com/aba_embalagens/">
            <FontAwesomeIcon icon={faInstagram} className='iconInsta' />
        </a>
        <a href="https://www.facebook.com/abaembalagens.com.br">
            <FontAwesomeIcon icon={faFacebook}className='iconFace' />
        </a>
        </div>
        <div className="titleFooter">
            <p>Aba Embalagens</p>
        </div>
        <div></div>

    </div>
    )
}
