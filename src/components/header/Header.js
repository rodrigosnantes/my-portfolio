import React, { useState } from 'react';

import './header.css'

export default function Header() {
    const [headerLinksList] = useState([
        { href: '#home', text: 'Início'},
        { href: '#about', text: 'Sobre'},
        { href: '#skills', text: 'Habilidades'},
        { href: '#formation', text: 'Formação'},
        { href: '#experiences', text: 'Experiências'},
        { href: '#contact', text: 'Contato'}
    ])

    const toggle = () => {
        let header = document.querySelector('header');
        header.classList.toggle('active');
    };

    window.addEventListener('scroll', function(){
        let header = document.querySelector('header');
        header.classList.toggle('sticky', window.scrollY > 0);
    });

    return (
        <header id="header">
            <a href="#" className="logo">RNantes</a>
            <ul>
                {headerLinksList.map((elem) => (
                    <li key={elem.text}>
                        <a
                            href={elem.href}
                            onClick={toggle}
                        >
                            {elem.text}
                        </a>
                    </li>
                ))}
            </ul>

            <div
                className="toggle"
                onClick={toggle}
            />
        </header>
    )
}
