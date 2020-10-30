import React from 'react'
import Navbarr from './Navbarr'

function Layout(props) {
    return (<div>
        <Navbarr />
        {props.children}
    </div>
    )
}

export default Layout;