import React from 'react'
import ReactDOM from 'react-dom'
import './styles/Modal.css'

function Modal(props) {


    if (!props.isOpen) {
        return null;
    }

    return ReactDOM.createPortal(
        <h1>AAAAAAA</h1>,
        document.getElementById("modal")
    )
}

export default Modal;