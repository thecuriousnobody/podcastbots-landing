import React from 'react';
import { Box } from '../../utils/mui';
import { monoPalette } from '../../theme';
import FeatureCard from './FeatureCard';

const features = [
  {
    title: 'Smart Guest Discovery',
    description: 'Coming in beta: Your dedicated assistant scans across academia, business, and domain experts to find your perfect guest matches.',
    style: { backgroundColor: monoPalette.paper }
  },
  {
    title: 'Personalized Outreach Assistant',
    description: 'Coming in beta: Let your assistant craft personalized invitations that resonate with each guest\'s unique expertise and interests.',
    style: { backgroundColor: monoPalette.black, color: monoPalette.paper }
  },
  {
    title: 'Do What You Truly Love',
    description: 'Let our assistants handle the tedious work while you focus on what brings you joy - creating meaningful conversations and connections with your guests.',
    style: { backgroundColor: monoPalette.hover, gridColumn: { xs: 'auto', sm: '1 / -1' } }
  }
];

const FeatureCards = () => (
  <Box 
    sx={{ 
      display: 'grid', 
      gap: { xs: 2, sm: 3 }, 
      gridTemplateColumns: { xs: '1fr', sm: '1fr 1fr' },
      position: 'relative'
    }}
  >
    {features.map((feature) => (
      <FeatureCard key={feature.title} {...feature} />
    ))}
  </Box>
);

export default FeatureCards;
