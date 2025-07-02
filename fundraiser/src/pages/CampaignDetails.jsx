import React from 'react';
import { useParams } from 'react-router-dom';
import { Container, Row, Col, Button, ProgressBar, Card, Form } from 'react-bootstrap';

const CampaignDetails = () => {
  const { id } = useParams();
  
  // Campaign templates
  const campaignTemplates = {
    1: {
      title: "Help John Beat Cancer",
      description: "John was recently diagnosed with stage 3 cancer and needs your support for treatment expenses. The treatment will cost approximately $50,000 and insurance only covers part of it. Any help would be greatly appreciated by John and his family during this difficult time.",
      goal: 50000,
      amountRaised: 32500,
      donors: 420,
      image: "https://images.unsplash.com/photo-1576091160550-2173dba999ef?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&h=400&q=80",
      organizer: "Sarah Johnson",
      category: "Medical",
      updates: [
        { date: "2023-06-01", text: "Thank you for the amazing support so far! We've reached 50% of our goal!" },
        { date: "2023-05-20", text: "John has started his first round of treatment. He's feeling hopeful." }
      ]
    },
    2: {
      title: "Rebuild After Hurricane Devastation",
      description: "Our coastal community was completely devastated by Hurricane Maria. Over 200 families lost their homes and belongings. We're raising funds to rebuild houses, replace essential items, and provide temporary shelter for displaced families.",
      goal: 100000,
      amountRaised: 75400,
      donors: 890,
      image: "https://images.unsplash.com/photo-1602276506765-318626c9a7c3?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&h=400&q=80",
      organizer: "Community Relief Fund",
      category: "Disaster Relief",
      updates: [
        { date: "2023-06-15", text: "First 10 homes have begun reconstruction thanks to your donations!" },
        { date: "2023-05-30", text: "Emergency supplies delivered to 150 families this week." }
      ]
    },
    3: {
      title: "School Supplies for Underprivileged Kids",
      description: "We're providing backpacks filled with school supplies for 500 children in low-income neighborhoods. Each $35 donation provides one child with a backpack, notebooks, pencils, and other essentials to start their school year right.",
      goal: 17500, // $35 x 500
      amountRaised: 8200,
      donors: 234,
      image: "https://images.unsplash.com/photo-1523050854058-8df90110c9f1?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&h=400&q=80",
      organizer: "Education for All Foundation",
      category: "Education",
      updates: [
        { date: "2023-06-10", text: "First 200 backpacks distributed at Jefferson Elementary!" },
        { date: "2023-05-25", text: "Partnered with 3 more schools in the district." }
      ]
    }
  };

  // Get the current campaign or use a default if ID doesn't match
  const campaign = campaignTemplates[id] || campaignTemplates[1];
  const progress = (campaign.amountRaised / campaign.goal) * 100;

  return (
    <Container className="my-5">
      <Row>
        <Col lg={8}>
          <div className="d-flex align-items-center mb-3">
            <span className="badge bg-secondary me-2">{campaign.category}</span>
            <h1 className="mb-0">{campaign.title}</h1>
          </div>
          
          <img 
            src={campaign.image} 
            alt={campaign.title} 
            className="img-fluid rounded mb-4"
            style={{ maxHeight: '400px', width: '100%', objectFit: 'cover' }}
          />
          
          <div className="mb-4">
            <ProgressBar 
              now={progress} 
              label={`${Math.round(progress)}%`} 
              className="mb-2" 
              variant={progress > 70 ? 'success' : progress > 30 ? 'warning' : 'danger'}
            />
            <div className="d-flex justify-content-between">
              <span className="fw-bold">${campaign.amountRaised.toLocaleString()} raised</span>
              <span>Goal: ${campaign.goal.toLocaleString()}</span>
            </div>
            <div className="text-end">
              <span className="text-muted">{campaign.donors.toLocaleString()} donors</span>
            </div>
          </div>

          <div className="mb-5">
            <h3>About this fundraiser</h3>
            <p className="lead">{campaign.description}</p>
            <p className="text-muted">
              Organized by <strong>{campaign.organizer}</strong> • Started on {campaign.createdDate || "May 15, 2023"}
            </p>
          </div>

          <div className="mb-5">
            <div className="d-flex justify-content-between align-items-center mb-3">
              <h3 className="mb-0">Updates ({campaign.updates.length})</h3>
              <Button variant="outline-secondary" size="sm">Subscribe for Updates</Button>
            </div>
            {campaign.updates.map((update, index) => (
              <Card key={index} className="mb-3">
                <Card.Body>
                  <Card.Subtitle className="mb-2 text-muted">
                    {update.date} • Update #{index + 1}
                  </Card.Subtitle>
                  <Card.Text>{update.text}</Card.Text>
                </Card.Body>
              </Card>
            ))}
          </div>
        </Col>

        <Col lg={4}>
          <Card className="sticky-top" style={{ top: '20px' }}>
            <Card.Body>
              <h4 className="mb-4">Make a donation</h4>
              <Form>
                <div className="d-flex flex-wrap gap-2 mb-3">
                  {[25, 50, 100, 250, 500].map((amount) => (
                    <Button 
                      key={amount} 
                      variant="outline-primary"
                      onClick={(e) => {
                        e.preventDefault();
                        document.querySelector('input[type="number"]').value = amount;
                      }}
                    >
                      ${amount}
                    </Button>
                  ))}
                </div>
                <Form.Group className="mb-3">
                  <Form.Label>Amount ($)</Form.Label>
                  <Form.Control 
                    type="number" 
                    placeholder="Enter amount" 
                    min="1"
                  />
                </Form.Group>
                <Form.Group className="mb-3">
                  <Form.Label>Leave a message (optional)</Form.Label>
                  <Form.Control as="textarea" rows={3} placeholder="Your kind words here..." />
                </Form.Group>
                <Button variant="primary" size="lg" className="w-100 mb-2">
                  Donate Now
                </Button>
                <Button variant="outline-success" className="w-100">
                  <i className="bi bi-share-fill me-2"></i> Share This Campaign
                </Button>
              </Form>
              <div className="mt-3 text-center">
                <small className="text-muted">
                  <i className="bi bi-shield-lock me-1"></i> Your donation is protected by our <a href="#guarantee">Guarantee</a>
                </small>
              </div>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
};

export default CampaignDetails;