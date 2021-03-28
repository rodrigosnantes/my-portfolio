import React from 'react';

import './secTitle.css'

export default function SecTitle({ color, title }) {
    return (
        <h3 className={`${color}`}>{title}</h3>
    )
}
