import React from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

function BasicExample() {
  return (
    <Navbar  expand="lg" className="bg-body-tertiary">
      <Container>
        <Navbar.Brand style={{ fontSize: '32px' }} href="/">eBilet</Navbar.Brand>
        <Nav variant="underline">
          <Nav.Item>
            <Nav.Link 
              href="/SeyahatSorgulama" 
              eventKey="SeyahatSorgulama" 
              active={window.location.pathname === '/SeyahatSorgulama'}
            >
              Seyahat Sorgulama
            </Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link 
              href='/Giris' 
              eventKey="Giris" 
              active={window.location.pathname === '/Giris'}
            >
              Üye Girişi
            </Nav.Link>
          </Nav.Item>
        </Nav>
      </Container>
    </Navbar>
  );
}

export default BasicExample;
