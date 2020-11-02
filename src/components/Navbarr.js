import React from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import logo2 from '../images/logo2.png'
import "../components/styles/Navbar.css"
import { Link } from 'react-router-dom'
import { Button, Navbar, Nav } from 'react-bootstrap'


class Navbarr extends React.Component {
    render() {
        return <Navbar className="Navbar" style={{ background: "#303C6C" }} expand="lg">
            <img className="Navbar__brand-logo" src={logo2} alt="Logo" />
            <Link style={{ color: "#FBE8A6" }} className="Navbar__brand" to="/home">TechTalk.</Link>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="mr-auto">
                    <Nav.Link>
                        <Link to="/home" style={{ color: "#D2FDFF" }}>Home</Link>
                    </Nav.Link>
                    <Nav.Link id="RouterNavLink">
                        <Link to="/badges/new" style={{ color: "#D2FDFF" }}>Register</Link>
                    </Nav.Link>
                    <Nav.Link>
                        <Link to="/badges" style={{ color: "#D2FDFF" }}>Members</Link>
                    </Nav.Link >
                    <Nav.Link>
                        <Link to="/AboutUs" style={{ color: "#D2FDFF" }}>About Us</Link>
                    </Nav.Link>

                </Nav>
            </Navbar.Collapse>
        </Navbar >
    }
}
export default Navbarr;