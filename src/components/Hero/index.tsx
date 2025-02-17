import React from 'react';
import { Box, Typography, Button, Paper } from '@mui/material';
import { monoPalette } from '../../theme';
import robotLogo from '../../assets/images/AI Bot For PodCastBots No Background Transparent.png';

const Hero: React.FC = () => {
  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: { xs: 'column', md: 'row' },
        alignItems: 'center',
        gap: { xs: 6, md: 12 },
        py: { xs: 6, md: 12 }
      }}
    >
      {/* Left side - Content */}
      <Box sx={{ flex: 1 }}>
        <Typography
          variant="h1"
          sx={{
            fontSize: { xs: '2.5rem', md: '4rem' },
            fontWeight: 700,
            mb: 3,
            color: monoPalette.text.primary,
            lineHeight: 1.2
          }}
        >
          Transform Your Podcast with AI
        </Typography>
        
        <Typography
          variant="h5"
          sx={{
            color: monoPalette.text.body,
            mb: 4,
            lineHeight: 1.6
          }}
        >
          Join the waitlist for PodcastBots.ai - Your intelligent companion for discovering and connecting with the perfect podcast guests.
        </Typography>

        <Paper
          elevation={0}
          sx={{
            p: 3,
            backgroundColor: monoPalette.hover,
            borderRadius: '16px',
            border: `1px solid ${monoPalette.border}`,
            mb: 4
          }}
        >
          <Typography
            variant="body1"
            sx={{
              color: monoPalette.text.body,
              mb: 2
            }}
          >
            Be among the first to experience:
          </Typography>
          <Box component="ul" sx={{ m: 0, pl: 3 }}>
            <Typography
              component="li"
              variant="body1"
              sx={{ color: monoPalette.text.body, mb: 1 }}
            >
              AI-powered guest discovery
            </Typography>
            <Typography
              component="li"
              variant="body1"
              sx={{ color: monoPalette.text.body, mb: 1 }}
            >
              Intelligent outreach automation
            </Typography>
            <Typography
              component="li"
              variant="body1"
              sx={{ color: monoPalette.text.body }}
            >
              Research and preparation assistance
            </Typography>
          </Box>
        </Paper>

      </Box>

      {/* Right side - Image */}
      <Box
        sx={{
          flex: 1,
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center'
        }}
      >
        <Box
          component="img"
          src={robotLogo}
          alt="PodcastBots.ai Robot"
          sx={{
            width: '100%',
            maxWidth: '400px',
            height: 'auto',
            filter: 'drop-shadow(0 10px 20px rgba(0,0,0,0.1))',
            transition: 'transform 0.3s ease',
            '&:hover': {
              transform: 'translateY(-10px)'
            }
          }}
        />
      </Box>
    </Box>
  );
};

export default Hero;
