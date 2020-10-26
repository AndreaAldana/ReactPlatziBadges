import React from 'react';
import logo from '../images/logo.svg'
import "./styles/Badge.css"
import avatar from '../images/Avatar.jpeg'
import logo2 from '../images/badge-header.svg'

//Los componentes son clases
class Badge extends React.Component {
    //Render define cual será el resultado que se verá en pantalla
    render() {

        //props, son los atributos que tienen los elementos

        const { firstName, lastName, jobTitle } = this.props;

        return <div className="badge">
            <div className="badge_header"><img src={logo2} alt="logo2" />
                {/* <h2 style={{ marginTop: "12px", color: "white" }}>Proyecto React</h2> */}

            </div>

            <div className="badge_section-name">
                <img className="badge_avatar" src={avatar} alt="Avatar" />
                <h1> {firstName} <br /> {lastName}</h1></div>

            <div className="badge_section-info">
                <h3>{jobTitle}</h3>
                <div>GitHub: <a href="https://github.com/AndreaAldana"> AndreaAldana</a>
                </div>
            </div>

            <div className="badge_footer">#platziconf</div>
        </div>
    }
}

//Recordar exportar

export default Badge;