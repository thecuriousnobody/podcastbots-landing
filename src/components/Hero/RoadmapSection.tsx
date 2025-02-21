import React from 'react';
import { Box, Typography } from '@mui/material';
import { Search, Mic, Share2 } from 'lucide-react';
import { monoPalette } from '../../theme';

const RoadmapSection = () => {
  const phases = [
    {
      icon: Search,
      title: 'Guest Discovery & Outreach',
      description: 'Your dedicated team finds perfect guests for your podcast and crafts personalized outreach that resonates with their interests',
      status: 'Beta Launch',
      offset: { xs: 0, md: -20 }
    },
    {
      icon: Mic,
      title: 'Your Digital Jamie',
      description: 'Like having your own research producer, pulling up relevant insights, bridging perspectives, and suggesting talking points in real-time',
      status: 'Coming Soon',
      offset: { xs: 0, md: 0 }
    },
    {
      icon: Share2,
      title: 'Smart Content Curator',
      description: 'Your dedicated curator identifies and highlights your podcast\'s most engaging moments, tailored to what your audience loves most',
      status: 'Coming Soon',
      offset: { xs: 0, md: 20 }
    }
  ];

  return (
    <Box
      sx={{
        mt: { xs: 8, sm: 12, md: 16 },
        px: { xs: 2, sm: 4, md: 6 },
        maxWidth: '1400px',
        mx: 'auto',
        width: '100%'
      }}
    >
      <Typography
        variant="h4"
        sx={{
          color: monoPalette.text.primary,
          mb: { xs: 6, sm: 8, md: 10 },
          fontWeight: 600,
          textAlign: 'center',
          letterSpacing: '0.02em',
          fontSize: { xs: '1.5rem', sm: '2rem' }
        }}
      >
        Roadmap: From Discovery to Engaging Content
      </Typography>
      <Box sx={{ maxWidth: '1000px', mx: 'auto', position: 'relative' }}>
        {/* Timeline line */}
        <Box
          sx={{
            position: 'absolute',
            top: '50%',
            left: '0%',
            right: '0%',
            height: '1px',
            backgroundColor: monoPalette.border,
            opacity: 0.2,
            display: { xs: 'none', md: 'block' }
          }}
        />
        
        <Box
          sx={{
            display: 'grid',
            gridTemplateColumns: { xs: '1fr', md: '1fr 1fr 1fr' },
            gap: { xs: 3, sm: 4, md: 8 },
            position: 'relative',
            zIndex: 1
          }}
        >
          {phases.map((phase, index) => (
            <Box
              key={phase.title}
              sx={{
                p: { xs: 2.5, sm: 3 },
                backgroundColor: index === 0 ? monoPalette.paper : monoPalette.hover,
                borderRadius: '16px',
                border: `2px solid ${index === 0 ? monoPalette.black : monoPalette.border}`,
                position: 'relative',
                overflow: 'hidden',
                transform: `translateY(${phase.offset.xs}px)`,
                transition: 'all 0.4s ease-in-out',
                opacity: 1,
                '@media (min-width: 900px)': {
                  transform: `translateY(${phase.offset.md}px)`,
                  boxShadow: `0 4px ${index === 0 ? '0' : '20px'} ${monoPalette.shadow}`
                },
                '&:hover': {
                  transform: `translateY(-5px)`,
                  boxShadow: `0 15px 30px ${monoPalette.shadow}`,
                  borderColor: monoPalette.black
                }
              }}
            >
              <Box>
                <Box
                  sx={{
                    width: { xs: 40, sm: 48 },
                    height: { xs: 40, sm: 48 },
                    borderRadius: '12px',
                    backgroundColor: index === 0 ? monoPalette.black : monoPalette.text.secondary,
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    mb: 2
                  }}
                >
                  {React.createElement(phase.icon, {
                    size: 24,
                    color: monoPalette.paper
                  })}
                </Box>
                <Typography
                  variant="h6"
                  sx={{
                    color: monoPalette.text.primary,
                    mb: 1,
                    fontWeight: 600,
                    fontSize: { xs: '1.125rem', sm: '1.25rem' }
                  }}
                >
                  {phase.title}
                </Typography>
                <Box
                  sx={{
                    opacity: 1,
                    transition: 'opacity 0.3s ease'
                  }}
                >
                  <Typography
                    variant="body2"
                    sx={{
                      color: monoPalette.text.body,
                      mb: 2,
                      fontSize: { xs: '0.875rem', sm: '1rem' }
                    }}
                  >
                    {phase.description}
                  </Typography>
                </Box>
                <Box
                  sx={{
                    px: 2,
                    py: 0.5,
                    borderRadius: '20px',
                    backgroundColor: index === 0 ? monoPalette.black : monoPalette.text.secondary,
                    color: monoPalette.paper,
                    display: 'inline-block',
                    fontSize: { xs: '0.75rem', sm: '0.875rem' },
                    fontWeight: 500
                  }}
                >
                  {phase.status}
                </Box>
              </Box>
            </Box>
          ))}
        </Box>
      </Box>
    </Box>
  );
};

export default RoadmapSection;
