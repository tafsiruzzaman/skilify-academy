import React from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';
import logo from '../../images/logo.png';
import './Header.css'

const Header = () => {
    const activeStyle = {
        fontWeight: "bold"
    };
    return (
        <div>
            <Navbar collapseOnSelect expand="lg" className="bg-color">
                <Container>
                    <NavLink to="/home">
                        <Navbar.Brand>
                            <img src={logo} width="150" height="50" className="d-inline-block align-top pt-1" alt="React Bootstrap logo"/>
                        </Navbar.Brand>
                    </NavLink>
                    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                    <Navbar.Collapse id="responsive-navbar-nav">
                        <Nav className="me-auto text-center">
                            <NavLink activeStyle={activeStyle} className="text-decoration-none my-2 me-4 text-style" to="/home">Home</NavLink>
                            <NavLink activeStyle={activeStyle} className="text-decoration-none my-2 me-4 text-style" to="/about">About</NavLink>
                            <NavLink activeStyle={activeStyle} className="text-decoration-none my-2 me-4 text-style" to="/courses">Courses</NavLink>
                            <NavLink activeStyle={activeStyle} className="text-decoration-none my-2 me-4 text-style" to="/contact">Contact us</NavLink>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </div>
    );
};

export default Header;