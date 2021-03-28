import React from 'react';

import SecBase from "../secBase/SecBase";

import './about.css';

export default function About() {
    return (
        <SecBase
            sectionTitle='Quem sou eu ?'
            routerName='about'
        >
            <div className='mxw800p'>
                <p>
                    Sou Desenvolvedor front-end, graduado em Análise e Desenvolvimento de Sistemas na universidade
                    Anhanguera Uniderp CG.
                    Sou natural de Campo Grande - MS e atualmente estou residindo em Florianópolis - SC.
                </p>
                <p>
                    Trabalho como desenvolvedor há aproximadamente 2 anos, onde uma boa parte desse tempo atuei como
                    desenvolvedor back-end utilizando a linguagem de programação JAVA.
                </p>
                <p>
                    Sempre tive a curiosidade e interesse em trabalhar nessa área, tudo sempre chamou muito minha
                    atenção,
                    porém só consegui realizar esse sonho quando cheguei aqui em Floripa.
                </p>
                <p>
                    Atualmente faço parte da equipe de devs na Nexfar.
                </p>
                <br/>
                <h4>
                    Não sou o melhor desenvolvedor do Brasil, mas estou no caminho e logo chego lá.
                    <br/>
                    Pensando bem, é querer demais ser o melhor do mundo ?
                </h4>
            </div>
        </SecBase>
    )
}
