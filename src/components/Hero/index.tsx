import React, { Suspense } from 'react';
import { Box, Typography, TextField, Button } from '@mui/material';
import { motion } from 'framer-motion';
import { monoPalette } from '../../theme';
import robotLogo from '../../assets/images/AI Bot For PodCastBots No Background Transparent.png';
import FeatureCard from './FeatureCard';

// Lazy load the RoadmapSection
const RoadmapSection = React.lazy(() => import('./RoadmapSection'));

// Create motion components with proper typing
const MotionBox = motion(Box);
const MotionTypography = motion(Typography);
const MotionImage = motion.img;
const MotionForm = motion.form;

const fadeInUp = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.4 }
};

const Hero = () => {
  const [email, setEmail] = React.useState('');
  const [isSubmitting, setIsSubmitting] = React.useState(false);
  const [submitStatus, setSubmitStatus] = React.useState<'idle' | 'success' | 'error'>('idle');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus('idle');

    try {
      await new Promise(resolve => setTimeout(resolve, 1000));
      setSubmitStatus('success');
      setEmail('');
    } catch (error) {
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
    }
  };

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

  return (
    <Box
      sx={{
        position: 'relative',
        minHeight: '100vh',
        display: 'flex',
        flexDirection: 'column',
        py: { xs: 4, sm: 6, md: 12 }
      }}
    >
      {/* Main content */}
      <Box
        sx={{
          display: 'grid',
          gridTemplateColumns: { xs: '1fr', md: '1fr 1fr' },
          gap: { xs: 4, sm: 6, md: 12 },
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
            <MotionTypography
              variant="h1"
              {...fadeInUp}
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
            </MotionTypography>
            <MotionTypography
              variant="h1"
              {...fadeInUp}
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
            </MotionTypography>
          </Box>

          <MotionTypography
            variant="body1"
            {...fadeInUp}
            transition={{ ...fadeInUp.transition, delay: 0.2 }}
            sx={{
              color: monoPalette.text.body,
              mb: { xs: 3, md: 4 },
              lineHeight: 1.6,
              maxWidth: { xs: '100%', md: '600px' },
              fontSize: { xs: '1rem', sm: '1.125rem', md: '1.25rem' }
            }}
          >
            Transform your podcasting workflow with intelligent assistants that handle guest discovery, enhance interviews, and curate your best content.
          </MotionTypography>

          {/* Feature cards */}
          <MotionBox 
            {...fadeInUp}
            transition={{ ...fadeInUp.transition, delay: 0.4 }}
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
          </MotionBox>
        </Box>

        {/* Right side - Image and Waitlist Form */}
        <Box
          sx={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            gap: { xs: 3, sm: 4 },
            mt: { xs: 4, md: 0 }
          }}
        >
          <MotionImage
            src={robotLogo}
            alt="PodcastBots.ai Robot"
            initial={{ scale: 0.9, opacity: 0, y: 0 }}
            animate={{ 
              scale: 1, 
              opacity: 1,
              y: [-10, 0]
            }}
            transition={{ 
              scale: { duration: 0.4 },
              opacity: { duration: 0.4 },
              y: {
                duration: 1.5,
                repeat: Infinity,
                repeatType: "reverse",
                ease: "easeInOut"
              }
            }}
            style={{
              width: '100%',
              maxWidth: '400px',
              height: 'auto',
              filter: 'drop-shadow(0 10px 20px rgba(0,0,0,0.1))',
              transition: 'transform 0.3s ease'
            }}
          />

          <MotionForm
            onSubmit={handleSubmit}
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            style={{
              width: '100%',
              maxWidth: '400px',
              padding: '1.5rem',
              backgroundColor: monoPalette.paper,
              borderRadius: '16px',
              border: `1px solid ${monoPalette.border}`,
              position: 'relative',
              overflow: 'hidden'
            }}
          >
            <Typography
              variant="h6"
              sx={{
                color: monoPalette.text.primary,
                mb: 3,
                fontWeight: 600,
                textAlign: 'center',
                fontSize: { xs: '1.125rem', sm: '1.25rem' }
              }}
            >
              Join the Creative Journey
            </Typography>
            <Box sx={{ position: 'relative' }}>
              <TextField
                fullWidth
                type="email"
                placeholder="Enter email to get early access"
                variant="outlined"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                disabled={isSubmitting}
                error={submitStatus === 'error'}
                sx={{
                  mb: 2,
                  '& .MuiOutlinedInput-root': {
                    borderRadius: '12px',
                    backgroundColor: monoPalette.hover,
                    '& fieldset': {
                      borderColor: monoPalette.border,
                    },
                    '&:hover fieldset': {
                      borderColor: monoPalette.text.secondary,
                    },
                    '&.Mui-focused fieldset': {
                      borderColor: monoPalette.black,
                    },
                  },
                }}
              />
              {submitStatus === 'error' && (
                <Typography
                  variant="caption"
                  sx={{
                    color: 'error.main',
                    position: 'absolute',
                    bottom: '8px',
                    left: '14px'
                  }}
                >
                  Unable to register. Let's try that again to start creating.
                </Typography>
              )}
            </Box>
            <Button
              fullWidth
              variant="contained"
              type="submit"
              disabled={isSubmitting || !email.trim()}
              sx={{
                backgroundColor: monoPalette.black,
                color: monoPalette.paper,
                py: { xs: 1.25, sm: 1.5 },
                position: 'relative',
                overflow: 'hidden',
                '&:hover': {
                  backgroundColor: monoPalette.text.primary,
                },
              }}
            >
              {isSubmitting ? 'Getting Ready...' : 'Start Creating'}
            </Button>
            {submitStatus === 'success' && (
              <Typography
                variant="body2"
                sx={{
                  color: 'success.main',
                  textAlign: 'center',
                  mt: 2
                }}
              >
                Thanks for joining! We'll notify you when you can start creating amazing conversations.
              </Typography>
            )}
          </MotionForm>
        </Box>
      </Box>

      {/* Roadmap Section */}
      <Suspense fallback={<Box sx={{ height: 200 }} />}>
        <RoadmapSection />
      </Suspense>

      {/* Footer */}
      <Box
        sx={{
          mt: { xs: 6, sm: 8, md: 12 },
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
