import React from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import logo2 from '../images/logo2.png'
import "../components/styles/Navbar.css"
import { Link } from 'react-router-dom'
import { Button, Navbar, Nav, NavDropdown, Form, FormControl } from 'react-bootstrap'


class Navbarr extends React.Component {
    render() {
        return <Navbar className="Navbar" style={{ background: "#303C6C" }} expand="lg">
            <img className="Navbar__brand-logo" src={logo2} alt="Logo" />
            <Navbar.Brand style={{ color: "#FBE8A6" }} className="Navbar__brand" href="#home">Tech Talk.</Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="mr-auto">

                    <Nav.Link>
                        <Link to="/home">Home</Link>
                    </Nav.Link>
                    <Nav.Link>
                        <Link to="/badges/new">Register</Link>
                    </Nav.Link>
                    <Nav.Link>
                        <Link to="/badges">Members</Link>
                    </Nav.Link>
                    <Nav.Link>
                        <Link to="/AboutUs">About Us</Link>
                    </Nav.Link>

                </Nav>
            </Navbar.Collapse>
        </Navbar >
    }
}
export default Navbarr;