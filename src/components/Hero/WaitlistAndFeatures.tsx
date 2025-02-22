import React from 'react';
import { Box, Typography } from '../../utils/mui';
import { Search, Pencil } from 'lucide-react';
import { monoPalette } from '../../theme';
import WaitlistForm from './WaitlistForm';

const features = [
  {
    icon: Search,
    title: 'Smart Guest Discovery',
    description: 'Coming in beta: Your dedicated assistant scans across academia, business, and domain experts to find your perfect guest matches.'
  },
  {
    icon: Pencil,
    title: 'Personalized Outreach Assistant',
    description: 'Coming in beta: Let your assistant craft personalized invitations that resonate with each guest\'s unique expertise and interests.'
  }
];

const FeatureBox = ({ icon: Icon, title, description }: typeof features[0]) => (
  <Box
    sx={{
      flex: 1,
      p: { xs: 4, sm: 5 },
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      textAlign: 'center',
      borderLeft: { xs: 'none', md: `1px solid ${monoPalette.border}` },
      borderTop: { xs: `1px solid ${monoPalette.border}`, md: 'none' }
    }}
  >
    <Box
      sx={{
        width: 48,
        height: 48,
        borderRadius: '50%',
        backgroundColor: monoPalette.black,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        mb: 2,
        boxShadow: '0 4px 12px rgba(0,0,0,0.1)'
      }}
    >
      <Icon size={24} color={monoPalette.paper} />
    </Box>
    <Typography
      variant="h6"
      sx={{
        fontSize: { xs: '1rem', sm: '1.125rem' },
        fontWeight: 600,
        mb: 2
      }}
    >
      {title}
    </Typography>
    <Box sx={{ maxWidth: '300px', mx: 'auto' }}>
      <Typography
        variant="body2"
        component="span"
        sx={{
          color: monoPalette.black,
          fontSize: { xs: '0.875rem', sm: '1rem' },
          lineHeight: 1.6,
          fontWeight: 600,
          backgroundColor: 'rgba(0,0,0,0.05)',
          px: 1.5,
          py: 0.5,
          borderRadius: '12px',
          display: 'inline-block',
          mb: 1
        }}
      >
        Coming in beta
      </Typography>
      <Typography
        variant="body2"
        sx={{
          color: monoPalette.text.body,
          fontSize: { xs: '0.875rem', sm: '1rem' },
          lineHeight: 1.6
        }}
      >
        {description.replace('Coming in beta: ', '')}
      </Typography>
    </Box>
  </Box>
);

const WaitlistAndFeatures = () => (
  <Box
    sx={{
      borderRadius: '16px',
      background: monoPalette.paper,
      boxShadow: '0 8px 24px rgba(0,0,0,0.05)',
      overflow: 'hidden'
    }}
  >
    {/* Waitlist Form */}
    <Box
      sx={{
        py: { xs: 5, sm: 6 },
        px: { xs: 3, sm: 4 },
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        borderBottom: `1px solid ${monoPalette.border}`,
        '& > *': {
          maxWidth: '500px',
          width: '100%'
        }
      }}
    >
      <WaitlistForm />
    </Box>

    {/* Feature Boxes */}
    <Box
      sx={{
        display: { xs: 'block', md: 'flex' }
      }}
    >
      {features.map((feature) => (
        <FeatureBox key={feature.title} {...feature} />
      ))}
    </Box>
  </Box>
);

export default WaitlistAndFeatures;
