import React from "react";

import SecTitle from "../secTitle/SecTitle";

import './secBase.css'

export default function SecBase
({
     sectionTitle,
     routerName,
     children,
     sectionColor = '',
    colorTitle = 'black'
}) {
    return (
        <section
            className={`sec ${sectionColor}`}
            id={routerName}
        >
            <div className="content">
                <div className="mxw800p">
                    <SecTitle
                        color={colorTitle}
                        title={sectionTitle}
                    />
                </div>

                {children}

            </div>
        </section>
    )
}
