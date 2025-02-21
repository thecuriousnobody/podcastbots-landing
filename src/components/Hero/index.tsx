import React, { Suspense } from 'react';
import { Box, Typography } from '../../utils/mui';
import { monoPalette } from '../../theme';
import FeatureCard from './FeatureCard';
import '../../styles/animations.css';

// Import optimized images
const robotLogo = {
  small: new URL('../../assets/images/robot-small.webp', import.meta.url).href,
  large: new URL('../../assets/images/robot-large.webp', import.meta.url).href,
  fallback: new URL('../../assets/images/AI Bot For PodCastBots No Background Transparent.png', import.meta.url).href
};

// Lazy load components
const RoadmapSection = React.lazy(() => import('./RoadmapSection'));
const WaitlistForm = React.lazy(() => import('./WaitlistForm'));
const FeatureCards = React.lazy(() => import('./FeatureCards'));

const Hero = () => {

  return (
    <Box
      sx={{
        position: 'relative',
        minHeight: '105vh',
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
          display: 'grid',
          gridTemplateColumns: { xs: '1fr', md: '1fr 1fr' },
          gap: { xs: 4, sm: 6, md: '6vw' },
          position: 'relative',
          zIndex: 1,
          mx: 'auto',
          width: '100%',
          maxWidth: '1400px',
          px: { xs: 2, sm: 4, md: 6 }
        }}
      >
        {/* Left side - Content */}
        <Box>
          <Box sx={{ mb: { xs: 2, sm: 3 } }}>
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
                position: 'relative',
                maxWidth: { xs: '90%', md: '100%' }
              }}
            >
              Podcasters
            </Typography>
          </Box>

          <Typography
            variant="body1"
            sx={{
              color: monoPalette.text.body,
              mb: { xs: 3, md: 4 },
              lineHeight: 1.6,
              maxWidth: { xs: '100%', md: '600px' },
              fontSize: { xs: '1rem', sm: '1.125rem', md: '1.25rem' }
            }}
          >
            Transform your podcasting workflow with intelligent assistants that handle guest discovery, enhance interviews, and curate your best content.
          </Typography>

          {/* Feature cards */}
          <Suspense fallback={<Box sx={{ height: 200 }} />}>
            <FeatureCards />
          </Suspense>
        </Box>

        {/* Right side - Image and Waitlist Form */}
        <Box
          sx={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            gap: { xs: 3, sm: 4, md: 6 },
            mt: { xs: 4, md: 0 }
          }}
        >
          {/* Waitlist Form - Moved up on mobile */}
          <Box sx={{ width: '100%', order: { xs: -1, md: 1 } }}>
            <Suspense fallback={<Box sx={{ height: 200 }} />}>
              <WaitlistForm />
            </Suspense>
          </Box>

          {/* Robot Image */}
          <Box sx={{ width: '100%', order: { xs: 0, md: 0 } }}>
            <picture>
              <source
                type="image/webp"
                srcSet={`${robotLogo.small} 200w, ${robotLogo.large} 400w`}
                sizes="(max-width: 600px) 200px, 400px"
              />
              <img
                src={robotLogo.fallback}
                alt="PodcastBots.ai Robot"
                className="robot-float"
              />
            </picture>
          </Box>
        </Box>
      </Box>

      {/* Roadmap Section */}
      <Suspense fallback={<Box sx={{ height: 200 }} />}>
        <RoadmapSection />
      </Suspense>

      {/* Footer */}
      <Box
        sx={{
          mt: { xs: 6, sm: 8, md: '10vh' },
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
  );
};

export default Hero;
