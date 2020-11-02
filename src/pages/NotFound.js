import React from 'react';
import error from '../images/404.svg'
import './styles/notFound.css'

function NotFound() {

    return <div>
        <div className="row" id="container_notFound">
            <img src={error} alt="" className="notFound_image"></img>
        </div>
    </div>
}

export default NotFound;