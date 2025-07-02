import React from 'react';
import { Container, Row, Col, Card } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const HowItWorks = () => {
  const steps = [
    {
      title: "1. Start Your Campaign",
      description: "Click 'Start a Campaign' and fill out the simple form. Tell your story, set a goal, and add photos.",
      icon: "🚀"
    },
    {
      title: "2. Share With Friends",
      description: "Spread the word on social media, email, and text. The more people who see your campaign, the faster you'll reach your goal.",
      icon: "📢"
    },
    {
      title: "3. Manage Donations",
      description: "Track donations in real-time, thank your supporters, and post updates to keep everyone engaged.",
      icon: "💸"
    },
    {
      title: "4. Withdraw Funds",
      description: "Receive funds directly to your bank account. Our platform makes it easy to access your money when you need it.",
      icon: "🏦"
    }
  ];

  return (
    <Container className="my-5">
      <Row className="text-center mb-5">
        <Col>
          <h1 className="display-4 mb-3">How FundRaiser Works</h1>
          <p className="lead">Get started in just a few simple steps</p>
        </Col>
      </Row>

      <Row xs={1} md={2} lg={4} className="g-4 mb-5">
        {steps.map((step, index) => (
          <Col key={index}>
            <Card className="h-100 border-0 shadow-sm">
              <Card.Body className="text-center p-4">
                <div className="display-4 mb-3">{step.icon}</div>
                <Card.Title>{step.title}</Card.Title>
                <Card.Text className="text-muted">{step.description}</Card.Text>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>

      <Row className="bg-light rounded p-5 mb-5">
        <Col md={6}>
          <h2 className="mb-4">Success Tips</h2>
          <ul className="lead">
            <li className="mb-2">Set a clear, realistic goal</li>
            <li className="mb-2">Post frequent updates with photos/videos</li>
            <li className="mb-2">Thank every donor personally</li>
            <li className="mb-2">Share across all your social networks</li>
          </ul>
        </Col>
        <Col md={6} className="mt-4 mt-md-0">
          <div className="ratio ratio-16x9">
            <iframe 
              src="https://www.youtube.com/embed/example" 
              title="How to run a successful fundraiser" 
              allowFullScreen
            ></iframe>
          </div>
        </Col>
      </Row>

      <Row className="text-center">
        <Col>
          <Link to="/create" className="btn btn-primary btn-lg px-5 py-3">
            Start Your Campaign Now
          </Link>
        </Col>
      </Row>
    </Container>
  );
};

export default HowItWorks;