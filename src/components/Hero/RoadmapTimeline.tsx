import React from 'react';
import { Box, Typography } from '../../utils/mui';
import { Search, Mic, Share2 } from 'lucide-react';
import { monoPalette } from '../../theme';

const RoadmapTimeline = () => {
  const phases = [
    {
      icon: Search,
      title: 'Guest Match',
      status: 'Beta',
      color: monoPalette.black
    },
    {
      icon: Mic,
      title: 'AI Jamie',
      status: 'Soon',
      color: monoPalette.text.secondary
    },
    {
      icon: Share2,
      title: 'Smart Curator',
      status: 'Soon',
      color: monoPalette.text.secondary
    }
  ];

  return (
    <Box
      sx={{
        textAlign: 'center',
        width: '100%',
        position: 'relative',
        p: { xs: 3, sm: 4, md: 5 },
        borderRadius: '16px',
        background: monoPalette.paper,
        boxShadow: '0 8px 24px rgba(0,0,0,0.05)'
      }}
    >
      <Typography
        variant="h6"
        sx={{
          color: monoPalette.text.primary,
          mb: 3,
          fontWeight: 600,
          fontSize: { xs: '1.125rem', sm: '1.25rem' }
        }}
      >
        Our Roadmap
      </Typography>

      <Typography
        variant="body1"
        sx={{
          color: monoPalette.text.body,
          mb: 5,
          fontSize: { xs: '0.875rem', sm: '1rem' },
          maxWidth: '700px',
          mx: 'auto',
          lineHeight: 1.6
        }}
      >
        Join us on our journey to revolutionize podcasting. From smart guest discovery to intelligent content curation by our expert assistants, we're building tools that let you focus on what matters most - creating amazing conversations.
      </Typography>

      <Box
        sx={{
          display: 'grid',
          gridTemplateColumns: 'repeat(3, 1fr)',
          alignItems: 'center',
          position: 'relative',
          gap: 3,
          mt: 3
        }}
      >
        {/* Timeline line */}
        <Box
          sx={{
            position: 'absolute',
            top: '24px',
            left: '10%',
            right: '10%',
            height: '2px',
            background: `linear-gradient(90deg, 
              ${monoPalette.black} 0%, 
              ${monoPalette.text.secondary} 50%, 
              ${monoPalette.text.secondary} 100%
            )`,
            opacity: 0.15,
            zIndex: 0,
            borderRadius: '1px'
          }}
        />

        {phases.map((phase, index) => (
          <Box
            key={phase.title}
            sx={{
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              position: 'relative',
              zIndex: 1
            }}
          >
            {/* Icon circle */}
            <Box
              sx={{
                width: 48,
                height: 48,
                borderRadius: '50%',
                backgroundColor: phase.color,
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                mb: 1,
                transition: 'all 0.3s ease',
                boxShadow: '0 4px 12px rgba(0,0,0,0.1)',
                '&:hover': {
                  transform: 'scale(1.1) translateY(-2px)',
                  boxShadow: '0 8px 24px rgba(0,0,0,0.15)'
                }
              }}
            >
              {React.createElement(phase.icon, {
                size: 24,
                color: monoPalette.paper
              })}
            </Box>

            {/* Title */}
            <Typography
              variant="body2"
              sx={{
                color: monoPalette.text.primary,
                fontWeight: 500,
                mb: 0.5,
                fontSize: { xs: '0.875rem', sm: '1rem' }
              }}
            >
              {phase.title}
            </Typography>

            {/* Status */}
            <Typography
              variant="caption"
              sx={{
                color: phase.color,
                fontSize: { xs: '0.75rem', sm: '0.875rem' }
              }}
            >
              {phase.status}
            </Typography>
          </Box>
        ))}
      </Box>
    </Box>
  );
};

export default RoadmapTimeline;
