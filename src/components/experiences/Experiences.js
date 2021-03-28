import React from "react";

import SecBase from "../secBase/SecBase";
import TimeLine from "../timeLine/TimeLine";

export default function Experiences() {
    return (
        <SecBase
            sectionTitle='Experiências profissionais'
            routerName='experiences'
        >
            <div className="flexContent">
               <TimeLine />
            </div>
        </SecBase>
    )
}
