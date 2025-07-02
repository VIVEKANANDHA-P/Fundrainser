import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Container } from 'react-bootstrap'; 
import 'bootstrap/dist/css/bootstrap.min.css';

// Components
import Header from './components/Header';
import Footer from './components/Footer';
import Hero from './components/Hero';

// Pages
import Home from './pages/Home';
import CreateCampaign from './pages/CreateCampaign';
import CampaignDetails from './pages/CampaignDetails';
import Dashboard from './pages/Dashboard'; 
import Login from './pages/Login';
import Signup from './pages/Signup';
import NotFound from './pages/NotFound';
import HowItWorks from './pages/HowItWorks';
import AboutUs from './pages/AboutUs';

function App() {
  return (
    <Router>
      <Header />
      <main className="flex-shrink-0">
        <Container fluid className="px-0">
          {/* Hero component appears only on home page */}
          <Routes>
            <Route path="/" element={<Hero />} />
          </Routes>
          
          <Container className="my-4 my-md-5">
            <Routes> 
              <Route path="/" element={<Home />} />
              <Route path="/create" element={<CreateCampaign />} />
              <Route path="/campaign/:id" element={<CampaignDetails />} />
              <Route path="/dashboard" element={<Dashboard />} />
              <Route path="/login" element={<Login />} />
              <Route path="/signup" element={<Signup />} />
              <Route path="*" element={<NotFound />} /> 
              <Route path="/how-it-works" element={<HowItWorks />} />
              <Route path="/about" element={<AboutUs />} />
            </Routes>
          </Container>
        </Container>
      </main>
      <Footer />
    </Router>
  );
}

export default App;