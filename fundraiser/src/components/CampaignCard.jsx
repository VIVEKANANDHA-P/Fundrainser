import React from 'react';
import { Card, ProgressBar } from 'react-bootstrap';

const CampaignCard = ({ campaign }) => {
  const progress = (campaign.amountRaised / campaign.goal) * 100;

  return (
    <Card className="mb-4 h-100">
      <Card.Img variant="top" src={campaign.image} />
      <Card.Body>
        <Card.Title>{campaign.title}</Card.Title>
        <Card.Text className="text-muted">{campaign.description.substring(0, 100)}...</Card.Text>
        <ProgressBar now={progress} label={`${Math.round(progress)}%`} className="mb-3" />
        <div className="d-flex justify-content-between">
          <span>${campaign.amountRaised.toLocaleString()} raised</span>
          <span>{campaign.donors} donors</span>
        </div>
      </Card.Body>
    </Card>
  );
};

export default CampaignCard;