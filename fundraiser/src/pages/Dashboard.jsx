import React from 'react';
import { Container, Tab, Tabs, Card, Button, Row, Col } from 'react-bootstrap';

const Dashboard = () => {
  // Sample data - in a real app, this would come from an API
  const userCampaigns = [
    {
      id: 1,
      title: "Help John Beat Cancer",
      goal: 50000,
      amountRaised: 32500,
      donors: 420,
      status: "active"
    },
    {
      id: 2,
      title: "Community Garden Project",
      goal: 10000,
      amountRaised: 10000,
      donors: 150,
      status: "completed"
    }
  ];

  const userDonations = [
    {
      id: 1,
      campaign: "School Supplies for Kids",
      amount: 50,
      date: "2023-06-15",
      message: "Happy to help!"
    },
    {
      id: 2,
      campaign: "Animal Shelter Support",
      amount: 25,
      date: "2023-05-20",
      message: ""
    }
  ];

  return (
    <Container className="my-5">
      <h1 className="mb-4">Your Dashboard</h1>
      
      <Tabs defaultActiveKey="campaigns" id="dashboard-tabs" className="mb-4">
        <Tab eventKey="campaigns" title="Your Campaigns">
          <div className="mt-4">
            <Button variant="primary" className="mb-4">Start New Campaign</Button>
            
            {userCampaigns.length === 0 ? (
              <p>You haven't created any campaigns yet.</p>
            ) : (
              <Row xs={1} md={2} className="g-4">
                {userCampaigns.map(campaign => (
                  <Col key={campaign.id}>
                    <Card>
                      <Card.Body>
                        <Card.Title>{campaign.title}</Card.Title>
                        <Card.Text>
                          <span className="fw-bold">${campaign.amountRaised.toLocaleString()}</span> raised of ${campaign.goal.toLocaleString()}
                        </Card.Text>
                        <div className="d-flex justify-content-between">
                          <span className="badge bg-primary">{campaign.status}</span>
                          <Button variant="outline-primary" size="sm">View</Button>
                        </div>
                      </Card.Body>
                    </Card>
                  </Col>
                ))}
              </Row>
            )}
          </div>
        </Tab>
        
        <Tab eventKey="donations" title="Your Donations">
          <div className="mt-4">
            {userDonations.length === 0 ? (
              <p>You haven't made any donations yet.</p>
            ) : (
              <div className="list-group">
                {userDonations.map(donation => (
                  <div key={donation.id} className="list-group-item">
                    <div className="d-flex w-100 justify-content-between">
                      <h5 className="mb-1">{donation.campaign}</h5>
                      <small>${donation.amount}</small>
                    </div>
                    <small className="text-muted">Donated on {donation.date}</small>
                    {donation.message && <p className="mt-2 mb-1">{donation.message}</p>}
                  </div>
                ))}
              </div>
            )}
          </div>
        </Tab>
        
        <Tab eventKey="settings" title="Account Settings">
          <div className="mt-4">
            <Card>
              <Card.Body>
                <h5>Profile Information</h5>
                <Form>
                  <Form.Group className="mb-3">
                    <Form.Label>Name</Form.Label>
                    <Form.Control type="text" defaultValue="John Doe" />
                  </Form.Group>
                  <Form.Group className="mb-3">
                    <Form.Label>Email</Form.Label>
                    <Form.Control type="email" defaultValue="john@example.com" />
                  </Form.Group>
                  <Button variant="primary">Save Changes</Button>
                </Form>
              </Card.Body>
            </Card>
          </div>
        </Tab>
      </Tabs>
    </Container>
  );
};

export default Dashboard;