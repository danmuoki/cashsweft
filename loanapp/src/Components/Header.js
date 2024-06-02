import React from 'react';
import logob from '../Images/logo 2.png';
import './style.css'; // Import the CSS file
import { Navbar, Nav, Container } from 'react-bootstrap';
import { useHistory, handleLogin } from 'react-router-dom'; // Import useHistory hook
import Button from '../Pages/Button';
import Button2 from '../Pages/Button2';

const Header = () => {
  

  return (
    <>
      <header>
        <Navbar bg="primary" data-bs-theme="grey" className='maincontainer' >
          <div className='img_logo'>
            <img src={logob} alt='images'/>
          </div> 
          <Container>
            <Nav className="me-auto">
              <Navbar.Brand href="/">Home</Navbar.Brand>
              <Nav.Link href="/about">About Us</Nav.Link>
              <Nav.Link href="/service">Services</Nav.Link>
              <Nav.Link href="/contact">Contact us</Nav.Link>
            </Nav>
            {/* Use the MyButton component and attach onClick event */}
            <Button2/>
          </Container>
          
        </Navbar>
        <br/>
      </header>
    </>
  );
};

export default Header;
