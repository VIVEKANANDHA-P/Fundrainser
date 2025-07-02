import React from 'react';
import { Container, Row, Col, Card, Button } from 'react-bootstrap';
import teamMembers from '../data/team'; // We'll create this next
import { Link } from 'react-router-dom';

const AboutUs = () => {
  return (
    <Container className="my-5">
      {/* Hero Section */}
      <Row className="text-center mb-5">
        <Col>
          <h1 className="display-4 mb-3">About FundRaiser</h1>
          <p className="lead text-muted">
            Empowering communities through crowdfunding since 2023
          </p>
        </Col>
      </Row>

      {/* Our Story */}
      <Row className="mb-5">
        <Col lg={6}>
          <h2 className="mb-4">Our Story</h2>
          <p>
            FundRaiser was founded with a simple mission: to help people help each other. 
            After seeing friends struggle to pay medical bills, we realized traditional 
            fundraising wasn't meeting modern needs.
          </p>
          <p>
            Today, we've helped over 50,000 campaigns raise more than $200 million, 
            supporting causes from medical emergencies to community projects.
          </p>
        </Col>
        <Col lg={6}>
          <img
            src="https://images.unsplash.com/photo-1600880292203-757bb62b4baf"
            alt="Team working together"
            className="img-fluid rounded shadow"
            style={{ maxHeight: '400px', objectFit: 'cover' }}
          />
        </Col>
      </Row>

      {/* Team Section */}
      <Row className="mb-5">
        <Col>
          <h2 className="text-center mb-5">Meet Our Team</h2>
          <Row xs={1} md={2} lg={3} className="g-4">
            {teamMembers.map((member) => (
              <Col key={member.id}>
                <Card className="h-100 border-0 shadow-sm">
                  <Card.Img
                    variant="top"
                    src={member.image}
                    style={{ height: '500px', objectFit: 'cover',objectPosition: 'top center' }}
                  />
                  <Card.Body className="text-center">
                    <Card.Title>{member.name}</Card.Title>
                    <Card.Subtitle className="mb-2 text-muted">
                      {member.position}
                    </Card.Subtitle>
                    <Card.Text>{member.bio}</Card.Text>
                  </Card.Body>
                </Card>
              </Col>
            ))}
          </Row>
        </Col>
      </Row>

      {/* Values Section */}
      <Row className="bg-light rounded p-5 mb-5">
        <Col>
          <h2 className="text-center mb-5">Our Values</h2>
          <Row>
            <Col md={4} className="mb-4">
              <div className="text-center">
                <div className="display-4 mb-3">🤝</div>
                <h4>Community First</h4>
                <p>
                  We believe in the power of people coming together to support one another.
                </p>
              </div>
            </Col>
            <Col md={4} className="mb-4">
              <div className="text-center">
                <div className="display-4 mb-3">🔒</div>
                <h4>Trust & Safety</h4>
                <p>
                  Every campaign is verified to ensure your donations go where they're needed.
                </p>
              </div>
            </Col>
            <Col md={4} className="mb-4">
              <div className="text-center">
                <div className="display-4 mb-3">💡</div>
                <h4>Innovation</h4>
                <p>
                  Constantly improving to make fundraising easier and more effective.
                </p>
              </div>
            </Col>
          </Row>
        </Col>
      </Row>

      {/* CTA Section */}
      <Row className="text-center">
        <Col>
          <h3 className="mb-4">Ready to make a difference?</h3>
          <Link to="/create" className="btn btn-primary btn-lg px-5">
            Start Your Campaign
          </Link>
        </Col>
      </Row>
    </Container>
  );
};

export default AboutUs;