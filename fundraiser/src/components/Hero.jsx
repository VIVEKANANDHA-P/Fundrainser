import React from 'react';
import { Button } from 'react-bootstrap';

const Hero = () => {
  return (
    <div className="hero-section bg-primary text-white py-5">
      <div className="container text-center py-5">
        <h1 className="display-4 fw-bold">#1 crowdfunding platform</h1>
        <p className="lead">Successful fundraisers start here</p>
        <Button variant="light" size="lg" className="mt-3 px-4 py-2">
          Start a GoFundMe
        </Button>
        <p className="mt-4 small">
          More than $50 million is raised every week on GoFundMe.*
        </p>
        <p className="small">
          Get started in just a few minutes — with helpful new tools, it's easier than ever to pick the perfect title, write a...
        </p>
      </div>
    </div>
  );
};

export default Hero;