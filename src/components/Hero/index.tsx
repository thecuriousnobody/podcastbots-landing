import React, { Suspense } from 'react';
import { Box, Typography } from '../../utils/mui';
import { monoPalette } from '../../theme';
import RoadmapTimeline from './RoadmapTimeline';
import WaitlistAndFeatures from './WaitlistAndFeatures';
import '../../styles/animations.css';

// Import optimized images
const robotLogo = {
  small: new URL('../../assets/images/robot-small.webp', import.meta.url).href,
  large: new URL('../../assets/images/robot-large.webp', import.meta.url).href,
  fallback: new URL('../../assets/images/AI Bot For PodCastBots No Background Transparent.png', import.meta.url).href
};

// Lazy load components

const Hero = () => {
  return (
    <Box
      sx={{
        position: 'relative',
        minHeight: '100vh',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'flex-start',
        pt: { xs: 4, sm: 6, md: '12vh' }
      }}
    >
      {/* Main content */}
      <Box
        sx={{
          width: '100%',
          maxWidth: '1000px',
          mx: 'auto',
          px: { xs: 2, sm: 4 }
        }}
      >
        {/* Header with Robot */}
        <Box
          sx={{
            display: 'flex',
            alignItems: 'center',
            gap: { xs: 3, sm: 4, md: 6 },
            mb: { xs: 4, sm: 6 }
          }}
        >
          {/* Title */}
          <Box>
            <Typography
              variant="h1"
              sx={{
                fontSize: { xs: '1.5rem', sm: '1.75rem', md: '3rem' },
                fontWeight: 600,
                color: monoPalette.text.secondary,
                lineHeight: 1,
                position: 'relative',
                mb: 0.5,
                letterSpacing: '0.02em'
              }}
            >
              Potentiating
            </Typography>
            <Typography
              variant="h1"
              sx={{
                fontSize: { xs: '2.75rem', sm: '3.5rem', md: '6rem' },
                fontWeight: 700,
                color: monoPalette.text.primary,
                lineHeight: 1.1,
                position: 'relative'
              }}
            >
              Podcasters
            </Typography>
          </Box>

          {/* Robot Image */}
          <Box 
            sx={{ 
              width: { xs: '120px', sm: '160px', md: '200px' },
              flexShrink: 0
            }}
          >
            <picture>
              <source
                type="image/webp"
                srcSet={`${robotLogo.small} 200w, ${robotLogo.large} 400w`}
                sizes="(max-width: 600px) 120px, (max-width: 900px) 160px, 200px"
              />
              <img
                src={robotLogo.fallback}
                alt="PodcastBots.ai Robot"
                className="robot-float"
                style={{ width: '100%', height: 'auto' }}
              />
            </picture>
          </Box>
        </Box>

        {/* Description */}
        <Typography
          variant="body1"
          sx={{
            color: monoPalette.text.body,
            mb: 4,
            lineHeight: 1.6,
            fontSize: { xs: '1rem', sm: '1.125rem', md: '1.25rem' },
            maxWidth: '800px'
          }}
        >
          Transform your podcasting workflow with intelligent assistants that handle guest discovery, enhance interviews, and curate your best content.
        </Typography>

        {/* Waitlist and Features */}
        <Box sx={{ mb: 4 }}>
          <Suspense fallback={<Box sx={{ height: 200 }} />}>
            <WaitlistAndFeatures />
          </Suspense>
        </Box>

        {/* Roadmap */}
        <Suspense fallback={<Box sx={{ height: 200 }} />}>
          <RoadmapTimeline />
        </Suspense>

        {/* Footer */}
        <Box
          sx={{
            mt: { xs: 6, sm: 8 },
            pb: { xs: 3, sm: 4 },
            textAlign: 'center'
          }}
        >
          <Typography
            variant="body2"
            sx={{
              color: monoPalette.text.secondary,
              opacity: 0.7,
              fontSize: { xs: '0.75rem', sm: '0.875rem' }
            }}
          >
            Part of the potentiator.ai family
          </Typography>
        </Box>
      </Box>
    </Box>
  );
};

export default Hero;
