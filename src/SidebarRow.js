import React from 'react'

import './SIdebarrow.css';

function SidebarRow({selected,title,Icon}) {
    return (
        <div className= {`sidebarrow ${selected && 'selected'}`}>
        <Icon className="sidebarrow__icon"/>
            <h2 className="sidebarrow__title">{title}</h2>
            
        </div>
    )
}

export default SidebarRow
// {title}