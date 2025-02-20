import React from 'react';
import { Box, Typography, Paper, TextField, Button } from '@mui/material';
import { motion } from 'framer-motion';
import { Search, Mic, Share2 } from 'lucide-react';
import { monoPalette } from '../../theme';
import robotLogo from '../../assets/images/AI Bot For PodCastBots No Background Transparent.png';

// Create motion components with proper typing
const MotionBox = motion(Box);
const MotionPaper = motion(Paper);
const MotionTypography = motion(Typography);
const MotionImage = motion.img;
const MotionForm = motion.form;

// Animation variants
const floatAnimation = {
  initial: { y: 0 },
  animate: {
    y: [0, -15, 0],
    transition: {
      duration: 2.5,
      ease: "easeInOut",
      repeat: Infinity,
    }
  }
};

const fadeInUp = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.6 }
};

// Animation variants
const cardHover = {
  initial: { rotate: 0 },
  whileHover: { 
    y: -10,
    transition: { duration: 0.4, ease: 'easeOut' }
  }
};

const cardContent = {
  initial: { opacity: 1 },
  whileInView: { 
    opacity: 1,
    transition: { duration: 0.4 }
  }
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
      // TODO: Implement actual API call
      await new Promise(resolve => setTimeout(resolve, 1000)); // Simulate API call
      setSubmitStatus('success');
      setEmail('');
    } catch (error) {
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
    }
  };

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
            {[
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
            ].map((card, index) => (
              <MotionPaper
                key={card.title}
                elevation={0}
                {...cardHover}
                sx={{
                  p: { xs: 2.5, sm: 3 },
                  borderRadius: '16px',
                  border: `1px solid ${monoPalette.border}`,
                  minHeight: { xs: '180px', sm: '200px' },
                  transition: 'all 0.3s ease',
                  position: 'relative',
                  overflow: 'hidden',
                  display: 'flex',
                  flexDirection: 'column',
                  justifyContent: 'space-between',
                  ...card.style,
                  '&:hover': {
                    transform: 'translateY(-10px)',
                    boxShadow: `0 20px 40px ${monoPalette.shadow}`
                  }
                }}
              >
                <Box>
                  <Typography
                    variant="h6"
                    sx={{
                      color: card.style.color || monoPalette.text.primary,
                      mb: 2,
                      fontWeight: 600,
                      fontSize: { xs: '1.125rem', sm: '1.25rem' }
                    }}
                  >
                    {card.title}
                  </Typography>
                  <MotionBox
                    variants={cardContent}
                    initial="initial"
                    whileInView="whileInView"
                    whileHover="whileHover"
                    viewport={{ once: true }}
                  >
                    <Typography
                      variant="body1"
                      sx={{ 
                        color: card.style.color || monoPalette.text.body,
                        fontSize: { xs: '0.9375rem', sm: '1rem' }
                      }}
                    >
                      {card.description}
                    </Typography>
                  </MotionBox>
                </Box>
              </MotionPaper>
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
              y: [0, -15, 0]
            }}
            transition={{ 
              scale: { duration: 0.6 },
              opacity: { duration: 0.6 },
              y: {
                duration: 2.5,
                ease: "easeInOut",
                repeat: Infinity,
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
                '&::after': {
                  content: '""',
                  position: 'absolute',
                  top: 0,
                  left: '-100%',
                  width: '200%',
                  height: '100%',
                  background: `linear-gradient(90deg, transparent 0%, rgba(255,255,255,0.2) 50%, transparent 100%)`,
                  transition: 'transform 0.3s ease',
                },
                '&:hover::after': {
                  transform: 'translateX(100%)',
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

      {/* Future Forge Preview */}
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
            {[
              {
                icon: Search,
                title: 'Guest Discovery & Outreach',
                description: 'Your dedicated team finds perfect guests for your podcast and crafts personalized outreach that resonates with their interests',
                status: 'Beta Launch',
                offset: { xs: 0, md: -20 },
                shape: 'square'
              },
              {
                icon: Mic,
                title: 'Your Digital Jamie',
                description: 'Like having your own research producer, pulling up relevant insights, bridging perspectives, and suggesting talking points in real-time',
                status: 'Coming Soon',
                offset: { xs: 0, md: 0 },
                shape: 'circle'
              },
              {
                icon: Share2,
                title: 'Smart Content Curator',
                description: 'Your dedicated curator identifies and highlights your podcast\'s most engaging moments, tailored to what your audience loves most',
                status: 'Coming Soon',
                offset: { xs: 0, md: 20 },
                shape: 'polygon'
              }
            ].map((phase, index) => (
              <MotionPaper
                key={phase.title}
                elevation={0}
                initial={{ opacity: 0, y: 20, height: 100 }}
                whileInView={{ 
                  opacity: 1, 
                  y: 0, 
                  height: 'auto',
                  transition: { 
                    duration: 0.6, 
                    delay: index * 0.2,
                    height: { duration: 0.4, delay: index * 0.2 + 0.3 }
                  }
                }}
                viewport={{ once: true }}
                sx={{
                  p: { xs: 2.5, sm: 3 },
                  backgroundColor: index === 0 ? monoPalette.paper : monoPalette.hover,
                  borderRadius: '16px',
                  border: `2px solid ${index === 0 ? monoPalette.black : monoPalette.border}`,
                  position: 'relative',
                  overflow: 'hidden',
                  transform: `translateY(${phase.offset.xs}px)`,
                  transition: 'all 0.4s ease-in-out',
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
                      mb: 2,
                      transform: 'none'
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
                      transform: 'none',
                      fontSize: { xs: '1.125rem', sm: '1.25rem' }
                    }}
                  >
                    {phase.title}
                  </Typography>
                  <MotionBox
                    initial={{ opacity: 0 }}
                    whileInView={{ 
                      opacity: 1,
                      transition: { duration: 0.4, delay: index * 0.2 + 0.4 }
                    }}
                    viewport={{ once: true }}
                  >
                    <Typography
                      variant="body2"
                      sx={{
                        color: monoPalette.text.body,
                        mb: 2,
                        transform: 'none',
                        fontSize: { xs: '0.875rem', sm: '1rem' }
                      }}
                    >
                      {phase.description}
                    </Typography>
                  </MotionBox>
                  <Box
                    sx={{
                      px: 2,
                      py: 0.5,
                      borderRadius: '20px',
                      backgroundColor: index === 0 ? monoPalette.black : monoPalette.text.secondary,
                      color: monoPalette.paper,
                      display: 'inline-block',
                      fontSize: { xs: '0.75rem', sm: '0.875rem' },
                      fontWeight: 500,
                      transform: 'none'
                    }}
                  >
                    {phase.status}
                  </Box>
                </Box>
              </MotionPaper>
            ))}
          </Box>
        </Box>
      </Box>

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
