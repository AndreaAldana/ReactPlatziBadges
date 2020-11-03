import React from 'react';
import "./styles/Badge.css"
import avatar from '../images/Avatar.jpeg'
import logo2 from '../images/user.png'
import Gravatar from './Gravatar'

//Los componentes son clases
class Badge extends React.Component {
    //Render define cual será el resultado que se verá en pantalla
    render() {

        //props, son los atributos que tienen los elementos

        const { firstName, lastName, jobTitle, gitHub } = this.props;

        return <div className="badge">
            <div className="badge_header">
                <img src={logo2} alt="logo2" className="small_logo" />
            </div>
            <br />
            <br />
            <br />
            <div className="badge_section-name">
                <Gravatar className="badge_avatar" email={this.props.email} alt="Avatar" />
                <h1> {firstName} <br /> {lastName}</h1></div>

            <div className="badge_section-info">
                <h3>{jobTitle}</h3>
                <div>GitHub: <a href="https://github.com/AndreaAldana"> {gitHub}</a>
                </div>
            </div>

            <div className="badge_footer">#TechConference</div>
        </div>
    }
}

//Recordar exportar

export default Badge;