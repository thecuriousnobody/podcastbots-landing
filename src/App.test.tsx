import React from 'react';
import { render, screen } from '@testing-library/react';
import App from './App';

describe('App Component', () => {
  test('renders hero section', () => {
    render(<App />);
    const heroText = screen.getByText(/Transform Your Podcast with AI/i);
    expect(heroText).toBeInTheDocument();
  });

  test('renders waitlist form', () => {
    render(<App />);
    const emailInput = screen.getByPlaceholderText(/Enter your email/i);
    const joinButton = screen.getByText(/Join Waitlist/i);
    expect(emailInput).toBeInTheDocument();
    expect(joinButton).toBeInTheDocument();
  });

  test('renders feature list', () => {
    render(<App />);
    const features = [
      'AI-powered guest discovery',
      'Intelligent outreach automation',
      'Research and preparation assistance'
    ];
    
    features.forEach(feature => {
      const featureElement = screen.getByText(feature);
      expect(featureElement).toBeInTheDocument();
    });
  });
});
