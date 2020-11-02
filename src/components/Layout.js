import React from 'react'
import Navbarr from './Navbarr'
import Footer from './Footer'
import Header from './Header'

function Layout(props) {
    return (<div>
        <Navbarr />
        <Header />
        {props.children}
        <Footer />

    </div>
    )
}

export default Layout;