import React from 'react';
import { Container } from 'react-bootstrap';
import CampaignForm from '../components/CampaignForm';

const CreateCampaign = () => {
  return (
    <Container className="my-5">
      <div className="text-center mb-5">
        <h1>Start Your Fundraiser</h1>
        <p className="lead">It takes just a few minutes to create and share your fundraiser.</p>
      </div>
      <CampaignForm />
    </Container>
  );
};

export default CreateCampaign;