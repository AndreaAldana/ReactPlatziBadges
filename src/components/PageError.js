import React from 'react';
import './styles/PageError.css'
import error from '../images/500.svg'

function PageError(props) {
    return <div className="PageError">
        <img className="img_error" src={error} alt=""></img>
    </div>
}

export default PageError;