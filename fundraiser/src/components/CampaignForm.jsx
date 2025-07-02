import React, { useState } from 'react';
import { Form, Button, Alert } from 'react-bootstrap';

const CampaignForm = () => {
  const [formData, setFormData] = useState({
    title: '',
    description: '',
    goal: '',
    category: '',
    image: null
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleImageChange = (e) => {
    setFormData(prev => ({ ...prev, image: e.target.files[0] }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission
    console.log(formData);
  };

  return (
    <Form onSubmit={handleSubmit} className="p-4 border rounded">
      <h2 className="mb-4">Start Your Campaign</h2>
      
      <Form.Group className="mb-3">
        <Form.Label>Campaign Title</Form.Label>
        <Form.Control 
          type="text" 
          name="title" 
          value={formData.title} 
          onChange={handleChange} 
          required 
        />
      </Form.Group>

      <Form.Group className="mb-3">
        <Form.Label>Description</Form.Label>
        <Form.Control 
          as="textarea" 
          rows={4} 
          name="description" 
          value={formData.description} 
          onChange={handleChange} 
          required 
        />
      </Form.Group>

      <Form.Group className="mb-3">
        <Form.Label>Goal Amount ($)</Form.Label>
        <Form.Control 
          type="number" 
          name="goal" 
          value={formData.goal} 
          onChange={handleChange} 
          required 
        />
      </Form.Group>

      <Form.Group className="mb-3">
        <Form.Label>Category</Form.Label>
        <Form.Select name="category" value={formData.category} onChange={handleChange} required>
          <option value="">Select a category</option>
          <option value="medical">Medical</option>
          <option value="education">Education</option>
          <option value="emergency">Emergency</option>
          <option value="nonprofit">Nonprofit</option>
        </Form.Select>
      </Form.Group>

      <Form.Group className="mb-4">
        <Form.Label>Campaign Image</Form.Label>
        <Form.Control 
          type="file" 
          accept="image/*" 
          onChange={handleImageChange} 
          required 
        />
      </Form.Group>

      <Button variant="primary" type="submit" className="w-100 py-2">
        Launch Campaign
      </Button>
    </Form>
  );
};

export default CampaignForm;