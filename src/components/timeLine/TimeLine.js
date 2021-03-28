import React from "react";

import './timeLine.css'

export default function TimeLine() {
    return (
        <ul className="timeline">

            <li className="timeline-event">
                <label className="timeline-vertical"/>
                <div className="timeline-event-container">
                    <p className="timeline-event-date">Nexfar 10/02/2018 - Atual</p>
                    <h3>Desenvolvedor Front-End</h3>
                    <p>
                        Inicialmente atuei como desenvolvedor Back-End utilizando a linguagem Java e posteriormente
                        migrei para Front-End para trabalhar com VueJs e JavaScript, segmento no qual me encontro até os dias de
                        hoje, porém atualmente utilizo com muita frequencia ReactJs para desenvolmento web.
                    </p>
                </div>
            </li>

            <li className="timeline-event">
                <label className="timeline-vertical"/>
                <div className="timeline-event-container">
                    <p className="timeline-event-date">Nastek - 07/2015 - 08/2018</p>
                    <h3>Analista de Suporte Técnico</h3>
                    <p>
                        Responsável por atendimento técnico e atendimento remoto, análise de logs
                        das aplicações, administrar o servidor de hospedagem, configuração do sistema
                        para o usuário final, administração de banco de dados, montagem e extração
                        de relatórios.
                    </p>
                </div>
            </li>

            <li className="timeline-event">
                <label className="timeline-vertical"/>
                <div className="timeline-event-container">
                    <p className="timeline-event-date">EasyNet - 03/2015 – 07/2015</p>
                    <h3>Auxiliar de Infraestrutura</h3>
                    <p>
                        Responsável por suporte técnico a usuários, via acesso remoto e atendimento
                        de campo, montagem e manutenção de computadores, instalação e configuração de software para o usuário final,
                        preparo de ambiente técnico e laboratórios dos cursos oferecidos pela organização.
                    </p>
                </div>
            </li>

            <li className="timeline-event">
                <label className="timeline-vertical"/>
                <div className="timeline-event-container">
                    <p className="timeline-event-date">Unisys - 01/2013 à 03/2015</p>
                    <h3>Analista de Suporte Técnico</h3>
                    <p>
                        Atuei como analista de suporte técnico aos clientes do projeto General Electric com soluções e processos para
                        solucionar problemas dos usuários finais, geralmente relacionados com aplicações Microsoft, Oracle ou McAfee
                        seguindo boas práticas de ITIL e ISO.
                    </p>
                </div>
            </li>

        </ul>
    )
}
