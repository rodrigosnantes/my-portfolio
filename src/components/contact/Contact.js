import React from "react";

import linkedin from "../../img/linkedin.svg";
import github from "../../img/github-color.svg";
import whatsApp from '../../img/whatsapp.svg';
import gmail from '../../img/gmail.svg';

import SecBase from "../secBase/SecBase";

import './contact.css'

export default function Contact() {
    const hrefList = [
        { hrefLink: "https://www.linkedin.com/in/rodrigonantess/", src: linkedin, alt: 'linkedIn'},
        { hrefLink: "https://github.com/rodrigosnantes", src: github, alt: 'github'},
        { hrefLink: "https://api.whatsapp.com/send?phone=5548999720646", src: whatsApp, alt: 'whatsApp'},
        { hrefLink: "mailto:rodrigosnantes01@gmail.com?Subject=Hello%20again", src: gmail, alt: 'gmail'},
    ];

    return (
        <SecBase
            sectionTitle='Contato'
            routerName='contact'
            sectionColor='black'
            colorTitle='white'
        >

            <>
                <div className="sci">
                    {hrefList.map((elem) => (
                        <a key={elem.hrefLink} href={elem.hrefLink}> <img src={elem.src} alt={elem.alt} /></a>
                    ))}
                </div>

                <p className="copyright">Rodrigo Nantes de Souza - <span>2021</span></p>
                <p  className="copyright">Copyright © 2021 RNantes - Todos os direitos reservados</p>
            </>
        </SecBase>
    )
}
