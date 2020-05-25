import React from 'react'
import Navbar from './navbar'
import Content from './content'

const mainPanel = () => {
    return( <div className="main-panel">
        <Navbar/>
        <Content/>
    </div>
    
    );
}

export default mainPanel;