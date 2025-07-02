import React from 'react';
import { Navbar, Nav, Container, Button } from 'react-bootstrap';
import { Link, useNavigate } from 'react-router-dom';

const Header = () => {
  const navigate = useNavigate();

  return (
    <Navbar bg="light" expand="lg" sticky="top">
      <Container>
        <Navbar.Brand as={Link} to="/" className="fw-bold text-primary">
          FundRaiser
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link as={Link} to="/">Home</Nav.Link>
            <Nav.Link as={Link} to="/create">Start a Campaign</Nav.Link>
            <Nav.Link as={Link} to="/how-it-works">How It Works</Nav.Link>
            <Nav.Link href="#success-stories">Success Stories</Nav.Link>
          </Nav>
          <div className="d-flex">
            <Button 
              variant="outline-primary" 
              className="me-2" 
              onClick={() => navigate("/login")}
            >
              Log In
            </Button>
            <Button 
              variant="primary" 
              onClick={() => navigate("/signup")}
            >
              Sign Up
            </Button>
          </div>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Header;