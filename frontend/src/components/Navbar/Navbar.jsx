import React, { useState } from 'react'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import * as FaIcons from 'react-icons/fa'
import { FaMessage } from 'react-icons/fa6'


export default function () {
  const isLoggedUser = window.localStorage.getItem('token');
  const userDetails =  window.localStorage.getItem('userDetails')
 
  return (
    <Navbar expand="lg" className="bg-success " fixed="top">
      <Container>
      <><Navbar.Brand className="text-white" href="/">COP</Navbar.Brand></>
          <Navbar expand="sm" className="bg-success">
    
          </Navbar>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto text-white">
           
              <Nav.Link className="text-white" href="/about"><FaIcons.FaReadme/> About</Nav.Link>
                <Nav.Link className="text-white" href="/contact">< FaMessage/> Contact Us</Nav.Link>
                <Nav.Link className="text-white" href="/gallery"><FaIcons.FaFileUpload/> Gallery</Nav.Link>
                <Nav.Link className="text-white" href="/blogPost"><FaIcons.FaBlog/> Blog</Nav.Link>
                <Nav.Link className="text-white" href="/login"><FaIcons.FaUser/> Login</Nav.Link>
                
             </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>

  );
}

