import React from 'react'
import './styles/Home.css'
import homepic from '../images/homepic.svg'
import { Link } from 'react-router-dom'

class Home extends React.Component {
    render() {
        return <div>
            <div className="container-fluid">
                <div className="row" id="container_home">
                    <div className="col-md-6" id="col_home">
                        <h1 className="text_home">The biggest plataform to join conferences and streamings about technology. <br /> <br /> ¡Register now, enjoy forever!</h1>
                    </div>
                    <div className="col-6" id="col_home">
                        <img src={homepic} alt="homepic" className="pic_home"></img>
                    </div>
                </div>
                <div className="button_home">
                    <Link to="/badges/new" style={{ margin: "auto" }} className="btn btn-primary">New Badge</Link>
                </div>
            </div>
        </div>
    }
}

export default Home;

