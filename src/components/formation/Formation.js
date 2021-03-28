import React from "react";

import SecBase from "../secBase/SecBase";

import '../skills/skills.css'

export default function Formation() {
    const formationList = [
        {
            title: 'Superior em Análise e desenvolvimento de sistemas',
            school: 'Anhanguera Uniderp, Campo Grande – MS',
            description: 'Sou graduado em análise e desenvolvimento de sistemas pela universidade anhanguera uniderp de campo grande - MS'
        },
        {
            title: 'Java 2018 Programação Orientada a Objetos',
            school: 'Udemy - 33 Horas',
            description: 'Neste curso aprendemos conceitos importantes sobre a linguagem Java como JAVA OO, UML, JavaFX Spring Boot, JPA, Hibernate, MongoDB.'
        },
        {
            title: 'Sistemas comerciais JAVA EE + CDI, JPA e PrimeFaces',
            school: 'AlgaWorks – 100 Horas',
            description: 'Durante este curso aprendemos a criar aplicações completas utilizando JSF e Hibernate juntamente com a linguagem Java.'
        },
        {
            title: 'Spring Boot e MVC com Thymeleaf',
            school: 'Udemy - 10 hrs',
            description: 'Aprendi como desenvolver do zero uma aplicação completa com front-end e back-end, utilizando Thymeleaf e Java com SpringBoot.'
        },
        {
            title: 'Imersão React',
            school: 'Alura – 5 Horas',
            description: 'Um curso intensivo de 1 semana, com conteúdo focado no desenvolvimento de aplicação web, aprendendo conceitos importantes sobre React e React Hooks e todo seu ecossistema.'
        },
        {
            title: 'VueJs 2',
            school: 'Udemy – 6,5 Horas',
            description: 'Curso incial sobre Vuejs2, aqui aprendemos conceitos básicos e importantes sobre esse poderoso framwork front-end. Criamos um projeto estilo livraria, consumindo a api do GoogleBooks, usando Vue, VueRouter.'
        },
    ];

    return (
        <SecBase
            sectionTitle='Formação profissional'
            routerName='formation'
        >
            <div className="flexContent">
                {formationList.map((elem) => (
                    <div
                        key={elem.title}
                        className="box"
                    >
                        <h1>{elem.title}</h1>
                        <p>{elem.school}</p>
                        <span>{elem.description}</span>
                    </div>
                ))}
            </div>
        </SecBase>
    )
}
