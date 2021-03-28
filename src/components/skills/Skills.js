import React from "react";

import java from '../../img/java.svg';
import javaScript from '../../img/javascript.svg';
import reactJs from '../../img/react.svg';
import vuejs from '../../img/vue-dot-js.svg';
import git from '../../img/git.svg';
import materialUi from '../../img/material-ui.svg';

import SecBase from "../secBase/SecBase";

import './skills.css'

export default function Skills() {
    const list = [
        {imgRef: java, imgAlt: 'java', label: 'Java' },
        {imgRef: reactJs, imgAlt: 'react-js', label: 'ReactJs' },
        {imgRef: vuejs, imgAlt: 'vue-js', label: 'VueJs'},
        {imgRef: javaScript, imgAlt: 'java-script', label: 'JavaScript'},
        {imgRef: git, imgAlt: 'git', label: 'Git'},
        {imgRef: materialUi, imgAlt: 'material-ui', label: 'MaterialUI' },
    ]

    return (
        <SecBase
            sectionTitle='Habilidades'
            routerName='skills'
        >
            <div className="flexContent">
                { list.map((elem) => (
                    <div
                        className="box"
                        key={elem.imgRef}
                    >
                        <div className="iconBx">
                            <img
                                src={elem.imgRef}
                                alt={elem.imgAlt}
                            />
                        </div>
                        <div className="content">
                            <h2>{elem.label}</h2>
                        </div>
                    </div>
                ))}
            </div>
        </SecBase>
    )
}
