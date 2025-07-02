import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import Hero from '../components/Hero';
import CampaignCard from '../components/CampaignCard';
import { Link } from 'react-router-dom';

const Home = () => {
  // Sample campaign data - in a real app, this would come from an API
  const featuredCampaigns = [
    {
      id: 1,
      title: "Help John Beat Cancer",
      description: "John needs your support for his cancer treatment expenses.",
      goal: 50000,
      amountRaised: 32500,
      donors: 420,
      image: "https://www.statnews.com/wp-content/uploads/2022/06/20220525_Shawn_Goltzene_Car_T_Cell_Patient_STAT_News_001_Master.jpg"
    },
    {
      id: 2,
      title: "Rebuild After Hurricane",
      description: "Our community was devastated by the hurricane. Help us rebuild.",
      goal: 100000,
      amountRaised: 75400,
      donors: 890,
      image: "https://homeownershipmatters.realtor/wp-content/uploads/2020/09/disaster_hurricane_1200x6281.png"
    },
    {
      id: 3,
      title: "School Supplies for Kids",
      description: "Providing school supplies for underprivileged children.",
      goal: 5000,
      amountRaised: 3200,
      donors: 150,
      image: "https://www.raymondgeddes.com/cdn/shop/articles/Cool_school_supplies_photo.jpg?v=1682075832"
    }
  ];

  return (
    <div>
      <Hero />
      <Container className="my-5">
        <h2 className="text-center mb-4">Featured Campaigns</h2>
        <Row xs={1} md={2} lg={3} className="g-4">
          {featuredCampaigns.map(campaign => (
            <Col key={campaign.id}>
            <Link to={`/campaign/${campaign.id}`} className="text-decoration-none">
                <CampaignCard campaign={campaign} />
            </Link>
            </Col>
          ))}
        </Row>
      </Container>
    </div>
  );
};

export default Home;