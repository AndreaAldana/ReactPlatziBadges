import React from 'react'
import './styles/Footer.css'
import dev from '../images/code.png'
import github from '../images/github.png'
import linkedin from '../images/linkedin.png'

class Footer extends React.Component {
    render() {
        return <div className="footer">
            <div className="container-fluid">
                <h2>TechTalk</h2>
                <div>
                    <span> <img className="dev_img" style={{ height: "64px", marginLeft: "0.7em" }} src={dev} alt="dev"></img></span> <span className="footer_letters"> <strong>Andrea Aldana, Junior Developer | </strong> <span> Santiago de Chile </span></span>
                </div>
            </div>
            <div className="contacto">
                <h5>Contacto:</h5>
                <div className="link_imgs">

                    <a href="https://github.com/AndreaAldana" target="blank">
                        <img src={github} alt=""></img>
                    </a>
                    <a href="https://www.linkedin.com/in/andrealdana/" target="blank">
                        <img src={linkedin} alt=""></img>
                    </a>

                </div>
            </div>

        </div >

    }
}

export default Footer;