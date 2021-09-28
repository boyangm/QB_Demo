import React from 'react'
import './Toolbar.scss';

export const Toolbar = ({name}) => {

    return (
        <div className="toolbar">
            <span>{name}</span>
        </div>
    )
}
