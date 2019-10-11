import React from 'react';
import { Link } from 'react-router-dom';
import { Nav, Navbar } from 'react-bootstrap';
import './NavagationBar.css'


export const NavigationBar = () => (
    
    <Navbar bg="dark" variant="dark" >
        <Nav className="mr-auto">
        <Navbar.Brand>Faith's Queso Ranking</Navbar.Brand>
           <Nav.Link>
              <Link to="/">Home</Link>
            </Nav.Link>
            <Nav.Link>
              <Link to="/about">About</Link>
            </Nav.Link>
        </Nav>
    </Navbar>

)

export default NavigationBar;