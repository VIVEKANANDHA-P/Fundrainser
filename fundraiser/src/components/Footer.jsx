import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="bg-dark py-5 mt-5" style={{ color: '#f8f9fa' }}>
      <Container>
        <Row>
          <Col md={3} className="mb-4 mb-md-0">
            <h5 className="text-white mb-3">FundRaiser</h5>
            <p className="text-light">
              The #1 crowdfunding platform for personal causes and life events.
            </p>
          </Col>

          <Col md={3} className="mb-4 mb-md-0">
            <h5 className="text-white mb-3">For Donors</h5>
            <ul className="list-unstyled">
              <li className="mb-2"><Link to="/how-it-works" className="text-light text-decoration-none">How to Donate</Link></li>
              <li className="mb-2"><Link to="#" className="text-light text-decoration-none">Common Questions</Link></li>
              <li className="mb-2"><Link to="#" className="text-light text-decoration-none">Donation Safety</Link></li>
            </ul>
          </Col>

          <Col md={3} className="mb-4 mb-md-0">
            <h5 className="text-white mb-3">For Organizers</h5>
            <ul className="list-unstyled">
              <li className="mb-2"><Link to="/create" className="text-light text-decoration-none">Start a Campaign</Link></li>
              <li className="mb-2"><Link to="#" className="text-light text-decoration-none">Success Tips</Link></li>
              <li className="mb-2"><Link to="#" className="text-light text-decoration-none">Pricing</Link></li>
            </ul>
          </Col>

          <Col md={3} className="mb-4 mb-md-0">
            <h5 className="text-white mb-3">Company</h5>
            <ul className="list-unstyled">
              <li className="mb-2"><Link to="/about" className="text-light text-decoration-none">About Us</Link></li>
              <li className="mb-2"><Link to="#" className="text-light text-decoration-none">Careers</Link></li>
              <li className="mb-2"><Link to="#" className="text-light text-decoration-none">Contact</Link></li>
            </ul>
          </Col>
        </Row>
        <hr className="mt-4 mb-4" style={{ borderColor: 'rgba(255,255,255,0.1)' }} />
        <Row>
          <Col className="text-center text-light">
            © {new Date().getFullYear()} FundRaiser. All rights reserved.
          </Col>
        </Row>
      </Container>
    </footer>
  );
};

export default Footer;